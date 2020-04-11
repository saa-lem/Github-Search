import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgProgressModule } from '@ngx-progressbar/core';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    GitsearchFormComponent,
    NavbarComponent,
    RepoComponent,
    UserComponent,
    GitsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
