import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { SharedIconService } from './servises/shared-icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rm-test';

  isSidenavOpen = true;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private sharedIconService: SharedIconService
  ) {}

  ngOnInit() {
    this.sharedIconService.registerIcons();
    this.breakpointObserver
      .observe(['(max-width: 1024px)'])
      .subscribe((state: BreakpointState) => {
        state.matches
          ? (this.isSidenavOpen = false)
          : (this.isSidenavOpen = true);
      });
  }
}
