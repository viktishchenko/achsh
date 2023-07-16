import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  template: `
    <div class="crop" [title]="rating" [style.width.px]="cropWidth">
      <div class="width:85px">
        <span class="bi bi-star-fill fs-6"></span>
        <span class="bi bi-star-fill fs-6"></span>
        <span class="bi bi-star-fill fs-6"></span>
        <span class="bi bi-star-fill fs-6"></span>
        <span class="bi bi-star-fill fs-6"></span>
      </div>
    </div>
  `,
  styles: [
    `
      .crop {
        overflow: hidden;
        color: goldenrod;
        white-space: nowrap;
      }
      div {
        cursor: pointer;
      }
    `,
  ],
})
export class StarsComponent implements OnChanges {
  cropWidth: number = 80;
  @Input() rating: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating * (this.cropWidth / 5);
  }
}
