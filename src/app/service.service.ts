import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import {UserComponent,user} from './user/user.component'
import {RepoComponent, Repo} from './repo/repo.component'
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { GitsearchComponent } from './gitsearch/gitsearch.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  myUser:user [] =[];
  myRepos:Repo [] = [];

  url = 'https://api.github.com/users/';  
  token = '?access_token='+environment.apiKey;


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

