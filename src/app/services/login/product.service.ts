import { Injectable } from '@angular/core';

import { Product } from '../../interfaces/product';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'

@Injectable({
    providedIn: 'root'
})

export class ProductsService{

    constructor(
    private http:HttpClient
    
    ){}

    getAllProducts(){
        return this.http.get(environment.url_api);
    }

}