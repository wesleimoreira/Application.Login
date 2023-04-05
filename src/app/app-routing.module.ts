// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Application

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/pages/pages.module').then(p => p.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting{ }