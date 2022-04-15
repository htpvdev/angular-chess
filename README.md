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

- ローカルホスト立ち上げコマンド(http://localhost:4200)
  - `npm start`
  - (ポートを変えるには`ng serve --port 80`みたいにするみたい)


4. コマンドでコンポーネントを作成。
- `ng generate component header`
- (ng generate コマンドは、ng g と同じ)
- (このコマンドで、src/app/headerディレクトリが作成され、以下のファイルが自動生成される)
  - header.component.html ----- コンポーネント内のHTMLを記述。Angularのロジック用の特殊な記述もある
  - header.component.scss ----- コンポーネント内にのみ適用されるscssスタイルシート
  - header.component.spec.ts -- jestでのコンポーネントのテストコードを記述する
  - header.component.ts ------- コンポーネントの本体。ここにロジックを記述する


## 学習したことメモ

Angularでは、すべてのモジュール（tsファイル）で、「デコレータ」と呼ばれるものを
使って、どのような機能を提供するのか定義する。  
デコレータは、@を頭につけて定義して、()の中にプロパティを記述できるようになっている。  

例1：NgModuleデコレータの場合  
```
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    UserListComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // UserService,
  ],
  bootstrap: [AppComponent]
})
```

例2：Componentデコレータの場合  
```
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  message: string;
  constructor() {
    this.message = 'This is a sample of Angular application.';
  }

  ngOnInit(): void {
  }
}
```

src/styles.scssには、すべてのコンポーネントに対して影響のあるスタイルを記述できる。
また、Angularが利用するスタイルシートの拡張子の設定も、後から変更できるらしい。


src/ 直下の`app.module.ts`が重要。
これでエントリーポイント（最初に呼び出されるコンポーネント）であるルートコンポーネントを指定する。


