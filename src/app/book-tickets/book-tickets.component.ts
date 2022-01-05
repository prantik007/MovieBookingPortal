import { Component, OnInit } from '@angular/core';
import { movie_detail_array } from 'src/app/shared_classes/movie_detail_array';
import { movies } from 'src/app/shared_classes/movies';
import { MovieService } from '../service/movie.service';
@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.css']
})
export class BookTicketsComponent implements OnInit {
  
  today=new Date();
  d1=new Date();
  d2=new Date(this.today.setDate(this.today.getDate()+1));
  d3=new Date(this.today.setDate(this.today.getDate()+1));
  d4=new Date(this.today.setDate(this.today.getDate()+1));

  movieList:movie_detail_array[]=[];
    
  

  
  constructor(private movieService: MovieService) { 
    
  }

  ngOnInit(): void {
    this.movieList=this.movieService.getMovies();
  }

  

}
