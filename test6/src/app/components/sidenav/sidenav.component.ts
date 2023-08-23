import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('onOff', [
      transition(':enter', [
        style({ transform: 'scaleY(0)', transformOrigin: 'top' }),
        animate('200ms', style({ transform: 'scaleY(1)' })),
      ]),
      transition(':leave', [
        animate('200ms', style({ transform: 'scaleY(0)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class SidenavComponent {
  @Input() isSidenavOpen!: boolean;
  showSubmenu: boolean = false;

  toggle() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  fixMenu() {
    if (this.showSubmenu) {
      this.showSubmenu = !this.showSubmenu;
    }
  }
}
