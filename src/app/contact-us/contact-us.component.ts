import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../shared_classes/contactModel';
import { NgForm } from '@angular/forms';
import { ContactService } from '../service/data/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private http:HttpClient,private contactService:ContactService) { }

  

  
  name:string="";
  email:string="";
  message:string="";

  submitMessage:string="";
  error_name:string=""; 
  error_email:string=""; 
  error_msg:string=""; 

  isFormValid:boolean=true;

  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  private apiUrl=environment.apiBaseUrl;
ngOnInit(): void {
    this.submitMessage="";
  }

  onSubmit(contactForm:any){
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

      if(this.message==null || this.message=="")
      {
        this.error_msg="Required";
        this.isFormValid=false;
      }

      if(this.isFormValid){ //code to submit form to database

        console.log(contactForm);
        this.onSendContact(contactForm);
        


      }
    }

      /**
       * onSendContact
contactForm:any :void      */
      public onSendContact(contactForm:any):void {
        this.contactService.addContactMsg(contactForm).subscribe(
          (response:Contact)=>{this.submitMessage="Message Sent";},
          (error:HttpErrorResponse)=>{
            alert(error.message);
          }
          
        );
      } 
      
      }


    
  




  




