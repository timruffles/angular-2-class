# Stores

Stores manage our access to the data-layer. We're going to move from hard-coded data to write and use a mocked-up store to load our data.

## Steps

- We want to build a store to hold our products
  - This is written for you - copy over `app/pre-written/ProductStore.ts` to `app/ProductStore.ts`
  - Read through the source code. We're using a `Map` as an in-memory store layer for our products

### Using a store

- We'd like to replace the hard-coded access to products in `ProductList` with our store
  - Let's load in the products
    - Import the store into our `ProductList`
    - Use `ProductStore` in our `ProductList` to retrieve the list of all products via the `all()` method
    - when the promise resolves (`.then(resolver)`) assign it to the products property
  - We should see a list of products!
- Now we want to load each product from the store. 
  - For now we could pass in the product directly, but we can remove the restriction for the product to be available in memory
  - Later this will allow us to route straight to a product page


### Creating a smart component

- We're going to define a 'smart component' that is responsible for loading a product
  - Why? This stops us from mixing up how we render a product with how it's found.
  - Define a `ProductPage` component
  - we need to load in a product by id
    - first we need to get the id
      - define a `productId` input
    - now we'll load in the product
      - define somewhere to store the product once it arrives
        - `product: product;` property
    - get an instance of our store
      - import & inject the `ProductStore`
    - use the id and store to load the product on component startup
      - when the component boots up, use the `productId` to `.get()` the product
      - when the product resolves (`.then(resolver)`) assign it to the product property
- Use our smart component within the `ProductList` component, passing in the id rather than the product


## Resources

## Goal

This exercise doesn't change the app visually from last time. It should still work though! :)

![goal](built-in-directives.png)

