import { Injectable } from '@angular/core';
import { Reversi } from './reversi';
import { side, status, setting, field, ReversiType, pieceSide } from 'src/app/commonTypes';
import { Subject } from 'rxjs';
import { vectors } from 'src/app/commonConst';

@Injectable({
  providedIn: 'root'
})
export class ReversiService { 
  private reversi: Reversi

  constructor() {
    this.reversi = new Reversi()
  }

  /**
   * データの変更を通知するためのオブジェクト
   *
   * @private
   * @memberof ReversiService
   */
  private sharedReversi = new Subject<Reversi>()

  /**
   * Subscribe するためのプロパティ
   * `- コンポーネント間で共有するためのプロパティ
   *
   * @memberof ReversiService
   */
  public sharedReversi$ = this.sharedReversi.asObservable()

  /**
   * データの更新イベント
   *
   * @param {Reversi} updateed 更新データ
   * @memberof ReversiService
   */
  public onNotifySharedDataChanged(updateed: Reversi) {
    console.log('[ReversiService] onNotifySharedDataChanged fired.')
    this.sharedReversi.next(updateed)
  }

  public init() :ReversiType {
    return this.reversi
  }

  public getField() :field {
    return this.reversi.field
  }

  public putPiece(y: number, x: number, pieceSide: pieceSide) :void {

    if (this._getPutPieceInfo(y, x, this.reversi.setting.player)) {
      this.reversi.field = this._turnPieces(y, x, this.reversi.setting.player)

    } else {
      this._setMessage('ここには置けませんねん。')
    }
    // this.reversi.field[y][x].side = currentPlayer
    // this.reversi.setting.player = currentPlayer==='black'? 'white':'black'
  }

  public putField(field: field) :void {
      this.reversi.field = field
  }

  public getSetting() :setting {
    return this.reversi.setting
  }

  public putSetting(setting: setting) :void {
    this.reversi.setting = setting
  }

  public getStatus() :status {
    return this.reversi.setting.status
  }

  //#region 内部関数(非公開関数)

  private _setMessage(message: null|string = null) :void {
    this.reversi.setting.message = message
  }

  private _getPutPieceInfo(y: number, x: number, putSide: side) :any {
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

  private _turnPieces(y: number, x: number, pieceSide: pieceSide) :field {
    return this.reversi.field
  }

  //#endregion
}
