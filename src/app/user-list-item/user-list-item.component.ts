import { Component, OnInit, Input } from '@angular/core';
// render all item it receives from the user list component
@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})

export class UserListItemComponent implements OnInit {
  // receives a user from userList
  @Input() user: string;
  // receives a color from userList
  @Input() changeColor: boolean;

  constructor() { }

  ngOnInit() {
  }

}
