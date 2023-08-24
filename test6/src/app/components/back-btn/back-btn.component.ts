import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: '.app-back-btn',
  template: `
    <div>
      <button class="back-btn" mat-button (click)="backClicked()">
        <mat-icon [svgIcon]="'arrow-left'"></mat-icon>
        Назад
      </button>
    </div>
  `,
  styles: [
    `
      @import '../../../scss/variables.scss';

      .mat-icon {
        width: 24px !important;
        height: 24px !important;
      }

      .back-btn {
        font-family: $bodyFont;
        @include font(1.8rem, 2.4rem, 700);
        color: $textDarkLight !important;
      }
    `,
  ],
})
export class BackBtnComponent {
  constructor(private location: Location) {}

  backClicked() {
    this.location.back();
  }
}
