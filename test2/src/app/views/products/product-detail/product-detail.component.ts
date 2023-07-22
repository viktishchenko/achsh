import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "src/app/models/product";
import { ProductsService } from "src/app/services/products.service";
import { Location, NgIf, LowerCasePipe, CurrencyPipe } from "@angular/common";
import { ConvertToSpacePipe } from "../../../shared/convert-to-space.pipe";
import { StarsRatingComponent } from "../../../shared/stars-rating.component";

@Component({
    selector: "app-product-detail",
    template: `
    <div class="card">
      <div class="card-header">
        {{ pageTitle + ": " + product?.productName }}
      </div>
      <div class="card-body" *ngIf="product">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-4">Name:</div>
              <div class="col-md-8">{{ product.productName }}</div>
            </div>
            <div class="row">
              <div class="col-md-4">Code:</div>
              <div class="col-md-8">
                {{ product.productCode | lowercase | convertToSpace : "-" }}
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">Description:</div>
              <div class="col-md-8">{{ product.description }}</div>
            </div>
            <div class="row">
              <div class="col-md-4">Availability:</div>
              <div class="col-md-8">{{ product.releaseDate }}</div>
            </div>
            <div class="row">
              <div class="col-md-4">Price:</div>
              <div class="col-md-8">
                {{ product.price | currency : "USD" : "symbol" }}
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">5 Star Rating:</div>
              <div class="col-md-8">
                <app-stars-rating [rating]="product.starRating">
                </app-stars-rating>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <img
              class="center-block img-responsive"
              [style.width.px]="200"
              [style.margin.px]="2"
              [src]="product.imageUrl"
              [title]="product.productName"
            />
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="card-footer">
          <button
            style="width: 80px"
            (click)="onBack()"
            class="btn btn-outline-secondary"
          >
            <i class="bi bi-arrow-left"></i>
            Back
          </button>
        </div>
      </div>
    </div>
  `,
    styles: [],
    standalone: true,
    imports: [NgIf, StarsRatingComponent, LowerCasePipe, CurrencyPipe, ConvertToSpacePipe]
})
export class ProductDetailComponent implements OnInit {
  product: IProduct | undefined;
  pageTitle = "Product detail";

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }

  onBack() {
    this.location.back();
  }
}
