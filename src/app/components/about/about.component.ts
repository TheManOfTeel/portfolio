import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Experience, Position } from '../../models/experience';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(public stateService: StateService) {}

  experiences = [
    new Experience(
      'StarTex Software',
      [
        new Position(
          'Software Engineer',
          'March 2024 - Present',
          `<ul>
            <li>Design and develop software applications in accordance with project requirements</li>
            <li>Proficient in JavaScript, C#, and SQL</li>
            <li>Perform coding, debugging, testing, and troubleshooting throughout the SDLC</li>
            <li>Collaborate with cross-functional teams to deliver robust and scalable software solutions</li>
          </ul>`
        ),
      ]
    ),
    new Experience(
      'Relativity',
      [
        new Position(
          'Advanced Software Engineer',
          'April 2022 - March 2024',
          `<ul>
            <li>Build core product offering, Relativity</li>
            <li>Proficient in the TypeScript, C#, and SQL programming languages</li>
            <li>Object-oriented analysis, object-oriented design, and object-oriented programming</li>
            <li>Applying SOLID principles and design patterns</li>
            <li>Actively participate in SCRUM process</li>
          </ul>`
        )
      ]
    ),
    new Experience(
      'Kunz, Leigh & Associates',
      [
        new Position(
          'Senior Software Engineer',
          'March 2022 - April 2022',
          `<ul>
            <li>Build web applications using the Angular framework and .NET</li>
            <li>Proficient in the TypeScript, C#, and SQL programming languages</li>
            <li>Assist, mentor, and collaborate with team members</li>
            <li>Efficiently operate in an Agile practicing environment</li>
            <li>Deliver quality software that meets all acceptance criteria</li>
          </ul>`
        ),
        new Position(
          'Software Engineer',
          'April 2020 - March 2022',
          `<ul>
            <li>Build web applications using the Angular framework and .NET</li>
            <li>Proficient in the TypeScript, C#, and SQL programming languages</li>
            <li>Assist and collaborate with team members</li>
            <li>Efficiently operate in an Agile practicing environment</li>
            <li>Deliver quality software that meets all acceptance criteria</li>
          </ul>`
        ),
        new Position(
          'Full Stack Developer Intern',
          'August 2019 - April 2020',
          `<ul>
            <li>Build web applications using the Angular framework and .NET</li>
            <li>Add new features and maintain legacy applications</li>
            <li>Query databases to produce detailed reports for clients</li>
            <li>Effectively operate in an Agile practicing environment</li>
            <li>Efficiently fix bugs uncovered by QA testing</li>
          </ul>`
        )
      ]
    ),
    new Experience(
      'Ipsos in North America',
      [
        new Position(
          'Quality Measurement Research (Programmer) Intern',
          'June 2019 - August 2019',
          `<ul>
            <li>Operate and maintain existing applications in a fast-paced, deadline-driven environment</li>
            <li>Create SQL queries to display accurate and meaningful data and load new data into the database</li>
            <li>Test and fix bugs in existing programs</li>
            <li>Assist with migration of research projects and programs to new server environment</li>
            <li>Work with developers to add features to a dynamic survey web page</li>
            <li>Update old Visual Basic programs to .NET</li>
          </ul>`
        )
      ]
    )
  ];
}
