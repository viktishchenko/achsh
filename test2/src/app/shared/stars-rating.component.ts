import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
    selector: "app-stars-rating",
    template: `
    <div
      (click)="onRating(rating)"
      class="crop"
      [title]="rating"
      [style.width.px]="cropWidth"
    >
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
    standalone: true
})
export class StarsRatingComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth = 80;
  @Output() clickRatingEvent = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating * (this.cropWidth / 5);
  }

  onRating(val: number) {
    console.log(`hello from stars ${val}`);
    this.clickRatingEvent.emit(val);
  }
}
