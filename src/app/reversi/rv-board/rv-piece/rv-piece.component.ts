import { Component, OnInit, Input } from '@angular/core';
import { PieceSide } from 'src/app/reversi/reversiTypes';

@Component({
  selector: 'app-rv-piece',
  templateUrl: './rv-piece.component.html',
  styleUrls: ['./rv-piece.component.scss']
})
export class RvPieceComponent implements OnInit {
  // 親コンポーネントから引数を貰うときは、このようにクラス内に引数を定義する
  // 変数末尾の「!」は、初期値を設定しない場合の型エラーを無視するためのもの。
  @Input() className!: PieceSide

  constructor() { }

  ngOnInit(): void { }

}
