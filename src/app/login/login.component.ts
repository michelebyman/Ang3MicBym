import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminLogin } from '../admin-login.model';
//handle user methods login and logout
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  model: AdminLogin = new AdminLogin('','');
  user:string;
 

  constructor(private authService: AuthService ) {
   
  }

  ngOnInit() {
    // calls the function
    this.checkUser();
  }

  onSubmit(): void {
    this.authService.login(this.model);        
  }

  //when someone press the login button and calls the service function- login() with the parameter username and length control and regex match to see that the user includes a number
 
   
  

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
