import { Component, OnInit } from '@angular/core';
import { DemoAuthService } from '../service/demo-auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public DemoAuthService: DemoAuthService) { }

  ngOnInit(): void {
  }

}
