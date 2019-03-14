import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';

//handle users in the userList and checks if user is authorized or not and 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList: any[] = [];
  user: any;

  constructor(private authService: AuthService, private http: UsersService) {
    // runs the method
    this.checkUser();
    //subscribes to Json and pushes the name of the object to our userList 
    this.http.getJson().subscribe(
      (response: any) => {
        response.forEach(element => {
          this.userList.push(element.name)  
        })
      },
      (error) => console.log('error', error),
      () => console.log('completed')
    );;
  }

  ngOnInit() {
  }

  // checks the user and sets this.user to the same value we have in the local storage
  checkUser(): void {
    this.user = this.authService.checkIfLoggedIn();
  }


  //receives parameter from edit-users.component.ts(@Output addUser: new EventEmitter) through the dashboard.component.html where we add (addUser)="onAddUser($event) then Adds user to userList[]
  onAddUser(user: any): void {
    this.userList.push(user);
  }
  //removes user from userList[] but not the last one
  onRemoveUser(): void {
    if (this.userList.length > 1) {
      this.userList.pop();
    }

  }
}
