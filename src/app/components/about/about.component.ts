import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StateService } from '../../services/state/state.service';
import { Education } from '../../models/education';
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

  public summary = `Senior-level Full-Stack & Backend Software Engineer with over ${this.getYearsOfExperience()} years of experience designing, architecting, and
  scaling high-throughput distributed systems, event-driven microservices, and modern web applications using C#, .NET 8+,
  TypeScript, and Angular/React. Proven track record of optimizing ingestion pipelines, engineering clinical
  and financial automation engines, leading cloud infrastructure practices across AWS and Azure, and leveraging
  modern AI-assisted engineering workflows (Claude Code) to accelerate technical spec writing, system design, bug
  diagnosis, and code delivery.`;
  public techFocus = `Core Technical Focus: • Backend & Systems: C#, .NET 8+, REST APIs, Microservices, Async Pipelines, Event-Driven Architecture, Temporal
  • Cloud & Infrastructure: AWS (EKS, Lambda, S3, AppConfig), Docker, KEDA, OpenTofu/Terraform, Helm, CI/CD
  • Frontend & Data: TypeScript, React, Angular, SQL Server, DynamoDB`;
  public openTo = `Open to Senior Full Stack and Senior Backend Software Engineering opportunities.`;

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
      'Backend & Architecture',
      [
        '.NET Core/.NET 8+',
        'Microservices',
        'Event-Driven Architecture',
        'RESTful APIs',
        'Entity Framework Core',
        'Temporal',
        'Node.js',
        'Express',
        'Async Pipelines'
      ]
    ),
    new Skill(
      'Frontend',
      [
        'React',
        'Angular',
        'Vue.js',
        'HTML5/CSS3',
        'TypeScript'
      ]
    ),
    new Skill(
      'Cloud & DevOps',
      [
        'AWS (EKS, Lambda, Lambda, S3, AppConfig, ECR)',
        'Azure (App Services, Functions, DevOps)',
        'Docker',
        'Kubernetes/KEDA',
        'OpenTofu/Terraform',
        'CI/CD (GitHub Actions, Azure DevOps)',
        'SOLID Principles'
      ]
    ),
    new Skill(
      'AI-Assisted Engineering',
      [
        'Claude Code (Technical Spec Drafting, System Design Collaboration, Bug Diagnosis, Code Generation, Test Suites)'
      ]
    ),
    new Skill(
      'Databases & Messaging',
      [
        'SQL Server',
        'MySQL',
        'DynamoDB',
        'Firestore',
        'Asynchronous Queues (RabbitMQ, AWS SQS)'
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
            'Architected and engineered an end-to-end conversational prior-authorization intake flow across 15 microservices and 3 repositories, leveraging React, .NET Core, an AI response-schema transformer, and Temporal workflows backed by a comprehensive mock-payer test suite.',
            'Utilized Claude Code as a daily AI pair-programmer to collaborate on technical designs, draft OpenAPI specs, diagnose complex microservice production defects, and rapidly generate high-coverage test suites (NUnit/Jest), significantly accelerating sprint delivery.',
            'Optimized cloud infrastructure by replacing fixed-replica Temporal workers with KEDA event-driven autoscaling on Amazon EKS, securing Temporal Cloud authentication via TriggerAuthentication and Helm chart templating to scale dynamically on queue depth without application changes.',
            'Resolved high-severity production defects across critical live paths, restoring failed PROD writebacks for 50 provider organizations (~23 cases/day), building an event-replay recovery script to reprocess ~1,400 stalled Aetna cases, and fixing sequential name-matching logic to resolve ~880 monthly failures on hyphenated surnames.',
            `Spearheaded LA Care’s PAS pilot acceptance by building Rhyme's Da Vinci FHIR payer-integration surface—incorporating pended ClaimResponse handling, Inquiry reference mapping, and cross-payer authorization normalization—subsequently adopted by Humana, BCBSM, and Elevance.`,
            'Architected the Provider Intake v4 inbound messaging pipeline on a new Temporal project and task queue for high-volume X12 5010 transactions (270/271/276/277/278), configuring EKS workloads, Helm charts, and AWS AppConfig for seamless side-by-side traffic cutover.',
            'Drove platform-wide modernization and infrastructure initiatives, integrating AWS AppConfig for PSA UM integrations, consolidating shared client libraries, executing .NET runtime upgrades, and embedding OpenTofu/Terraform and Helm changes natively within core feature workflows.',
          ],
          'C#, .NET Core/.NET 8+, AWS (EKS, AppConfig, ECR), KEDA, Temporal, Docker, Helm, OpenTofu/Terraform, React, TypeScript, Da Vinci FHIR, X12 5010 (270/271/276/277/278), RESTful APIs, Microservices'
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
          ],
          'C#, .NET Core, RESTful APIs, Microservices, SQL Server, Entity Framework Core, OpenAPI / Postman, Batch Processing, Modern Web & Mobile Endpoints'
        ),
      ],
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
          ],
          'C#, .NET Core, Distributed Microservices, Asynchronous Ingestion Pipelines, Document Classification APIs, SQL Server, High-Throughput System Design'
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
          ],
          'C#, .NET Core, Angular, TypeScript, SQL Server, Stored Procedures, Entity Framework Core, NUnit, Jest'
        ),
        new Position(
          'Full Stack Developer Intern',
          'Okemos, MI',
          'August 2019 - April 2020',
          [
            'Modernized legacy Visual Basic applications to .NET Core and authored SQL migration scripts.'
          ],
          'C#, .NET Core, Visual Basic, SQL Migration Scripts'
        )
      ]
    ),
    new Experience(
      'Ipsos in North America',
      [
        new Position(
          'Quality Measurement Research (Programmer) Intern',
          'Bloomfield Hills, MI',
          'June 2019 - August 2019',
          [
            'Upgraded legacy academic tools to modern .NET frameworks and assisted in dynamic survey development.'
          ],
          'C#, .NET Framework, Legacy System Upgrades'
        )
      ]
    )
  ];

  public educationHistory = [
    new Education(
      'Oakland University',
      'Bachelor of Science in Computer Science',
      'Rochester Hills, MI'
    )
  ];

  getYearsOfExperience(): number {
    const startDate = new Date(2019, 6, 3); // Starting date of professional experience
    return Math.floor((new Date().getFullYear() - startDate.getFullYear()));
  }
}
