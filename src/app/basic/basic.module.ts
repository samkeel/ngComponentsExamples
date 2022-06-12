import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicDocumentationComponent } from './basic-documentation/basic-documentation.component';


@NgModule({
  declarations: [
    BasicDocumentationComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule
  ]
})
export class BasicModule { }
