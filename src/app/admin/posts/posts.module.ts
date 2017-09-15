import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {PostsComponent} from './posts.component';
import {CommonModule} from '@angular/common';
import {AuthService} from '../auth.service';
import {PostsService} from './shared/posts.service';
import {PostFormComponent} from './post-form/post-form.component';


@NgModule({
    declarations: [
        PostsComponent,
        PostFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
    ],

    exports: [
        PostsComponent
    ],
    providers: [AuthService, PostsService],
})
export class PostsModule { }