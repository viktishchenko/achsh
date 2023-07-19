import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProducts | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.pageTitle += `: ${id}`;
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }

  onBack() {
    this.router.navigate(['/products']);
  }
}
