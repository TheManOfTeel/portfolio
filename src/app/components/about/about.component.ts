import { Component } from '@angular/core';
import { StateService } from '../../services/state/state.service';
import { Experience, Position } from '../../models/experience';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(public stateService: StateService) {}

  summary = "Full Stack Software Engineer with over 5 years of experience delivering performant, scalable web applications and APIs across .NET, Angular, and cloud platforms. Proven ability to own features end-to-end, collaborate across disciplines, and optimize systems for reliability and throughput. Strengths include backend architecture, RESTful service design, cloud deployments (Azure, AWS), and Agile delivery.";

  skills = [
    new Skill(
      'Languages',
      [
        'C#',
        'Java',
        'JavaScript',
        'TypeScript',
        'SQL',
        'Python'
      ]
    ),
    new Skill(
      'Frontend',
      [
        'Angular',
        'React',
        'HTML5',
        'CSS3'
      ]
    ),
    new Skill(
      'Backend',
      [
        '.NET Core',
        'Spring',
        'RESTful APIs'
      ]
    ),
    new Skill(
      'Databases',
      [
        'SQL Server',
        'MySQL',
        'Firestore'
      ]
    ),
    new Skill(
      'Tools',
      [
        'Git',
        'Docker',
        'Azure DevOps',
        'Jenkins',
        'Postman',
        'SSRS',
        'Jira',
        'Confluence'
      ]
    ),
    new Skill(
      'Cloud',
      [
        'Azure',
        'AWS',
        'Google Cloud Platform'
      ]
    ),
    new Skill(
      'Architectural Patterns',
      [
        'Microservices',
        'MVC',
        'Client-Server Architecture',
        'Event-Driven Architecture',
        'SOLID Principles'
      ]
    ),
    new Skill(
      'Practices',
      [
        'Agile/Scrum',
        'CI/CD',
        'Integration and Unit Testing',
        'Bash Scripting'
      ]
    )
  ];

  experiences = [
    new Experience(
      'StarTex Software',
      [
        new Position(
          'Software Engineer',
          'March 2024 - Present',
          [
            'Developed scalable .NET Core APIs to power a safety compliance platform used by 10K+ users across industries.',
            'Refactored frontend settings logic and introduced bulk save/update patterns and reusable modal and form components.',
            'Created comprehensive Postman API collection and onboarding documentation, reducing integration ramp-up time by 40%.',
            'Contributed to feature parity across web and mobile platforms (Android/iOS), ensuring consistency and reliability.'
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
            'Engineered ingestion pipelines and classification APIs for an eDiscovery platform handling over 1M documents/day.',
            'Enhanced throughput by 35% via microservice integration and classifier optimization.',
            'Led sprint planning, code reviews, and architecture discussions within Agile teams to maintain engineering quality.'
          ]
        )
      ]
    ),
    new Experience(
      'Kunz, Leigh & Associates',
      [
        new Position(
          'Software Engineer',
          'April 2020 - April 2022',
          [
            'Delivered full-stack solutions for public sector clients using Angular and .NET Core.',
            'Managed concurrent projects with high reliability, contributing to mission-critical government services.',
            'Acted as mentor to junior engineers and interns, elevating team-wide technical practices.'
          ]
        ),
        new Position(
          'Full Stack Developer Intern',
          'August 2019 - April 2020',
          [
            'Modernized legacy Visual Basic systems to .NET, enhancing code maintainability.',
            'Authored SQL scripts for data migration and reporting pipelines.',
            'Supported infrastructure upgrades and internal platform transitions.'
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
            'Migrated academic research applications to modern hosting environments.',
            'Collaborated on a dynamic survey application, integrating new frontend features.',
            'Upgraded legacy tools to .NET framework, improving maintainability and compatibility.'
          ]
        )
      ]
    )
  ];
}
