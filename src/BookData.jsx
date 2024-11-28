import book_zatudan from './img/zatudan.jpg';
import obi_zatudan1 from './img/obi-zatudan1.jpg';
import obi_zatudan2 from './img/obi-zatudan2.jpg';

import book_dezain from './img/dezain.jpg';
import obi_dezain1 from './img/obi-dezain1.jpg';
import obi_dezain2 from './img/obi-dezain2.jpg';

import book_kikikata from './img/kikikata.jpg';
import obi_kikikata1 from './img/obi-kikikata1.jpg';
import obi_kikikata2 from './img/obi-kikikata2.jpg';

export const BookData = JSON.parse(localStorage.getItem('bookData')) || [
    {
        id: 1,
        title: "雑談力",
        image: book_zatudan,
        auth:"安田 正",
        year:"2015年5月20日",
        publish:"文響社",
        youshi:`あたりさわりのない無意味な雑談ではなく、「意味のある雑談をすれば、仕事や人間関係が変わる」。
        そんなメッセージのもと、雑談力を高める方法を具体的、実践的に解説したのが本書です。
        たとえば、「声は、ドレミファソラシドの『ファ』か『ソ』」「『なるほどですね』『そうですね』は
        話を聞いていない人の反応」「『なぜですか?』は愚問」など、全38項目でそのテクニックを紹介していきます。
        さらに、日常で雑談力を鍛えるためのトレーニング方法も収録しており、初心者からある程度話し方に自信がある人まで、
        すぐに実践できるノウハウが詰まった一冊です。`,
        comment: "部長おすすめ",
        flag: 1,
        images: [obi_zatudan1, obi_zatudan2],
        htmlContent: "aaaa"
    },
    {
        id: 2,
        title: "なるほどデザイン",
        image: book_dezain,
        auth:"筒井 美希",
        year:"2015年7月31日",
        publish:"エムディエヌコーポレーション",
        youshi:`「デザイン＝楽しい」を実感できる新しいデザイン書籍。
        デザインする上で必要な基礎、概念、ルール、プロセスを
        図解やイラスト、写真などのビジュアルで解説しています。
        現場で活躍しているデザイナーが身近にあるわかりやすいものに例えたり、
        図解、イラスト、別のものに置き換えて見方を変えてみたり…
        豊富なビジュアルとともにわかりやすくひも解いた、
        楽しみながらデザインのあれこれがわかる「なるほど！」と思える内容が盛りだくさんです！`,
        comment: "最近熱い",
        flag: 0,
        images: [obi_dezain1, obi_dezain2],
        htmlContent: "bbbbb"
    },
    {
        id: 3,
        title: "なぜ聞き方がうまいのか？",
        image: book_kikikata,
        auth:"八木 龍平",
        year:"2020年11月11日",
        publish:"日本文芸社",
        youshi:`共感力ゼロでもOK! 聞く力こそ成功するカギだ!
         著者累計35万部突破、ベストセラー『成功している人は、なぜ神社に行くのか?』でおなじみ、
         「リュウ博士」こと八木龍平の最新刊。聞く力は、生きる力を高め、相手を幸せにする魔法の力。
         聞き上手になると、人から信頼され、人生がうまくいく。
         どうすれば、聞き上手になれるのか、聞き上手になるための独自のメソッドを紹介。
         誰でもできる聞き方の技術から、根源的欲求の引き出し方、心を整え、読み解く方法まで、
         社会心理学をベースにスピリチュアルを加えて解説します。先行きがわからないアフターコロナ時代に最適。
         心を読み解き、本当にやりたいことを見つける本です。`,
        comment: "知る人ぞ知る名本",
        flag: 1,
        images: [obi_kikikata1, obi_kikikata2],
        htmlContent: "cccc"
    }
];

export const addHtmlContentToBook = (id, htmlContent) => {
    const book = BookData.find(book => book.id === id);
    if (book) {
        book.htmlContent = htmlContent;
        localStorage.setItem('bookData', JSON.stringify(BookData)); // ローカルストレージに保存
    }
};

export default BookData;