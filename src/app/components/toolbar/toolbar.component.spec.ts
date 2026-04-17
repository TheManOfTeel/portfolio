import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { StateService } from '../../services/state/state.service';
import { BreakpointObserver } from '@angular/cdk/layout';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let stateService: StateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ToolbarComponent,
        AboutComponent,
        ProjectsComponent,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule,
        MatRippleModule,
        MatExpansionModule
      ],
      providers: [
        provideNoopAnimations(),
        StateService,
        BreakpointObserver
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
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

  describe('downloadResume()', () => {
    it('should open resume PDF in new window', () => {
      jest.spyOn(window, 'open').mockImplementation();

      component.downloadResume();

      expect(window.open).toHaveBeenCalledWith('assets/cv/Resume.pdf', '_blank');
    });
  });

  describe('template rendering', () => {
    it('should render toolbar with logo and name', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const toolbar = compiled.querySelector('mat-toolbar');
      expect(toolbar).toBeTruthy();

      const img = toolbar?.querySelector('img');
      expect(img).toBeTruthy();
      expect(img?.getAttribute('src')).toBe('assets/images/web-dev.png');

      const name = toolbar?.querySelector('h1');
      expect(name).toBeTruthy();
      expect(name?.textContent?.trim()).toBe('Danny Teel');
    });

    it('should render dark mode toggle button', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const buttons = compiled.querySelectorAll('button');
      expect(buttons.length).toBeGreaterThan(0);

      // Should have at least one button for dark mode toggle
      const darkModeButton = Array.from(buttons).find(btn =>
        btn.textContent?.includes('Mode') || btn.textContent?.includes('Dark') || btn.textContent?.includes('Light')
      );
      expect(darkModeButton).toBeTruthy();
    });

    it('should render download resume button', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const buttons = compiled.querySelectorAll('button');
      const resumeButton = Array.from(buttons).find(btn =>
        btn.textContent?.includes('Download') || btn.textContent?.includes('Resume')
      );
      expect(resumeButton).toBeTruthy();
    });

    it('should render mat-tab-group with About and Projects tabs', () => {
      const compiled = fixture.nativeElement as HTMLElement;

      // mat-tab-group IS rendered as a real element
      const tabGroup = compiled.querySelector('mat-tab-group');
      expect(tabGroup).toBeTruthy();

      // mat-tab is NOT a real DOM element — query the rendered label buttons instead
      // Angular Material renders tab labels into .mat-mdc-tab elements
      const tabLabelButtons = compiled.querySelectorAll('.mat-mdc-tab');
      expect(tabLabelButtons.length).toBe(2);

      // Text content of each label button includes icon + divider + label text,
      // so use textContent with trim() and check contains rather than exact match,
      // OR target the text node more precisely
      expect(tabLabelButtons[0]?.textContent?.trim()).toContain('About');
      expect(tabLabelButtons[1]?.textContent?.trim()).toContain('Projects');
    });

    it('should render AboutComponent in first tab', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const aboutComponent = compiled.querySelector('app-about');
      expect(aboutComponent).toBeTruthy();
    });

    it('should render ProjectsComponent in second tab', () => {
      const compiled = fixture.nativeElement as HTMLElement;

      const tabLabelButtons = compiled.querySelectorAll<HTMLElement>('.mat-mdc-tab');
      tabLabelButtons[1].click();

      fixture.detectChanges();

      const projectsComponent = compiled.querySelector('app-projects');
      expect(projectsComponent).toBeTruthy();
    });

    it('should apply dark-img class to logo when in dark mode', () => {
      stateService.isDarkMode.set(true);
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      const img = compiled.querySelector('mat-toolbar img');
      expect(img?.classList.contains('dark-img')).toBe(true);
    });

    it('should not apply dark-img class to logo when in light mode', () => {
      stateService.isDarkMode.set(false);
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      const img = compiled.querySelector('mat-toolbar img');
      expect(img?.classList.contains('dark-img')).toBe(false);
    });
  });
});
