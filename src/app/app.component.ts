import { Component } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.isMobile();
  }
}
