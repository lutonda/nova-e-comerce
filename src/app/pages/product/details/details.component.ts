import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import $ from "jquery";

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
sliderRevolution(){
  $("#product_slider").show().revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                disableProgressBar:"on",
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    onHoverStop:"off",
                    arrows: {
                        style:"uranus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:778,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:20,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:20,
                            v_offset:0
                        }
                    }
                    ,
                    thumbnails: {
                        style:"erinyen",
                        enable:true,
                        width:80,
                        height:105,
                        min_width:80,
                        wrapper_padding:0,
                        wrapper_color:"#fff",
                        wrapper_opacity:"1",
                        tmp:'<span class="tp-thumb-over"></span><span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                        visibleAmount:10,
                        hide_onmobile:false,
                        hide_onleave:false,
                        direction:"horizontal",
                        span:true,
                        position:"outer-bottom",
                        space:17,
                        h_align:"center",
                        v_align:"top",
                        h_offset:0,
                        v_offset:0
                    }
                },
                gridwidth:370,
                gridheight:520,
                lazyType:"none",
                shadow:0,
                spinner:"spinner2",
                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shuffle:"off",
                autoHeight:"off",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
}
ngAfterViewInit(): void {

  this.sliderRevolution()
}


}
