import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes }from '@angular/router';
import { Router } from '@angular/router';

import { UserService } from './user.service'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './authentication.guard';


const appRoutes:Routes =[
  {
    path :'',
    component : LoginformComponent
  },
  {
    path :'dashboard',
    canActivate: [AuthenticationGuard],
    component : DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [UserService,AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
