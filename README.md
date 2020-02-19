# 使用言語、フレームワーク

## 使用言語

- JavaScript(TypeScript)

## フレームワーク

- React
- Redux
- Axios

## インフラ

- Firebase

# 環境構築に必要な手順

docker-compose を利用して Docker をビルドする

```
docker-compose build
```

パッケージを yarn を利用して導入する

```
docker-compose run front /bin/sh
yarn install
```

もしくは `docker-compose run --rm front yarn install`

上記実行後、`docker-compose up -d`で Docker を起動後
http://localhost:8000 にアクセスする

# インフラ・フロントそれぞれの技術選定

## インフラ

- Firebase
  - 複雑な DB テーブルが必要ないアプリケーションであるため

## フロント

- TypeScript

  - 数値と文字列が混在するため、静的型システムを導入することでエラーを抑止

- React

  - リファレンスの多いフレームワークであるため
  - TypeScript と相性が良いため

- Redux
  - ユーザーの利用しやすさを考慮すると複数ページに渡ったデータ管理を行う必要があったため

# 実装した機能

- ボードゲームのデータ管理
- 管理データの編集
- 管理データのダウンロード（JSON ファイル）
- 管理データのインポート（JSON ファイル）
- ボードゲームの運用管理
  - 成否判定の表示
  - 成否判定の Discord への出力
  - 外部 WwebAPI を利用した成否判定

# このソースコードで公開しているアプリはどんなサービス内容か

ボードゲームの一種である TRPG（テーブルトークロールプレイングゲーム）を Discord 上で行う際に、
Discord WebHook を利用することで Discord を中心としてゲームデータの運用を簡易にするサービス
