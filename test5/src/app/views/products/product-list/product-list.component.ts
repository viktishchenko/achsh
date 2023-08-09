import { Component, OnInit } from '@angular/core';
import { EMPTY, Subscription, catchError } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  showImage = true;
  pageTitle = 'Product list';
  errorMessage: string = '';
  sub!: Subscription;
  imgPadding = 5;

  constructor(private productService: ProductsService) {}

  products$ = this.productService.products$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
