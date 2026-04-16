import { Routes } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

export const routes: Routes = [
  { path: '', component: ToolbarComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];
