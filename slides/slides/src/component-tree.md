## Component Tree
{title: 1}

## Apps = self-describing tree of components

## Self-describing...

- meta-data
- can render itself
- has own injector
- defined public-API

## ...tree

- hierarchical
- smart components configure 'dumb' rendering components

## Tree

![component](img/component-tree.png)

## Child components

```typescript
import { Component } from '@angular/core';
import { HelloComponent } from './HelloComponent';

@Component({
  // this is where we list additional directives
  directives: [HelloComponent],
  template: '<hello-angular></hello-angular>',
})
```

## Components need to be defined to be used in template

## Why?

## Keeps components statically analysable

```html
import { Component } from '@angular/core';
import { HelloComponent } from './HelloComponent';


@Component({
  // this is where we list additional directives
  directives: [HelloComponent],
  template: '<hello-angular></hello-angular>',
})
```

## Contrast

- directives per component
- injector: flows down components

## Any exceptions?

## `PLATFORM_DIRECTIVES`!

- would get old including them all the time!

## Exercise
{exercise:1}

    component-tree

