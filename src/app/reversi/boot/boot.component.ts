import { Component, OnInit } from '@angular/core';
import { playerType, side, setting } from 'src/app/commonTypes';
import { ReversiService } from '../services/reversi.service';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.scss']
})
export class BootComponent implements OnInit {
  p1Name: string = ''
  p1Type: playerType = 'player'
  p1Side: side = 'black'
  
  p2Name: string = ''
  p2Type: playerType = 'player'
  p2Side: side = 'white'

  constructor(
    private reversiService: ReversiService
  ) { }

  ngOnInit(): void {
  }
  
  onChangeSelect(selector: string): void {
    switch(selector) {
      case 'p1Side':
        this.p2Side = this.p1Side === 'black' ? 'white' : 'black'
        break
      case 'p2Side':
        this.p1Side = this.p2Side === 'black' ? 'white' : 'black'
        break
      default:
        break
    }
  }

  startGame(): void {
    const p1: any = { type: this.p1Type, playerName: this.p1Name!=='' ? this.p1Name : 'プレイヤー1', piece: 2 }
    const p2: any = { type: this.p2Type, playerName: this.p2Name!=='' ? this.p2Name : 'プレイヤー2', piece: 2 }

    const setting: setting = {
      player: 'black',
      status: 'playing',
      black: this.p1Side==='black' ? p1 : p2,
      white: this.p1Side==='white' ? p1 : p2,
      message: null,
    }
    this.reversiService.putSetting(setting)
    console.log('reversiService.putSetting called!', this.reversiService)
  }
}
