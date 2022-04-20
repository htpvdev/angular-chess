import { Component, OnInit, OnDestroy } from '@angular/core';
// subscribe を保持するための Subscription を import
import { Subscription } from 'rxjs';
import { ReversiType } from '../commonTypes';
import { ReversiService } from './services/reversi.service';

@Component({
  selector: 'app-reversi',
  templateUrl: './reversi.component.html',
  styleUrls: ['./reversi.component.scss']
})
export class ReversiComponent implements OnInit, OnDestroy {
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
    // イベント登録
    // サービスで共有しているデータが更新されたら発火されるイベントをキャッチする
    this.subscription = this.reversiService.sharedReversi$.subscribe(
      (reversi) => {
        console.log('[ReversiComponent] current ReversiService recieved.', reversi);
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

  isBoot() :boolean {
    return this.reversiService.getStatus() === 'boot'
  }

}
