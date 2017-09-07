import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './admin/users/all-users/all-users.component';
import { UserComponent } from './admin/users/user/user.component';
import {HttpModule} from '@angular/http';
import {UserServies} from './user.servies';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
      HttpModule,
      routing,
  ],
  providers: [UserServies],
  bootstrap: [AppComponent]
})
export class AppModule { }
