import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  myRepos: any[];
  myUser: any[];
  url: string;
  token: string;

  constructor(private http: HttpClient) { }

  saalem(userName:string){
    interface data {
      name:string;
      avatar_url:string;
      followers_url:string;
      following_url:string;
      bio:string;
      login:string;
    }

    let promise =  new Promise ((resolve, reject)=>{
      this.myUser = [];
      this.http.get<data>(this.url+userName+this.token).toPromise().then(
        (result)=>{
          this.myUser.push(result);
          resolve();
        },
        (error)=>{
          reject();
        })
    })
    return promise;
  }
  saalemRepo(userName:string){
    interface repoData {
      name: string;
      html_url: string;
      description:string;
      language:string;
    }
    let promise = new Promise ((resolve,reject)=>{
      this.myRepos = [];
      this.http.get<repoData>(this.url+userName+"/repos?"+this.token).toPromise().then(
        (result)=>{
          this.myRepos.push(result);
          resolve();
        },
        (error)=>{
          reject();
        })
    })
    return promise;
  }
}


  
