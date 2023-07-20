import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-stars-rating",
  template: `
    <div class="crop" [title]="rating" [style.width.px]="cropWidth">
      <div class="stars">
        <span class="bi bi-star-fill fs-6"></span>
        <span class="bi bi-star-fill fs-6"></span>
        <span class="bi bi-star-fill fs-6"></span>
        <span class="bi bi-star-fill fs-6"></span>
        <span class="bi bi-star-fill fs-6"></span>
      </div>
      {{ rating }}
    </div>
  `,
  styles: [
    `
      .crop {
        overflow: hidden;
        color: goldenrod;
        white-space: nowrap;
      }
      .stars {
        cursor: pointer;
      }
    `,
  ],
})
export class StarsRatingComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth = 80;

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating * (this.cropWidth / 5);
  }
}
