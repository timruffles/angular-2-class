## RxJS
{ title: 1}

## Reactive Programming

Organising our code around reacting to changes

## vs proactive

- the default style
- We *make* changes to others in response
- dependencies fulfilled in producer (writer)

![img](img/proactive.png)

## Proactive code

```typescript
class ParentWidget {
  main() {
    dataSource.get(function(response) {
      this.childWidget.data = response;
    });
  }
}
```

## Reactive

- We encode the logic of data-flow into streams
- Clear where our dependencies lie in consumer (reader)

![img](img/reactive.png)

## Reactive code

```typescript
class ChildWdiget {
  main() {
    this.data = this.parent.dataSource.subscribe();
  }
}
```

## RxJS

- 'programming with observable streams'
- so our reactions are subscribing to streams

## Big idea

- Everything is a stream!
- We do lots of turning stream A into stream B
- and a little of subscribing to a stream and doing stuff (side-effects)

## Lots of integration points into Angular

## Forms changing

```typecript
this.form.valueChanges
```

## HTTP

- requests are Observables

## Importing

## RxJS is huge!

- so each bit imported on its own

```typescript
import "rxjs/add/operator/map";
```

## Today we don't care

```typescript
// all the fun things! :)
import "rxjs/Rx";
```

## So!

## `Observable`

- this is the main abstraction

## Observables can be subscribed to

## Subscribing

```typescript
export class SomeComponent {
  @ViewQuery(Child) child: Child;

  ngAfterViewInit() {
    this.child.output
      .subscribe(e => {
        // we will see events come out
        console.log(e);
      })
  }
}
```

## But, ideally we transform them!

## Transform

```typescript
export class SomeComponent {
  @ViewQuery(Child) child: Child;

  ngAfterViewInit() {
    this.child.output
      .map(e =>
        new DifferentEvent(e, this.extraData()))
  }

  private extraData() {
    // some additional data from this component
  }
}
```

## We create streams from streams

## Via operators

![map](img/rx-map.png)

## RxJS has many

## Let's open RxMarbles

## Operators for combining

- `combineLatest`

## Operators for transforming

- `map`, `scan`

## Operators for dropping

- `debouce`, `distinctUntilChanged`




## Exercise

  rxjs
