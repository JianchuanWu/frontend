System.register(['angular2/core', '../services/login.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, login_service_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            let Login = class Login {
                constructor(loginService) {
                    this.loginService = loginService;
                    this.model = { 'userName': '', 'password': '' };
                }
                onSubmit() {
                    this.loginService.sendCredentials(this.model).subscribe(data => {
                        localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
                        this.loginService.sendToken(localStorage.getItem("token")).subscribe(data => {
                            this.currentUserName = this.model.userName;
                            localStorage.setItem("currentUserName", this.model.userName);
                            this.model.userName = "";
                            this.model.password = "";
                        });
                    });
                }
            };
            Login = __decorate([
                core_1.Component({
                    selector: 'login',
                    templateUrl: 'app/components/login.component.html'
                }), 
                __metadata('design:paramtypes', [login_service_1.LoginService])
            ], Login);
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.component.js.map