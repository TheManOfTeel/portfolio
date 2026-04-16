import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor(private responsive: BreakpointObserver) {}

  public isMobilePortrait = signal(false);
  public isDarkMode = signal(false);

  isMobile(): void {
    this.responsive.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.isMobilePortrait.set(result.matches);
    });
  }

  toggleDarkTheme(): void {
    this.isDarkMode.update(value => !value);
    document.body.classList.toggle('dark-theme');
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
