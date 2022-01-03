import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { img_detail_array } from 'src/shared_classes/img_detail_array';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

       imgDetails:img_detail_array[]=[
      {name:"Rio",caption:"BlueSky",imgSrc:"assets/images/rio2.png"},
      {name:"Spiderman",caption:"Marvel Studios",imgSrc:"assets/images/spiderman.png"},
      {name:"Wolves",caption:"Marvel Studios",imgSrc:"assets/images/wolves.png"}
    ];
}
