import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(public stateService: StateService) {}
}
