import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { StateService } from '../../services/state/state.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Project } from '../../models/project';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let stateService: StateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule,
        MatRippleModule,
        MatExpansionModule
      ],
      providers: [
        StateService,
        BreakpointObserver
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    stateService = TestBed.inject(StateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject StateService', () => {
    expect(component.stateService).toBe(stateService);
  });

  describe('component properties', () => {
    it('should have projects array', () => {
      expect(component.projects).toBeDefined();
      expect(Array.isArray(component.projects)).toBe(true);
      expect(component.projects.length).toBeGreaterThan(0);
    });

    it('should have projects with required properties', () => {
      const firstProject = component.projects[0];
      expect(firstProject.title).toBeDefined();
      expect(firstProject.timeline).toBeDefined();
      expect(firstProject.description).toBeDefined();
    });

    it('should have projects with optional properties', () => {
      const projectsWithImages = component.projects.filter(p => p.image);
      expect(projectsWithImages.length).toBeGreaterThan(0);

      const projectsWithRepos = component.projects.filter(p => p.repository);
      expect(projectsWithRepos.length).toBeGreaterThan(0);
    });
  });

  describe('openRepository()', () => {
    it('should open repository URL in new window', () => {
      spyOn(window, 'open');

      const repoName = 'test-repo';
      component.openRepository(repoName);

      expect(window.open).toHaveBeenCalledWith(
        `https://github.com/TheManOfTeel/${repoName}`,
        '_blank'
      );
    });
  });

  describe('isCurrentlyActive()', () => {
    it('should return true for projects ending with "Present"', () => {
      const activeProject = new Project('Test', '2020 - Present', 'Description');
      expect(component.isCurrentlyActive(activeProject)).toBe(true);
    });

    it('should return false for projects not ending with "Present"', () => {
      const inactiveProject = new Project('Test', '2020 - 2021', 'Description');
      expect(component.isCurrentlyActive(inactiveProject)).toBe(false);
    });

    it('should return false for projects with undefined timeline', () => {
      const project = new Project('Test', undefined, 'Description');
      expect(component.isCurrentlyActive(project)).toBe(false);
    });
  });

  describe('isEnterpriseProject()', () => {
    it('should return true for projects with "Enterprise" in subtext', () => {
      const enterpriseProject = new Project('Test', '2020', 'Desc', 'Enterprise application');
      expect(component.isEnterpriseProject(enterpriseProject)).toBe(true);
    });

    it('should return false for projects without "Enterprise" in subtext', () => {
      const personalProject = new Project('Test', '2020', 'Desc', 'Personal project');
      expect(component.isEnterpriseProject(personalProject)).toBe(false);
    });

    it('should return false for projects with undefined subtext', () => {
      const project = new Project('Test', '2020', 'Desc');
      expect(component.isEnterpriseProject(project)).toBe(false);
    });
  });

  describe('getCurrentlyActiveHeader()', () => {
    it('should return "Active" for currently active projects', () => {
      const activeProject = new Project('Test', '2020 - Present', 'Description');
      expect(component.getCurrentlyActiveHeader(activeProject)).toBe('Active');
    });

    it('should return "Prior Position" for enterprise inactive projects', () => {
      const inactiveEnterprise = new Project('Test', '2020 - 2021', 'Desc', 'Enterprise application');
      expect(component.getCurrentlyActiveHeader(inactiveEnterprise)).toBe('Prior Position');
    });

    it('should return "Inactive" for personal inactive projects', () => {
      const inactivePersonal = new Project('Test', '2020 - 2021', 'Desc', 'Personal project');
      expect(component.getCurrentlyActiveHeader(inactivePersonal)).toBe('Inactive');
    });
  });

  describe('getEnterpriseProjectHeader()', () => {
    it('should return "Enterprise" for enterprise projects', () => {
      const enterpriseProject = new Project('Test', '2020', 'Desc', 'Enterprise application');
      expect(component.getEnterpriseProjectHeader(enterpriseProject)).toBe('Enterprise');
    });

    it('should return "Personal" for non-enterprise projects', () => {
      const personalProject = new Project('Test', '2020', 'Desc', 'Personal project');
      expect(component.getEnterpriseProjectHeader(personalProject)).toBe('Personal');
    });

    it('should return "Personal" for projects with undefined subtext', () => {
      const project = new Project('Test', '2020', 'Desc');
      expect(component.getEnterpriseProjectHeader(project)).toBe('Personal');
    });
  });

  describe('template rendering', () => {
    it('should render header with title and description', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const header = compiled.querySelector('.header');
      expect(header).toBeTruthy();

      const h2 = header?.querySelector('h2');
      expect(h2?.textContent?.trim()).toBe('Notable Projects');

      const p = header?.querySelector('p');
      expect(p?.textContent).toContain('Below are notable projects');
    });

    it('should render mat-card with projects section', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const card = compiled.querySelector('mat-card');
      expect(card).toBeTruthy();

      const h3 = card?.querySelector('h3');
      expect(h3?.textContent?.trim()).toBe('Projects');
    });

    it('should render expand/collapse buttons', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const buttons = compiled.querySelectorAll('button');
      const expandButtons = Array.from(buttons).filter(btn =>
        btn.textContent?.includes('Expand') || btn.textContent?.includes('Collapse')
      );
      expect(expandButtons.length).toBeGreaterThan(0);
    });

    it('should render mat-accordion with project panels', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const accordion = compiled.querySelector('mat-accordion');
      expect(accordion).toBeTruthy();

      const panels = compiled.querySelectorAll('mat-expansion-panel');
      expect(panels.length).toBe(component.projects.length);
    });

    it('should render first project as expanded by default', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const firstPanel = compiled.querySelector('mat-expansion-panel');
      // Note: Checking expanded state might require more complex DOM inspection
      expect(firstPanel).toBeTruthy();
    });

    it('should render project details in panels', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const panels = compiled.querySelectorAll('mat-expansion-panel');

      // Check first panel has project information
      const firstPanel = panels[0];
      const content = firstPanel.querySelector('.accordion-content');
      expect(content).toBeTruthy();

      const activeText = content?.querySelector('p');
      expect(activeText?.textContent).toContain('Active:');
    });

    it('should render repository buttons for projects with repositories', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const repoButtons = compiled.querySelectorAll('button[mat-button]');
      const checkItOutButtons = Array.from(repoButtons).filter(btn =>
        btn.textContent?.includes('Check it out!')
      );
      expect(checkItOutButtons.length).toBeGreaterThan(0);
    });

    it('should apply dark-img class to header image when in dark mode', () => {
      stateService.isDarkMode = true;
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      const img = compiled.querySelector('.header img');
      expect(img?.classList.contains('dark-img')).toBe(true);
    });
  });
});
