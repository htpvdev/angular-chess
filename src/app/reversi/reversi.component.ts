import { Component, OnInit, OnDestroy } from '@angular/core';

// 画面遷移をコンポーネント内で操作するためのモジュール
import { Router } from '@angular/router';

// Serviceの値が更新されたときのイベントハンドラ
import { Subscription } from 'rxjs';

// ダイアログを呼び出すためのモジュール
import { MatDialog } from '@angular/material/dialog';

import { ReversiService } from './services/reversi.service';

import { RvStartDialogComponent } from './rv-start-dialog/rv-start-dialog.component';
import { CommonConfirmComponent } from '../common-confirm/common-confirm.component';

import { ReversiType, Setting } from './reversiTypes';
import { CommonDialogInfo } from '../commonTypes';

@Component({
  selector: 'app-reversi',
  templateUrl: './reversi.component.html',
  styleUrls: ['./reversi.component.scss']
})
export class ReversiComponent implements OnInit, OnDestroy {
  /** ReversiService の変数の参照を取得するプロパティ */
  public reversi!: ReversiType

  /** subscribe を保持するための Subscription */
  private subscription!: Subscription;

  constructor(
    private router: Router,
    private reversiService: ReversiService,
    public dialog: MatDialog
  ) {
    this.reversi = this.reversiService.init()
  }

  ngOnInit(): void {
    for (let i = 1; i < 1; i ++) {
      console.log(i)
    }
    // Serviceのイベント登録。サービスで共有しているデータが更新されたら発火されるイベントをキャッチする
    this.subscription = this.reversiService.sharedReversi$.subscribe(
      (reversi) => {
        console.log('[ReversiComponent] current ReversiService recieved.', reversi)
        this.reversi = reversi;
      }
    );
    // ダイアログ表示処理
    this.dialog.open(RvStartDialogComponent,
      {
        data: {
          p1Type: 'player',
          p1Side: 'black',
          p2Type: 'player',
          p2Side: 'white',
        },
        // height: "300px",
        // width: "500px",
        disableClose: true,
      }
    ).afterClosed().subscribe((dialogData) => {
      console.log("[RvStartComponent] The dialog was closed")
      if (dialogData.p1Type !== undefined) {
        this._startGame(dialogData)
      } else {
        this._reaveReversiPage()
      }
    })
  }

  ngOnDestroy(): void {
    // リソースリーク防止のため[subscription]オブジェクトを破棄する
    this.subscription.unsubscribe();
  }

  leaveGame(): void {
    const dialogInfo: CommonDialogInfo = {
      data: {
        title: 'ゲーム中断',
        messageList: [
          '現在の進行状況がすべてリセットされてしまいます。',
          '本当によろしいですか？',
        ],
        createCancelButton: true,
      },
      // height: "300px",
      // width: "500px",
      disableClose: true,
    }
    // ダイアログ表示処理
    this.dialog.open(CommonConfirmComponent, dialogInfo
    ).afterClosed().subscribe((isOK) => {
      if (isOK) {
        this._reaveReversiPage()
      }
    })
  }

  //#region 内部関数
  _startGame(dialogData: any): void {
    const p1 = { type: dialogData.p1Type, playerName: dialogData.p1Name!=null ? dialogData.p1Name : 'プレイヤー1', piece: 2 }
    const p2 = { type: dialogData.p2Type, playerName: dialogData.p2Name!=null ? dialogData.p2Name : 'プレイヤー2', piece: 2 }

    const setting: Setting = {
      player: 'black',
      status: 'playing',
      black: dialogData.p1Side==='black' ? p1 : p2,
      white: dialogData.p1Side==='white' ? p1 : p2,
    }
    this.reversiService.putSetting(setting)
    console.log('[ReversiComponent._startGame] reversiService.putSetting called.')
  }

  _reaveReversiPage(url: string = '') :void {
    this.reversiService.destroy()
    this.router.navigateByUrl(url)
  }
  //#endregion
}
