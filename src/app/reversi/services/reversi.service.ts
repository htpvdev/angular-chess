import { Injectable } from '@angular/core';
import { Reversi } from '../reversi';

@Injectable({
  providedIn: 'root'
})
export class ReversiService {
  reversi: Reversi;

  constructor() {
    this.reversi = new Reversi({}, {});
  }

  boot() :void {
    console.log('hhhhhhhhhhhhhhh')
  }
}
