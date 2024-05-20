import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ApiService } from "../api.service";
import { PaginationParams, Products } from "../../../interfaces";

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    constructor(private apiSvc: ApiService) {}

    getProducts = (
        url: string,
        params: PaginationParams
    ): Observable<Products> => {
        return this.apiSvc.get(url, {
            params,
            responseType: 'json'
        });
    };

    addProduct = (url: string, body: any): Observable<any> => {
      return this.apiSvc.post(url, body, {});
    };

    editProduct = (url: string, body: any): Observable<any> => {
      return this.apiSvc.put(url, body, {});
    };

    deleteProduct = (url: string): Observable<any> => {
      return this.apiSvc.delete(url, {});
    };
}