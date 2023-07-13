import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrecyComponent } from './currecy/currecy.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
// const routes: Routes = [];

const routes: Routes = [
  {path: 'currency', component: CurrecyComponent},
  {path: 'stopwatch', component: StopwatchComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
