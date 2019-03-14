import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

//Displays a user if someone clicks on the list-item in dashboard and change the url/path, subscribes on the backend to JsonPlaceholder-api
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUSerComponent implements OnInit {
  userId: string;
  users:any;
  userInfo:object[] = [];
  value:boolean = false;
  

  constructor(private route: ActivatedRoute, private userService: UsersService) {
    // get Json placeholder and subscribes to it, we also filter through the whole object to get
    this.userService.getJson().subscribe(
        (response: any) => {        
        const newObjectUser:any = response.filter(user => {
          return user.name === this.userId
        }) 
        // check if the user comes from Json or if it is a created user, we set a value so we can toggle in the html
        if (newObjectUser.length) {
          this.userInfo = newObjectUser;
          this.value = !this.value;
        }
        },
        (error) => console.log('error', error),
        () => console.log('completed')
      );   
  }


   

  ngOnInit() {
    //we get our parameters through subscribe after the injection
    this.route.params.subscribe(params => {
      this.userId = params.id;
    })
  }

}
