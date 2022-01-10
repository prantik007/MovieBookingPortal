import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { MovieService } from '../service/data/movie.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../shared_classes/movieModel';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public movies:Movie[]=[];

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.getAllMovie();
  }

  public getAllMovie():void{
    this.movieService.getAllMovie().subscribe(
      (response: Movie[])=>{
        this.movies=response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
        
      });
      
    
  }
}
  

