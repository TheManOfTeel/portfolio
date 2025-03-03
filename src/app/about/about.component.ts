import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private responsive: BreakpointObserver) {}

  isMobilePortrait = false;
  ngOnInit() {
    this.responsive.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
        this.isMobilePortrait = result.matches;
    });
  }
}
