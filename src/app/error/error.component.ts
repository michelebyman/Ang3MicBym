import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
// error modal that shows up based on if there is a correct user or not
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private authService: AuthService) { }
  
  ngOnInit() {
  }
  // switch a state when pressing a button
  closeModal(){
    this.authService.userLoggedIn = !this.authService.userLoggedIn;
    }
    
  }
