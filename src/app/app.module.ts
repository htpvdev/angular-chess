import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversiComponent } from './reversi/reversi.component';
import { RvStatusComponent } from './reversi/rv-status/rv-status.component';
import { RvBoardComponent } from './reversi/rv-board/rv-board.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BootComponent } from './reversi/boot/boot.component';
import { RvPieceComponent } from './reversi/rv-board/rv-piece/rv-piece.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RvStartComponent } from './reversi/rv-start/rv-start.component';
import { RvStartDialogComponent } from './reversi/rv-start/rv-start-dialog/rv-start-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ReversiComponent,
    RvStatusComponent,
    RvBoardComponent,
    WelcomeComponent,
    BootComponent,
    RvPieceComponent,
    RvStartComponent,
    RvStartDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
