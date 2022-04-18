import { Component, OnInit } from '@angular/core';
import { Reversi } from './reversi';

@Component({
  selector: 'app-reversi',
  templateUrl: './reversi.component.html',
  styleUrls: ['./reversi.component.scss']
})
export class ReversiComponent implements OnInit {
  reversi: Reversi

  constructor() {
    this.reversi = new Reversi({
      status: 'p1',
      p1: {
        type: 'human',
        side: 'white',
        piece: 2,
      },
      p2: {
        type: 'human',
        side: 'black',
        piece: 2,
      },
    })
  }

  ngOnInit(): void {
  }

}
