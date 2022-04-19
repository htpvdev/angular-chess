import { Component, OnInit } from '@angular/core';
import { playerType, side, setting } from 'src/app/commonTypes';
import { ReversiService } from '../services/reversi.service';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.scss']
})
export class BootComponent implements OnInit {
  p1_type: playerType = 'player'
  p1_side: side = 'black'
  p2_type: playerType = 'player'
  p2_side: side = 'white'

  constructor(
    private reversiService: ReversiService
  ) { }

  ngOnInit(): void {
  }
  
  onChangeSelect(selector: string): void {
    switch(selector) {
      case 'p1_side':
        this.p2_side = this.p1_side === 'black' ? 'white' : 'black'
        break
      case 'p2_side':
        this.p1_side = this.p2_side === 'black' ? 'white' : 'black'
        break
      default:
        break
    }
  }

  startGame(): void {

    const setting: setting = {
      player: 'p1',
      status: 'playing',
      p1: { type: this.p1_type, side: this.p1_side, piece: 2 },
      p2: { type: this.p2_type, side: this.p2_side, piece: 2 },
    }
    this.reversiService.putSetting(setting);
    console.log('reversiService.putSetting called!', this.reversiService)
  }
}
