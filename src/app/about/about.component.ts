import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  downloadResume() {
    // let link = document.createElement('a');
    // link.setAttribute('type', 'hidden');
    // link.href = 'assets/cv/Resume.pdf';
    // link.download = 'Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // link.remove();
    const path = "/assets/cv/Resume.pdf";
    window.open(path);
  }
}
