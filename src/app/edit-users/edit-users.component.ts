import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  //sets value to empty
  value: string = '';
  // sending an EventEmitter dashboard
  @Output() addUser = new EventEmitter<string>();
  // sending an EventEmitter dashboard
  @Output() removeUser = new EventEmitter<void>();

  @Input() userL: string[];

  constructor() { }

  ngOnInit() {
  }

  // adds user if we type anything and click the button add the if statement checks so you have to type something this is an @Output so we sent this to value to dashboard through the html file and receives a variable in the ts file where we push it to the array
  onClickAddUser(): void {
    if (this.value !== '') {
      this.addUser.emit(this.value);
      this.value = '';
    }
  }

  // remove user if we click the button remove, removes the last added user from the array in the dashboard through the html file and receives
  onClickRemoveUser(): void {
    if (this.userL.length > 1) {
      this.removeUser.emit();
    }
  }
}
