import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  pageTitle: string = 'Product list';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string = '';
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  products: IProducts[] = [];

  filteredProducts: IProducts[] = [];

  performFilter(value: string): IProducts[] {
    value = value.toLocaleLowerCase();
    return this.products.filter((product: IProducts) => {
      return product.productName.toLocaleLowerCase().includes(value);
    });
  }

  ngOnInit(): void {
    this.products = this.productService.getProduct();
    this.filteredProducts = this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  sendData(data: number) {
    this.pageTitle = `Product list rating: ${data}`;
    console.log(`Sending data to parent component: ${data}`);
  }
}
