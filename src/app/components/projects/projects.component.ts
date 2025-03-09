import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';
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
        'Relativity Review Center is an application developed for the larger Relativity eDiscovery platform. Review Center uses a classifier to create queues of documents that have relevance to reviewers in the Relativity application and presents them in an informational and helpful way. The system has a backend programmed in C# using the .NET framework, a front end programmed in TypeScript using the Aurelia framework, and a SQL database.',
        'Enterprise application developed while at Relativity.',
        'assets/images/review-center.png',
        { 'width':'80%', 'height':'80%' },
        undefined
      ),
      new Project(
        'MDARD LPS',
        'Worked with a team to develop a licensing portal system for the State of Michigan. This web application was developed for MDARD to allow easier tracking of organizations and their licenses as well as the purchasing new licenses according to state guidelines. The application also features an API for other State applications to access its data with valid API keys. The system has a backend programmed in C# using the .NET framework, a front end programmed in TypeScript using the Angular framework, and a SQL database.',
        'Enterprise application developed while at Kunz, Leigh & Associates.',
        'assets/images/mdard.png',
        { 'width':'20%', 'height':'20%' },
        undefined
      ),
      new Project(
        'Michigan State Police CAP',
        'The Michigan State Police CVED Authority Portal is an application developed for the State of Michigan. The portal is a customized implementation of MDARD LPS to specifically handle vehicle licenses. The system has a backend programmed in C# using the .NET framework, a front end programmed in TypeScript using the Angular framework, and a SQL database.',
        'Enterprise application developed while at Kunz, Leigh & Associates.',
        'assets/images/msp.png',
        { 'width':'25%', 'height':'25%' },
        undefined
      ),
      new Project(
        'MDARD INTELS',
        'Worked with a team to develop an inspection, notification, tasks, enforcement, and licensing system for the State of Michigan. This web application was developed for MDARD and to meet the needs of the Pesticide, Agricultural Products, and Nursery sections to ensure compliance to state guidelines. The system has a backend programmed in C# using the .NET framework, a front end programmed in TypeScript using the Angular framework, and a SQL database.',
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
        'Server Inventory Audit',
        'Checks the directories of a system and outputs the logs into a .txt file. The files can then be compared and the missing file names are displayed and outputted into another .txt file for easier viewing and logging purposes. Outputted files can be opened directly through the program for ease of use. There is a terminal version and a version with a GUI. Programmed using Python 3.',
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
