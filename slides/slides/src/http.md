## Loading data
{title: 1}

## Goal

- load in Reddit frontpage data
- prepare


## Define

```typescript
import { Http } from 'angular2/http';

export class Reddit {
    frontpage() {
       return this.http.get(
         \`https://www.reddit.com/.json\`)
    }
}
```

## But...

## How do we get an instance?

```typescript
   return this.http.get(\`https://www.reddit.com/.json\`)
```

## Ask for it!

```typescript
import { Injectable } from "angular2/core";
import { Http } from "angular2/http";

@Injectable();
export class Reddit {
  // this items deps will be looked up when
  // it's required
  constructor(private http: Http) {}
}
```

## Dependency Injection

## Provide HTTP to app

```typescript
// App.component.ts
import { HTTP_PROVIDERS } from "angular2/http";

@Component({
  // ...
  providers: [HTTP_PROVIDERS /\* ... \*/],
})
```

## Using

```typescript
import { Reddit } from "./Reddit.service";

@Component(/\* ... \*/)
export class Chart {
  // we'll get an instance
  constructor(reddit: Reddit) {
  }
}
```

## Why DI?

## Two benefits

## One: testing

- not today

## Two: pluggable implementations

## Hierarchical

## Tree

![injector tree](img/injector-tree.png)

## e.g
{notitle:1}

```typescript
import { provide } from 'angular2/core';
import { Reddit, AlternativeReddit } from 
  './Reddit.service';

// provide a valid alternative implementation
// of Reddit (server-side, stubbed, web-sockets...)
bootstrap(FrontPage, [
  provide(Reddit, { 
    useClass: AlternativeReddit,
  },
])
```

```typescript
import { Reddit } from './Reddit.service';

class HelloComponent {
  // ...and components down the tree 
  // get them!
  constructor(greeter: Reddit) { 
  }
}
```

## Back to Reddit & HTTP

## Transform

```typescript
import { Http } from 'angular2/http';

@Injectable()
export class Reddit {
    frontPage = \`//www.reddit.com/.json\`;

    constructor(private http: Http) {}

    frontpage() {
       return this.http.get(this.frontPage)
         .toPromise()
         .then((resp) => {
            return resp.json()
              .data.children.map(child => child.data)
         })
    }
}
```

## Exercise
{exercise: true}

    http
