# Forms

We want to accept payment using Angular's form system.

## Steps

1. We want to create a `Checkout` component
  1. Copy across the `pre-written/Checkout.component.html` to the app folder


### Creating checkout route

1. First let's create a route that loads the `Checkout` component
  1. You know how to do this :)

### Choosing correct forms module

1. In `main.ts`, we need to ensure we've deprecated the old forms, and enabled the new
  1. this is temporary - in future versions will be auto
  1. forms are part of `PLATFORM_DIRECTIVES`, so you won't need to import

```typescript
import {disableDeprecatedForms, provideForms} from '@angular/forms';

bootstrap(App, [
  // ...
  disableDeprecatedForms(),
  provideForms(),
  // ...
]);
```

### Connecting a form to Angular

1. In the `Checkout` component, we want to create our form
  1. I've written the HTML for you as HTML is not what we're here to learn
  1. It's your job to wire it up with Angular, with one-way binding
    1. You'll want to use `ngModel` - check out its docs if you can't remember
    1. We don't want 2 way binding
1. We want to ensure the data we create is valid
  1. Ensure all the fields are `required` - apart from the captcha
  1. Disable the checkout button until the form is valid
1. To get an initial `true` value to the Captcha, we need to provide a value ot `ngModel`
  1. pass a value to `[ngModel]=`

### Displaying errors

We also need to show our users what went wrong.

1. The card-number input has a HTML 5 pattern attribute
1. Angular will use this to make the number control invalid
1. We need to get a reference to the control for the card-number and reveal the error message only when it's invalid
1. Use this to toggle the `error` class on the `<div>` surrounding the card-number input

### Handling form submission.

Let's handle the submission of the form.

1. Use the `ngSubmit` event and pass it to handled
1. Format the `form.value` as JSON, and store it on the component
1. Display the submitted data somewhere on the form
1. Woohoo! We built a credit-card form that isn't terrible


## Resources

- [Cheatsheet](https://angular.io/docs/ts/latest/cheatsheet.html)

## Goal

![Forms](forms.png)
