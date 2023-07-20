import { Component } from "@angular/core";
import { IProduct } from "src/app/models/product";

@Component({
  selector: "app-product-list",
  template: `
    <div class="card">
      <div class="card-header">{{ pageTitle | titlecase }}</div>
      <div class="card-body">
        <div class="row">input</div>
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
              <tr *ngFor="let product of products">
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
                <td>{{ product.productCode | lowercase }}</td>
                <td>{{ product.releaseDate }}</td>
                <td>{{ product.price | currency }}</td>
                <td>{{ product.starRating }}</td>
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
export class ProductListComponent {
  pageTitle = "Product list";
  showImage = false;
  imageMargin = 5;
  products: IProduct[] = [
    {
      productId: 2,
      productName: "Garden Cart",
      productCode: "GDN-0023",
      releaseDate: "March 18, 2021",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl: "assets/images/garden_cart.png",
    },
    {
      productId: 5,
      productName: "Hammer",
      productCode: "TBX-0048",
      releaseDate: "May 21, 2021",
      description: "Curved claw steel hammer",
      price: 8.9,
      starRating: 4.8,
      imageUrl: "assets/images/hammer.png",
    },
  ];

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
