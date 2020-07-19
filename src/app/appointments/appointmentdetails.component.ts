import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/product.data';


@Component({
  selector: 'appointment-detail',
  templateUrl: 'appointmentdetails.component.html'
})
export class AppointmentDetailsComponent implements OnInit
{
    @Input() productNumber : string;
    productDetails : Product
    showProductModel : boolean = false;
    



    constructor(public productService : ProductsService){}
    
    
    ngOnInit(): void {
        
        this.productDetails = this.productService.getProductDetails(this.productNumber);
        
    }

    showProdDetails() : void
    {
        this.showProductModel = true;
    }

    hideProdDetails() : void
    {
        this.showProductModel = false;
    }

}
 