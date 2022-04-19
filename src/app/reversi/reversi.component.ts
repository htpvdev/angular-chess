import { Component, OnInit } from '@angular/core';
import { ReversiService } from './services/reversi.service';

@Component({
  selector: 'app-reversi',
  templateUrl: './reversi.component.html',
  styleUrls: ['./reversi.component.scss']
})
export class ReversiComponent implements OnInit {
  public reversiField: any
  public reversiSetting: any

  constructor(
    private reversiService: ReversiService
  ) {
    this.reversiField = this.reversiService.getField();
    this.reversiSetting = this.reversiService.getSetting();
  }

  ngOnInit(): void {
  }

}
