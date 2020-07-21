import { Injectable } from '@angular/core';
import { Product } from './product.data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn:"root"
})
export class ProductsService
{
    httpService : HttpClient;

    constructor(httpService : HttpClient)
    {
        this.httpService = httpService;
    };

    getProductDetails(productNumber : string) : Product
    {
        return {
            productNumber : productNumber,
            name : "test product name",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl : "assets/images/products/"+productNumber+".png",
            price : 2000
        }
    }

}    