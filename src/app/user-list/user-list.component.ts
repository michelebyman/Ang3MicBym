import { Component, OnInit, Input } from '@angular/core';
//receives a list from dashboard, go through it with a *ngFor saves all item in one variable and it also has a method which makes it possible to toggle a color
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  //receives the userList through the html from the dashboard
  @Input() users: string[];

  constructor() {
  }

  ngOnInit() {
  }

  //adding a property:boolean and creating a method where we use the property on a click-event so we can change value from true to false, where we add two different css-attributes.
  changeColor: boolean = true;
  onClickToggle(): void {
    this.changeColor = !this.changeColor;
  }

}
