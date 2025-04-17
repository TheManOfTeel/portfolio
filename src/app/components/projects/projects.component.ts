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

  projects: Project[] = [
    new Project(
      'EHS Insight',
      'EHS Insight is an application for improving environmental, health, and safety performance by managing risk and increasing efficiency. The application allows agencies to create their own workflows and policies to inspect and track their compliance with environmental law. The system has a backend programmed in C# using the .NET framework, a front end programmed in JavaScript using the KnockoutJS framework, and a SQL database. There are Android and iOS applications created using Apache Cordova.',
      'Enterprise application developed while at StarTex Software.',
      'assets/images/ehs-insight.png',
      { 'width':'70%', 'height':'70%' },
      undefined
    ),
    new Project(
      'Relativity Review Center',
      'Relativity Review Center is an enterprise application developed for the larger Relativity eDiscovery platform. Review Center uses a classifier to create queues of documents that have relevance to reviewers in the Relativity application and presents them in an informational and helpful way with many useful metrics and insights. The system has a backend programmed in C# using the .NET framework, a front end programmed in TypeScript using the Aurelia framework, and a SQL database.',
      'Enterprise application developed while at Relativity.',
      'assets/images/review-center.png',
      { 'width':'80%', 'height':'80%' },
      undefined
    ),
    new Project(
      'MDARD LPS',
      'The Michigan Department of Agriculture and Rural Development Licensing Portal System is an enterprise application developed for the State of Michigan that allows users to create Organizations and create Applications for licenses. The portal allows internal users and external users to utilize this functionality based on user group permissions. There are many different license types that are possible for users to choose from, and fees are also created and enforced in this system. The application also features an API for other applications to utilize to access the data generated and stored in the system with valid credentials and API keys. The system has a backend programmed in C# using the .NET framework, a front end programmed in TypeScript using the Angular framework, and a SQL database.',
      'Enterprise application developed while at Kunz, Leigh & Associates.',
      'assets/images/mdard.png',
      { 'width':'20%', 'height':'20%' },
      undefined
    ),
    new Project(
      'Michigan State Police CAP',
      'The Michigan State Police CVED Authority Portal is an application developed for the State of Michigan. The portal is a customized implementation of MDARD LPS to specifically handle commercial vehicle licenses. The system has a backend programmed in C# using the .NET framework, a front end programmed in TypeScript using the Angular framework, and a SQL database.',
      'Enterprise application developed while at Kunz, Leigh & Associates.',
      'assets/images/msp.png',
      { 'width':'25%', 'height':'25%' },
      undefined
    ),
    new Project(
      'MDARD INTELS',
      'The Michigan Department of Agriculture and Rural Development Inspection, Notification, Tracking, Enforcement, and Licensing System is an enterprise application developed for the State of Michigan that enables inspectors to create cases, inspections, and enforcements to make sure that all agriculture investigations are created and logged in the same manner. The system allows for a plethora of different case types with different conditions and sub tasks for each. The system can sync and go offline for inspectors to complete and create cases and inspections without internet access. The system also allows for the generation of reports that are populated with data to keep the State’s records complete and allow physical documents to be delivered to desired recipients. The system has a backend programmed in C# using the .NET framework, a front end programmed in TypeScript using the Angular framework, and a SQL database.',
      'Enterprise application developed while at Kunz, Leigh & Associates.',
      'assets/images/mdard.png',
      { 'width':'20%', 'height':'20%' },
      undefined
    ),
    new Project(
      'foobar with Google',
      "Completed all 5 levels of Google's foobar challenge. The challenge tested my knowledge to implement various algorithms in either Java or Python to solve them in a timeframe. The first few challenges were completed using Java but all subsequent challenges were completed using Python because its ease of use manipulating data.",
      undefined,
      undefined,
      undefined,
      'foobar-2021'
    ),
    new Project(
      'Golf Player Time Management',
      'Golf Player Time Management featured a web application and an Android Application. The web application was created for golf course administrators to manage data on a dynamic list of holes and geofence their course using Google Maps. The web application also displayed tables with player’s requests and locations. Google’s Firebase was utilized for data storage and user authentication. An Android App was also developed for players to have access to the hole data at a glance (such as par numbers, wait times, and aerial views), track their game’s performance, and play in groups with other players. The web application was created using the Angular framework and TypeScript language. The Android application was created using Java.',
      undefined,
      undefined,
      undefined,
      'Golf-Player-Time-Management'
    ),
    new Project(
      'Server Check',
      'Checks the directories of a system and outputs the logs into a .txt file. The files can then be compared and the missing file names are displayed and outputted into another .txt file for easier viewing and logging purposes. Outputted files can be opened directly through the program for ease of use. There is a terminal version and a version with a GUI. This application was used to verify that all files were transferred after a server migration. Programmed using Python 3.',
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
}
