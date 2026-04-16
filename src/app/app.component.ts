import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StateService } from './services/state/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  constructor(public stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.isMobile();
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    this.stateService.isDarkMode.set(prefersDark.matches);
    document.body.classList.toggle('dark-theme', prefersDark.matches);
  }
}


