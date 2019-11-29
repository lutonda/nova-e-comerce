import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'
],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {


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
  items: any[]=[1,2,3,4];

  constructor(private spinner: NgxSpinnerService, private itemService: ProductService) {}


  async ngOnInit() {
    this.items=[];

    await this.itemService.get().then((data)=>{
      this.items=<any>data;
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

}
