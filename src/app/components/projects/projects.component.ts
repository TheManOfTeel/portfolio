import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    constructor(public stateService: StateService) {}

    openRepository(repo: string) {
      const url = `https://github.com/TheManOfTeel/${repo}`;
      window.open(url, '_blank');
    }
}
