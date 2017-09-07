import {Component, OnInit} from '@angular/core';
import {User} from '../../../user.interface';
import {UserServies} from '../../../user.servies';
import {Response} from '@angular/http';

@Component({
    selector: 'app-all-users',
    templateUrl: './all-users.component.html',
    styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

    users: User[];

    constructor(private userService: UserServies) {
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
