import {RouterModule, Routes} from '@angular/router';
import {AllUsersComponent} from './admin/users/all-users/all-users.component';
import {ModuleWithProviders} from '@angular/core';

const APP_ROUTES:Routes = [
    {path:'admin/users', component:AllUsersComponent}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);