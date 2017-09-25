import {Injectable} from "@angular/core"
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {Subject} from "rxjs/Subject";



@Injectable()
export class AppService{
    private subjects: Subject<any>[] = []

constructor(){}
publish(eventName: string){
    this.subjects[eventName]= this.subjects[eventName] || new Subject<any>();
}
}


