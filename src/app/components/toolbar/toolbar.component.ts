import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { StateService } from '../../services/state/state.service';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    AboutComponent,
    ProjectsComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor(public stateService: StateService) {}

  downloadResume(): void {
    window.open('assets/cv/Resume.pdf', '_blank');
  }
}

