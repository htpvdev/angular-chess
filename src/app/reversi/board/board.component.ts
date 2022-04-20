import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReversiService } from '../services/reversi.service';
import { pieceSide, ReversiType, side } from 'src/app/commonTypes';
// subscribe を保持するための Subscription を import
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  /**
   * ReversiService の変数の参照を取得するプロパティ
   *
   * @type {String}
   */
  public reversi!: ReversiType

  /**
   * subscribe を保持するための Subscription
   *
   * @private
   * @type {Subscription}
   */
  private subscription!: Subscription;

  /**
  * コンストラクタ. ServiceReversiComponent のインスタンスを生成する
  *
  * @param {ReversiService} reversiService 共通サービス
  */
  constructor(private reversiService: ReversiService) {
    this.reversi = this.reversiService.init()
  }

  /**
   * ライフサイクルメソッド｡コンポーネントの初期化で使用する
   */
  ngOnInit(): void {
    // this.reversi = this.reversiService.init()
    // イベント登録
    // サービスで共有しているデータが更新されたら発火されるイベントをキャッチする
    this.subscription = this.reversiService.sharedReversi$.subscribe(
      (reversi) => {
        console.log('[BoardComponent] current ReversiService recieved.', reversi);
        this.reversi = reversi;
      }
    );
  }

  /**
   * コンポーネント終了時の処理
   */
  ngOnDestroy() {
    //  リソースリーク防止のため ReversiService から subcribe したオブジェクトを破棄する
    this.subscription.unsubscribe();
  }

  putPiece(y: number, x: number, pieceSide: pieceSide): void {

    this.reversiService.putPiece(y, x, pieceSide);
    console.log(x, y);
  }

}
