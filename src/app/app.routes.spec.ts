import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from './app.routes';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolbarComponent],
  template: '<router-outlet></router-outlet>',
})
class TestRootComponent {}

describe('App Routes', () => {
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRootComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should navigate to empty path and load ToolbarComponent', async () => {
    const routeConfig = routes.find((route) => route.path === '');
    expect(routeConfig).toBeDefined();
    expect(routeConfig?.component).toBe(ToolbarComponent);
  });

  it('should have a wildcard route that redirects to home', () => {
    const wildcardRoute = routes.find((route) => route.path === '**');
    expect(wildcardRoute).toBeDefined();
    expect(wildcardRoute?.pathMatch).toBe('full');
    expect(wildcardRoute?.redirectTo).toBe('/');
  });

  it('should have routes in correct order', () => {
    expect(routes.length).toBe(2);
    expect(routes[0].path).toBe('');
    expect(routes[1].path).toBe('**');
  });
});
