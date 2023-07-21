import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "src/app/models/product";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-product-list",
  template: `
    <div class="card">
      <div class="card-header">{{ pageTitle | titlecase }}</div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-2">Filtred by: {{ listFilter }}</div>
          <div class="col-md-4">
            <input [(ngModel)]="listFilter" type="text" />
          </div>
        </div>
        <div class="row"></div>
        <hr />
        <div class="row"></div>
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">
                  <button
                    style="white-space: nowrap;"
                    (click)="toggleImage()"
                    class="btn btn-primary btn-sm"
                  >
                    {{ showImage ? "Show" : "Hide" }}
                    <i [hidden]="!showImage" class="bi bi-eye"></i>
                    <i [hidden]="showImage" class="bi bi-eye-slash"></i>
                  </button>
                </th>
                <th scope="col">Product</th>
                <th scope="col">Code</th>
                <th scope="col">Available</th>
                <th scope="col">Price</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody *ngIf="products">
              <tr *ngFor="let product of filteredProducts">
                <td>
                  <img
                    *ngIf="showImage"
                    style="width:50px"
                    [style.margin.px]="imageMargin"
                    src="{{ product.imageUrl }}"
                    alt="{{ product.productName }}"
                  />
                </td>
                <td>{{ product.productName }}</td>
                <td>
                  {{ product.productCode | lowercase | convertToSpace : "-" }}
                </td>
                <td>{{ product.releaseDate }}</td>
                <td>{{ product.price | currency }}</td>
                <td>
                  <app-stars-rating
                    (clickRatingEvent)="ratingHandle($event)"
                    [rating]="product.starRating"
                  ></app-stars-rating>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card-footer text-muted">footer</div>
    </div>
  `,
  styles: [],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = "Product list";
  showImage = false;
  imageMargin = 5;
  errorMessage = "";
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  sub!: Subscription;

  private _listFilter = "";
  get listFilter() {
    return this._listFilter;
  }

  set listFilter(filterValue: string) {
    this._listFilter = filterValue;
    this.filteredProducts = this.filteredData(filterValue);
  }

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.sub = this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  filteredData(val: string) {
    return this.products.filter((product) =>
      product.productName.toLocaleLowerCase().includes(val.toLocaleLowerCase())
    );
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  ratingHandle(rating: number) {
    this.pageTitle = `Product list: ${rating}`;
    console.log(`hello from products ${rating}`);
  }
}