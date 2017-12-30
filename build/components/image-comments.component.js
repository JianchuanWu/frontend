System.register(['angular2/core', '../models/photo', '../services/photo.service', '../services/user.service', '../services/login.service', '../models/user', '../models/comment', '../services/comment.service'], function(exports_1, context_1) {
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
    var core_1, photo_1, photo_service_1, user_service_1, login_service_1, user_1, comment_1, comment_service_1;
    var ImageComments;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (photo_1_1) {
                photo_1 = photo_1_1;
            },
            function (photo_service_1_1) {
                photo_service_1 = photo_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (comment_1_1) {
                comment_1 = comment_1_1;
            },
            function (comment_service_1_1) {
                comment_service_1 = comment_service_1_1;
            }],
        execute: function() {
            let ImageComments = class ImageComments {
                constructor(userService, commentServie, photoService, loginService) {
                    this.userService = userService;
                    this.commentServie = commentServie;
                    this.photoService = photoService;
                    this.loginService = loginService;
                    this.myLocalStorage = localStorage;
                    this.user = new user_1.User();
                    this.newComment = new comment_1.Comment();
                    this.logined = false;
                    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(user => {
                        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                    }, error => console.log(error)),
                        this.logined = this.loginService.checkLogin();
                }
                onSubmit() {
                    this.newComment.photo = this.photo;
                    this.newComment.userName = this.user.userName;
                    this.newComment.photoId = this.photo.photoId;
                    this.commentServie.addComment(this.newComment).subscribe(photo => this.photoService.getPhotoById(this.photo.photoId).subscribe(photo => this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body), error => console.log(error)));
                    this.newComment = new comment_1.Comment();
                }
            };
            __decorate([
                core_1.Input('photo'), 
                __metadata('design:type', photo_1.Photo)
            ], ImageComments.prototype, "photo", void 0);
            ImageComments = __decorate([
                core_1.Component({
                    selector: 'image-comments',
                    providers: [comment_service_1.CommentService],
                    templateUrl: 'app/components/image-comments.component.html'
                }), 
                __metadata('design:paramtypes', [user_service_1.UserService, comment_service_1.CommentService, photo_service_1.PhotoService, login_service_1.LoginService])
            ], ImageComments);
            exports_1("ImageComments", ImageComments);
        }
    }
});
//# sourceMappingURL=image-comments.component.js.map