import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { AuthGuard } from 'app/pages/guard/auth.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent ,canActivate: [AuthGuard] },
    // { path: 'user',           component: UserComponent },
    { path: 'users',          component: TableComponent ,canActivate: [AuthGuard]},
    { path: 'withdraws',     component: TypographyComponent ,canActivate: [AuthGuard] },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    { path: 'deposit',        component: UpgradeComponent ,canActivate: [AuthGuard] },
    // { path: 'login',        component: LoginComponent },
    // { path: '', component: LoginComponent },
    
];
