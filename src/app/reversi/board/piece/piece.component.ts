import { Component, Input, OnInit } from '@angular/core';
import { pieceSide } from 'src/app/commonTypes';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit {
  @Input() className!: pieceSide

  constructor() { }

  ngOnInit(): void {
  }

}
