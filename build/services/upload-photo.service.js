System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var UploadPhotoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let UploadPhotoService = class UploadPhotoService {
                constructor() {
                    this.filesToUpload = [];
                }
                upload() {
                    this.makeFileRequest("http://172.17.225.168:8080/rest/photo/upload", [], this.filesToUpload).then((result) => {
                        console.log(result);
                    }, (error) => {
                        console.error(error);
                    });
                }
                fileChangeEvent(fileInput) {
                    this.filesToUpload = fileInput.target.files;
                }
                makeFileRequest(url, params, files) {
                    return new Promise((resolve, reject) => {
                        var formData = new FormData();
                        var xhr = new XMLHttpRequest();
                        for (var i = 0; i < files.length; i++) {
                            formData.append("uploads[]", files[i], files[i].name);
                        }
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                if (xhr.status == 200) {
                                    alert("upload success");
                                }
                                else {
                                    reject(xhr.response);
                                }
                            }
                        };
                        xhr.open("POST", url, true);
                        xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
                        xhr.send(formData);
                    });
                }
            };
            UploadPhotoService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], UploadPhotoService);
            exports_1("UploadPhotoService", UploadPhotoService);
        }
    }
});
//# sourceMappingURL=upload-photo.service.js.map