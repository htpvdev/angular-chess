import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reversi',
  templateUrl: './reversi.component.html',
  styleUrls: ['./reversi.component.scss']
})
export class ReversiComponent implements OnInit {
  over: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
