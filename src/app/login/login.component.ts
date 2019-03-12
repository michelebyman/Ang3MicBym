import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
//handle user methods login and logout
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  user: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    // calls the function
    this.checkUser();
  }

  //when someone press the login button and calls the service function- login() with the parameter username and length control and regex match to see that the user includes a number
  login(): void {
    if (this.username.length >= 10 && this.username.match(/\d/)) {
      this.authService.login(this.username)
      this.router.navigateByUrl('/dashboard');
    } else {
      alert("you ned at least 10 characters including a number");
    }
  }

  //when someone press the logout button and calls the service function- logout() with the parameter and calls the checkUser
  logout(): void {
    this.authService.logout()
    this.checkUser();
  }

  //checks if there is a user or not stored in the local storage or not
  checkUser(): void {
    this.user = this.authService.checkIfLoggedIn();
  }
}
