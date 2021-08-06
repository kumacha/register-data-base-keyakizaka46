# register-data-base-keyakizaka46

## このWebアプリは何？

欅坂46の非公式Webページに掲載する内容をデータベース（Cloud Firestore）に登録するアプリケーションです。<br>
権限を与えられた人がログインすることでデータベースの編集が可能です。

## 使用技術

フロントエンドにNuxt.js, UIComponentにVuetify, バックエンドにFirebaseを用いています。<br>
データベースはCloud Firestore, ホスティングはFirebase Hosting, ユーザ認証にFirebase Authenticationを利用しています。

## データベースに登録可能な内容

・欅坂46の歴史<br>
・欅坂46のメンバー情報<br>
・ディスコグラフィー<br>
・ギャラリー（YouTube関連）<br>

## データベース構造（member）

例）石森 虹花

```
{
id: 1,
type: "1期生",
graduate: true,
name: "石森 虹花",
subname: "いしもり にじか",
nickname: ["にじか"],
old: 23,
birth: "1997年5月7日",
from: "宮城県",
src: "src",
color: ["虹", "白"],
unit: ["五人囃子"],
createdAt: 2021年8月7日2:00:00,
updatedAt: 2021年8月7日2:00:00,
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

