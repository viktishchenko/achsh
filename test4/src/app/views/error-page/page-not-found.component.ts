import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="error-template">
            <h1 class="lead mb-3">
              This is not the page you were looking for!
            </h1>
            <a [routerLink]="['/welcome']" class="btn btn-outline-secondary"
              >Go Home</a
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .error-template {
        padding: 40px 15px;
        text-align: center;
      }
    `,
  ],
})
export class PageNotFoundComponent {}
