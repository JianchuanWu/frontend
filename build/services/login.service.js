System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            let LoginService = class LoginService {
                constructor(http) {
                    this.http = http;
                }
                sendCredentials(model) {
                    let tokenUrl = 'http://172.17.225.168:8080/user/login';
                    let headers1 = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post(tokenUrl, JSON.stringify(model), { headers: headers1 });
                }
                sendToken(token) {
                    let userUrl = 'http://172.17.225.168:8080/rest/user/users';
                    let headers2 = new http_1.Headers({ 'Authorization': 'Bearer ' + token });
                    return this.http.get(userUrl, { headers: headers2 });
                }
                checkLogin() {
                    if (localStorage.getItem("currentUserName") != "" && localStorage.getItem("token") != "") {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                logout() {
                    localStorage.setItem("token", "");
                    localStorage.setItem("currentUserName", "");
                    alert("You just logged out.");
                }
            };
            LoginService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], LoginService);
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=login.service.js.map