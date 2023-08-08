import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    console.log('getProducts>>>');
  }
  getProduct(id: number) {
    console.log('getProductByID>>>');
  }
  deleteProduct(id: number) {
    console.log('deleteProductByID');
  }
  updateProduct(product: IProduct) {
    console.log('updateProduct');
  }
}
