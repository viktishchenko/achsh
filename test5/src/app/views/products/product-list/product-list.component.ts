import { Component } from '@angular/core';
import { EMPTY, catchError } from 'rxjs';
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
  imgPadding = 5;
  filteredListInput = '';

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
