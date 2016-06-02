# Components

Write code in angular-2-exercise/app.

Run `npm start` to:

1. compile your code in `/app` on change
1. open a browser to a live-reloading page
1. if you don't see what you expect, right click and click 'Inspect'. Then open the console tab

The below is intended to be a chance to use what you've learned, not a puzzle. If it's not clear what to do, ask me!

## Steps

1. we want to make a component that'll list our products
1. define a new component called `Product` (work out the filename we should use from our `App` component), which binds to `<product>` elements
1. add in an `<h2>` in its template, and think of a product a super hero would need
1. add a `<product>` tag into the template of `App`
1. what happens? Think about why
1. we need to inform Angular we're using a custom component.
1. import `Product` into `App`
1. will the component know about Product yet?
1. it won't - we need to explicitly tell it about our component. In the @Component decorator, add a `directives:` property and set its value to an array containing `Product` 
1. you should now see your `Product` component
