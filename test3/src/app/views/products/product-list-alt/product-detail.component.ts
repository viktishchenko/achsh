import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ProductService } from '../product.service';
import { EMPTY, catchError, combineLatest, filter, map } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
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

  pageTitle$ = this.product$.pipe(
    map((p) => (p ? `Product Detail for: ${p.productName}` : null))
  );

  vm$ = combineLatest([
    this.productSuppliers$,
    this.product$,
    this.pageTitle$,
  ]).pipe(
    // filter out any empty product selection
    filter(([product]) => Boolean(product)),
    map(([productSuppliers, product, pageTitle]) => ({
      productSuppliers,
      product,
      pageTitle,
    }))
  );

  constructor(private productService: ProductService) {}
}
