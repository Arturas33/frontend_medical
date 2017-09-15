import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {RolesComponent} from './roles.component';
import {CommonModule} from '@angular/common';
import {AuthService} from '../auth.service';

import {RolesService} from './shared/roles.service';
import {RoleFormComponent} from './role-form/role-form.component';


@NgModule({
    declarations: [
        RolesComponent,
        RoleFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
    ],

    exports: [
        RolesComponent
    ],
    providers: [AuthService, RolesService],
})
export class RolesModule { }