/* Flashcards. Click or press Space to flip, arrows to move, Enter to mark known.

   Two decks:
     vocab — the lesson's word list
     kanji — one card per kanji, plus one card per compound word listed under it
   Each deck keeps its own "đã thuộc" progress, so marking a kanji known does
   not pollute the vocabulary count shown on the home screen. */
(function () {
  'use strict';
  window.Views = window.Views || {};

  window.buildKanjiDeck = buildKanjiDeck;

  function buildKanjiDeck(lesson) {
    var out = [], seen = {};
    (lesson.kanji || []).forEach(function (k) {
      var readings = [k.on, k.kun].filter(Boolean).join(' ・ ');
      out.push({ w: k.c, k: readings, m: k.m, tag: 'chữ Hán' });
      (k.w || []).forEach(function (x) {
        var id = x.jp + '|' + (x.k || '');
        if (seen[id]) return;          // 映画 sits under both 映 and 画
        seen[id] = 1;
        out.push({ w: x.jp, k: x.k, m: x.vi, tag: 'từ ghép của ' + k.c });
      });
    });
    return out;
  }

  window.Views.flash = function (root, lesson, meta, sub) {
    var hasKanji = (lesson.kanji || []).length > 0;
    var mode = (sub === 'kanji' && hasKanji) ? 'kanji' : 'vocab';

    var deck = [];
    var source = [];
    var storeId = lesson.id;
    var i = 0;
    var flipped = false;
    var jpFirst = true;
    var skipKnown = true;

    function setMode(next) {
      mode = next;
      source = mode === 'kanji' ? buildKanjiDeck(lesson) : lesson.vocab;
      storeId = mode === 'kanji' ? lesson.id + ':kanji' : lesson.id;
      build();
    }

    function build() {
      deck = source.filter(function (w) {
        return !(skipKnown && Store.isKnown(storeId, wordKey(w)));
      });
      shuffle(deck);
      i = 0;
      flipped = false;
    }

    function shuffle(a) {
      for (var n = a.length - 1; n > 0; n--) {
        var j = Math.floor(Math.random() * (n + 1));
        var t = a[n]; a[n] = a[j]; a[j] = t;
      }
    }

    root.innerHTML =
      '<div class="flash-wrap">' +
        (hasKanji ?
          '<div class="toolbar">' +
            '<button class="btn" id="mvocab">Từ vựng</button>' +
            '<button class="btn" id="mkanji">Kanji &amp; từ ghép</button>' +
          '</div>' : '') +
        '<div class="toolbar">' +
          '<button class="btn" id="fdir">Nhật → Việt</button>' +
          '<button class="btn" id="fskip" aria-pressed="true">Bỏ qua thẻ đã thuộc</button>' +
          '<button class="btn" id="fshuffle">Xáo lại</button>' +
        '</div>' +
        '<div class="flash-progress" id="fprog"></div>' +
        '<div class="card" id="fcard"><div class="card-inner">' +
          '<div class="card-face front" id="ffront"></div>' +
          '<div class="card-face back" id="fback"></div>' +
        '</div></div>' +
        '<div class="flash-controls">' +
          '<button class="btn" id="fprev">← Trước</button>' +
          '<button class="btn primary" id="fknown">✓ Đánh dấu thuộc</button>' +
          '<button class="btn" id="fnext">Sau →</button>' +
        '</div>' +
      '</div>';

    var card = root.querySelector('#fcard');
    var front = root.querySelector('#ffront');
    var back = root.querySelector('#fback');
    var prog = root.querySelector('#fprog');

    function draw() {
      if (hasKanji) {
        root.querySelector('#mvocab').setAttribute('aria-pressed', mode === 'vocab' ? 'true' : 'false');
        root.querySelector('#mkanji').setAttribute('aria-pressed', mode === 'kanji' ? 'true' : 'false');
      }

      if (!deck.length) {
        card.style.display = 'none';
        root.querySelector('#fknown').disabled = true;
        prog.innerHTML = '<div class="empty"><b>Xong rồi!</b><br>' +
          'Bạn đã đánh dấu thuộc hết thẻ của phần này. ' +
          'Tắt “Bỏ qua thẻ đã thuộc” để ôn lại.</div>';
        return;
      }
      card.style.display = '';
      root.querySelector('#fknown').disabled = false;

      var w = deck[i];
      var known = Store.isKnown(storeId, wordKey(w));

      prog.textContent = (i + 1) + ' / ' + deck.length +
        ' · đã thuộc ' + Store.knownCount(storeId) + '/' + source.length;

      var jpSide =
        '<div class="big jp">' + esc(w.w) + '</div>' +
        (w.k ? '<div class="kana jp">' + esc(w.k) + '</div>' : '') +
        '<div class="hint">Bấm thẻ hoặc phím Space để lật</div>';
      var viSide =
        '<div class="mean-big">' + esc(w.m) + '</div>' +
        (w.tag ? '<div class="kana">' + esc(w.tag) + '</div>' : '') +
        '<div class="hint">Enter: đánh dấu đã thuộc · ← →: chuyển thẻ</div>';

      front.innerHTML = jpFirst ? jpSide : viSide;
      back.innerHTML = jpFirst ? viSide : jpSide;

      card.classList.toggle('flipped', flipped);
      root.querySelector('#fknown').textContent = known ? '✓ Đã thuộc' : '✓ Đánh dấu thuộc';
    }

    function move(d) {
      if (!deck.length) return;
      i = (i + d + deck.length) % deck.length;
      flipped = false;
      draw();
    }

    card.addEventListener('click', function () { flipped = !flipped; draw(); });
    root.querySelector('#fprev').addEventListener('click', function () { move(-1); });
    root.querySelector('#fnext').addEventListener('click', function () { move(1); });
    root.querySelector('#fknown').addEventListener('click', function () {
      if (!deck.length) return;
      Store.toggleKnown(storeId, wordKey(deck[i]));
      if (skipKnown) {
        deck.splice(i, 1);
        if (i >= deck.length) i = 0;
        flipped = false;
      }
      draw();
    });
    root.querySelector('#fdir').addEventListener('click', function (e) {
      jpFirst = !jpFirst;
      e.target.textContent = jpFirst ? 'Nhật → Việt' : 'Việt → Nhật';
      flipped = false;
      draw();
    });
    root.querySelector('#fskip').addEventListener('click', function (e) {
      skipKnown = !skipKnown;
      e.target.setAttribute('aria-pressed', skipKnown ? 'true' : 'false');
      build();
      draw();
    });
    root.querySelector('#fshuffle').addEventListener('click', function () {
      build();
      draw();
    });
    if (hasKanji) {
      root.querySelector('#mvocab').addEventListener('click', function () { setMode('vocab'); draw(); });
      root.querySelector('#mkanji').addEventListener('click', function () { setMode('kanji'); draw(); });
    }

    function onKey(e) {
      if (!document.body.contains(root)) {
        document.removeEventListener('keydown', onKey);
        return;
      }
      if (e.target.tagName === 'INPUT') return;
      if (e.key === ' ') { e.preventDefault(); flipped = !flipped; draw(); }
      else if (e.key === 'ArrowLeft') move(-1);
      else if (e.key === 'ArrowRight') move(1);
      else if (e.key === 'Enter') root.querySelector('#fknown').click();
    }
    document.addEventListener('keydown', onKey);

    setMode(mode);
    draw();
  };
})();
