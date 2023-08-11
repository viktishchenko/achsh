import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError, map, of } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { ConvertToSpacePipe } from 'src/app/shared/convert-to-space.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  showImage = true;
  pageTitle = 'Product list';
  errorMessage: string = '';
  imgPadding = 5;
  filteredProducts$: Observable<IProduct[]> | undefined;

  private _filteredListInput = ' ';
  get filteredListInput() {
    return this._filteredListInput;
  }
  set filteredListInput(filterValue: string) {
    this._filteredListInput = filterValue;
    this.filteredProducts$ = this.filteredData(filterValue);
  }

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this._filteredListInput = '';
    this.filteredProducts$ = this.products$;
  }

  filteredData(val: string) {
    return this.products$.pipe(
      map((products) =>
        products.filter((product) =>
          product.productName
            .toLocaleLowerCase()
            .includes(val.toLocaleLowerCase())
        )
      )
    );
  }

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
