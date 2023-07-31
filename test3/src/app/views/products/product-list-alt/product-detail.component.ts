import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ProductService } from '../product.service';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
  pageTitle = 'Product Detail';
  errorMessage = '';

  productSuppliers$ = this.productService.supplierSelectedProduct$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  product$ = this.productService.selectedProduct$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  constructor(private productService: ProductService) {}
}
