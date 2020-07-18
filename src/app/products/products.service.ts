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
            description : "test description",
            imageUrl : "https://www.pureitwater.com/IN/uploads/product/82ef4053cc0c1ba12742890a2b5a02ae.png",
            price : 2000
        }
    }

}    