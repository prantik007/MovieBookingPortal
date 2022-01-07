import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoAuthService } from '../service/demo-auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,
    private DemoAuthService: DemoAuthService) { }

  ngOnInit(): void {
    
      this.DemoAuthService.logout();
      this.router.navigate(['home']);
      alert("Logged out");
    }
  }


