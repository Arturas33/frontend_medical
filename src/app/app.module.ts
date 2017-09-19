import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AdminModule} from './admin/admin.module';
import {adminRouting} from './admin/admin.routing';
import {UsersModule} from './admin/users/users.module';
import {usersRouting} from './admin/users/users.routing';
import {PostsModule} from './admin/posts/posts.module';
import {postsRouting} from './admin/posts/posts.routing';
import {RolesModule} from './admin/roles/roles.module';
import {rolesRouting} from './admin/roles/roles.routing';
import { BlogComponent } from './blog/blog.component';
import { MenuNavBarFrontendComponent } from './menu-nav-bar-frontend/menu-nav-bar-frontend.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    BlogComponent,
    MenuNavBarFrontendComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      routing,
      AdminModule,
      adminRouting,
      ReactiveFormsModule,
      UsersModule,
      usersRouting,
      PostsModule,
      postsRouting,
      RolesModule,
      rolesRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
