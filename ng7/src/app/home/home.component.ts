import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  h1Style: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  firstClick() {
    console.log('Clicked!');
    this.h1Style = true;
  }
}
