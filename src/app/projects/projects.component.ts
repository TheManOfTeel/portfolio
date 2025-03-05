import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    constructor(private responsive: BreakpointObserver) {}

    isMobilePortrait = false;
    ngOnInit() {
      this.responsive.observe([
        Breakpoints.HandsetPortrait
      ]).subscribe(result => {
          this.isMobilePortrait = result.matches;
      });
    }

    openRepository(repo: string) {
      const url = `https://github.com/TheManOfTeel/${repo}`;
      window.open(url, '_blank');
    }
}
