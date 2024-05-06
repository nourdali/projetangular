import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './pages/card/card.component';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';
import { PasswordComponent } from './pages/password/password.component';
import { PrecandidatComponent } from './pages/precandidat/precandidat.component';
import { CandidatureComponent } from './pages/candidature/candidature.component';

const routes: Routes = [
  {
    path : '' , component : CardComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'list', component: ListComponent
  },
  { 
    path:'card' , component: CardComponent
  },
  { 
    path:'password' , component:PasswordComponent
  },
  { 
    path:'precandidat' , component:PrecandidatComponent
  },
  { 
    path:'candidature' , component:CandidatureComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
