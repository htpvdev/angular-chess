import { Injectable } from '@angular/core';
import { Reversi } from './reversi';
import { side, setting, field, ReversiType } from 'src/app/commonTypes';

@Injectable({
  providedIn: 'root'
})
export class ReversiService { 
  private reversi: Reversi;

  constructor() {
    this.reversi = new Reversi();
  }

  init() :ReversiType {
    return this.reversi
  }

  getField() :field {
    return this.reversi.field;
  }

  putPiece(y: number, x: number, side: side) :void {
    this.reversi.field[y][x].side = side;
  }

  putField(field: field) :void {
      this.reversi.field = field;
  }

  getSetting() :setting {
    return this.reversi.setting;
  }

  putSetting(setting: setting) :void {
    this.reversi.setting = setting;
  }
}
