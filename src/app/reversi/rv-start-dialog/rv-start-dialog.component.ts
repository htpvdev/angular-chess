// Injectは、親コンポーネント(呼び出し元コンポーネント)から引数のように変数を受け取るためのDI
import { Component, OnInit, Inject } from '@angular/core';
// ダイアログ表示用のモジュール
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-rv-start-dialog',
  templateUrl: './rv-start-dialog.component.html',
  styleUrls: ['./rv-start-dialog.component.scss']
})
export class RvStartDialogComponent implements OnInit {
  /** ダイアログのタブ1つ分の表示情報を並べた配列 */
  public formLabelList: Array<any> = [
    { title: '1P', type: 'p1Type', name: 'p1Name', side: 'p1Side' },
    { title: '2P', type: 'p2Type', name: 'p2Name', side: 'p2Side' },
  ]

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public matDialogRef: MatDialogRef<RvStartDialogComponent>
  ) { }

  ngOnInit(): void { }

  onChangeSide(selector: string): void {
    switch(selector) {
      case 'p1Side':
        this.dialogData.p2Side = this.dialogData.p1Side === 'black' ? 'white' : 'black'
        break
      case 'p2Side':
        this.dialogData.p1Side = this.dialogData.p2Side === 'black' ? 'white' : 'black'
        break
      default:
        break
    }
  }
}
