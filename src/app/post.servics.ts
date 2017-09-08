import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class PostServics {
    constructor(private http: Http) {
    }

    getPosts(): Observable<any>{
        return this.http.get('http://localhost:8000/api/posts')
            .map(
                (response: Response) => {
                    return response.json().posts;
                }
            );
    }
}