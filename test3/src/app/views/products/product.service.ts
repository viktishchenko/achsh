import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {
  BehaviorSubject,
  catchError,
  combineLatest,
  EMPTY,
  map,
  merge,
  Observable,
  scan,
  shareReplay,
  Subject,
  tap,
  throwError,
} from 'rxjs';

import { Product } from './product';
import { ProductCategoryService } from '../product-categories/product-category.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';
  private suppliersUrl = 'api/suppliers';

  products$ = this.http.get<Product[]>(this.productsUrl).pipe(
    tap((data) => console.log('Products: ', JSON.stringify(data))),
    catchError(this.handleError)
  );

  productWithCategories$ = combineLatest([
    this.products$,
    this.productWithCategory.categories$,
  ]).pipe(
    map(([products, categories]) =>
      products.map(
        (product) =>
          ({
            ...product,
            price: product.price ? product.price * 1.5 : 0,
            category: categories.find((c) => {
              return c.id === product.categoryId;
            })?.name,
            searchKey: [product.productName],
          } as Product)
      )
    ),
    shareReplay(1)
  );

  private detailSelectedSubject = new BehaviorSubject(0);
  detailSelectedAction$ = this.detailSelectedSubject.asObservable();

  selectedProduct$ = combineLatest([
    this.productWithCategories$,
    this.detailSelectedAction$,
  ]).pipe(
    map(([products, selectedProductId]) =>
      products.find((product) => product.id === selectedProductId)
    ),
    tap((data) => {
      console.log('selectedProductFromService>>', data?.productName);
    }),
    shareReplay(1)
  );

  private insertedProductSubject = new Subject<Product>();
  productIncertedAction$ = this.insertedProductSubject.asObservable();

  productsWithAdd$ = merge(
    this.productWithCategories$,
    this.productIncertedAction$
  ).pipe(
    scan(
      (allProducts, newProduct) =>
        newProduct instanceof Array
          ? [...newProduct]
          : [...allProducts, newProduct],
      [] as Product[]
    )
  );

  constructor(
    private http: HttpClient,
    private productWithCategory: ProductCategoryService
  ) {}

  addNewProduct(newProduct?: Product) {
    newProduct = newProduct || this.fakeProduct();
    this.insertedProductSubject.next(newProduct);
  }

  private fakeProduct(): Product {
    return {
      id: 42,
      productName: 'Another One',
      productCode: 'TBX-0042',
      description: 'Our new product',
      price: 8.9,
      categoryId: 3,
      category: 'Toolbox',
      quantityInStock: 30,
    };
  }

  onSelectedDetailProduct(selectedId: number) {
    this.detailSelectedSubject.next(selectedId);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
