import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { CartServiceService } from '../service/data/cart-service.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  constructor(private myCartService:CartServiceService) { }

  ngOnInit(): void {

  }

}
