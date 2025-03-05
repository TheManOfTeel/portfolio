import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor(private responsive: BreakpointObserver) {}

  public isMobilePortrait = false;

  isMobile() {
    this.responsive.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.isMobilePortrait = result.matches;
    });
  }
}
