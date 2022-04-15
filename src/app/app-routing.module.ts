import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReversiComponent } from './reversi/reversi.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'reversi', component: ReversiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
