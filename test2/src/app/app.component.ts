import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <nav class="navbar navbar-expand bg-light">
      <div class="container">
        <div class="container-fluid d-flex flex-wrap fix-position">
          <a class="navbar-brand" href="#">Angular app</a>
          <div class="navbar-nav flex-wrap">
            <a class="nav-link">Home</a>
            <a class="nav-link">Products</a>
            <a class="nav-link">About</a>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <app-product-list></app-product-list>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "test2";
}
