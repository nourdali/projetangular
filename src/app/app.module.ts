import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { CardComponent } from './pages/card/card.component';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';
import { PasswordComponent } from './pages/password/password.component';
import { PrecandidatComponent } from './pages/precandidat/precandidat.component';
import { CandidatureComponent } from './pages/candidature/candidature.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    LoginComponent,
    ListComponent,
    PasswordComponent,
    PrecandidatComponent,
    CandidatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
