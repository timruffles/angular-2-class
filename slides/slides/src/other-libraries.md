## Using libraries
{ title: 1 }

## NG2 isn't own world

## Can use other libs!

## e.g D3

## Using with D3
{title:1}

## Goal

- write D3 again!
- get data from NG to d3

## Write a graph

- this bit: identical, but with DI

```typescript
import { Injectable } from "@angular/core";
import d3 from "d3";

@Injectable()
class Graph {
  render({ el: SVGElement, data: any[] }) {
    d3.select(el)
      // ...
  }
}
```

## Angular hides the DOM

## D3 needs the DOM

```typescript
render({ el: SVGElement, data: any[] }) {
```

## How?

## `ElementRef`

```typescript
import {ElementRef, Component} from '@angular/core';
import { Graph } from "./Graph.service";

@Component({
  // ...
})
export class Chart {
  constructor(private el: ElementRef, 
    private graph: Graph) {
  }
  ngOnChanges() {
    this.graph.render({
      // aha! the DOM returns...
      el: this.el && this.el.nativeElement,
      data: /// ...
    })
  }
}
```
<!-- TODO write a demo with ElementRef -->

## Exercise
{exercise: 1}

    d3
