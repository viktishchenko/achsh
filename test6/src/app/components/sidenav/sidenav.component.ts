import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() isSidenavOpen!: boolean;

  toggle() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
