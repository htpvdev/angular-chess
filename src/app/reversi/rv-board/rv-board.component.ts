import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReversiService } from '../services/reversi.service';
import { Field } from 'src/app/reversi/reversiTypes';
// Serviceの値が更新されたときのイベントハンドラ
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rv-board',
  templateUrl: './rv-board.component.html',
  styleUrls: ['./rv-board.component.scss']
})
export class RvBoardComponent implements OnInit, OnDestroy {
  /** [ReversiService]内部のデータ[reversi]のプロパティの一部[field]をこの変数に複製する */
  public field: Field

  /** Subscriptionというモジュールの機能で、[RevesiService]の[reversi.field]の値が更新されたときに呼び出されるfunction?を入れる変数 */
  private subscription!: Subscription;

  constructor (private reversiService: ReversiService) {
    this.field = this.reversiService.getField()
  }

  ngOnInit(): void {
    // サービスで共有しているデータが更新されたら発火されるイベントを[subscription]にセットする
    this.subscription = this.reversiService.sharedReversi$.subscribe(
      (reversi) => {
        console.log('[RvBoardComponent] current ReversiService recieved.', reversi)
        this.field = reversi.field
      }
    )
  }

  ngOnDestroy(): void {
    // リソースリーク防止のため[subscription]オブジェクトを破棄する
    this.subscription.unsubscribe();
  }

  putPiece(y: number, x: number): void {
    this.reversiService.putPiece(y, x)
  }
}
