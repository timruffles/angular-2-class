# HTTP

Write code in `./exercises/app`.

Run `npm start` to:

1. compile your code in `/app` on change
1. open a browser to a live-reloading page
1. if you don't see what you expect, right click and click 'Inspect'. Then open the console tab

1. creating a service to load reddit data
  1. define a `Reddit.service` class, with a `frontpage` method
  1. import and ask for `Http` in the constructor and define it as a property
  1. import your new service into App, and ask for an instance of it in the constructor
  1. you should get an error - Angular doesn't know how to inject `Reddit` yet!
  1. to do this we need to do 2 things
    1. tell Angular how to inject Reddit - import and use `@Injectable()` on `Reddit`
    1. give Angular a provider for Reddit. In `App` define a `providers:` array on the `@Component`, and import and pass in `Reddit`
  1. you should now have a `reddit` property in `App`
1. loading data
  1. we want to implement `frontpage` in `Reddit`
  1. make a get request to `https://www.reddit.com/.json` (yes the suffix looks weird - try it out in the browser)
  1. use `toPromise()` on the result
  1. log out the response via `.then((resp) => console.log(resp.json()))`
  1. we need to return a transformed version of the response, with just the interesting data
  1. in the `.then()` handler, use `.map` to get just the `.data` properties of the story data, and return it from `.then`
1. triggering our load
  1. in `App`, assign `this.stories` to the result of calling `reddit.frontpage`
  
1. using `*ngFor`
  1. I will take you through this step 
