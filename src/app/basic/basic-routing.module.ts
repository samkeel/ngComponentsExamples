import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicDocumentationComponent } from './basic-documentation/basic-documentation.component';

const routes: Routes = [
  {path: '', component: BasicDocumentationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
