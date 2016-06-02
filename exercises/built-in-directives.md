# Hello Angular

Write code in `./app`.

Run `npm start` to:

1. compile your code in `/app` on change
1. open a browser to a live-reloading page
1. if you don't see what you expect, right click and click 'Inspect'. Then open the console tab

The below is intended to be a chance to use what you've learned, not a puzzle. If it's not clear what to do, ask me!

## Steps

1. show all products

  1. we're going to define a component to display a list of products
    1. define a component - you can choose the name
    1. this should accept a list of products - define an `@Input` to accept them
    1. inside the tempate use `*ng-for` to repeat our `product` component
    1. pass the product to the `<product>` component via its input
  1. use our product list to display a list of products
    1. in App, import a fixed list of products - it's `products` from `app/productList.fixture`. 
    1. replace our single `<product>` with the `<product-list>`
    1. pass in the product lists to our list component


## Resources

- [Cheatsheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)

## Goal

![goal](built-in-directives.png)
