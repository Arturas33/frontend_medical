import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../user.services";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
      private userService: UserService,

  ) { }

  ngOnInit() {
  }

}
