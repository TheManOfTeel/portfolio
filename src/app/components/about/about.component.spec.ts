import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StateService } from '../../services/state/state.service';
import { BreakpointObserver } from '@angular/cdk/layout';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let stateService: StateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AboutComponent,
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

    fixture = TestBed.createComponent(AboutComponent);
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
    it('should have summary text', () => {
      expect(component.summary).toBeDefined();
      expect(component.summary).toContain('Full Stack Software Engineer');
      expect(component.summary).toContain('years of experience');
    });

    it('should have skills array with expected categories', () => {
      expect(component.skills).toBeDefined();
      expect(component.skills.length).toBeGreaterThan(0);

      const skillTypes = component.skills.map(skill => skill.type);
      expect(skillTypes).toContain('Languages');
      expect(skillTypes).toContain('Frontend');
      expect(skillTypes).toContain('Backend');
      expect(skillTypes).toContain('Databases');
    });

    it('should have experiences array', () => {
      expect(component.experiences).toBeDefined();
      expect(component.experiences.length).toBeGreaterThan(0);

      const firstExperience = component.experiences[0];
      expect(firstExperience.companyName).toBeDefined();
      expect(firstExperience.positions).toBeDefined();
      expect(firstExperience.positions.length).toBeGreaterThan(0);
    });

    it('should have positions with required properties', () => {
      const firstPosition = component.experiences[0].positions[0];
      expect(firstPosition.title).toBeDefined();
      expect(firstPosition.date).toBeDefined();
      expect(firstPosition.tasks).toBeDefined();
      expect(Array.isArray(firstPosition.tasks)).toBe(true);
    });
  });

  describe('getYearsOfExperience()', () => {
    it('should calculate years of experience correctly', () => {
      const years = component.getYearsOfExperience();
      expect(typeof years).toBe('number');
      expect(years).toBeGreaterThanOrEqual(0);
    });

    it('should return integer value', () => {
      const years = component.getYearsOfExperience();
      expect(Number.isInteger(years)).toBe(true);
    });
  });

  describe('template rendering', () => {
    it('should render header with welcome message', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const header = compiled.querySelector('.header');
      expect(header).toBeTruthy();

      const h2 = header?.querySelector('h2');
      expect(h2?.textContent?.trim()).toBe('Welcome!');

      const p = header?.querySelector('p');
      expect(p?.textContent).toContain('Danny Teel');
    });

    it('should render mat-card with overview section', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const card = compiled.querySelector('mat-card');
      expect(card).toBeTruthy();

      const h3 = card?.querySelector('h3');
      expect(h3?.textContent?.trim()).toBe('Overview');
    });

    it('should render expand/collapse buttons', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const buttons = compiled.querySelectorAll('button');
      const expandButtons = Array.from(buttons).filter(btn =>
        btn.textContent?.includes('Expand') || btn.textContent?.includes('Collapse')
      );
      expect(expandButtons.length).toBeGreaterThan(0);
    });

    it('should render mat-accordion with multiple panels', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const accordion = compiled.querySelector('mat-accordion');
      expect(accordion).toBeTruthy();

      const panels = compiled.querySelectorAll('mat-expansion-panel');
      expect(panels.length).toBeGreaterThan(0);
    });

    it('should render summary panel with content', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const panels = compiled.querySelectorAll('mat-expansion-panel');
      const summaryPanel = Array.from(panels).find(panel =>
        panel.textContent?.includes('Summary')
      );
      expect(summaryPanel).toBeTruthy();

      const summaryContent = summaryPanel?.querySelector('.accordion-content p');
      expect(summaryContent?.textContent).toContain('Full Stack Software Engineer');
    });

    it('should render technical skills panel', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const panels = compiled.querySelectorAll('mat-expansion-panel');
      const skillsPanel = Array.from(panels).find(panel =>
        panel.textContent?.includes('Technical Skills')
      );
      expect(skillsPanel).toBeTruthy();
    });

    it('should render experience panel with company information', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const panels = compiled.querySelectorAll('mat-expansion-panel');
      const experiencePanel = Array.from(panels).find(panel =>
        panel.textContent?.includes('Experience')
      );
      expect(experiencePanel).toBeTruthy();

      // Check if company names are rendered
      const companyElements = experiencePanel?.querySelectorAll('p strong');
      expect(companyElements?.length).toBeGreaterThan(0);
    });

    it('should render education panel', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const panels = compiled.querySelectorAll('mat-expansion-panel');
      const educationPanel = Array.from(panels).find(panel =>
        panel.textContent?.includes('Education')
      );
      expect(educationPanel).toBeTruthy();

      const educationContent = educationPanel?.querySelector('.accordion-content');
      expect(educationContent?.textContent).toContain('Bachelor of Science');
      expect(educationContent?.textContent).toContain('Computer Science');
    });

    it('should apply dark-img class to header image when in dark mode', () => {
      stateService.isDarkMode.set(true);
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      const img = compiled.querySelector('.header img');
      expect(img?.classList.contains('dark-img')).toBe(true);
    });
  });
});
