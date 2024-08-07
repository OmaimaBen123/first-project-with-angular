import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
//this access to this claass
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;
  get imagePath() {
    return 'assets/users/'+ this.avatar
  }
  onSelectUser() {
    
  }
}
