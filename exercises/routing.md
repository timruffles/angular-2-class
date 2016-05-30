# Routing

We're going to add routing to our shop, so users can go directly
to a product via a link.

## Steps

- First we'll load our current home page via a route
  - We want to create a route that matches the home page, and displays our product list
    - Fist, we need somewhere for our route to display!
      - Our `product-list` is now going to be access via a route, so remove it from the template
      - Replace it with `<router-outlet>`
      - Nothing happens, why?
      - Because we haven't imported the routing system!
    - We'll need to import the routing directives and providers, and ensure they're available throughout our app
      - Import `{ ROUTER_PROVIDERS, ROUTER_DIRECTIVES }` from `@angular/router`
      - These are the providers (services) and directives (components and directives) for routing
      - We need to place these in the `providers:` and `directives:` keys of our `App` component
  - Now we've got the providers and directives, let's define a route
    - `@Routes()` is a decorator just like `@Component()`
    - Let's use `@Routes()` to define our first route - "/" will route to `ProductList`
      - add `path: "/"` and `component: ProductList`
    - Nothing happens yet - why? Ah - we need a route
  - Though we define a route, nothing is happening! We need to ensure an instance of `Router` is created
    - inject `Router` into our `App` constructor
    - We should now boot up and be displaying the product list!
- Now we want to link to individual product pages
  - Let's create a route for a single product
    - Let's define a route that matches a product with an `id`
      - `{path: '/products/:id', ` is good, it'll match `/products/123` or `/products/some-product`.
      - ensure it routes to our `ProductPage` component
        - `{ path: ..., component: ProductPage }`
  - We're going to switch our listing over from rendering a product to rendering a simple link 
    - in `ProductList`, remove the `<product>` component
    - replace it with a normal HTML link, with the text being the product's name
    - use the `[routerLink]=` directive to create a link
      - router link accepts an array of route pieces
      - it'll need to match the route you create
      - `[routerLink]=['/products', product.id]` will match the route I defined above
      - this will crash - what's missing?
        - oh yes - we need `ROUTER_DIRECTIVES` again for our `ProductList`. Import it and place it in `@Component()` under `directives:`
- Now we should be able to navigate to a product page, but no product data appears!
  - That's because we are now specifying the id via our route
    - remove out `@Input()` as it's no longer needed
  - We need to get the route data into the component
  - For that, we need the `RouteSegment` service
    - Import it into `ProductPage`, and inject it into the `ProductPage`
    - Update `ngOnInit()` to use the RouteSegment's `getParam('id')` method, rather than our input
  - Try out the links! You should be able to navigate to different product pages


## Resources

## Goal

![Routing](routing.png)
