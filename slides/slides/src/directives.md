## Directives
{ title: 1 }

## Most general type of component

## All components are directives

```sh
   Directive
      ^
      |
   Component
```

## Components

- are directives with a template!

## Two types of non-component directive

- attribute: modify existing tag or component
- structural: change the DOM layout

## Attribute directives
{ title: 1 }

## Directives decorator

## Directives have a selector

- often going to be an attribute

```typescript
import { Directive } from "@angular/core";

@Directive({
  // the below is CSS 3 selector for attribute
  selector: "[powerButton]"
})
```

## Directives are a class

```typescript
@Directive({
  // ...
})
export class PowerButton {
}
```

## Directives have life-cycle hooks

```typescript
import { Directive, DoCheck } from "@angular/core";

@Directive({
  // ...
})
export class PowerButton 
  implements DoCheck {

  ngDoCheck() {
  }
}
```

## How do we style current element?

- we have no template!

## `host:`

- works for components too!

```typescript
@Directive({
  host: {
    '[class.animating]': 'clicked',
  },
})
export class PowerButton {
  clicked = false;
}
```

## Host

- host = the host element of a directive/component

## How do we listen to events?

## Same syntax, different place

##  
{notitle:1}

```typescript
@Directive({
  host: {
    // ...
    '(click)': 'animate()',
    '(animationend)': 'done()',
  },
})
export class PowerButton {
  animating = false;

  animate() {
    this.animating = true;
  }

  done() {
    this.animating = false;
  }
}
```

## Styling

- doesn't have a view, so no encapsulation
- needs normal (external) styling, or inline

## Exercise
{ title: 1}

    attribute-directives

## Structural directives
{ title: 1}

## Creating and destroying views

## Uses `<template>`

- HTML5 tag

```html
<template>
  <h1>You won't see me!</h1>
</template>
```

## Syntax sugar

```html
<p *ngIf="condition">
  Now you see me
</p>

<!-- long hand for the above -->
<template [ngIf]="condition">
  <p>
   Now you see me
  </p>
</template>
```

## Defining `Unless`

- opposite of `*ngIf`

## Getting reference to template

- use `TemplateRef<any>`
- this is how we reference our `<template>`

## Where do we put it?

## `ViewContainerRef`

- this is where we slot in ng2 view content
- vs manually modifying the DOM

## Just somewhere to put content

## Can be any element

```typescript
<div #someDiv>
</div>

<!-- content ends up as a sibling, not child -->
```

## Easiest: simply use our directive node

## `ViewContainerRef` methods

- `vcr.clear()` - clears
- `vcr.createEmbeddedView(...)` fills view with something

## Together

```typescript
this.vcr.createEmbeddedView(this.templateRef);
```

## Full directive

## What type of selector?

## `[unless]`

## We need to take a property to toggle

## Selector

```typescript
import { Directive } from "@angular/core";

@Directive({
  selector: "[unless]",
})
export class Unless {
  // ...
}
```

## Input

```typescript
import { /\* ..., \*/ Input } from "@angular/core";

@Directive({
  // ...
})
export class Unless {
  @Input() unless: any;
}
```

## Inject

```typescript
import {  /\* ..., \*/
  ViewContainerRef, TemplateRef } 
  from "@angular/core";

@Directive({
  // ...
})
export class Unless {
  constructor(
    private tpl: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}
}
```

## Listen for change

```typescript
import { /\* ..., \*/ Input } from "@angular/core";

@Directive({
  // ...
})
export class Unless {
  ngOnChanges() {
    if(this.unless) {
      this.view.clear();
    } else {
      this.view.createEmbeddedView(this.tpl);
    }
  }
}
```

## Exercise
{title: 1}

    structural-directives
