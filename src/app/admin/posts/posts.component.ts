import {Component, OnInit} from '@angular/core';

import {Response} from '@angular/http';

import {PostsService} from './shared/posts.service';
import {Post} from './shared/post';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    private posts: Post[] = [];

    constructor(private postsService: PostsService) {
    }

    ngOnInit() {
        this.postsService.getPosts().subscribe(
            posts => this.posts = posts,
            (error: Response) => console.log(error)
        );
    }

    onDelete(post) {
        if (confirm('Are you sure you want to delete ' + post.title + '?')) {
            const index = this.posts.indexOf(post);
            this.posts.splice(index, 1);

            this.postsService.deletePost(post.id)
                .subscribe(null,
                    error => {
                        alert('could not delete user.');
                        this.posts.splice(index, 0, post);
                    });
        }
    }

}