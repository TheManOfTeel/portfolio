import { Component } from '@angular/core';
import { StateService } from '../../services/state/state.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(public stateService: StateService) {}

  public projects: Project[] = [
    new Project(
      'Rhyme',
      'July 2025 - Present',
      `Rhyme is a prior authorization application supporting 83 large providers and processing 4 million authorizations
      per year. The system integrates with various EHRs, health plans, and pharmacy benefit managers (PBMs) to streamline the prior
      authorization process for medications and procedures. The system features a robust backend built with C# on the .NET Framework,
      a responsive frontend developed in JavaScript using both the Vue.js and React frameworks, and a DynamoDB database for persistent
      data management.`,
      `Enterprise application developed while at Rhyme.`,
      'assets/images/rhyme.png',
      { 'width':'60%', 'height':'60%' },
      undefined
    ),
    new Project(
      'Portfolio (This Website)',
      'May 2025 - Present',
      `Engineered a single-page application (SPA) portfolio website with Angular, focusing on a component-driven architecture
      for modularity and maintainability. Implemented dynamic content loading and a responsive UI to ensure optimal viewing
      across devices. The project is version-controlled and deployed via GitHub Pages, demonstrating a full CI/CD pipeline for
      static content.`,
      undefined,
      undefined,
      undefined,
      'portfolio'
    ),
    new Project(
      'EHS Insight',
      'March 2024 - July 2025',
      `EHS Insight is an EHS management application that streamlines compliance workflows and enhances safety performance.
      The system utilizes a C#/.NET Framework backend with ASP.NET MVC for API services and Entity Framework Core for data
      access, a JavaScript/KnockoutJS frontend employing the MVVM pattern, a SQL Server database for data persistence, and
      Apache Cordova-based mobile applications for Android and iOS. The application supports the creation of custom workflows
      for environmental law compliance, including features for incident tracking, audits, and reporting.`,
      'Enterprise application developed while at StarTex Software.',
      'assets/images/ehs-insight.png',
      { 'width':'60%', 'height':'60%' },
      undefined
    ),
    new Project(
      'Review Generator',
      'January 2024',
      `Designed and implemented a .NET and Angular application that transforms raw data into creative output. This system
      ingested a large dataset of Amazon video game reviews, employing a Markov chain algorithm to learn linguistic patterns
      and subsequently generate synthetic, yet realistic, review text.`,
      undefined,
      undefined,
      undefined,
      'ReviewGenerator'
    ),
    new Project(
      'Relativity Review Center',
      'May 2022 - March 2024',
      `Relativity Review Center is an enterprise-grade application integrated into the Relativity eDiscovery platform,
      designed to optimize document review workflows. It employs a classification engine to dynamically generate
      prioritized queues of documents for reviewers, presented with comprehensive metrics and insights to facilitate
      informed decisions. The system features a robust backend built with C# on the .NET Framework, a responsive frontend
      developed in JavaScript using the Aurelia framework, and a SQL Server database for persistent data management.`,
      'Enterprise application developed while at Relativity.',
      'assets/images/review-center.png',
      { 'width':'65%', 'height':'65%' },
      undefined
    ),
    new Project(
      "Conway's Game of Life",
      'March 2022 - April 2022',
      `Developed a simulation of Conway's Game of Life using C#. This included the implementation of the cellular automaton
      rules, state management for the grid, and iteration logic to advance generations.`,
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
      { 'width':'20%', 'height':'20%' },
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
      { 'width':'25%', 'height':'25%' },
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
      { 'width':'20%', 'height':'20%' },
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
      `The Golf Player Time Management system comprises a web application for golf course administrators and an Android
      application for players. The administrator web application, developed using the Angular framework and TypeScript,
      enables dynamic management of hole data and course geofencing via integration with the Google Maps API. It also
      provides administrative oversight of player requests and real-time location data presented in tabular formats. Google
      Firebase is utilized for data persistence and user authentication across both platforms. The player-facing Android
      application, developed in Java, offers players at-a-glance access to hole-specific information (e.g., par, wait times,
      aerial views), game performance tracking capabilities, and group play functionality. `,
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

  openRepository(repo: string) {
    const url = `https://github.com/TheManOfTeel/${repo}`;
    window.open(url, '_blank');
  }

  isCurrentlyActive(project: Project) {
    return project.timeline?.endsWith('Present');
  }
}
