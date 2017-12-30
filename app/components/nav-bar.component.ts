import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginService} from '../services/login.service';
import {Router} from 'angular2/router';

@Component({
  selector: 'nav-bar',
  templateUrl: 'app/components/nav-bar.component.html'
})

export class NavBar{
  constructor(private loginService:LoginService){

  }

  onClick(){
    if(this.loginService.checkLogin()){
      this.loginService.logout();
    }
  }

}
