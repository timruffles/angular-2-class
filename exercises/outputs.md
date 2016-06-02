
1. listening to output
  1. we want to listen to `filtered` events from `ChartControl` in `App`, and handle them
  1. listen to a `filtered` event on the `chart-control` element in `App`, handling it and passing the `$event` variable into a new `App` method called `setFilter`
  1. you should see Angular complain that `filtered` is not a "known native property"
  1. why?
  1. we need to tell Angular we're emitting `filtered` events
  1. in `ChartControl`, define an output called `filtered`. It's an `EventEmitter`. Use the [cheatsheet](https://angular.io/docs/ts/latest/cheatsheet.html) to remind yourself how
  1. define `setFilter` as a simple console logger - we'll get it to fire later
1. firing events
  1. we want to fire `filtered` events each time the user configures our `ChartControl` via our `maxAge` slider
  1. we need to store the state of our filter - define a `filter` propert and initialize it with `maxAge: 0`
  1. listen to the `change` event of our `input` in `ChartControl`. handling it with a `setMaxAge(maxAgeInput.value)`. You'll want to define a local variable `maxAgeInput` - use the cheat sheet
  1. in `setMaxAge(age: number)`, call `updateFilter({ maxAge: age })`
  1. define `updateFilter(changes)` as a method that
    1. uses [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to copy the current filter state, update it with changes, and reassign it to `filter`
    1. then uses `emit` on our `filtered` output, passing the new filter as the event
  1. when you move the maxAge slider, you should see your `setFilter` handler in `App` fire
