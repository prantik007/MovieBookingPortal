import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DemoAuthService } from '../service/demo-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private demoAuth:DemoAuthService,private router:Router) { }

  ngOnInit(): void {
  }

  email:string="";
  password:string="";

  error_email:string=""; 
  error_password:string=""; 
 

  isFormValid:boolean=true;

  isAuthenticated:boolean=false;
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  ValidateFormAndSubmit(){

    this.error_email="";
    this.error_password="";
  
    if(this.email==null || this.email=="")
      {
        this.error_email="Required";

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

      if(this.isFormValid){ //code to submit form to service for auth
        
        if(this.demoAuth.authenticate(this.email,this.password))  {
        
          alert("Logged in");
          this.router.navigate(['home']);
        }     
        
      }
  
    }
  }
