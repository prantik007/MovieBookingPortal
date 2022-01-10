import { Injectable, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared_classes/movieModel';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnInit {
  

  private apiUrl=environment.apiBaseUrl;
  ngOnInit(): void {
      
  }
  constructor(private http:HttpClient) { }

  public getAllMovie():Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.apiUrl}/movie/getAllMovie`);
  }

  }

