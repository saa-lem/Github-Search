import { Component, OnInit } from '@angular/core';
import {GitserviceService} from '../services/gitservice.service'
import { Gitrepo } from '../gitrepo';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  gitrepos:Gitrepo;

    constructor(public Gitservice: GitserviceService) {
     }


    ngOnInit() {
      this.searchRepo("marcusjnls");
    }

    searchRepo(searchTerm){
      this.Gitservice.searchRepo(searchTerm).then(
        ()=>{
          this.gitrepos=this.Gitservice.gitrepos;

        },
        (error)=>{
          console.log(error)
        }
      )
    }
  }

