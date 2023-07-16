import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-stars',
  template: `
    <div
      (click)="currentRating()"
      class="crop"
      [title]="rating"
      [style.width.px]="cropWidth"
    >
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
  @Output() newRatingEvent: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating * (this.cropWidth / 5);
  }

  currentRating(): void {
    alert(`Current Rating: ${this.rating}`);
    this.newRatingEvent.emit(this.rating);
  }
}
