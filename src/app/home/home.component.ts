import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { movie_detail_array } from 'src/app/shared_classes/movie_detail_array';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../service/movie.service';
import { movies } from 'src/app/shared_classes/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  imgDetails:movie_detail_array[]=[];

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.imgDetails=this.movieService.getMovies();
  }

  
  
}
