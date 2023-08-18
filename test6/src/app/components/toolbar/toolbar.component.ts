import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar color="primary" class="header">
      <div class="container">
        <div class="account">
          <span class="nav-tool-item">
            <mat-icon (click)="sidenav.toggle()">menu</mat-icon>
          </span>
          <app-account-btn></app-account-btn>
        </div>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input()
  sidenav!: MatSidenav;
}
