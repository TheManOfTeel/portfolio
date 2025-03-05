import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor(private responsive: BreakpointObserver) {}

  isMobilePortrait = false;
  ngOnInit() {
    this.responsive.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
        this.isMobilePortrait = result.matches;
    });
  }

  downloadResume() {
    window.open('assets/cv/Resume.pdf', '_blank');
  }
}
