import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../service/data/movie.service';
import { Movie } from '../shared_classes/movieModel';
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

  movies:Movie[]=[];
    
  

  
  constructor(private movieService: MovieService) { 
    
  }

  ngOnInit(): void {
    this.getAllMovie();
  }
  ticketPrice:number=0;
  totalPrice:number=0;
  
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
