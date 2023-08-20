import { Component } from '@angular/core';

@Component({
  selector: 'app-account-btn',
  template: `
    <button class="account-button" [matMenuTriggerFor]="menu">
      <div class="account-menu-wrapper">
        <div class="account-logo-container">
          <img
            class="account-logo__image"
            src="assets/icons/svg/ic_person.svg"
            alt="logo"
          />
          <mat-menu #menu="matMenu">
            <button (click)="logout()" mat-menu-item>
              <mat-icon>logout</mat-icon>
              <span>Logout</span>
            </button>
          </mat-menu>
        </div>
        <div class="account-info">
          <span class="account-lastname">Иванов</span>
          <span class="account-role">Администратор</span>
        </div>
        <mat-icon
          class="account-logo__arrow"
          [svgIcon]="'input-arrow-down'"
        ></mat-icon>
      </div>
    </button>
  `,
  styleUrls: ['./account-btn.component.scss'],
})
export class AccountBtnComponent {
  logout() {
    console.log('logout>>');
  }
}
