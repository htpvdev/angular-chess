import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgdialogviewSampleComponent } from '../ngdialogview-sample/ngdialogview-sample.component';

@Component({
  selector: 'app-ngdialogpage-sample',
  templateUrl: './ngdialogpage-sample.component.html',
  styleUrls: ['./ngdialogpage-sample.component.scss']
})
export class NgdialogpageSampleComponent implements OnInit {
  // アラートの押されたボタンの結果を格納する変数
  data!: string

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NgdialogviewSampleComponent, {
      data: { title: "ダイアログ確認", message: "ダイアログが表示されます" },
      height: "300px",
      width: "500px",
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.data = result;
    });
  }

  ngOnInit(): void {
  }

}
