import { TestBed } from '@angular/core/testing';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { of } from 'rxjs';

import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;
  let breakpointObserver: any;

  beforeEach(() => {
    const breakpointObserverSpy = {
      observe: jest.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        StateService,
        { provide: BreakpointObserver, useValue: breakpointObserverSpy }
      ]
    });

    service = TestBed.inject(StateService);
    breakpointObserver = TestBed.inject(BreakpointObserver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initial state', () => {
    it('should initialize with default values', () => {
      expect(service.isMobilePortrait()).toBe(false);
      expect(service.isDarkMode()).toBe(false);
    });
  });

  describe('isMobile()', () => {
    it('should set isMobilePortrait to true when HandsetPortrait breakpoint matches', () => {
      breakpointObserver.observe.mockReturnValue(of({
        matches: true,
        breakpoints: { [Breakpoints.HandsetPortrait]: true }
      }));

      service.isMobile();

      expect(service.isMobilePortrait()).toBe(true);
    });

    it('should set isMobilePortrait to false when HandsetPortrait breakpoint does not match', () => {
      breakpointObserver.observe.mockReturnValue(of({
        matches: false,
        breakpoints: { [Breakpoints.HandsetPortrait]: false }
      }));

      service.isMobile();

      expect(service.isMobilePortrait()).toBe(false);
    });

    it('should observe HandsetPortrait breakpoint', () => {
      breakpointObserver.observe.mockReturnValue(of({
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
      // Reset isDarkMode to false
      service.isDarkMode.set(false);
    });

    it('should toggle isDarkMode from false to true', () => {
      expect(service.isDarkMode()).toBe(false);
      service.toggleDarkTheme();
      expect(service.isDarkMode()).toBe(true);
    });

    it('should toggle isDarkMode from true to false', () => {
      service.isDarkMode.set(true);
      service.toggleDarkTheme();
      expect(service.isDarkMode()).toBe(false);
    });

    it('should add dark-theme class to body when toggling to dark mode', () => {
      service.isDarkMode.set(false);
      service.toggleDarkTheme();
      expect(document.body.classList.contains('dark-theme')).toBe(true);
    });

    it('should remove dark-theme class from body when toggling to light mode', () => {
      document.body.classList.add('dark-theme');
      service.isDarkMode.set(true);
      service.toggleDarkTheme();
      expect(document.body.classList.contains('dark-theme')).toBe(false);
    });
  });

  describe('scrollToTop()', () => {
    it('should call window.scrollTo with smooth behavior', () => {
      const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation();

      service.scrollToTop();

      expect(scrollToSpy).toHaveBeenCalled();
    });
  });
});
