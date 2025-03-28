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
          [
            'Applied my knowledge of the JavaScript, C#, and SQL programming languages to contribute to the enhancement of the EHS Insight application',
            'Assisted in the maintenance and enhancement of Web, iOS, and Android applications for EHS Insight',
            'Created RESTful API endpoints to carry out web requests from the front end',
            'Documented the external API by creating a Postman collection and a code snippet sample project for third party integrations and provided input on reworking these endpoints to align with modern web conventions',
            'Revamped user settings and introduced new patterns for bulk save operations to reduce server load'
          ]
        ),
      ]
    ),
    new Experience(
      'Relativity',
      [
        new Position(
          'Advanced Software Engineer',
          'April 2022 - March 2024',
          [
            'Applied my knowledge of the JavaScript, C#, and SQL programming languages to contribute to the creation of the Review Center module that provided insights on document relevancy in the eDiscovery process to speed up processes and automate workflows for reviewers preparing for legal cases',
            'Created RESTful API endpoints to carry out web requests from the front end',
            'Created and documented APIs for third party integrations',
            'Built the ingestion engine for sending and receiving information from a classifier',
            'Applied SOLID principles and design patterns to create efficient features that were maintainable and scalable',
            'Actively participated in SCRUM process to design and plan new features as well as review other engineers pull requests'
          ]
        )
      ]
    ),
    new Experience(
      'Kunz, Leigh & Associates',
      [
        new Position(
          'Senior Software Engineer',
          'March 2022 - April 2022',
          [
            'Applied my knowledge of the TypeScript, C#, and SQL programming languages to build web applications utilizing the Angular framework and .NET',
            'Assisted, mentored, and collaborated with team members to meet client deadlines',
            'Rotated between multiple projects as a shared resource to build full stack features',
            'Efficiently operated in an Agile practicing environment'
          ]
        ),
        new Position(
          'Software Engineer',
          'April 2020 - March 2022',
          [
            'Applied my knowledge of the TypeScript, C#, and SQL programming languages to build web applications utilizing the Angular framework and .NET',
            'Collaborated with team members to meet client deadlines',
            'Rotated between multiple projects as a shared resource to build full stack features',
            'Efficiently operated in an Agile practicing environment'
          ]
        ),
        new Position(
          'Full Stack Developer Intern',
          'August 2019 - April 2020',
          [
            'Applied my knowledge of the TypeScript, C#, and SQL programming languages to build web applications utilizing the Angular framework and .NET',
            'Enhanced legacy AngularJS applications to meet enhancement request criteria',
            'Created SSRS reports for State of Michigan employees to export for record keeping proposes'
          ]
        )
      ]
    ),
    new Experience(
      'Ipsos in North America',
      [
        new Position(
          'Quality Measurement Research (Programmer) Intern',
          'June 2019 - August 2019',
          [
            'Created SQL queries to display accurate and meaningful data and load new data into the database',
            'Tested and fix bugs in existing programs',
            'Assisted with the migration of research projects and programs to a new server environment',
            'Worked with developers to add features to a dynamic survey web page',
            'Updated old Visual Basic programs to .NET'
          ]
        )
      ]
    )
  ];
}
