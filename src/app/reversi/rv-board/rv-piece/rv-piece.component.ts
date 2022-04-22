import { Component, Input, OnInit } from '@angular/core';
import { pieceSide } from 'src/app/commonTypes';

@Component({
  selector: 'app-rv-piece',
  templateUrl: './rv-piece.component.html',
  styleUrls: ['./rv-piece.component.scss']
})
export class RvPieceComponent implements OnInit {
  @Input() className!: pieceSide

  constructor() { }

  ngOnInit(): void {
  }

}
