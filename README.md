# JPD — web học tiếng Nhật できる日本語

Mở bằng cách **double-click `index.html`**. Không cần cài gì, không cần internet.
Tiến độ (từ đã thuộc, điểm quiz) lưu trong localStorage của trình duyệt.

## Đang có gì

Giáo trình của lớp là **できる日本語 初級** ("sách đỏ", 15 bài) — sau đó là
**できる日本語 初中級** ("sách vàng", 15 bài).

| Bài | Từ vựng | Ngữ pháp | Kanji |
|-----|---------|----------|-------|
| 1 はじめまして | 47 | 9 | — |
| 2 買い物・食事 | 77 | 9 | — |
| 3 スケジュール | 78 | 10 | — |
| 4 私の国・町 | 68 | 8 | — |
| 5 休みの日 | 59 | 8 | — |
| 6 一緒に！ | 55 | 14 | — |
| 7 友達の家で | 69 | 9 | — |
| 8 大切な人 | 81 | 9 | 12 |
| 9 好きなこと | 61 | 7 | 10 |
| 10 バスツアー | 69 | 10 | 9 |
| 11 私の生活 | 49 | 6 | 10 |
| 12 病気・けが | 52 | 6 | — |
| 13 私のおすすめ | 40 | 7 | — |
| 14 国の習慣 | 62 | 7 | — |
| 15 テレビ・雑誌から | 48 | 6 | — |

Toàn bộ 15 bài của sách đỏ đã có nội dung đầy đủ (từ vựng + ngữ pháp; kanji
riêng chỉ có ở bài 8–11, các bài khác không có danh sách kanji trong giáo
trình gốc). Sách vàng (**できる日本語 初中級**) đã khai báo sẵn trong
`data/manifest.js` nhưng chưa có nội dung — thẻ hiện mờ trên trang chủ, chờ
tài liệu nguồn.

Tab Flashcard có 2 bộ thẻ: **Từ vựng** và **Kanji & từ ghép**.

- Thẻ **từ vựng**: mặt trước là từ + cách đọc hiragana/katakana (cỡ lớn, rõ),
  mặt sau là nghĩa.
- Thẻ **kanji** (chữ Hán đơn lẻ): mặt trước **chỉ hiện chữ**, không có cách đọc
  — để việc nhận mặt chữ được kiểm tra thật. Cách đọc On/Kun dồn sang mặt sau
  cùng nghĩa Hán–Việt.
- Thẻ **từ ghép** (đi kèm mỗi chữ kanji, ví dụ 大家 dưới chữ 家): coi như từ
  vựng bình thường — mặt trước có kana, mặt sau là nghĩa, kèm ghi chú "từ ghép
  của [chữ]".

Bài 8 ra 41 thẻ từ 12 chữ (chữ đơn + từ ghép, đã loại trùng — 映画 nằm dưới cả
映 và 画 nhưng chỉ hiện một lần). Hai bộ thẻ đếm tiến độ riêng, nên đánh dấu
thuộc kanji không ảnh hưởng số từ vựng.

### Ôn tập nhiều bài cùng lúc

Nút **"Ôn tập nhiều bài cùng lúc"** trên trang chủ (`#/study`) cho chọn nhiều
bài rồi gộp thành một bộ flashcard hoặc một đề kiểm tra duy nhất — dùng để ôn
trước khi thi, không phải học từng bài riêng lẻ. Đánh dấu "đã thuộc" trong
phiên gộp vẫn ghi lại đúng vào tiến độ của bài gốc chứa từ đó, nên số liệu ở
trang chủ và ở từng bài luôn khớp với những gì đã ôn gộp.

## Nguồn dữ liệu

- **Từ vựng**: `New words list - Dekiru Nihongo Beginner.pdf` của lớp. File PDF này
  dùng font Adobe-Japan1 mà `pdftotext` không đọc được, nên phần chữ Nhật lẫn dấu
  tiếng Việt đều ra ký tự rác. Bản đã giải mã nằm ở `reference/tu-vung-15-bai.txt`
  — **có đủ cả 15 bài**, kể cả 12–14.
- **Ngữ pháp bài 8–11**: file `TOM-TAT-NGU-PHAP-BAI-*.pdf` / `ngữ pháp *.pdf` của lớp.
- **Ngữ pháp bài 1–7, 12–15**: cột 学習項目 trong syllabus chính thức
  (`reference/syllabus-sach-do.txt`, tải từ dekirunihongo.jp) — vì lớp chưa phát
  bản tóm tắt cho các bài này. Ví dụ minh hoạ do soạn thêm.
- **Kanji bài 8–11**: các file `KANJI-BAI-*.pptx` / `Slot * Kanji bai *.pptx`
  (âm On/Kun, âm Hán–Việt, từ ghép lấy nguyên từ slide).
- **Kanji bài 1–7, 12–15**: giáo trình sách đỏ không có danh sách kanji riêng
  cho các bài này (kanji chỉ dạy tập trung ở bài 8–11 theo slide của lớp), nên
  mảng `kanji` để trống — không phải thiếu sót.

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
