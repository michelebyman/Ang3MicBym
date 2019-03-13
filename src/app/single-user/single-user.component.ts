import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

//Displays a user if someone clicks on the list-item in dashboard and change the url/path
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUSerComponent implements OnInit {
  userId: string;
  users:any;
  newUserName:any;
  newUserUsername:any;
  newUserCity:any;
  newUserStreet:any;
  newUserZip:any;
  

  constructor(private route: ActivatedRoute, private userService: UsersService) {
    this.userService.getJson().subscribe(
        (response: any) => {
          let newArr = response.map(element => {
            return element;
          })
        let newObject = newArr.filter(user => {
          return user.name === this.userId
        })
        this.newUserName = newObject[0].name;
        this.newUserUsername = newObject[0].username;
        this.newUserCity = newObject[0].address.city;
        this.newUserStreet = newObject[0].address.street;
        this.newUserZip = newObject[0].address.zipcode;
        },
        (error) => console.log('error', error),
        () => console.log('completed')
      );;    
  }


   

  ngOnInit() {
    //we get our parameters through subscribe after the injection
    this.route.params.subscribe(params => {
      this.userId = params.id;
    })
  }

}
