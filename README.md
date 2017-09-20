# ANGULAR4-PAYSTACK

This is an angular module that abstracts the complexity of making payments through paystack with Angular.

## USAGE

1. Install the module
```sh
npm install --save angular4-paystack
```

2. Import the module
In your `app.module.ts` import the module like so:

```js
import { NgModule } from '@angular/core'; 

import { Angular4PaystackModule } from 'angular4-paystack';
...

@NgModule({
  imports: [
    ...
    Angular4PaystackModule,
  ]
})

export class AppModule {}
```

3. Use the component in your code

```
  <angular4-paystack
    [text]="'Pay with Paystack'"
    [key]="'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx'"
    [email]="'ashinzekene@gmail.com'"
    [amount]="5000000"
    [ref]="'2637458697'"
    [class]="'btn btn-primary'"
    (close)="paymentCancel()"
    (callback)="paymentDone($event)"
  >
  </angular4-paystack>
```

## OPTIONS

|Name                   | Type           | Required            | Default Value       | Description         |
|-----------------------|----------------|---------------------|---------------------|---------------------| 
|  `amount `            | `number`       | true                |  undefined          | Amount to withdraw (in kobo for NGN)
|  `email `             | `string`       | true                |  undefined          | Email of subscriber/client
|  `key`                | `string`       | true                |  undefined          | 
|  `ref`                | `string`       | true                |  undefined          | Unique reference
|  `transaction_charge` | `number`       | false               |  0                  | 
|  `metadata`           | `object`       | false               |  {}                 | 
|  `class`              | `string`       | false               |  undefined          | A string of classes to add to the component
|  `style`              | `object`       | false               |  undefined          | CSS stylings, eg ```{fontColor: 'red'}```
|  `text`               | `object`       | false               |  undefined          | Text output of the component
|  `currency`           | `string`       | false               |  "NGN"              | Transaction currency
|  `plan`               | `string`       | false               |  ""                 | 
|  `quantity`           | `string`       | false               |  ""                 | 
|  `subaccount`         | `string`       | false               |  ""                 | 
|  `bearer`             | `string`       | false               |  ""                 | 
|  `callback`           | `function`     | false               |  undefined          | A function called when transaction is successful. Returns a parameter containing unique reference
|  `onClose`            | `function`     | false               |  undefined          | A function called when transaction is cancelled