import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReversiComponent } from './reversi/reversi.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { NgdialogpageSampleComponent } from './ngdialogpage-sample/ngdialogpage-sample.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'reversi', component: ReversiComponent },
  { path: "dialog", component: NgdialogpageSampleComponent } //これを追加！
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
