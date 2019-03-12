import { Injectable } from '@angular/core';
import { AdminFull } from './admin-full.model';
 // handle loging service and logout service
@Injectable({
  providedIn: 'root'
})

  export class AuthService {

  loggedUser:string;
  
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

  constructor() {
  }
  // checks if there is a user in local storage
  checkIfLoggedIn(){
    return localStorage.getItem('user');
  }
  // gets a parameter from the input field and store ut in local storage
  public login(user:string){
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }

 // clear local storage 
  public logout(){
    localStorage.clear();
    this.loggedUser = undefined;
  }

}
