## Routing
{title:1}

## Component Router

- 1.x and 2.x

## Structured

![component router](img/component-router.png)

## For today: KISS

## Define routes

```typescript
import {RouteConfig, RouterOutlet} 
  from 'angular2/router';

@RouteConfig([
  {
    path:'/chart/:facet',
    name: 'ChartWithFacet',
    component: ChartDisplay 
  },
  // ... more
])
@Component({
  // here's where our routed component attaches
  directives: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
```

## Configure


```typescript
import { ROUTER_PROVIDERS, LocationStrategy, 
  PathLocationStrategy, APP_BASE_HREF } 
  from "angular2/router";

bootstrap(App, [
  ROUTER_PROVIDERS
  , provide(LocationStrategy, 
    { useClass: PathLocationStrategy })
  , provide(APP_BASE_HREF, { useValue: "/src" })
]);
```

## Links

```typescript
import { ROUTER_DIRECTIVES, RouteConfig }
   from "angular2/router";

@Component({
  selector: "datasets",
  directives: [ROUTER_DIRECTIVES],
  template: \`
    <h1>hello from home page</h1>
    <a [routerLink]=
      "['/ChartWithFacet', { id: 'Router' }]">
      Router
    </a>
  \`
})
```

## Exercise
{ title: 1}
  
    routing
  
