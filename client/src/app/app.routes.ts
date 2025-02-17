import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
    { path: 'login', component: HomepageComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full'}
];
