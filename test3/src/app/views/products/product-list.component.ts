import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EMPTY, catchError, map } from 'rxjs';
import { ProductCategory } from '../product-categories/product-category';

import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';
  categories: ProductCategory[] = [];
  selectedCategory: number | undefined = 5;

  products$ = this.productService.productWithCategories$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  simpleCategoryFilter$ = this.productService.productWithCategories$.pipe(
    map((products) =>
      products.filter((product) => {
        return this.selectedCategory
          ? product.categoryId === this.selectedCategory
          : true;
      })
    )
  );

  constructor(private productService: ProductService) {}

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
