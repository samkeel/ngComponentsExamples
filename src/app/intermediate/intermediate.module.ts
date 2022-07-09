import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntermediateRoutingModule } from './intermediate-routing.module';
import { IntermediateDocumentationComponent } from './intermediate-documentation/intermediate-documentation.component';
import { TimerComponent } from './timer/timer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DisplayComponent } from './display/display.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    IntermediateDocumentationComponent,
    TimerComponent,
    ProgressBarComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    IntermediateRoutingModule,
    SharedModule
  ]
})
export class IntermediateModule { }
