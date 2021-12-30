import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string="";
  email:string="";
  msg:string="";

  error_name:string=""; 
  error_email:string=""; 
  error_msg:string=""; 

  isFormValid:boolean=true;

  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


  onSubmit(){
      this.error_email="";      
      this.error_msg="";
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

      if(this.msg==null || this.msg=="")
      {
        this.error_msg="Required";
        this.isFormValid=false;
      }

      if(this.isFormValid){ //code to submit form to database

      }







  }
}
