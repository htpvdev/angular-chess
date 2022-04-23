// Injectは、親コンポーネント(呼び出し元コンポーネント)から引数のように変数を受け取るためのDI
import { Component, OnInit, Inject } from '@angular/core';
// ダイアログ表示用のモジュール
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-common-confirm',
  templateUrl: './common-confirm.component.html',
  styleUrls: ['./common-confirm.component.scss']
})
/**
 * JSのalertやconfirmのように使える汎用ダイアログ。
 * OKのみのボタンか、OKとキャンセルボタンを出すものにするか、呼び出し元で選択できる。
 * 具体的な使い方は利用されている箇所を参照。
 */
export class CommonConfirmComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public matDialogRef: MatDialogRef<CommonConfirmComponent>
  ) { }

  ngOnInit(): void { }
}
