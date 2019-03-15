import { Injectable } from '@angular/core';
import { AdminFull } from './admin-full.model';
import { AdminLogin } from './admin-login.model';
import { Router } from '@angular/router';
 // handle login service and logout service checks if a user matches the email and password in the array below, navigates to dashboard if match. 
@Injectable({
  providedIn: 'root'
})

  export class AuthService {
    failedUser: boolean = false;
    userLoggedIn:any;
  
  public admins: AdminFull[] = [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    password: '1234567890'
  }, {
    firstName: 'Kylie',
    lastName: 'Johnson',
    email: 'kylie.johnson@email.com',
    password: '0987654321'
  }];

  constructor(private router: Router) {
  }
  // checks if there is a user in local storage and returns it
  checkIfLoggedIn(){
    return localStorage.getItem('user');
  }
  // gets a parameter from the input field and store it in local storage if it match the array above using the checkLogin function for validation
  public login(user:AdminLogin){
    this.userLoggedIn = this.checkLogin(user);
    if (this.userLoggedIn.length) {
      localStorage.setItem('user', user.email);
      this.router.navigateByUrl('/dashboard');
    } 
  }
  // validation-function with filter to check if the user match any of the users in the list above
  private checkLogin(user:AdminLogin){
    // returns the user to the checkLogin where we set the localStorage
    const newArr = this.admins.filter((admin) => {
      if (admin.email === user.email && admin.password === user.password) {
        return admin;
      } 
    });

    return newArr;
  }

 // clear local storage 
  public logout(){
    localStorage.clear();
    this.userLoggedIn = undefined;
  }
}
