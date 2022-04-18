import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversiComponent } from './reversi/reversi.component';
import { StatusComponent } from './reversi/status/status.component';
import { BoardComponent } from './reversi/board/board.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BootComponent } from './reversi/boot/boot.component';
import { PieceComponent } from './reversi/board/piece/piece.component';

@NgModule({
  declarations: [
    AppComponent,
    ReversiComponent,
    StatusComponent,
    BoardComponent,
    WelcomeComponent,
    BootComponent,
    PieceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
