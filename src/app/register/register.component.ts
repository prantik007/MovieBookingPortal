import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { User } from '../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
   users: User[];
  constructor(private userService: MyServiceService) { 
    
  }


  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[])=>{

      console.log(data);
      this.users=data;
    });



  }
  
}
