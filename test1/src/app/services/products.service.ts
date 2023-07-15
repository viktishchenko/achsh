import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productUrl = 'api/products/products.json';

  constructor() {}
}
