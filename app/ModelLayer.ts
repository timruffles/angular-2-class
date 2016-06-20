

type productStruct = {
  id: string,
  price: number,
  [metadataField: string]: any,
};

type randomMetaData = Map<string, any>;


class ProductStore {

  get(id: string) {
    return this.http.get(id)
      .map(function(product) {
        // return new Product(product);//oo style  
        return <productStruct>product; // fp style
      })

  }
}
