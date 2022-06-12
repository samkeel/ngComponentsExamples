import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntermediateRoutingModule } from './intermediate-routing.module';
import { IntermediateDocumentationComponent } from './intermediate-documentation/intermediate-documentation.component';


@NgModule({
  declarations: [
    IntermediateDocumentationComponent
  ],
  imports: [
    CommonModule,
    IntermediateRoutingModule
  ]
})
export class IntermediateModule { }
