// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// [(ngModel)]を使うためのモジュール
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// AngularMaterialのスタイル調整ライブラリflex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

// スタイルにアニメーションを導入するモジュール(AngularMaterialインストール時デフォルトで入る)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material (なぜかVSCodeの予測で出ないので、パスも手書きする必要がある)
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

// Components
import { AppComponent } from './app.component';
import { CommonConfirmComponent } from './common-confirm/common-confirm.component';
import { ReversiComponent } from './reversi/reversi.component';
import { RvBoardComponent } from './reversi/rv-board/rv-board.component';
import { RvPieceComponent } from './reversi/rv-board/rv-piece/rv-piece.component';
import { RvStartDialogComponent } from './reversi/rv-start-dialog/rv-start-dialog.component';
import { RvStatusComponent } from './reversi/rv-status/rv-status.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    // 利用するコンポーネントはここに記述する必要がある
    AppComponent,
    CommonConfirmComponent,
    ReversiComponent,
    RvBoardComponent,
    RvPieceComponent,
    RvStartDialogComponent,
    RvStatusComponent,
    WelcomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    // Angular Material のうち利用する部品はここに記述する必要がある
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSnackBarModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
