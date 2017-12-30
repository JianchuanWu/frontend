System.register(['angular2/core', '../services/photo.service'], function(exports_1, context_1) {
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
    var core_1, photo_service_1;
    var PhotoRow;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (photo_service_1_1) {
                photo_service_1 = photo_service_1_1;
            }],
        execute: function() {
            let PhotoRow = class PhotoRow {
                constructor(photoService) {
                    this.photoService = photoService;
                    this.photoService.getPhotos().subscribe(data => {
                        this.PhotoList = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                        this.photoListSorted = this.PhotoList.sort((a, b) => b.likes - a.likes);
                        this.photoListRanked = [];
                        for (let index in this.photoListSorted) {
                            if (Number(index) < 3) {
                                this.photoListRanked.push(this.photoListSorted[index]);
                            }
                            else {
                                break;
                            }
                        }
                    }, error => console.log(error));
                }
            };
            PhotoRow = __decorate([
                core_1.Component({
                    selector: 'photo-row',
                    templateUrl: 'app/components/photo-row.component.html'
                }), 
                __metadata('design:paramtypes', [photo_service_1.PhotoService])
            ], PhotoRow);
            exports_1("PhotoRow", PhotoRow);
        }
    }
});
//# sourceMappingURL=photo-row.component.js.map