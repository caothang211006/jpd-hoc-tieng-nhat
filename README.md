# JPD — web học tiếng Nhật できる日本語

Mở bằng cách **double-click `index.html`**. Không cần cài gì, không cần internet.
Tiến độ (từ đã thuộc, điểm quiz) lưu trong localStorage của trình duyệt.

## Đang có gì

Giáo trình của lớp là **できる日本語 初級** ("sách đỏ", 15 bài) — sau đó là
**できる日本語 初中級** ("sách vàng", 15 bài).

| Bài | Từ vựng | Ngữ pháp | Kanji |
|-----|---------|----------|-------|
| 8 大切な人 | 81 | 9 | 12 |
| 9 好きなこと | 61 | 7 | 10 |
| 10 バスツアー | 69 | 10 | 9 |
| 11 私の生活 | 49 | 6 | 10 |
| 12 病気・けが | 52 | 6 | — |
| 13 私のおすすめ | 40 | 7 | — |
| 14 国の習慣 | 62 | 7 | — |

Các bài còn lại (1–7, 15 của sách đỏ và toàn bộ sách vàng) đã khai báo sẵn trong
`data/manifest.js` nhưng chưa có nội dung — thẻ hiện mờ trên trang chủ.

Tab Flashcard có 2 bộ thẻ: **Từ vựng** và **Kanji & từ ghép**. Bộ kanji gồm một
thẻ cho mỗi chữ (mặt trước là chữ + âm On/Kun, mặt sau là âm Hán–Việt và nghĩa)
cộng một thẻ cho từng từ ghép đi kèm — bài 8 chẳng hạn ra 41 thẻ từ 12 chữ. Từ
ghép trùng nhau giữa hai chữ (映画 nằm dưới cả 映 và 画) chỉ hiện một lần. Hai bộ
thẻ đếm tiến độ riêng, nên đánh dấu thuộc kanji không ảnh hưởng số từ vựng.

## Nguồn dữ liệu

- **Từ vựng**: `New words list - Dekiru Nihongo Beginner.pdf` của lớp. File PDF này
  dùng font Adobe-Japan1 mà `pdftotext` không đọc được, nên phần chữ Nhật lẫn dấu
  tiếng Việt đều ra ký tự rác. Bản đã giải mã nằm ở `reference/tu-vung-15-bai.txt`
  — **có đủ cả 15 bài**, kể cả 12–14.
- **Ngữ pháp bài 8–11**: file `TOM-TAT-NGU-PHAP-BAI-*.pdf` / `ngữ pháp *.pdf` của lớp.
- **Ngữ pháp bài 12–14**: cột 学習項目 trong syllabus chính thức
  (`reference/syllabus-sach-do.txt`, tải từ dekirunihongo.jp) — vì lớp chưa phát
  bản tóm tắt cho các bài này. Ví dụ minh hoạ do soạn thêm.
- **Kanji bài 8–11**: các file `KANJI-BAI-*.pptx` / `Slot * Kanji bai *.pptx`
  (âm On/Kun, âm Hán–Việt, từ ghép lấy nguyên từ slide).
- **Kanji bài 12–14**: chưa có tài liệu. Khi nào có slide kanji thì bổ sung vào
  mảng `kanji` của file bài tương ứng.

## Thêm nội dung cho một bài mới

1. Tạo `data/shokyu/lNN.js` (hoặc `data/shochukyu/lNN.js`) theo mẫu:

```js
JPD.lesson({
  id: 'shokyu-15', n: 15, jp: 'テレビ・雑誌から', vi: 'Từ TV & tạp chí',
  vocab: [
    { g: 'Tên nhóm', w: '言葉', k: 'ことば', m: 'Nghĩa tiếng Việt' }
  ],
  grammar: [
    { pat: 'Mẫu câu', desc: 'Giải thích',
      ex: [{ jp: 'Câu ví dụ。', vi: 'Dịch' }] }
  ],
  kanji: [
    { c: '漢', m: 'HÁN', on: 'カン', kun: '',
      w: [{ jp: '漢字', k: 'かんじ', vi: 'chữ Hán' }] }
  ]
});
```

`g` (nhóm), `k` (cách đọc) và `kanji` có thể để trống.

2. Trong `data/manifest.js`, điền `file` cho bài đó và cập nhật `words` /
   `grammar` / `kanji` (chỉ dùng để hiện trên thẻ ở trang chủ).

Không cần sửa code — thẻ sẽ tự sáng lên.

## Cấu trúc

```
index.html          shell + thẻ <script>
css/style.css       toàn bộ giao diện, có sáng/tối
js/store.js         tiến độ trong localStorage
js/data.js          nạp bài theo yêu cầu (dùng <script> vì file:// chặn fetch)
js/app.js           router theo hash + trang chủ
js/vocab.js         danh sách từ, tìm kiếm, đánh dấu đã thuộc
js/flash.js         flashcard (Space lật, ← →, Enter đánh dấu)
js/grammar.js       tra ngữ pháp
js/kanji.js         kanji theo bài
js/quiz.js          trắc nghiệm + xem lại câu sai
data/manifest.js    danh mục 2 quyển × 15 bài
data/shokyu/*.js    nội dung từng bài
reference/*.txt     text đã giải mã từ PDF gốc, để đối chiếu
```
