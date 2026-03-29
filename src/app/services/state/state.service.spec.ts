import { TestBed } from '@angular/core/testing';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { of } from 'rxjs';

import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;
  let breakpointObserver: jasmine.SpyObj<BreakpointObserver>;

  beforeEach(() => {
    const breakpointObserverSpy = jasmine.createSpyObj('BreakpointObserver', ['observe']);

    TestBed.configureTestingModule({
      providers: [
        StateService,
        { provide: BreakpointObserver, useValue: breakpointObserverSpy }
      ]
    });

    service = TestBed.inject(StateService);
    breakpointObserver = TestBed.inject(BreakpointObserver) as jasmine.SpyObj<BreakpointObserver>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initial state', () => {
    it('should initialize with default values', () => {
      expect(service.isMobilePortrait).toBe(false);
      expect(service.isDarkMode).toBe(false);
    });
  });

  describe('isMobile()', () => {
    it('should set isMobilePortrait to true when HandsetPortrait breakpoint matches', () => {
      breakpointObserver.observe.and.returnValue(of({
        matches: true,
        breakpoints: { [Breakpoints.HandsetPortrait]: true }
      }));

      service.isMobile();

      expect(service.isMobilePortrait).toBe(true);
    });

    it('should set isMobilePortrait to false when HandsetPortrait breakpoint does not match', () => {
      breakpointObserver.observe.and.returnValue(of({
        matches: false,
        breakpoints: { [Breakpoints.HandsetPortrait]: false }
      }));

      service.isMobile();

      expect(service.isMobilePortrait).toBe(false);
    });

    it('should observe HandsetPortrait breakpoint', () => {
      breakpointObserver.observe.and.returnValue(of({
        matches: false,
        breakpoints: { [Breakpoints.HandsetPortrait]: false }
      }));

      service.isMobile();

      expect(breakpointObserver.observe).toHaveBeenCalledWith([Breakpoints.HandsetPortrait]);
    });
  });

  describe('toggleDarkTheme()', () => {
    beforeEach(() => {
      // Reset body classes
      document.body.classList.remove('dark-theme');
    });

    it('should toggle isDarkMode from false to true', () => {
      service.isDarkMode = false;
      service.toggleDarkTheme();
      expect(service.isDarkMode).toBe(true);
    });

    it('should toggle isDarkMode from true to false', () => {
      service.isDarkMode = true;
      service.toggleDarkTheme();
      expect(service.isDarkMode).toBe(false);
    });

    it('should add dark-theme class to body when toggling to dark mode', () => {
      service.isDarkMode = false;
      service.toggleDarkTheme();
      expect(document.body.classList.contains('dark-theme')).toBe(true);
    });

    it('should remove dark-theme class from body when toggling to light mode', () => {
      document.body.classList.add('dark-theme');
      service.isDarkMode = true;
      service.toggleDarkTheme();
      expect(document.body.classList.contains('dark-theme')).toBe(false);
    });
  });

  describe('scrollToTop()', () => {
    it('should call document.body.scrollTo with smooth behavior', () => {
      const scrollToSpy = spyOn(document.body, 'scrollTo');

      service.scrollToTop();

      expect(scrollToSpy).toHaveBeenCalled();
    });
  });
});
