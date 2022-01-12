import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/shared_classes/contactModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  private apiUrl=environment.apiBaseUrl;

  public addContactMsg(contactForm:Contact):Observable<Contact>{
    return this.http.post<Contact>(`${this.apiUrl}/contact_us/add`,contactForm);
}
}
