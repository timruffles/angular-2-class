## Components
{tags:{state:"title"}}

## Our first component

## Goal

```html
<hello-angular>
  <h1>Hi there</h1>
</hello-angular>
```

## Bit by bit

##  
{tags:{state:"notitle"}}

```javascript
import { Component } from 'angular2/core';
```


##   
{tags:{state:"notitle"}}

```javascript
@Component({
  // any CSS selector
  selector: 'hello-angular',
  // ...
})
```

##   
{tags:{state:"notitle"}}

```javascript
@Component({
  // ...
  template: '<h1>{{ message }}</h1>',
})
```

##   
{tags:{state:"notitle"}}

```javascript
class HelloComponent {
  constructor() { 
    this.message = "Hi there";
  }
}
```

##  
{tags:{state:"notitle"}}

```javascript
export { HelloComponent };
```

## All together

```javascript
import { Component } from 'angular2/core';

export { HelloComponent };

@Component({
  selector: 'hello-angular',
  template: '<h1>{{ message }}</h1>',
})
class HelloComponent {
  constructor() { 
    this.message = "Hi there";
  }
}
```

## Complete app!

```javascript
import { HelloComponent } from "./HelloComponent";
import { bootstrap } from "angular2/platform/browser";

bootstrap(HelloComponent);
```


```javascript
<!DOCTYPE html>

<hello-angular></hello-angular>

<!-- bundled up: app + dependencies -->
<script src="dist/app.js"></script>
```

## Let's have a go
{exercise: 1}

    hello-angular

## Template superpowers
{ title: 1}

## Data-binding

```html
<!-- interpolated - live -->
<div title="Hello {{ person }}">

<!-- [] = attribute replaced by expression -->
<div [title]="getMessage()">
```

## Event-handling

```html
<!-- DOM events -->
<form (submit)="create($event)">
```

## Two-way data-binding

```html
<!-- the local ourName property will be 
     bound to `.name` of our some-editor 
     component -->
<some-editor ([name])="ourName">
```

## Local variables

- access nodes in template

```html
<video #movieplayer >
  <button (click)="movieplayer.play()">
</video>
```

## Let's have a go
{exercise: 1}

    template-powers

