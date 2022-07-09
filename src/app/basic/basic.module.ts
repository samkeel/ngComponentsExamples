import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicDocumentationComponent } from './basic-documentation/basic-documentation.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SharedModule } from '../shared/shared.module';
import { CountdownComponent } from './countdown/countdown.component';


@NgModule({
  declarations: [
    BasicDocumentationComponent,
    ProgressBarComponent,
    CountdownComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule,
    SharedModule
  ]
})
export class BasicModule { }
