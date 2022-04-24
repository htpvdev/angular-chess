import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReversiService } from '../services/reversi.service';
import { Field } from 'src/app/reversi/reversiTypes';
// Serviceの値が更新されたときのイベントハンドラ
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cantPutPieceMsg } from 'src/app/commonConst';
import { CommonDialogInfo } from 'src/app/commonTypes';
import { MatDialog } from '@angular/material/dialog';
import { CommonConfirmComponent } from 'src/app/common-confirm/common-confirm.component';

@Component({
  selector: 'app-rv-board',
  templateUrl: './rv-board.component.html',
  styleUrls: ['./rv-board.component.scss']
})
export class RvBoardComponent implements OnInit, OnDestroy {
  /** [ReversiService]内部のデータ[reversi]のプロパティの一部[field]をこの変数に複製する */
  public field: Field

  /** Subscriptionというモジュールの機能で、[RevesiService]の[reversi.field]の値が更新されたときに呼び出されるfunction?を入れる変数 */
  private subscription!: Subscription;

  constructor (
    private reversiService: ReversiService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) {
    this.field = this.reversiService.getField()
  }

  ngOnInit(): void {
    // サービスで共有しているデータが更新されたら発火されるイベントを[subscription]にセットする
    this.subscription = this.reversiService.sharedReversi$.subscribe(
      (reversi) => {
        console.log('[RvBoardComponent] current ReversiService recieved.', reversi)
        this.field = reversi.field
        // console.log('[boardComponent] getField called', this.field)
      }
    )
  }

  ngOnDestroy(): void {
    // リソースリーク防止のため[subscription]オブジェクトを破棄する
    this.subscription.unsubscribe();
  }

  putPiece(y: number, x: number): void {
    let turnedPieceCount: number = 0
    const putSide = this.reversiService.getCurrentPlayer()
    if (this.field[y][x].side === 'none') {
      console.log('boardcomponent.putPiece to reversiService.putPiece', y, x, putSide, this.field)
      turnedPieceCount = this.reversiService.putPiece(y, x, putSide)
      this.ngOnInit()
    }

    if (turnedPieceCount === 0) {
      this._snackBar.open(cantPutPieceMsg, 'OK')
    } else if (this.reversiService.getStatus() === 'overed') {
      const dialogInfo: CommonDialogInfo = {
        data: {
          title: '結果発表！',
          messageList: [
            'aaaaaaaaaaaaaaaaaaaaa',
          ],
          createCancelButton: false,
        },
        // height: "300px",
        // width: "500px",
        disableClose: true,
      }
      // ダイアログ表示処理
      this.dialog.open(CommonConfirmComponent, dialogInfo)
    } else if (this.reversiService.getCurrentPlayer() === putSide) {
      const dialogInfo: CommonDialogInfo = {
        data: {
          title: '打つ手なし！',
          messageList: [
            (putSide==='black'? '白':'黒') + 'のターンはスキップされました',
          ],
          createCancelButton: false,
        },
        // height: "300px",
        // width: "500px",
        disableClose: false,
      }
      // ダイアログ表示処理
      this.dialog.open(CommonConfirmComponent, dialogInfo)
    }
  }
}
