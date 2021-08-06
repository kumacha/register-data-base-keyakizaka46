# register-data-base-keyakizaka46

## このWebアプリは何？

欅坂46の非公式Webページに掲載する内容をデータベース（Cloud Firestore）に登録するアプリケーションです。<br>
権限を与えられた人がログインすることでデータベースの編集が可能です。

## データベースに登録可能な内容

・欅坂46の歴史<br>
・欅坂46のメンバー情報<br>
・ディスコグラフィー<br>
・ギャラリー（YouTube関連）<br>

## 使用技術

フロントエンドにNuxt.js, UIComponentにVuetify, バックエンドにFirebaseを用いています。<br>
データベースはCloud Firestore, ホスティングはFirebase Hosting, ユーザ認証にFirebase Authenticationを利用しています。


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

