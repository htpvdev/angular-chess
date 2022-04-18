import { Component, OnInit } from '@angular/core';
import { Board } from './board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: Board;

  constructor() {
    this.board = new Board;
  }

  ngOnInit(): void {
  }

  putPiece(y: number, x: number): void {
    this.board.field[y][x].color = 'black';
    console.log(x, y);
  }

}
