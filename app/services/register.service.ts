import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {User} from '../models/User';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class RegisterService{
  constructor (private http:Http){}

  sendUser(user:User){
    let url = "http://172.17.225.168:8080/user/register";
    let header = new Headers({'Content-Type':'application/json'});

    return this.http.post(url, JSON.stringify(user),{headers:header});
  }
}
