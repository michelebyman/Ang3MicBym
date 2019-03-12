import { Component, OnInit, Input } from '@angular/core';
// render all item it recievs from the user list component
@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})

export class UserListItemComponent implements OnInit {
  // recives a user from userList
  @Input() user: string;
  // recives a color from userList
  @Input() changeColor: boolean;

  constructor() { }

  ngOnInit() {
  }

}
