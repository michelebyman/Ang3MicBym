import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// handle our users from JsonPlaceholder
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    
  }
  //when we call this function we get an observable which we can use anywhere to subscribe to and handle the users
  getJson() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}



