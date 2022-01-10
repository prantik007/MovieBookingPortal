import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/data/user.service';
import { User } from '../shared_classes/userModel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private userService:UserService) { }

  public users:User[]=[];

  ngOnInit(): void {

    this.getAllUser();
    }

    public getAllUser():void{
      this.userService.getAllUser().subscribe(
        (response: User[]) => {
          this.users=response;
        },
        (error: HttpErrorResponse) =>{
          alert(error.message);
          
        });
        
      
    }

  

}
