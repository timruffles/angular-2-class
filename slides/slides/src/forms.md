## Forms
{title: 1}

## Forms have lots of jobs

## Capture input

## Validate

## Inform user of result of transaction

## Angular's forms do lots for you

## Two ways to do it

## Template-driven

- lots of control

```html
<form #checkoutForm="ngForm"
      (ngSubmit)="submitted(checkoutForm)"
      >
  <input name=cardNumber
         ngModel
         required
         #number='ngForm'
         >
```

## Model-driven

- generate form from data-structure

```typescript
this.loginForm = builder.group({
  login: ["", Validators.required],
  passwordRetry: builder.group({
    password: ["", Validators.required],
    passwordConfirmation: ["", Validators.required, asyncValidator]
  })
});
```

## Today: template driven

## Inputs

```html
<input name="superName"
       ngModel
       required
       >
```

## Name

```html
<input name="superName"
       ...
       >
```

## `ngModel`

```html
<input ...
       name=superName
       ngModel
       >
```

```typescript
form.superName // this is the ngModel instance
```

## Validators

- Angular supports HTML5 validators

```html
<input ...
       required
       >

```

## Using validators

- we reference `ngModel` via... `ngForm`?!
- bug - hopefully fixed in RC3

```html
<input ...
       #input='ngForm'
       >

<span *ngIf='!input.valid'>
  Please fix your data! :(
</span>
```

## `NgModel`

- `.errors`  = object with keys as error name, boolean if present
- `.valid`   = is valid
- `.pristine` = has not been edited by user


## `NgForm`

- `.controls` = all the controls, with the `ngModel=someName` as name
- `.valid`
- `.pristine`

## Exercise
{exercise:1}

    forms

