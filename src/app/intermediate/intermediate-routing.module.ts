import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntermediateDocumentationComponent } from './intermediate-documentation/intermediate-documentation.component';

const routes: Routes = [
  {path: '', component: IntermediateDocumentationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntermediateRoutingModule { }
