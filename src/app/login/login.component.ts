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
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  isFormValid:boolean=true;

  isFormValid:boolean=true;

  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  ValidateFormAndSubmit(){

    this.error_email="";
    this.error_password="";
  
    if(this.email==null || this.email=="")
      {
        this.error_email="Required";
<<<<<<< HEAD
      }else{
=======
        this.isFormValid=false;
      }
      else {
>>>>>>> 7fae0ff2135fee91472c2ff092e4a5c0713a63d3
        if(!this.regexp.test(this.email))
      {
       this.error_email="Invalid email format";
       this.isFormValid=false;
<<<<<<< HEAD
=======
      }
>>>>>>> 7fae0ff2135fee91472c2ff092e4a5c0713a63d3
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
