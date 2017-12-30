import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable'
import {LoginService} from '../services/login.service';

@Component({
  selector:'login',
  templateUrl:'app/components/login.component.html'
})

export class Login{
  private model = {'userName':'','password':''};
  private currentUserName;

  constructor(private loginService:LoginService){}

  onSubmit(){
    this.loginService.sendCredentials(this.model).subscribe(
      data => {
        localStorage.setItem("token",JSON.parse(JSON.stringify(data))._body);
        this.loginService.sendToken(localStorage.getItem("token")).subscribe(
          data => {
            this.currentUserName = this.model.userName;
            localStorage.setItem("currentUserName",this.model.userName);
            this.model.userName="";
            this.model.password="";
          }
        )
      }
    )
  }
}
