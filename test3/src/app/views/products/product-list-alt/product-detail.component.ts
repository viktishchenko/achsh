import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Supplier } from '../../../suppliers/supplier';
// import { Supplier } from '../../suppliers/supplier';
import { Product } from '../product';

import { ProductService } from '../product.service';
import { EMPTY, catchError, of } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
  pageTitle = 'Product Detail';
  errorMessage = '';
  productSuppliers: Supplier[] | null = null;

  product$ = this.productService.selectedProduct$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  constructor(private productService: ProductService) {}
}
