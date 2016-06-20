## Components
{tags:{state:"title"}}

## Our first component

## Goal

```html
<app>
  <h1>Hi there</h1>
</app>
```

## Bit by bit

##  
{tags:{state:"notitle"}}

```javascript
import { Component } from '@angular/core';
```


##   
{tags:{state:"notitle"}}

```javascript
@Component({
  // any CSS selector
  selector: 'app',
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
export class AppComponent {
  constructor() { 
    this.message = "Hi there";
  }
}
```

##  
{tags:{state:"notitle"}}

```javascript
export class AppComponent {
```

## All together

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: '<h1>{{ message }}</h1>',
})
export class AppComponent {
  constructor() { 
    this.message = "Hi there";
  }
}
```

## Complete app!

```javascript
import { AppComponent } from "./AppComponent";
import { bootstrap } from "@angular/platform-browser-dynamic";

bootstrap(AppComponent);
```


```javascript
<!DOCTYPE html>

<app></app>

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

## Styling

- watch out: CSS is escaped

```html
<a [style.size.em]='mySize'>
  Link
</a>
```

## Toggling classes

```html
<a [class.active]='isActive(link.id)'>
  {{ link.text }}
</a>
```

## Local variables

- access nodes in template

```html
<video #movieplayer >
  <button (click)="movieplayer.play()">
</video>
```

## Styling

```javascript
@Component({
  styles: [
    `
      a {
        color: red;
      }
    `
  ],
  template: `
    <a>Hi</a>
  `
})
```


## Let's have a go
{exercise: 1}

    templates

