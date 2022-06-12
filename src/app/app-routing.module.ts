import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'basic',
    loadChildren: () =>
      import('./basic/basic.module').then((m) => m.BasicModule),
  },
  {
    path: 'intermediate',
    loadChildren: () =>
      import('./intermediate/intermediate.module').then(
        (m) => m.IntermediateModule
      ),
  },
  {
    path: 'advanced',
    loadChildren: () =>
      import('./advanced/advanced.module').then((m) => m.AdvancedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
