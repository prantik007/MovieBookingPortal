import { Injectable } from '@angular/core';
import { movie_detail_array } from '../shared_classes/movie_detail_array';
import { movies } from '../shared_classes/movies';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): movie_detail_array[]{
    return movies;
  }
}
