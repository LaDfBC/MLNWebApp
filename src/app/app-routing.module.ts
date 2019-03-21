import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorizationComponent} from './authorization/authorization.component';
import {StatsComponent} from './stats/stats.component';
import {CalculatorComponent} from './calculator/calculator.component';

const routes: Routes = [
  { path: '', redirectTo: '/stats', pathMatch: 'full'},
  { path: 'authorize', component: AuthorizationComponent},
  { path: 'stats', component: StatsComponent},
  { path: 'calculator', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
