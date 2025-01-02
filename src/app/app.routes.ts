import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { ReservationsManagmentComponent } from './features/reservations-managment/reservations-managment.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: ReservationsManagmentComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: 'login' },
];
