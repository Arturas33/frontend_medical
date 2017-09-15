import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth.service';
import {Role} from './role';



@Injectable()
export class RolesService {
    constructor(private http: Http, private authService: AuthService) {

    }

    getPosts(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://becms.dev/api/roles?token=' + token).map((response: Response) => {
            return response.json().roles;
        });
    }

    createRole(role) {
        const token = this.authService.getToken();
        return this.http.post('http://becms.dev/api/roles?token=' + token,
            role,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
        ).map(
            (response: Response) => {
                return true;
            }
        );
    }

    updateRole(role) {
        const token = this.authService.getToken();
        return this.http.put('http://becms.dev/api/roles/' + role.id + '?token=' + token,
            role,
            {headers: new Headers({'Content-type': 'application/json'})}
        ).map(
            (response: Response) => response.json()
        );
    }

    deletePost(id: any) {
        const token = this.authService.getToken();
        return this.http.delete('http://becms.dev/api/roles/' + id + '?token=' + token);
    }

    getRole(id: any): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://becms.dev/api/roles/' + id + '?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().role;
                }
            );
    }
}
