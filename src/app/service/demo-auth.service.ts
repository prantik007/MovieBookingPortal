import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Injectable({
  providedIn: 'root'
})
export class DemoAuthService {
  

  constructor(private router:Router) { }

   authenticate(email:string,password:string):boolean{
    let userLoggedIn=sessionStorage.getItem('authenticatedUser');
    if(userLoggedIn==null){

    if(email=="gg@123.com" && password=="123"){

    sessionStorage.setItem('authenticatedUser',email);
    return true;
    }
    else
    return false;


  }
  else return false;
}

  isUserLoggedIn():boolean{
    let userLoggedIn=sessionStorage.getItem('authenticatedUser');
    if(userLoggedIn==null)
    return false;
    return true;
  }
  logout(){
    if(this.isUserLoggedIn()==true){
      sessionStorage.removeItem('authenticatedUser');
  }
}
}
