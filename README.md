Vivliostyle Core APIを使うビュワーのテストプロジェクトです。
APIを読み込んで動かしているだけですが、私はそれなりにつまづいたので情報共有のために動作するプロジェクトを公開します。

レポジトリをクローンしたらnpmのパッケージをインストールする。Viviostyle CoreはCDNで提供されていないようなので、組み込む必要がある。

```
% npm install @vivliostyle/core
% npm install ts-loader, typescript, webpack, webpack-cli --save-dev
```
必須ライブラリが揃ったらWebpack。コマンドはpackage.jsonに書いてある。
```shell
% npm run build
```
/dist/index.htmlでLive Serverを立ち上げればVivliostyleのビュワーが、/dist/publish.htmlを読み込んでPDFプレビューを表示してくれる。左右カーソルキーか、画面のクリックでページ送りする。
ちなみにfile:///では動かないので、何らかの方法でhttpサーバーを立ち上げてください。VS CodeならLive Serverが楽だと思います。
