import { Injectable } from '@angular/core';
import { Reversi } from './reversi';
import { Subject } from 'rxjs';
import { vectors } from 'src/app/commonConst';
import { Side, PieceSide, Status, Setting, Field, ReversiType, PieceInfo, CalcFieldInfo } from '../reversiTypes';

@Injectable({
  providedIn: 'root'
})
export class ReversiService {
  private field!: Field
  private setting!: Setting

  constructor() {
    this.destroy()
  }

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
    return {
      field: this.field,
      setting: this.setting
    }
  }

  public destroy(): void {
    const reversi: Reversi = new Reversi()
    this.field = reversi.field
    this.setting = reversi.setting
  }

  public getField(): Field {
    return this.field
  }

  public putPiece(y: number, x: number, putSide: Side|null = null): number {
    if (!putSide) {
      putSide = this.setting.player
    }

    const {calcField, turnedPieceCount}: CalcFieldInfo = this._calcField(y, x, putSide, this.field.concat())
    const futurePieceInfo: PieceInfo = this._countPiece(calcField.concat())

    if (turnedPieceCount > 0) {
      this.field = calcField.map((item) => {return item})

      this.setting.black.piece = futurePieceInfo.black
      this.setting.white.piece = futurePieceInfo.white

      const checkContinueInfo = this._checkContinue(calcField.concat())
      const enemySide = putSide==='black'? 'white':'black'
      if (checkContinueInfo[enemySide]) {
        this.setting.player = enemySide
      } else {
        if (checkContinueInfo[putSide]) {
          // スキップされる
        } else {
          this.setting.status = 'overed'
        }
      }
    }
    return turnedPieceCount
  }

  public getCurrentPlayer(): Side {
    return this.setting.player
  }

  public putSetting(setting: Setting): void {
    this.setting = setting
  }

  public getStatus(): Status {
    return this.setting.status
  }

  //#region 内部関数(非公開関数)
  // メモ：内部関数は疎結合にして、クラス内共通プロパティは参照しないようにする

  private _calcField(y: number, x: number, putSide: Side, paramField: Field): CalcFieldInfo {
    let field = paramField.concat()
    let turnedPieceCount: number = 0
    for (const vector of vectors) {
      let maxVectorLength: number = 0
      for (let vectorLength: number = 1; vectorLength < 8; vectorLength++) {
        if (
          y + vector.y * vectorLength >= 0
          && y + vector.y * vectorLength <= 7
          && x + vector.x * vectorLength >= 0
          && x + vector.x * vectorLength <= 7
        ) {
          const pieceSide: PieceSide = field[y + vector.y * vectorLength][x + vector.x * vectorLength].side

          if (pieceSide === putSide) {
            maxVectorLength = vectorLength - 1
            break
          } else if (pieceSide === 'none') {
            maxVectorLength = 0
            break
          }
        }
      }
      if (maxVectorLength > 0) {
        for(let v: number = 1; v <= maxVectorLength; v++) {
          field[y + vector.y * v][x + vector.x * v].side = putSide
          turnedPieceCount += 1
        }
      }
    }
    if (turnedPieceCount > 0) {
      field[y][x].side = putSide
    }
    return { calcField: field, turnedPieceCount: turnedPieceCount }
  }

  private _countPiece(field: Field): PieceInfo {
    let pieceInfo = {
      black: 0,
      white: 0,
      none: 0,
    }
    for(let y = 0; y < 8; y++) {
      for(let x = 0; x < 8; x++) {
        if (field[y][x] !== undefined) {
          pieceInfo[field[y][x].side] += 1
        }
      }
    }
    return pieceInfo
  }

  private _checkContinue(field: Field): {black: boolean, white: boolean} {
    let black: boolean = false
    let white: boolean = false
    // let tempCalcFieldInfo: CalcFieldInfo
    // for(let y = 0; y < 8; y++) {
    //   for(let x = 0; x < 8; x++) {
    //     if (field[y][x].side === 'none') {
    //       tempCalcFieldInfo = this._calcField(y, x, 'black', field.concat())
    //       if (tempCalcFieldInfo.turnedPieceCount > 0) {
    //         black = true
    //       }
    //       tempCalcFieldInfo = this._calcField(y, x, 'black', field.concat())
    //       if (tempCalcFieldInfo.turnedPieceCount > 0) {
    //         white = true
    //       }
    //     }
    //   }
    // }
    return {
      black: black,
      white: white,
    }
  }

  //#endregion
}
