import { Component, OnInit } from '@angular/core';
import { ReversiService } from '../services/reversi.service';
import { ReversiType, side } from 'src/app/commonTypes';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public reversi: ReversiType

  constructor(
    private reversiService: ReversiService,
  ) {
    this.reversi = this.reversiService.init()
  }

  ngOnInit(): void {
    this.reversi = this.reversiService.init()
  }

  putPiece(y: number, x: number, side: side): void {

    this.reversiService.putPiece(y, x, side);
    console.log(x, y);
  }

}
