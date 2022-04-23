import { Injectable } from '@angular/core';
import { Reversi } from './reversi';
import { Side, Status, Setting, Field, ReversiType, PieceSide } from 'src/app/reversi/reversiTypes';
import { Subject } from 'rxjs';
import { vectors } from 'src/app/commonConst';

@Injectable({
  providedIn: 'root'
})
export class ReversiService {
  private reversi: Reversi = new Reversi()

  constructor() { }

  /** データの変更を通知するためのオブジェクト */
  private sharedReversi = new Subject<Reversi>()

  /** Subscribe するためのプロパティ - コンポーネント間で共有するためのプロパティ */
  public sharedReversi$ = this.sharedReversi.asObservable()

  /** データの更新イベント */
  public onNotifySharedDataChanged(updateed: Reversi) {
    console.log('[ReversiService] onNotifySharedDataChanged fired.')
    this.sharedReversi.next(updateed)
  }

  public init(): ReversiType {
    return this.reversi
  }

  public destroy(): void {
    this.reversi = new Reversi()
  }

  public getField(): Field {
    return this.reversi.field
  }

  public putPiece(y: number, x: number): void {

    // if (this._getPutPieceInfo(y, x, this.reversi.setting.player)) {
    //   this.reversi.field = this._turnPieces(y, x, this.reversi.setting.player)

    // } else {
    //   this._setMessage('ここには置けませんねん。')
    // }
    const currentPlayer = this.reversi.setting.player
    this.reversi.field[y][x].side = currentPlayer
    this.reversi.setting.player = currentPlayer==='black'? 'white':'black'
  }

  public putField(field: Field): void {
      this.reversi.field = field
  }

  public getSetting(): Setting {
    return this.reversi.setting
  }

  public putSetting(setting: Setting): void {
    this.reversi.setting = setting
  }

  public getStatus(): Status {
    return this.reversi.setting.status
  }

  //#region 内部関数(非公開関数)

  private _setMessage(message: null|string = null): void {
    this.reversi.setting.message = message
  }

  private _getPutPieceInfo(y: number, x: number, putSide: Side): any {
    // const enemySide: side = putSide==='black' ? 'white':'black'

    // for (const vector of vectors) {
    //   let piecesLine: Array<pieceSide> = []
    //   let turnedPieces: number = 0
    //   for (let n: number = 1; n < 8; n++) {
    //     const piece: {side: pieceSide, point: number}|undefined = this.reversi.field[y + vector.y * n][x + vector.x * n]
    //     if (piece !== undefined) {
    //       piecesLine.push(piece.side)
    //     } else {
    //       break
    //     }
    //   }
    //   for (let m: number = 0; m < piecesLine.length; m++) {
    //     let tempTurnedPieces: number = 0
    //     if (piecesLine[m] === enemySide) {
    //       tempTurnedPieces += 1
    //     } else if (piecesLine[m] === putSide) {
    //       turnedPieces += tempTurnedPieces
    //       break
    //     } else {
    //       break
    //     }
    //   }
    // }
    return true
  }

  private _turnPieces(y: number, x: number, pieceSide: PieceSide): Field {
    return this.reversi.field
  }

  //#endregion
}
