import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
@Injectable({
  providedIn: 'root'
})
export class DemoAuthService {

  constructor() { }

   authenticate(email:string,password:string):boolean{
    if(email=="gg@123.com" && password=="123")
    return true;
    else
    return false;

  }
}
