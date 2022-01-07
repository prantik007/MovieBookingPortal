//USED TO BLOCK COMPONENT VISIT WHEN USER NOT LOGGED IN
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DemoAuthService } from './demo-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate{

  constructor(private router:Router,
    private DemoAuthService:DemoAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.DemoAuthService.isUserLoggedIn())
      return true;
      this.router.navigate(['login']);
    return false;
    
  }
}
