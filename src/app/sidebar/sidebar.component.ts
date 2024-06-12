import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    // { path: '/table',         title: 'Users List',        icon:'nc-tile-56',    class: '' },
    // { path: '/typography',    title: 'Withdraw List',        icon:'nc-caps-small', class: '' },
    // { path: '/upgrade',       title: 'Deposit List',    icon:'nc-spaceship',  class: 'active-pro' },
    // { path: '/logout',    title: 'Deconnexion',        icon:'nc-caps-small', class: '' },


    { path: '/dashboard',     title: 'Dashboard',         icon: 'fas fa-tachometer-alt',       class: '' },
    { path: '/users',         title: 'Users List',        icon: 'fas fa-users',    class: '' },
    { path: '/withdraws',    title: 'Withdraw List',     icon: 'fas fa-money-check-alt', class: '' },
    { path: '/deposit',       title: 'Deposit List',      icon: 'fas fa-wallet',  class: '' },
    // { path: '/logout',        title: 'Deconnexion',       icon: 'fas fa-sign-out-alt', class: '' },
    

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    constructor(private authService: AuthService){}
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    logOut(){
        this.authService.logout()
    }
}
