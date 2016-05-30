# Components

Write code in angular-2-exercise/app.

Run `npm start` to:

1. compile your code in `/app` on change
1. open a browser to a live-reloading page
1. if you don't see what you expect, right click and click 'Inspect'. Then open the console tab

1. we want to make a component that'll control the display of a dataset
1. define a new component called `ChartControl`, which binds to `<chart-control>` elements
1. add in an `input type=range` in its template, and some text
1. add `<chart-control>` into the template of `App`
1. what happens? Think about why
1. we need to inform Angular we're using a custom component.
1. import `ChartControl` into `App`
1. create a `directives` array in `App`'s component definition, and place `ChartControl` in that array
1. you should now see your `ChartControl` component
