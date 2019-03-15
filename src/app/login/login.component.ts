import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminLogin } from '../admin-login.model';
import { AdminFull } from '../admin-full.model';
//handle user methods login and logout
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  loginModel: AdminLogin = new AdminLogin('','');
  user:string;
  showRegisterView:boolean = true;
  creatNewUserModel: AdminFull = new AdminFull('', '', '', '');

 

  constructor(private authService: AuthService ) {
    
  }

  ngOnInit() {
    // calls the function
    this.checkUser();
  }

  // calls the login-function and passes in the AdminLogin-model
  onSubmit(): void {
    this.authService.login(this.loginModel); 
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

//toggle view when we want to register a user 
  toggleView(){
    this.showRegisterView = !this.showRegisterView;
  }

  //pushes the new user to admin
  createNewUser(){
    this.authService.admins.push(this.creatNewUserModel);
    this.toggleView();
  }
}
