## Outputs
{title:1}

## Data-down, events-up

![outputs](img/outputs.png)

## ...events-up

## What goes up?

## Business events

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


