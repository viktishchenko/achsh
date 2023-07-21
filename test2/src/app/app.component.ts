import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <nav class="navbar navbar-expand bg-light">
      <div class="container">
        <div class="container-fluid d-flex flex-wrap fix-position">
          <a class="navbar-brand" routerLink="/welcome">Angular app</a>
          <div class="navbar-nav flex-wrap">
            <a class="nav-link" routerLink="/welcome" routerLinkActive="active"
              >Home</a
            >
            <a class="nav-link" routerLink="/products" routerLinkActive="active"
              >Products</a
            >
            <a class="nav-link" routerLink="/about" routerLinkActive="active"
              >About</a
            >
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .nav-link.active {
        background-color: #f3f3f3;
      }
    `,
  ],
})
export class AppComponent {
  title = "test2";
}
