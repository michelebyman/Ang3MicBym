import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
// shows the navbar
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(private authservice: AuthService) {

  }

  ngOnInit() {
  }

}
