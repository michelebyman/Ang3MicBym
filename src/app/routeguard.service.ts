import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

// route guard that sets a value to true or false which controls if we have access to certain urls
@Injectable({
  providedIn: 'root'
})
//Sorry I forgot camelCase
export class RouteguardService implements CanActivate {

  user: string;

  constructor(private authService: AuthService, public router: Router) {

  }
  //returns a boolean, checks if there is a user or not if we click on paths were we have our guard. 
  canActivate(): boolean {
    this.user = this.authService.checkIfLoggedIn();
    if (!this.user) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
