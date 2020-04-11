import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class user {
  constructor(public avatar_url:string,public bio:string,public followers_url:string,public following_url:string,public name:string, login:string){}
}
