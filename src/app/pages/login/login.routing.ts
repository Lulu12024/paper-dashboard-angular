import { Routes } from '@angular/router';
import { LoginComponent } from 'app/pages/login/login.component';
import { AuthGuard } from 'app/pages/guard/auth.guard';

export const LoginRoutes: Routes = [
    { path: 'login',        component: LoginComponent },
    { path: '', component: LoginComponent },
    
];
