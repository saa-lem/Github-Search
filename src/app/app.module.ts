import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { HttpServiceComponent } from './http-service/http-service.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    GitsearchFormComponent,
    NavbarComponent,
    RepoComponent,
    UserComponent,
    HttpServiceComponent,
    GitsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
