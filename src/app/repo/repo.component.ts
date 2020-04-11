import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class Repo {
  constructor(public name:string, public html_url:string,public description:string,public language:string){}
}