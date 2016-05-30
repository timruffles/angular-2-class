## Building Controls
{title:1}

## Goal

- pass data into controls
- get notified when user changes

## Data in

```html
<dataset-filter
  [data]="ourData"
  ...
  >
```

## Data out

- via events

```html
<dataset-filter
  (filtered)="setFilter($event)"
  ...
  >
```

## Data in

```typescript
import { Input } from "angular2/core";

@Component({ /* ... */ })
class DataControl {
  @Input() public categories: string[];

  ngOnChanges(changes) {
    // fired when input changes
  }
}
```

## Data out

```typescript
import { EventEmitter, Output } from "angular2/core";

@Component({ /* ... */ })
class DataControl {
  @Output() public filtered = new EventEmitter;

  filterChange() {
    // fires (filtered)=... expression
    this.filtered.emit(this.createFilterObject());
  }
}
```

## Exercise
{exercise:1}

    input-output

