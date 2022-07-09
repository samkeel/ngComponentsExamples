import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit, OnDestroy {
  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;

  constructor(
    public timer:TimerService
  ) {}

  ngOnInit(): void {
    this.timer.restartCountdown(this.init);
  }

  ngOnDestroy(): void {
      this.timer.destroy();
  }

  
}
