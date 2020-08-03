import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  avatarUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMRBqTeY-dTImnv-0qS4j32of8dVtWelSEMw&usqp=CAU';
  constructor() {
    this.users = this.getUsers();

  }

  getUsers(): User[] {
    return [
      {id: 1, email: 'toan@gmail.com', password: 'ageageaw', username: 'toalv', avatar: this.avatarUrl},
      {id: 2, email: 'he@gmail.com', password: 'ageageaw', username: 'toalv', avatar: this.avatarUrl},
      {id: 3, email: 'gawetoan@gmail.com', password: 'ageageaw', username: 'toalv', avatar: this.avatarUrl},
      {id: 4, email: 'gawgtoan@gmail.com', password: 'ageageaw', username: 'toalv', avatar: this.avatarUrl},
      {id: 5, email: 'bbaetoan@gmail.com', password: 'ageageaw', username: 'toalv', avatar: this.avatarUrl},

    ];
  }

  ngOnInit(): void {
  }

  deleteUser(user: User): void {
    console.log(user);
  }

  public viewMore(user: User): void {
    console.log('view more user', user);
  }

}
