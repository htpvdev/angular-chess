import { Component, OnInit } from '@angular/core';
import { ReversiService } from '../services/reversi.service';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.scss']
})
export class BootComponent implements OnInit {
  p1type: string = '';
  p1color: string = '';
  p2type: string = '';
  p2color: string = '';

  constructor(
    private reversiService: ReversiService
  ) { }

  ngOnInit(): void {
  }

  startGame(): void {
    this.reversiService.boot();
  }

}
