import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { MatDialogModule } from "@angular/material/dialog"; // これを追加!
import { MatButtonModule } from "@angular/material/button"; // これを追加!
import { MatInputModule } from "@angular/material/input";

import { AppComponent } from './app.component';
import { ReversiComponent } from './reversi/reversi.component';
import { StatusComponent } from './reversi/status/status.component';
import { BoardComponent } from './reversi/board/board.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BootComponent } from './reversi/boot/boot.component';
import { PieceComponent } from './reversi/board/piece/piece.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgdialogviewSampleComponent } from './ngdialogview-sample/ngdialogview-sample.component';
import { NgdialogpageSampleComponent } from './ngdialogpage-sample/ngdialogpage-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ReversiComponent,
    StatusComponent,
    BoardComponent,
    WelcomeComponent,
    BootComponent,
    PieceComponent,
    NgdialogviewSampleComponent,
    NgdialogpageSampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule, //これを追加！
    MatButtonModule, //これを追加！
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
