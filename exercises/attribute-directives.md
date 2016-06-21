# Attribute directives

## Steps

We'll use the predefined styling in `style.css` around `[powerButton]` - you just need to hook in the correct `.animating` class on the button!

### Create directive

You can work on the power button on any page in the app you find convenient. Once you're done, think about where it makes sense to use (hint: everywhere!).

1. Create a `PowerButton.directive.ts`
  1. import `Directive` decorator
1. select any DOM elements with our directive attribute
  1. you can be specific and select only buttons if you like
1. listen to clicks, to toggle the animation class
  1. use the `host:` bindings, with normal template syntax
  1. so `(eventName)` for an event
  1. and `[class.xyz]` to toggle a class
1. Use the button in our app
  1. Ensure it's imported and in the directives array

### Goal

<video src='attribute-directives.mp4' autoplay muted loop>
</video>
