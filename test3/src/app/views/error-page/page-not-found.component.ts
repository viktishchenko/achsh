import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="container mt-3">
      <h1 class="lead">This is not the page you were looking for!</h1>
      <a [routerLink]="['/welcome']" class="btn btn-outline-secondary"
        >Go Home</a
      >
    </div>
  `,
  styles: [
    `
      .page {
        height: calc(100vh - 20%);
      }
    `,
  ],
})
export class PageNotFoundComponent {}
