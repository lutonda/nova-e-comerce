import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  item: any={};

  constructor(private spinner: NgxSpinnerService, private itemService: ProductService, private route: ActivatedRoute) {}


  async ngOnInit() {
    this.item={};
    const id = this.route.snapshot.paramMap.get('id')

    await this.itemService.getOne(id).then((data)=>{
      this.item=<any>data;
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

}
