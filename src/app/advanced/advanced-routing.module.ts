import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedDocumentationComponent } from './advanced-documentation/advanced-documentation.component';

const routes: Routes = [
  {path: '', component: AdvancedDocumentationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedRoutingModule { }
