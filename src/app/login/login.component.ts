import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string="";
  password:string="";

  error_email:string=""; 
  error_password:string=""; 

  ValidateFormAndSubmit(){

    this.error_email="";
    this.error_password="";
  
    if(this.email==null || this.email=="")
      {
        this.error_email="Required";
      }
      if(this.password==null || this.password=="")
      {
        this.error_password="Required";
      }
  
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
