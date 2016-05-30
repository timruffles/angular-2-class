# Templates

Write code in `./exercises/app`.

Run `npm start` to:

1. compile your code in `/app` on change
1. open a browser to a live-reloading page
1. if you don't see what you expect, right click and click 'Inspect'. Then open the console tab

1. use this ([cheatsheet](https://angular.io/docs/ts/latest/cheatsheet.html)) for reference - there's lots of syntax!
1. displaying data
  1. we want to display some data in our template
  1. define a `constructor` for your `App` component
  1. assign a string property with a name of your choice
  1. use the interpolation syntax to display it in the template 
  1. also try out the interpolation syntax out with the `title=` attribute of an element. Hover over it to see the browser title popup - does the interpolation work?
1. configuring elements from data
  1. we want to use Angular to change the color of an element, controlled by a property
  1. define a property holding an HTML colour string
  1. use the attribute syntax to bind that to the `color` style attribute of an element in your `App` template
1. responding to user input
  1. we want to define a + and - button that makes an element's text size grow and shrink
  1. define a `fontSize` attribute on `App`
  1. bind it to the `font-size` style property of an element 
  1. define a `changeTextSize(delta: number)` method on `App`
  1. create two `<button>` elements, one with a `+` and one `-`
  1. use event listener syntax to listen to click events, with positive and negative deltas
