import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {
  @Input() init: number = 0;
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  public counter: number = 0;
  private countdownTimerRef: any = null;
  constructor() {}

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
      this.clearTimeout();
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('init value updated to: ', changes['init'].currentValue);
      this.startCountdown();
  }

  startCountdown() {
    if (this.init && this.init > 0) {
      this.clearTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    this.countdownTimerRef = setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountDown();
    }, 1000);
  }

  private clearTimeout() {
    if (this.countdownTimerRef){
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }
  processCountDown() {
    this.onDecrease.emit(this.counter);

    console.log(this.counter);
    if (this.counter == 0) {
      this.onComplete.emit();
      console.log('counter end');
    } else {
      this.doCountdown();
    }
  }
}
