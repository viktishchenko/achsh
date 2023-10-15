import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { DynamicComponent } from "../dynamic/dynamic.component";

@Component({
  selector: "app-header",
  template: `
    <h1><u>Header comp</u></h1>
    <div class="buttons-container">
      <button class="toggle-btn" (click)="toggleDynamicComponent()">
        {{ toggleDynamicComp ? "Show" : "Hide" }} dynamic component
      </button>
    </div>
    <ng-template #dynamic></ng-template>
    <h3>user: {{ user && user.name ? user.name : null }}</h3>
    <h3>
      This user was selected:
      {{ selectedUserName ? selectedUserName : " - " }}
    </h3>
    <p
      style="display: inline-block"
      [class]="myclass"
      [style.color]="myrandom"
      [style.color]="mycolor"
      [style.width.px]="mywidth"
    >
      <u>header works!</u>
    </p>
    <button (click)="changeColorByClick()">
      {{ myrandom ? myrandom : "random color" }}
    </button>
    <br />
    <label for="colorInput">Введите цвет: → Enter</label>
    <!-- (input)="changeColor($event)" -->
    <input
      id="colorInput"
      #inputColor
      style="display: block;"
      type="text"
      (keyup.enter)="changeByClick(inputColor.value)"
    />
    <div class="space"></div>
    <hr />
    <app-user-card
      [userName]="user && user.name ? user.name : null"
      (passSelectedUser)="selectedUser($event)"
    ></app-user-card>
    <hr />
    <div>
      custom structural directive [Delay]:
      <!-- <span *appDelay>app delay directive</span> -->
      <div *ngFor="let delay of [1, 2, 3]">
        <span *appDelay="delay">app delay directive {{ delay }}</span>
        <!-- 
          
          <ng-template [appDelay]="delay"></ng-template>
          <span>app delay directive {{ delay }}</span>
          </ng-template></ng-template>

         -->
      </div>
    </div>
    <hr />
  `,
  styles: [
    `
      .db {
        display: inline-block;
      }
      .gold {
        color: gold;
      }
      .red {
        color: red;
      }
      .green {
        color: green;
      }
      .blue {
        color: blue;
      }
      .space {
        display: block;
        width: 100%;
        height: 1rem;
      }
    `,
  ],
})
export class HeaderComponent {
  myclass: string = "db";
  mywidth: number = 100;
  mycolor!: string;
  user?: { name: string };
  selectedUserName!: string | null;
  myrandom?: string;

  @ViewChild("dynamic", { read: ViewContainerRef })
  private viewRef: ViewContainerRef | undefined;
  private componentRef: ComponentRef<DynamicComponent> | undefined;
  toggleDynamicComp: boolean = true;

  constructor() {
    setTimeout(() => {
      this.myclass = "green";
    }, 2000);

    setTimeout(() => {
      this.user = {
        name: "John",
      };
    }, 2000);
  }

  // changeColor(event: Event) {
  //   this.mycolor = (event.target as HTMLInputElement).value;
  // }

  changeColorByClick() {
    this.myclass = "blue";
    this.myrandom = "#" + Math.floor(Math.random() * 16777215).toString();
  }

  changeByClick(color: string) {
    console.log("color>>", color);
    this.mycolor = color;
  }

  selectedUser(name: string) {
    this.selectedUserName = name;
  }

  toggleDynamicComponent() {
    if (this.toggleDynamicComp) {
      this.viewRef?.clear();
      this.componentRef = this.viewRef?.createComponent(DynamicComponent);
    }
    if (!this.toggleDynamicComp) {
      this.viewRef?.clear();
    }
    this.toggleDynamicComp = !this.toggleDynamicComp;
  }
}
