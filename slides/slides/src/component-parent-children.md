## Component relationships
{ title: 1 }

## We can do lots with parent/children

## Children can very easily get parent

```typescript
// simply looks up tree, to find parent
constructor(
  private parentComponent: SomeParentComponent ) {

}
```

## Can do things like register self

```typescript
// simply looks up tree, to find parent
constructor(
  private parentComponent: SomeParentComponent ) {

}

ngAfterViewInit() {
  this.parentComponent.register(this);
}
```

## We can also go the other way

```
@Component({
  template: \`
    <custom-A></custom-A>
    <video #myVideo></video>
    <custom-B></custom-B>
    <custom-B></custom-B>
  \`,
})
class Parent {
  @ViewChild(CustomA) a: CustomA;
  @ViewChild('myVideo') vid: ElementRef;
  @ViewChildren(CustomB) bs: QueryList<CustomB>;
}
```

## Component instance by type

```
@Component({
  template: \`
    <custom-A></custom-A>
  \`,
})
class Parent {
  @ViewChild(CustomA) a: CustomA;
}
```

## Component instance by local var

```
@Component({
  template: \`
    <custom-A #myA></custom-A>
  \`,
})
class Parent {
  @ViewChild('myA') a: CustomA;
}
```

## Single native element

```
@Component({
  template: \`
    <video #myVideo></video>
  \`,
})
class Parent {
  @ViewChild('myVideo') vid: ElementRef;
}
```

## List of components

```
@Component({
  template: \`
    <custom-B></custom-B>
    <custom-B></custom-B>
  \`,
})
class Parent {
  @ViewChildren(CustomB) bs: QueryList<CustomB>;
}
```

## Not available straight away!

```
@Component({
  /// ...
})
class Parent {
  @ViewChild(CustomB) b: CustomB;

  constructor() {
    // boom!
    this.bs.someMethod();
  }
}
```

## Wait for view to be ready

```
@Component({
  /// ...
})
class Parent {
  @ViewChild(CustomB) b: CustomB;

  ngAfterViewInit() {
    // everything works :)
    this.bs.someMethod();
  }
}
```

## Why no CSS selectors?

## Anything host-specific in template

- otherwise our component's *logic* would be host specific

## These are all view relationships

- view = template
- stuff the component directly controls

## We can also wrap external content

## e.g transform

```html
<!-- our component -->
<top-bar>
  <!-- here, someone using our component
       places their own content inside our 
      tag-->
  <main>
    <img src='./super-logo.png'>
  </main>
  <extra>
    <input type=search>
  </extra>
</top-bar>
```

## into:

```html
<top-bar class="top-bar">
  <div class="top-bar-left">
    <main>
      <img src='./super-logo.png'>
    </main>
  </div>
  <!-- ... -->
</top-bar>
```

## Use `<ng-content>`

- ng2 version of n1 transclusion
- multiple slots

## e.g `<ng-content`

```
@Component({
  template: \`
    <div class="top-bar-left">
      <ng-content select='main'></ng-content>
    </div>
    <div class="top-bar-right">
      <ng-content select='extra'></ng-content>
    </div>
  \`,
})
```

## Can go further

## Tabs example - reverse it so parent queries

```html
<tabs>
  <tab></tab>
  <tab></tab>
  <tab></tab>
</tabs>
```

## `ContentChild(ren)`

- `Content(ren)` = in *their* template
- `ViewChild(ren)` = in *our* template

## Like `ViewChild`, lvar or type

- no CSS

## e.g

```typescript
@Component({
  /// ...
})
class Tabs {
  @ViewChildren(Tab) tabs: QueryList<Tab>;
  active: Tab;

  ngAfterViewInit() {
    if(this.tabs.length > 0) {
      this.active = this.tabs[0];
    }
  }
}
```

## We can also ask for other components

## via `{read : T }`
- matches 'Tab' predicate
- asks for `TemplateRef` instead

```typescript
@ContentChildren(Tab, { read: TemplateRef }) 
  tabTemplates: QueryList<TemplateRef<any>>;
```

## Exercises
{ title: 1 }

  component-parent-children
