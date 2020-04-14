import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'repo', component: RepoComponent },
  { path: 'gitsearch', component:GitsearchComponent},
  { path: 'navbar', component:NavbarComponent},
  { path: 'gitsearch', component:GitsearchFormComponent},
  { path: 'app', component:AppComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
