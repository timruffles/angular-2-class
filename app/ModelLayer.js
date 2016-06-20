var ProductStore = (function () {
    function ProductStore() {
    }
    ProductStore.prototype.get = function (id) {
        return this.http.get(id)
            .map(function (product) {
            // return new Product(product);//oo style  
            return product; // fp style
        });
    };
    return ProductStore;
}());
//# sourceMappingURL=ModelLayer.js.map