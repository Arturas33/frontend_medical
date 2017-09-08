import {Component, OnInit} from '@angular/core';
import {User} from '../../../user.interface';
import {UserServics} from '../../../user.servics';
import {Response} from '@angular/http';

@Component({
    selector: 'app-all-users',
    templateUrl: './all-users.component.html',
    styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

    users: User[];

    constructor(private userService: UserServics) {
    }

    ngOnInit() {
    }

    onGetUsers() {
        this.userService.getUsers().subscribe(
            (users: User[]) => this.users = users,
            (error: Response) => console.log(error)
        );
    }

}
