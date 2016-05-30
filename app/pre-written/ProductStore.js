System.register(["./fixtures", "@angular/core"], function(exports_1, context_1) {
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
    var fixtures_1, core_1;
    var ProductStore;
    return {
        setters:[
            function (fixtures_1_1) {
                fixtures_1 = fixtures_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProductStore = (function () {
                function ProductStore() {
                    this.byId = new Map();
                    var kvs = fixtures_1.longerStaticProductList.map(function (p) { return [p.id, p]; });
                    this.byId = new Map(kvs);
                }
                ProductStore.prototype.get = function (id) {
                    return Promise.resolve(this.byId.get(id));
                };
                ProductStore.prototype.all = function () {
                    return Promise.resolve(Array.from(this.byId.values()));
                };
                ProductStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ProductStore);
                return ProductStore;
            }());
            exports_1("ProductStore", ProductStore);
        }
    }
});
//# sourceMappingURL=ProductStore.js.map