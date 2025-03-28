import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor(private responsive: BreakpointObserver) {}

  public isMobilePortrait = false;
  public isDarkMode = false;

  isMobile() {
    this.responsive.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.isMobilePortrait = result.matches;
    });
  }

  toggleDarkTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme');
  }
}
