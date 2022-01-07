import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { RegisterComponent } from './register/register.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterGuardService } from './service/router-guard.service';
const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'book-tickets', component:BookTicketsComponent},
  { path:'register' , component:RegisterComponent },
  { path:'my-account' , component: MyAccountComponent,canActivate:[RouterGuardService]},
  { path:'contact-us' , component: ContactUsComponent},
  { path:'about-us' , component: AboutUsComponent},
  { path:'login', component:LoginComponent},
  { path:'logout',component:LogoutComponent,canActivate:[RouterGuardService]},
  { path: '**', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
