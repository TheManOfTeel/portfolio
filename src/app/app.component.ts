import { Component } from '@angular/core';
import { StateService } from './services/state/state.service';
import { ContactService } from './services/contact/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  constructor(public stateService: StateService, public contactService: ContactService) {}

  ngOnInit() {
    this.stateService.isMobile();
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    this.stateService.isDarkMode = prefersDark.matches;
    document.body.classList.toggle('dark-theme', prefersDark.matches);
  }
}
