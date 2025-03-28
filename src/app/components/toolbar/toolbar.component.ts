import { Component } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor(public stateService: StateService) {}

  downloadResume() {
    window.open('assets/cv/Resume.pdf', '_blank');
  }
}
