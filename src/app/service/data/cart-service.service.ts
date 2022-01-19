import { Injectable } from '@angular/core';
import { Movie } from 'src/app/shared_classes/movieModel';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }

  cart:Movie[]=[];

  getCart(){
    return this.cart;
  }



}
