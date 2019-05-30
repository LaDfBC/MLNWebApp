import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultsComponent} from './results/results.component';
import {CalculatorComponent} from './calculator/calculator.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full'},
  { path: 'calculator', component: CalculatorComponent},
  { path: 'results', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
