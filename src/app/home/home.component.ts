import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'
],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  customOptions: OwlOptions = {
    loop:true,
    margin: 0,
    items: 5,
    nav:true,
    autoplay: false,
    smartSpeed: 1500,
    dots:true,
    navText: ['<i class="arrow_carrot-left" aria-hidden="true"></i>','<i class="arrow_carrot-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1,
          },
          575: {
            items: 2,
          },
          800: {
            items: 3,
          },
          1200: {
            items: 5,
          }
        },
  }

  ngOnInit() {
  }

}
