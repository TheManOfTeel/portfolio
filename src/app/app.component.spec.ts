import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StateService } from './services/state/state.service';
import { BreakpointObserver } from '@angular/cdk/layout';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let stateService: StateService;
  let breakpointObserver: BreakpointObserver;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterModule.forRoot([]),
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
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    stateService = TestBed.inject(StateService);
    breakpointObserver = TestBed.inject(BreakpointObserver);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'portfolio'`, () => {
    expect(component.title).toEqual('portfolio');
  });

  it('should inject StateService', () => {
    expect(component.stateService).toBe(stateService);
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      jest.spyOn(stateService, 'isMobile');
      // Mock window.matchMedia for all tests in this describe block
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });
    });

    it('should call stateService.isMobile() on init', () => {
      component.ngOnInit();
      expect(stateService.isMobile).toHaveBeenCalled();
    });

    it('should set dark mode based on prefers-color-scheme: dark', () => {
      jest.spyOn(window, 'matchMedia').mockReturnValue({
        matches: true,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn()
      } as any);

      component.ngOnInit();
      expect(stateService.isDarkMode()).toBe(true);
      expect(document.body.classList.contains('dark-theme')).toBe(true);
    });

    it('should not set dark mode when prefers-color-scheme is light', () => {
      jest.spyOn(window, 'matchMedia').mockReturnValue({
        matches: false,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn()
      } as any);

      component.ngOnInit();
      expect(stateService.isDarkMode()).toBe(false);
      expect(document.body.classList.contains('dark-theme')).toBe(false);
    });
  });

  it('should render router-outlet', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should render footer with toolbar', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const footer = compiled.querySelector('.footer-bar');
    expect(footer).toBeTruthy();
    expect(footer?.querySelector('mat-toolbar')).toBeTruthy();
  });

  it('should render LinkedIn and GitHub links in footer', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.footer-bar a');
    expect(links.length).toBe(2);
    expect(links[0].getAttribute('href')).toBe('https://www.linkedin.com/in/daniel-teel-a6465017b');
    expect(links[1].getAttribute('href')).toBe('https://github.com/TheManOfTeel');
  });

  it('should render scroll to top button in footer', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('.footer-bar button');
    expect(button).toBeTruthy();
    expect(button?.getAttribute('type')).toBe('button');
  });
});
