import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<!--header and nav-->
              <app-header></app-header>

                <!--content rendered here-->
              <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieBookingPortal';
}
