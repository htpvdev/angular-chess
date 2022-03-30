# Angularでチェスを作ってみようの巻

## やったことメモ

環境はvoltaで node@17.8.0, npm@8.5.5 を設定して実施

- 以下のコマンドを実行して、Angular CLIをインストールする。
  - `npm install -g @angular/cli`


1. 以下のコマンドを実行して、カレントディレクトリにAngularアプリ？をインストール
  - `ng new chess-app --directory ./`
  - 参考：https://tocie.net/blog/2020/07/11/ng-newで現在地にインストールする方法/

2. そしたら、こんな感じのメッセージが出てきて、入力を求められる(これは、複数ページ作る場合はyの方がいいのかな？といった感じ)
```
? Would you like to add Angular routing? (y/N)
```


3. 続いて、こんなものが出てくる。複数の選択肢から選べるみたい。今回は、以下のサイトでおすすめとあったのでSCSSを選択。
  - 参考：https://www.tohoho-web.com/ex/angular.html
```
? Which stylesheet format would you like to use? (Use arrow keys)
> CSS
  SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org 
```

ローカルホスト立ち上げコマンド(http://localhost:4200)
- `npm start`
(ポートを変えるには`ng serve --port 80`みたいにするみたい)


## 学習したことメモ


