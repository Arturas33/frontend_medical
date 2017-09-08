import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {AllUsersComponent} from './admin/users/all-users/all-users.component';
import {UserComponent} from './admin/users/user/user.component';
import {HttpModule} from '@angular/http';
import {UserServics} from './user.servics';
import {PostComponent} from './admin/posts/post/post.component';
import {PostServics} from './post.servics';
import {AllPostsComponent} from './admin/posts/all-posts/all-posts.component';

@NgModule({
    declarations: [
        AppComponent,
        AllUsersComponent,
        UserComponent,
        AllPostsComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        routing,
    ],


    providers: [UserServics, PostServics],
    bootstrap: [AppComponent],

})
export class AppModule {
}
