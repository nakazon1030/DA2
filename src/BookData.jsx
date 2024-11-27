import book_zatudan from './img/zatudan.jpg'
import obi_zatudan1 from './img/obi-zatudan1.jpg'
import obi_zatudan2 from './img/obi-zatudan2.jpg'

import book_dezain from './img/dezain.jpg'
import obi_dezain1 from './img/obi-dezain1.jpg'
import obi_dezain2 from './img/obi-dezain2.jpg'

import book_kikikata from './img/kikikata.jpg'
import obi_kikikata1 from './img/obi-kikikata1.jpg'
import obi_kikikata2 from './img/obi-kikikata2.jpg'

export const BookData = [
    {
        id:1,
        title:"雑談力",
        image:book_zatudan,
        comment:"部長おすすめ",
        flag:1,
        images:[obi_zatudan1,obi_zatudan2]

    },
    {
        id:2,
        title:"なるほどデザイン",
        image:book_dezain,
        comment:"最近熱い",
        flag:0,
        images:[obi_dezain1,obi_dezain2]
        // obi1:obi_dezain1,
        // obi2:obi_dezain2
    },
    {
        id:3,
        title:"なぜ聞き方がうまいのか？",
        image:book_kikikata,
        comment:"知る人ぞ知る名本",
        flag:1,
        images:[obi_kikikata1,obi_kikikata2]
        // obi1:obi_kikikata1,
        // obi2:obi_kikikata2
    }];

    export default BookData