import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'
const randmIndex= Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
//this access to this claass
export class UserComponent {
  selectedUser = DUMMY_USERS[randmIndex];
//getter
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
}
