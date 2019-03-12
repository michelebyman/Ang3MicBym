import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Displays a user if someone clicks on the list-item in dashboard and change the url/path
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUSerComponent implements OnInit {
  userId: string;

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit() {
    //we get our parameters through subscribe after the injection
    this.route.params.subscribe(params => {
      this.userId = params.id;
    })
  }

}
