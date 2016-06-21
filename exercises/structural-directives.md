# Structural directives

## Steps

### Get directive selecting

1. Create a `Unless.directive.ts`
  1. import `Directive` decorator
  1. configure selector to match `unless` attribute

## React to input

1. Configure the `unless` attribute to take input
1. Use the `ngOnChanges` (or research making the `unless` property a setter) to react to changes 
  1. If the `unless` input is falsy, clear the view container
  1. Otherwise, create an embedded view with our template
1. We need to get a reference to the content to be created/destroyed
  1. Inject `TemplateRef`
1. We need to get a reference to place we'll attach content
  1. Inject `ViewContainerRef`

## Use it in the app

1. Use it somewhere in the app
  1. Ensure it's imported, and available in the directives array
1. If you use it without the structural directive marker, it should crash!
1. Otherwise, we should be good to go!


## Goal

We want to be able to use `*unless` as the inverse of `*ngIf`:

```html
<div *unless='someFlag'>
  I should display if someFlag is falsy!
</div>

<div *unless='!someFlag'>
  I should display if someFlag is truthy!
</div>
```
