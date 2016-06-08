## Outputs
{title:1}

## We've seen data-down

![data-down](img/data-down.png)

## Now events up

## Events-up

![outputs](img/events-up.png)

## What goes up?

## Business events

## Data-flow

![outputs](img/data-flow.png)

## Events up

- via events

```html
<product
  (addToCart)="cart.add($event.product)"
  ...
  >
```

## Abstracting

## Events

```typescript
import { EventEmitter, Output } from "@angular/core";

@Component({ /* ... */ })
class Product {
  @Output() filtered = new EventEmitter;

  filterChange() {
    // fires (filtered)=... expression
    this.filtered.emit({ product: this.product })
  }
}
```

## Exercise
{exercise:1}

    outputs


