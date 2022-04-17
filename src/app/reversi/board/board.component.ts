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
    this.board.field[4][3].color = 'white'
  }

  ngOnInit(): void {
  }

}
