import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared_classes/userModel';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  
 

  

  public getAllUser():Observable<User[]>{

    return this.http.get<User[]>(`${this.apiUrl}/user/allUser`);
  }

  public addUser(newUser:User):Observable<User>{

    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
  let options = { headers: headers };
    return this.http.post<User>(`${this.apiUrl}/user/addUser`,newUser);
  }
}
