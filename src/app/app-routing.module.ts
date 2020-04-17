import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepositoriesComponent} from './repositories/repositories.component';
import {GithomeComponent} from './githome/githome.component';


const routes: Routes = [
  { path: 'profiles', component: GithomeComponent},
  { path: 'repos', component: RepositoriesComponent},
  { path: '', redirectTo:"/profiles", pathMatch:"full"},
  { path:'**', component:GithomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
