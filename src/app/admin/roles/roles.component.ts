import {Component, OnInit} from '@angular/core';

import {Response} from '@angular/http';

import {RolesService} from './shared/roles.service';
import {Role} from './shared/role';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

    private roles: Role[] = [];

    constructor(private rolesService: RolesService) {
    }

    ngOnInit() {
        this.rolesService.getPosts().subscribe(
            roles => this.roles = roles,
            (error: Response) => console.log(error)
        );
    }

    onDelete(role) {
        if (confirm('Are you sure you want to delete ' + role.name + '?')) {
            const index = this.roles.indexOf(role);
            this.roles.splice(index, 1);

            this.rolesService.deletePost(role.id)
                .subscribe(null,
                    error => {
                        alert('could not delete user.');
                        this.roles.splice(index, 0, role);
                    });
        }
    }

}