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

  isFormValid:boolean=true;

  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  ValidateFormAndSubmit(){

    this.error_email="";
    this.error_password="";
  
    if(this.email==null || this.email=="")
      {
        this.error_email="Required";
        this.isFormValid=false;
      }
      else {
        if(!this.regexp.test(this.email))
      {
       this.error_email="Invalid email format";
       this.isFormValid=false;
      }
      }
      if(this.password==null || this.password=="")
      {
        this.error_password="Required";
        this.isFormValid=false;
      }

      if(this.isFormValid){ //code to submit form to database

      }
  
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
