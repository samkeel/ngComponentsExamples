import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedRoutingModule } from './advanced-routing.module';
import { AdvancedDocumentationComponent } from './advanced-documentation/advanced-documentation.component';


@NgModule({
  declarations: [
    AdvancedDocumentationComponent,
  ],
  imports: [
    CommonModule,
    AdvancedRoutingModule
  ]
})
export class AdvancedModule { }
