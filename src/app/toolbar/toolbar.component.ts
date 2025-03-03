import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  downloadResume() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/cv/Resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
