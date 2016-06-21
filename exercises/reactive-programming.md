# Reactive Programming

Angular's support for RxJS allows us to simplify some tricky async workflows.

## Resources

- [RxJS 5](http://reactivex.io/rxjs/) - MAKE SURE you use this, not RxJS 4, there are breaking changes
- [RxMarbles](http://rxmarbles.com/#distinctUntilChanged) - nice diagrams for operators

## Steps

### Import the reactive ProductStore

- this will return products from our API
- `pre-written/ProductStore.ts`
- move it to app
- read through

### Creating product search widget

- we'll first create a search as you type widget
- I've written the boiler plate in `pre-written/QuickFind.component` - move it to app
- first we want to create an observable as our public API
- expose an observable of the `search` struct
- now we need to get a reference to our form's `FormGroup`
  - use a view query to achieve that
    - create a local variable and query for it
  - weirdly the `FormGroup` is on the `NgForm's` `.form` property
- look up what property is observable from the control group
  - `.valueChange`
  - expose this as our observable

## Using product search which

- We're going to create a search page
- I've written the boiler plate in `pre-written/SearchPage.component` - move it to app
- using the observable you expose, we want to transform a stream of searches in a stream of result arrays
- the search method on the store will do that for us!
- store returns an observable per search - how can we flatten this into our observable?
  - hint - we need to flatten and transform - flat map
- we should see results appear once the requests are made, but theres no initial search. how can we fix that?
  - check the operator docs!
  - hint: you want to start the stream with something
- if we type fast you'll notice we end up with a lot of requests
  - let's wait till the user has finished typing
- also - we're not cancelling the old request
  - what flat-map style operator can we use to unsubscribe from the old observables?
- the UX isn't great - can we add some loading indicators?


## Goals

<video src='reactive-programming.mp4' autoplay muted loop
  style='max-width: 100%; border: 1px solid black'>
</video>
