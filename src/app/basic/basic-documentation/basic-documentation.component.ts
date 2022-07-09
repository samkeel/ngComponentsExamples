import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-documentation',
  templateUrl: './basic-documentation.component.html',
  styleUrls: ['./basic-documentation.component.scss'],
})
export class BasicDocumentationComponent implements OnInit {
  counterProgress: number = 0;
  totalCountdown: number = 15;

  constructor() {}

  ngOnInit(): void {}

  updateProgress($event: any) {
    this.counterProgress =
      ((this.totalCountdown - $event) / this.totalCountdown) * 100;
  }

  countdownFinished() {
    console.log('countdown finished');
  }
}
