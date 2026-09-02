import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StateService } from '../../services/state/state.service';
import { Experience, Position } from '../../models/experience';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(public stateService: StateService) {}

  public summary = `Senior-level Full Stack & Backend Software Engineer with over ${this.getYearsOfExperience()} years of experience designing, architecting, and scaling high-throughput
  distributed systems, RESTful microservices, and web applications using C#, .NET Core, TypeScript, and Angular/React. Proven track record of optimizing ingestion pipelines,
  engineering clinical and financial automation engines, and leading CI/CD and architecture practices. Strong background in cloud platforms (Azure, AWS),
  database optimization (SQL Server), and resilient asynchronous messaging.`;

  public skills = [
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
      'Backend',
      [
        '.NET Core / .NET 8+',
        'RESTful APIs',
        'Microservices',
        'Entity Framework Core',
        'Node.js',
        'Express',
        'Async Pipelines'
      ]
    ),
    new Skill(
      'Frontend',
      [
        'Angular',
        'React',
        'Vue.js',
        'HTML5/CSS3',
        'TypeScript'
      ]
    ),
    new Skill(
      'Databases & Cloud',
      [
        'SQL Server',
        'MySQL',
        'DynamoDB',
        'Firestore | Azure (App Services, Functions, DevOps)',
        'AWS (EC2, Lambda, S3)'
      ]
    ),
    new Skill(
      'DevOps & Architecture',
      [
        'Docker',
        'CI/CD (GitHub Actions, Azure DevOps)',
        'Event-Driven Architecture',
        'SOLID Principles',
        'NUnit',
        'Jest',
        'Postman'
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
    )
  ];

  public experiences = [
    new Experience(
      'Rhyme',
      [
        new Position(
          'Software Engineer (Senior Level Scope)',
          'Columbus, OH (Remote)',
          'July 2025 - Present',
          [
            'Architected and engineered high-performance .NET Core microservices and RESTful APIs serving over 4M prior authorizations annually across healthcare payers.',
            'Designed a full-lifecycle claims management engine to automate multi-CPT code submissions and asynchronous payer response handling, implementing a plan-aware fallback protocol that maximized delivery reliability.',
            'Engineered an automated clinical document generation engine, streamlining specialty care referral submissions and approval workflows across prior authorization pipelines.',
            'Implemented robust API resilience patterns—including retry policies, exponential backoff, and circuit breakers—reducing system-wide call failure rates by 30%.',
            'Maintained and optimized dynamic frontends across React and Vue.js while aligning backend endpoints for sub-second response times.'
          ]
        )
      ]
    ),
    new Experience(
      'StarTex Software',
      [
        new Position(
          'Software Engineer',
          'Houston, TX (Remote)',
          'March 2024 - July 2025',
          [
            'Built scalable .NET Core APIs and backend services powering an enterprise safety compliance platform serving 500,000+ active users.',
            'Redesigned data-access layers by introducing bulk save/update patterns and batch processing, cutting database round-trips and processing times by 25%.',
            'Standardized team API integration by authoring comprehensive Postman collections, OpenAPI specifications, and developer onboarding workflows, decreasing partner integration ramp-up time by 40%.',
            'Collaborated on multi-platform feature parity, maintaining strict contract consistency across web and mobile endpoints.'
          ]
        ),
      ]
    ),
    new Experience(
      'Relativity',
      [
        new Position(
          'Advanced Software Engineer',
          'Chicago, IL (Remote)',
          'April 2022 - March 2024',
          [
            'Engineered distributed ingestion pipelines and document classification APIs using .NET Core microservices for an enterprise eDiscovery platform, processing over 1,000,000 documents/day with 95% accuracy.',
            'Improved overall pipeline throughput by 35% through microservice decoupling, query optimization, and classifier parallelization.',
            'Led sprint planning, technical design reviews, and code quality initiatives across Agile teams; mentored mid-level and junior engineers in SOLID principles and system design.'
          ]
        )
      ]
    ),
    new Experience(
      'Kunz, Leigh & Associates',
      [
        new Position(
          'Software Engineer',
          'Okemos, MI',
          'April 2020 - April 2022',
          [
            'Delivered full-stack enterprise solutions for mission-critical public sector applications utilizing Angular and .NET Core.',
            'Authored optimized SQL scripts, stored procedures, and Entity Framework queries to maintain zero-downtime operations on high-concurrency public databases.',
            'Mentored junior engineers and interns, establishing unit testing standards (NUnit, Jest) and code review checklists across the engineering team.'
          ]
        ),
        new Position(
          'Full Stack Developer Intern',
          'Okemos, MI',
          'August 2019 - April 2020',
          [
            'Modernized legacy Visual Basic applications to .NET Core and authored SQL migration scripts.'
          ]
        )
      ]
    ),
    new Experience(
      'Ipsos in North America',
      [
        new Position(
          'Quality Measurement Research (Programmer) Intern',
          'Bloomfield Hills',
          'June 2019 - August 2019',
          [
            'Upgraded legacy academic tools to modern .NET frameworks and assisted in dynamic survey development.'
          ]
        )
      ]
    )
  ];

  getYearsOfExperience(): number {
    const startDate = new Date(2020, 4, 29); // Starting date of professional experience
    return Math.floor((new Date().getFullYear() - startDate.getFullYear()));
  }
}
