System.register(["@angular/core", "./LocalStorage"], function(exports_1, context_1) {
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
    var core_1, LocalStorage_1;
    var Cart, CartEntry;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LocalStorage_1_1) {
                LocalStorage_1 = LocalStorage_1_1;
            }],
        execute: function() {
            Cart = (function () {
                function Cart(storage) {
                    this.storage = storage;
                    this.entries = new Map();
                    var entryJson = this.fromStorage();
                }
                Cart.prototype.get = function (productId) {
                    return Promise.resolve(this.entries.get(productId));
                };
                Cart.prototype.add = function (productId) {
                    if (!this.entries.has(productId)) {
                        this.entries.set(productId, new CartEntry());
                    }
                    var newEntry = this.entries.get(productId).add(1);
                    this.entries.set(productId, newEntry);
                    this.changed();
                    return new Promise(function (resolve) {
                        setTimeout(function () { return resolve(newEntry); }, 450);
                    });
                };
                Cart.prototype.changed = function () {
                    var _this = this;
                    // no need to do this right now, we can leave till later. ideally
                    // we would debounce + use `window.requestIdle`
                    setTimeout(function () { return _this.storage.set('cartEntries', _this); });
                };
                Cart.prototype.fromStorage = function () {
                    var entries = this.storage.get("cartEntries", {});
                    for (var id in entries) {
                        this.entries.set(id, entries[id]);
                    }
                };
                Cart.prototype.toJSON = function () {
                    var lookup = {};
                    for (var _i = 0, _a = this.entries.entries(); _i < _a.length; _i++) {
                        var _b = _a[_i], k = _b[0], v = _b[1];
                        lookup[k] = v;
                    }
                    return lookup;
                };
                Cart = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [LocalStorage_1.LocalStorage])
                ], Cart);
                return Cart;
            }());
            exports_1("Cart", Cart);
            CartEntry = (function () {
                function CartEntry(quantity) {
                    if (quantity === void 0) { quantity = 0; }
                    this.quantity = quantity;
                }
                CartEntry.prototype.add = function (n) {
                    return new CartEntry(this.quantity + n);
                };
                return CartEntry;
            }());
        }
    }
});
//# sourceMappingURL=Cart.js.map