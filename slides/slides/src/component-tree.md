## Component Tree
{title: 1}

## Child components

```typescript
import { Component } from 'angular2/core';
import { HelloComponent } from './HelloComponent';

export { FrontPage };

@Component({
  // this is where we list additional directives
  directives: [HelloComponent],
  template: '<hello-angular></hello-angular>',
})
```

## Inherited

```typescript
// App.ts
import { Component, FORM_DIRECTIVES, CORE_DIRECTIVES }
 from 'angular2/core';

@Component({
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  // ...
})
```

## Exercise
{exercise:1}

    component-tree

