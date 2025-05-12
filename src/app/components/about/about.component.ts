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

  summary = "Full stack software engineer with 5+ years of professional experience building enterprise-grade web applications using .NET, Angular, TypeScript, SQL, and C#. Specialized in backend development and API architecture, with a proven track record of improving system performance, delivering scalable features, and leading technical improvements across teams. Experienced in Agile and Scrum environments, with a focus on clean code, maintainability, and cross-functional collaboration.";

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
        'Google Cloud Firestore',
        'Microsoft SQL Server',
        'MySQL'
      ]
    ),
    new Skill(
      'Tools',
      [
        'Git',
        'Docker',
        'Azure DevOps',
        'Postman',
        'Jira',
        'Confluence'
      ]
    ),
    new Skill(
      'Cloud',
      [
        'Azure',
        'AWS'
      ]
    ),
    new Skill(
      'Other',
      [
        'Agile/Scrum',
        'CI/CD',
        'Bash',
        'Integration Testing',
        'Unit Testing'
      ]
    ),
  ];

  experiences = [
    new Experience(
      'StarTex Software',
      [
        new Position(
          'Software Engineer',
          'March 2024 - Present',
          [
            'Developed scalable .NET Core APIs to power a safety compliance platform used by 10,000+ users across industries.',
            'Refactored frontend settings logic and introduced bulk save/update patterns.',
            'Authored Postman API collection and integration guide, enabling faster onboarding for third-party partners.',
            'Worked on cross-platform enhancements (Web, Android, iOS) to unify feature parity.'
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
            'Built backend ingestion engine and classification APIs used in an eDiscovery system processing 1M+ documents/day.',
            'Integrated microservices and external classifiers, improving document relevancy throughput by 35%.',
            'Collaborated in Agile teams, contributed to sprint planning, and led code reviews to enforce architectural standards.'
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
            'Developed and maintained full stack applications for public sector clients using Angular and .NET.',
            'Delivered enhancements to mission-critical systems on time across multiple concurrent projects.',
            'Mentored interns and new hires on application architecture and code quality.'
          ]
        ),
        new Position(
          'Full Stack Developer Intern',
          'August 2019 - April 2020',
          [
            'Migrated legacy Visual Basic applications to .NET framework to improve maintainability.',
            'Wrote SQL queries for data reporting and ETL tasks across state-managed systems.',
            'Assisted in the transition of internal systems to modern servers and platforms.'
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
            'Supported server migration efforts by transitioning research applications and data to a modernized hosting environment.',
            'Collaborated with developers to enhance a dynamic survey web application with new interactive features.',
            'Modernized legacy Visual Basic applications by rewriting and upgrading them to the .NET framework, improving maintainability and compatibility.'
          ]
        )
      ]
    )
  ];
}
