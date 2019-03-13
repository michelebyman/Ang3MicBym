import { Injectable } from '@angular/core';
import { AdminFull } from './admin-full.model';
import { AdminLogin } from './admin-login.model';
import { Router } from '@angular/router';
 // handle login service and logout service
@Injectable({
  providedIn: 'root'
})

  export class AuthService {
  
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
  // checks if there is a user in local storage
  checkIfLoggedIn(){
    return localStorage.getItem('user');
  }
  // gets a parameter from the input field and store ut in local storage
  public login(user:AdminLogin){
    let userLoggedIn = this.checkLogin(user);
    if (userLoggedIn.length) {
      localStorage.setItem('user', user.email);
      this.router.navigateByUrl('/dashboard');
    } 
  }

  private checkLogin(user:AdminLogin){
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
  }
}
