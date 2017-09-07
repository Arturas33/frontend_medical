import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class UserServies {
    constructor(private http: Http) {
    }

    getUsers(): Observable<any>{
        return this.http.get('http://localhost:8000/api/users')
            .map(
                (response: Response) => {
                    return response.json().users;
                }
            );
        }
    }