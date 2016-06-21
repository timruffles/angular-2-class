## Libararies


## Steps

## Define a `Chart` service

1. import d3
1. define a `render()` method, accepting an options object with `data` and `el`
  1. write some d3 code to simply draw a circle per data item

## Define a `Chart` component

1. import the `Chart` service
1. make its template a single svg node
1. use `ElementRef` to get a reference to the root node
1. call `render()` and ensure we see some data
  1. `data: ` as with some dummy data (e.g [1,2,3])
  1. `el: ` as our elementRef, `.nativeElement.querySelector("svg")`
1. define an `@Input()` to accept our `data` once we've loaded it
1. replace your stubbed call with a call inside an `ngOnChanges` callback, passing in our `data` input
1. now, once we change `.data`, we should see a rendered chart!

## Pass data into `Chart`

1. import `Chart` into `App`
1. place it in the template
1. let's test our data input
  1. assign a `.data` property, with stubbed data again
  1. pass it into the `data` input of our `Chart`
  1. ensure our `Chart` renders correct
1. let's pass in real data
  1. in the `App` handler for our Reddit request, reassign the `.data` property
    1. we should see circles appear for each story!
1. let's create a nice looking chart!
