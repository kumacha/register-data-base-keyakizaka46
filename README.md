# 欅坂46データベース

## このWebアプリは？

欅坂46の非公式Webページに掲載する内容をデータベース（Cloud Firestore）に登録するアプリケーションです。<br>
権限を与えられた人がログインすることでデータベースの編集が可能です。
また、データベースを閲覧することも可能。

## 使用技術

フロントエンドにNuxt.js, UIComponentにVuetify, バックエンドにFirebaseを用いています。<br>
データベースはCloud Firestore, ホスティングはFirebase Hosting, ユーザ認証にFirebase Authenticationを利用しています。

## データベースに登録可能な内容

・欅坂46の歴史<br>
・欅坂46のメンバー情報<br>
・ディスコグラフィー<br>
・ギャラリー（YouTube関連）<br>

## データベース構造（history）

```

{
id: 1,  //追加した順番
date: "2016年3月17日",  //dayjs使えるとよし
title: "欅坂46ワンマンライブ",   //歴史のタイトル
place: "有明コロシアム",   //ライブの場所
detail: "Live開幕直後の平手友梨奈の「有明コロシアム、かかってこい」の一言で会場が痺れた。"　　　　　 //説明文
type: "Live",　　　  //Live or Single or Album or TV or Announce
src: "src",    //画像のパスURL
createdAt: 2021年8月7日2:00:00,  //追加日,
updatedAt: 2021年8月7日2:00:00,  //更新日,
}

```
## データベース構造（member）

例）石森 虹花

```

{
id: 1,  //追加した順番
type: "1期生",  //何期生か
graduate: true,  //trueならば卒業済み
name: "石森 虹花",  //漢字氏名
subname: "いしもり にじか",  //ひらがな氏名
nickname: ["にじか"],  //ニックネーム
old: 23,  //年齢
birth: "1997年5月7日",  //誕生日
from: "宮城県",  //出身
src: "src",  //画像のURL
color: ["虹", "白"],  //サイリウムカラー
unit: ["五人囃子"],  //所属ユニット
createdAt: 2021年8月7日2:00:00,  //追加日
updatedAt: 2021年8月7日2:00:00,  //更新日
}

```


## データベース構造（discography）

```

{
id: 1,  //追加した順番
title: "不協和音",
nubmer: "4",
type: "TYPE-A",
songs:["不協和音", "W-KEYAKIZAKAの唄", "微笑みが悲しい","不協和音 off-vocal ver.", "W-KEYAKIZAKAの唄 off-vocal ver.", "微笑みが悲しい off-vocal ver.", ],
src: image.src,
createdAt: 2021年8月7日2:00:00,  //追加日
updatedAt: 2021年8月7日2:00:00,  //更新日
}
```




## データベース構造（gallery）
```

{
id: 1,  //追加した順番
title: "サイレントマジョリティー",   //タイトル
URL: "youtube.com",   //YouTubeのタイトル
src: "image.src",     //写真のパス
type: "single",　　   //single or coupling or trailer 
number: 1億,     //再生回数
createdAt: 2021年8月7日2:00:00,  //追加日
updatedAt: 2021年8月7日2:00:00,  //更新日
}

```


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

