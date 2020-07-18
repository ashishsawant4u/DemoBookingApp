import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products/products.service';


@Component({
  selector: 'appointment-detail',
  template: `
    <img [src]="prodImg" class="h-50"/>

  `
})
export class AppointmentDetailsComponent implements OnInit
{
    @Input() productNumber : string;
    prodImg : string


    constructor(public productService : ProductsService){}
    
    
    ngOnInit(): void {
        console.log("XX "+this.productNumber);
        this.prodImg = this.productService.getProductDetails(this.productNumber).imageUrl;
        console.log("ZZZ "+this.prodImg);
    }

}
 