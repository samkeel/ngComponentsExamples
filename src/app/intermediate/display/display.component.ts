import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnChanges {
  @Input() time:number = 0;
  public minutes: string = "00"
  public seconds: string = "00"



  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['time']){
        const minutes = Math.trunc(changes['time'].currentValue / 60);
        const seconds = changes['time'].currentValue - minutes*60;

        this.minutes = ("0" + minutes).slice(-2);
        this.seconds = ("0" + seconds).slice(-2);
      }
  }

}
