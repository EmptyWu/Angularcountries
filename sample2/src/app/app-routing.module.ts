import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tale1Component } from './tale1/tale1.component';
import { Table2Component } from './table2/table2.component';

const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'countries', component: Tale1Component },
  { path: 'country/:name', component: Table2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
