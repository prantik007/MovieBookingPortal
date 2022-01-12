import { Component, OnInit } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, NgForm, PatternValidator } from '@angular/forms';
import { UserService } from '../service/data/user.service';
import { User } from '../shared_classes/userModel';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string="";
  email:string="";
  password:string="";

  error_name:string=""; 
  error_email:string=""; 
  error_password:string=""; 

  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  isFormValid:boolean=true;
  submitMessage:string="";
  

  constructor(private userService:UserService) { }
    
  


  ngOnInit(): void { 
    this.submitMessage="";
    
  }
 
    ValidateFormAndSubmit(registerForm:any){
      
      this.error_email="";
      
      
      this.error_password="";
      this.error_name="";
      if(this.name==null || this.name=="")
      {
        this.error_name="Required";
      }
      

      if(this.email==null || this.email=="")
      {
        this.error_email="Required";
        this.isFormValid=false;
      }
      else{
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
        console.warn(registerForm);
        this.onAddUser(registerForm);
        
        
        
      }

      
    }

    //Add User, Change submitMessage, Reset form after submit
    public onAddUser(registerForm: any):void{
      this.userService.addUser(registerForm).subscribe(
          (response: User)=>{console.log(response);
          this.submitMessage="User Registered";},
            (error:HttpErrorResponse)=>{
              alert(error.message);
            }
        );
        
      }

     




  }
  


