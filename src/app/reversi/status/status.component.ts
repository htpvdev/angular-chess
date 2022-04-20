import { Component, Input, OnInit } from '@angular/core';
import { setting, side } from 'src/app/commonTypes';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input() setting!: setting
  winnerText!: string

  constructor() { }

  ngOnInit(): void {
    if (this.setting.status === 'overed') {
      const blackPiece = this.setting.black.piece
      const whitePiece = this.setting.white.piece

      if (blackPiece > whitePiece) {
        this.winnerText = '黒の勝ち！'
      } else if (blackPiece === whitePiece) {
        this.winnerText = '両者引き分け！'
      } else {
        this.winnerText = '白の勝ち！'
      }
    }
  }

}
