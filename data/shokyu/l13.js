/* 第１３課 私のおすすめ
   Từ vựng: New words list (tài liệu của lớp).
   Ngữ pháp: 学習項目 trong syllabus chính thức của giáo trình.
   Kanji: chưa có tài liệu kanji bài 13. */
JPD.lesson({
  id: 'shokyu-13', n: 13, jp: '私のおすすめ', vi: 'Gợi ý của tôi',

  vocab: [
    { g: '私の経験から', w: '紅葉', k: 'こうよう', m: 'Lá đỏ (mùa thu)' },
    { g: '私の経験から', w: 'サービス', k: '', m: 'Dịch vụ' },
    { g: '私の経験から', w: '相撲', k: 'すもう', m: 'Vật Sumo' },
    { g: '私の経験から', w: 'ホテル', k: '', m: 'Khách sạn' },
    { g: '私の経験から', w: '知ります［知る］', k: 'しります', m: 'Biết' },
    { g: '私の経験から', w: 'デートします［する］', k: '', m: 'Hẹn hò' },
    { g: '私の経験から', w: '１回も', k: 'いっかいも', m: '1 lần cũng (không)' },
    { g: '私の経験から', w: '何回も', k: 'なんかいも', m: 'Rất nhiều lần' },

    { g: 'おすすめします', w: '男の人', k: 'おとこのひと', m: 'Đàn ông' },
    { g: 'おすすめします', w: '女の人', k: 'おんなのひと', m: 'Phụ nữ' },
    { g: 'おすすめします', w: '（お）店', k: '（お）みせ', m: 'Cửa hàng' },
    { g: 'おすすめします', w: '遊園地', k: 'ゆうえんち', m: 'Khu vui chơi' },
    { g: 'おすすめします', w: 'ジェットコースター', k: '', m: 'Tàu lượn' },
    { g: 'おすすめします', w: '電気製品', k: 'でんきせいひん', m: 'Đồ điện' },
    { g: 'おすすめします', w: 'サングラス', k: '', m: 'Kính mát' },
    { g: 'おすすめします', w: '眼鏡', k: 'めがね', m: 'Kính' },
    { g: 'おすすめします', w: 'シャツ', k: '', m: 'Áo sơ mi' },
    { g: 'おすすめします', w: 'スカート', k: '', m: 'Váy (ngắn), juýp' },
    { g: 'おすすめします', w: 'ネクタイ', k: '', m: 'Cà vạt' },
    { g: 'おすすめします', w: '帽子', k: 'ぼうし', m: 'Mũ' },
    { g: 'おすすめします', w: '人気', k: 'にんき', m: 'Sự được yêu thích, được mến mộ' },
    { g: 'おすすめします', w: '売ります［売る］', k: 'うります', m: 'Bán' },
    { g: 'おすすめします', w: 'かぶります［かぶる］', k: '', m: 'Đội (mũ)' },
    { g: 'おすすめします', w: '泊まります［泊まる］', k: 'とまります', m: 'Trọ lại, nghỉ lại' },
    { g: 'おすすめします', w: 'はきます［はく］', k: '', m: 'Đi (giày, tất), mặc (quần, váy)' },
    { g: 'おすすめします', w: 'かけます［かける］', k: '', m: 'Đeo, treo (眼鏡をかけます)' },
    { g: 'おすすめします', w: '着ます［着る］', k: 'きます', m: 'Mặc' },
    { g: 'おすすめします', w: 'します［する］', k: '', m: 'Đeo, mặc (phụ kiện): ネクタイをします' },
    { g: 'おすすめします', w: '青い', k: 'あおい', m: 'Xanh' },
    { g: 'おすすめします', w: '赤い', k: 'あかい', m: 'Đỏ' },
    { g: 'おすすめします', w: '黄色い', k: 'きいろい', m: 'Vàng' },
    { g: 'おすすめします', w: '若い', k: 'わかい', m: 'Trẻ' },
    { g: 'おすすめします', w: '新鮮（な）', k: 'しんせん（な）', m: 'Tươi, mới' },

    { g: '教えてください', w: '材料', k: 'ざいりょう', m: 'Tài liệu, vật liệu, nguyên liệu' },
    { g: '教えてください', w: '場所', k: 'ばしょ', m: 'Địa điểm' },
    { g: '教えてください', w: 'バスケットボール', k: '', m: 'Bóng rổ' },
    { g: '教えてください', w: '浴衣', k: 'ゆかた', m: 'Yukata (kimono mặc mùa hè)' },
    { g: '教えてください', w: 'どこか', k: '', m: 'Chỗ nào đó' },
    { g: '教えてください', w: '練習します［する］', k: 'れんしゅうします', m: 'Luyện tập' },
    { g: '教えてください', w: 'みんなで', k: '', m: 'Tất cả mọi người cùng' }
  ],

  grammar: [
    {
      pat: 'V-たことがあります',
      desc: 'Nói về kinh nghiệm đã từng làm gì đó. Phủ định: V-たことがありません (chưa từng).',
      ex: [
        { jp: '相撲を見たことがあります。', vi: 'Tôi đã từng xem Sumo.' },
        { jp: '日本のホテルに泊まったことがありません。', vi: 'Tôi chưa từng ở khách sạn Nhật.' },
        { jp: '何回も行ったことがあります。', vi: 'Tôi đã đi rất nhiều lần rồi.' }
      ]
    },
    {
      pat: 'V-てから、～',
      desc: 'Sau khi làm ~ thì… Nhấn mạnh thứ tự trước sau của hai hành động.',
      ex: [
        { jp: '宿題をしてから、テレビを見ます。', vi: 'Sau khi làm bài tập, tôi xem TV.' },
        { jp: '日本へ来てから、相撲が好きになりました。', vi: 'Từ sau khi đến Nhật, tôi đâm ra thích Sumo.' }
      ]
    },
    {
      pat: 'V-る前に、～',
      desc: 'Trước khi làm ~ thì… Động từ vế trước luôn ở thể từ điển, bất kể thì của cả câu. Với danh từ dùng N の前に.',
      ex: [
        { jp: '寝る前に、歯を磨きます。', vi: 'Trước khi đi ngủ, tôi đánh răng.' },
        { jp: 'ご飯を食べる前に、手を洗ってください。', vi: 'Trước khi ăn cơm, hãy rửa tay.' },
        { jp: '食事の前に、薬を飲みます。', vi: 'Trước bữa ăn, tôi uống thuốc.' }
      ]
    },
    {
      pat: '知っていますか ／ 知りません',
      desc: 'Cặp hỏi – đáp đặc biệt. Khẳng định luôn dùng 知っています, nhưng phủ định KHÔNG phải 知っていません mà là 知りません.',
      ex: [
        { jp: 'あの店を知っていますか。', vi: 'Bạn có biết cửa hàng kia không?' },
        { jp: 'はい、知っています。', vi: 'Vâng, tôi biết.' },
        { jp: 'いいえ、知りません。', vi: 'Không, tôi không biết.' }
      ]
    },
    {
      pat: 'N という N',
      desc: 'Giới thiệu tên gọi của người, vật, địa điểm mà đối phương có thể chưa biết: “~ tên là ~”.',
      ex: [
        { jp: '「浴衣」という服を知っていますか。', vi: 'Bạn có biết loại trang phục tên là “yukata” không?' },
        { jp: 'これは「たこ焼き」という食べ物です。', vi: 'Đây là món ăn tên là “takoyaki”.' }
      ]
    },
    {
      pat: 'V-ています（động từ mặc/đeo）',
      desc: 'Với các động từ mặc – đeo (着ます、はきます、かぶります、かけます、します), thể ています diễn tả trạng thái đang mặc/đeo trên người.',
      ex: [
        { jp: '赤いシャツを着ている人です。', vi: 'Là người đang mặc áo sơ mi đỏ.' },
        { jp: '眼鏡をかけています。', vi: 'Anh ấy đang đeo kính.' },
        { jp: '帽子をかぶっている女の人はだれですか。', vi: 'Người phụ nữ đang đội mũ kia là ai vậy?' }
      ]
    },
    {
      pat: '［Mệnh đề bổ nghĩa］+ N',
      desc: 'Mệnh đề đứng trước bổ nghĩa cho danh từ; động từ trong mệnh đề dùng thể thường. Câu vẫn giữ nguyên trợ từ của danh từ đó: 〜は…です／〜を V ます／〜へ V ます.',
      ex: [
        { jp: '私が住んでいる町は静かです。', vi: 'Thành phố tôi đang sống thì yên tĩnh.' },
        { jp: '母が作った料理を食べました。', vi: 'Tôi đã ăn món mẹ nấu.' },
        { jp: '友達が働いている店へ行きます。', vi: 'Tôi sẽ đến cửa hàng nơi bạn tôi đang làm việc.' },
        { jp: 'これは京都で買った帽子です。', vi: 'Đây là cái mũ tôi mua ở Kyoto.' }
      ]
    }
  ],

  kanji: []
});
