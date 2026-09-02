import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { StateService } from '../../services/state/state.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatExpansionModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(public stateService: StateService) {}

  private readonly imgDefaultStyle = { 'max-width': '100%', 'max-height': 'min(70vh, 400px)', 'display': 'block', 'object-fit': 'contain' };

  public projects: Project[] = [
    new Project(
      'RSS Discord Bot',
      'August 2025 - Present',
      `Engineered an automated RSS ingestion and notification service designed to parse target feeds, filter out automated bot activity,
      and dispatch formatted real-time updates to Discord channels via custom webhook integrations. Integrated user and role management
      logic to handle target notifications cleanly based on feed metadata. Built and maintained scheduled CI/CD execution workflows utilizing
      POSIX cron triggers in GitHub Actions, ensuring zero-infrastructure, serverless execution and reliable status updates without persistent
      server overhead.`,
      undefined,
      undefined,
      undefined,
      'RssDiscordBot'
    ),
    new Project(
      'Rhyme',
      'July 2025 - Present',
      `Architected and deployed high-throughput .NET Core microservices integrated with AWS SQS and DynamoDB to process over 4M
      prior authorization requests annually. Designed resilient, asynchronous message consumption pipelines with intelligent error
      handling, dead-letter queues (DLQ), and optimistic concurrency patterns to resolve high-frequency race conditions across concurrent
      payer updates. Built automated clinical referral and claim generation workflows to process multi-CPT code submissions with plan-aware
      fallback protocols, drastically reducing request drop-off.`,
      `Enterprise application developed while at Rhyme.`,
      'assets/images/rhyme.png',
      this.imgDefaultStyle,
      undefined
    ),
    new Project(
      'Portfolio (This Website)',
      'May 2025 - Present',
      `Designed and deployed a lightweight, fully responsive portfolio application hosted via GitHub Pages, emphasizing modern frontend
      performance and minimal payload overhead. Built with TypeScript to enforce strict type safety across dynamic components, structured
      data bindings, and external link integrations. Implemented automated static asset deployment pipelines via GitHub Actions to ensure
      seamless continuous delivery.`,
      undefined,
      undefined,
      undefined,
      'portfolio'
    ),
    new Project(
      'EHS Insight',
      'March 2024 - July 2025',
      `Spearheaded full-stack database and API optimizations for a safety compliance platform supporting over 500,000 active users. Redesigned
      legacy single-entity API endpoints and controllers into batch-capable handlers accepting collections of domain objects. Engineered responsive
      frontend modals to support bulk UI operations and refactored backend SQL stored procedures to process multi-row inputs efficiently, yielding a 25%
      reduction in total data processing time and database round-trips.`,
      `Enterprise application developed while at StarTex Software.`,
      'assets/images/ehs-insight.png',
      this.imgDefaultStyle,
      undefined
    ),
    new Project(
      'Review Generator',
      'January 2024, August 2026',
      `Built a RESTful C# / .NET Web API service designed to ingest, parse, and transform large-scale gaming sentiment datasets
      into dynamic mock review models. Engineered low-latency query endpoints using LINQ and optimized data structures to ensure
      sub-millisecond execution times. Designed with modular service layers adhering to SOLID design principles to isolate data
      extraction from endpoint routing.`,
      undefined,
      undefined,
      undefined,
      'ReviewGenerator'
    ),
    new Project(
      'Relativity Review Center',
      'May 2022 - March 2024',
      `Engineered high-concurrency ingestion and classification microservices handling 1,000,000+ documents daily with 95% classification accuracy.
      Utilized RabbitMQ for asynchronous job distribution and task scheduling across worker nodes, integrating custom telemetry to report processing
      statistics, queue depth, and health metrics upon task completion. Leveraged .NET async/await threading patterns and message decoupling to optimize
      thread pool utilization, driving a 35% overall increase in system ingestion throughput.`,
      'Enterprise application developed while at Relativity.',
      'assets/images/review-center.png',
      this.imgDefaultStyle,
      undefined
    ),
    new Project(
      `Conway's Game of Life`,
      'March 2022 - April 2022',
      `Engineered a C# implementation of Conway's cellular automaton focused on state machine modeling, grid evaluation algorithms,
      and memory management. Optimized neighbor-detection lookup algorithms and board state recalculations to maintain high frame-rate
      rendering across large matrix dimensions. Structured using decoupled model-view logic to allow seamless swapping of rendering engines.`,
      undefined,
      undefined,
      undefined,
      'ConwaysGameOfLife'
    ),
    new Project(
      'MDARD LPS',
      'December 2021 - April 2022',
      `The Michigan Department of Agriculture and Rural Development (MDARD) Licensing Portal System (LPS) is a critical
      enterprise-level application developed for the State of Michigan to streamline the licensing process. This platform
      enables both internal and external users to efficiently manage Organizations and submit Applications for a diverse range
      of licenses, with role-based permissions ensuring appropriate access. The system incorporates robust fee management and
      enforcement mechanisms. Architecturally, the application features a C# backend built on the .NET Framework, a responsive
      and modern frontend developed in TypeScript using the Angular framework, and a SQL Server database for persistent data
      management. Furthermore, the system exposes a well-documented API secured with authentication and API keys, allowing
      authorized external applications to access and integrate with the generated licensing data.`,
      'Enterprise application developed while at Kunz, Leigh & Associates.',
      'assets/images/mdard.png',
      { 'max-width':'15%', 'max-height':'15%' },
      undefined
    ),
    new Project(
      'Michigan State Police CAP',
      'January 2022 - April 2022',
      `The Michigan State Police (MSP) CVED (Commercial Vehicle Enforcement Division) Authority Portal (CAP) is an application
      developed for the State of Michigan. The portal is a customized implementation of MDARD LPS to specifically handle
      commercial vehicle licenses. The system has a backend programmed in C# using the .NET framework, a front end programmed
      in TypeScript using the Angular framework, and a SQL database.`,
      'Enterprise application developed while at Kunz, Leigh & Associates.',
      'assets/images/msp.png',
      { 'max-width':'20%', 'max-height':'20%' },
      undefined
    ),
    new Project(
      'MDARD INTELS',
      'September 2019 - November 2021',
      `The Michigan Department of Agriculture and Rural Development (MDARD) Inspection, Notification, Tracking, Enforcement,
      and Licensing System (INTELS) is a critical enterprise application developed for the State of Michigan to standardize and
      streamline agricultural investigations and compliance. This platform enables inspectors to efficiently create and manage
      cases, inspections, and enforcements, ensuring consistent data logging and process adherence across diverse case types
      with varying conditions and sub-tasks. A key feature includes robust offline data synchronization capabilities, allowing
      inspectors to create and complete cases and inspections without continuous internet connectivity. The system also
      supports comprehensive report generation for maintaining accurate state records and facilitating the delivery of
      physical documents. Architecturally, the application utilizes a C# backend built on the .NET Framework, a responsive
      frontend developed in TypeScript using the Angular framework, and a SQL Server database for persistent and reliable
      data storage.`,
      'Enterprise application developed while at Kunz, Leigh & Associates.',
      'assets/images/mdard.png',
      { 'max-width':'15%', 'max-height':'15%' },
      undefined
    ),
    new Project(
      'foobar with Google',
      'March 2021 - June 2021',
      `Navigated and solved all 5 levels of Google's foobar challenge, showcasing strong algorithmic thinking and the ability
      to adapt programming language based on problem requirements. Initially employed Java before leveraging Python's strengths
      for data manipulation in the later, more intricate stages of the challenge.`,
      undefined,
      undefined,
      undefined,
      'foobar-2021'
    ),
    new Project(
      'Golf Player Time Management',
      'January 2020 - April 2020',
      `Co-architected a full-stack scheduling and time-management application designed to handle complex concurrent tournament
      logic, player constraints, and event timetables. Built with TypeScript to share strict interfaces between frontend state
      components and asynchronous API request handlers. Implemented relational mapping algorithms to prevent scheduling collisions
      across multi-player events.`,
      undefined,
      undefined,
      undefined,
      'Golf-Player-Time-Management'
    ),
    new Project(
      'Recipall',
      'November 2019 - December 2019',
      `Engineered a responsive recipe database application integrating a Java Spring Framework (e.g., Spring Boot) backend
      responsible for robust CRUD (Create, Read, Update, Delete) operations and data persistence, a dynamic Angular frontend
      for seamless user experience and data presentation, and a MySQL database for persistent and reliable data storage.`,
      undefined,
      undefined,
      undefined,
      'Recipall'
    ),
    new Project(
      'Server Check',
      'July 2019',
      `Developed a file system analysis tool in Python to efficiently verify file integrity following server migrations.
      The application recursively scans specified directories, logs file paths to a text file, compares logs to identify
      discrepancies (missing files), and outputs a report of missing files to a separate text file. The tool offers both a
      command-line interface (CLI) and a graphical user interface (GUI) for user accessibility. Key functionalities include
      direct file opening from within the application for streamlined verification workflows.`,
      undefined,
      undefined,
      undefined,
      'ServerCheck'
    )
  ];

  openRepository(repo: string): void {
    const url = `https://github.com/TheManOfTeel/${repo}`;
    window.open(url, '_blank');
  }

  isCurrentlyActive(project: Project): boolean {
    return project.timeline?.endsWith('Present') ?? false;
  }

  isEnterpriseProject(project: Project): boolean {
    return project.subtext?.includes('Enterprise') ?? false;
  }

  getCurrentlyActiveHeader(project: Project): string {
    return this.isCurrentlyActive(project)
    ? 'Active' : this.isEnterpriseProject(project)
      ? 'Prior Position' : 'Inactive';
  }

  getEnterpriseProjectHeader(project: Project): string {
    return this.isEnterpriseProject(project) ? 'Enterprise' : 'Personal';
  }
}
