import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { user } from '../user/user.component';
import { Repo } from '../repo/repo.component';
import {ServiceService} from '../service.service'
@Component({
  selector: 'app-gitsearch-form',
  templateUrl: './gitsearch-form.component.html',
  styleUrls: ['./gitsearch-form.component.css']
})
export class GitsearchFormComponent implements OnInit {
  User:user[];
  repo: Repo [];

  @Output() emitUser = new EventEmitter<any>()

  userName:string;

  user(){
    this.emitUser.emit(this.userName);
  }

  constructor() { }

  ngOnInit(): void {

  }

}

