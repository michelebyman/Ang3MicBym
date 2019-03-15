import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input() failedUser:boolean;

  constructor(private authService: AuthService) { }
  
  ngOnInit() {
  }

  closeModal(){
    this.authService.userLoggedIn = !this.authService.userLoggedIn;
    }
    
  }
