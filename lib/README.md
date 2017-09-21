# ANGULAR4-PAYSTACK

> This is an angular module that abstracts the complexity of making paystack payments with Angular.

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
|  `key`                | `string`       | true                |  undefined          | Your pubic Key from Paystack. Use test key for test mode and live key for live mode
|  `ref`                | `string`       | true                |  undefined          | Unique reference
|  `transaction_charge` | `number`       | false               |  0                  |  A flat fee to charge the subaccount for this transaction, in kobo.
|  `metadata`           | `object`       | false               |  {}                 | custom details
|  `class`              | `string`       | false               |  undefined          | A string of classes to add to the component
|  `style`              | `object`       | false               |  undefined          | CSS stylings, eg ```{fontColor: 'red'}```
|  `text`               | `object`       | false               |  undefined          | Text output of the component
|  `currency`           | `string`       | false               |  "NGN"              | Transaction currency
|  `plan`               | `string`       | false               |  ""                 | If transaction is to create a subscription to a predefined plan, provide plan code here.
|  `quantity`           | `string`       | false               |  ""                 | Used to apply a multiple to the amount returned by the plan code above.
|  `subaccount`         | `string`       | false               |  ""                 | The code for the subaccount that owns the payment. 
|  `bearer`             | `string`       | false               |  ""                 | Who bears Paystack charges? account or subaccount
|  `callback`           | `function`     | false               |  undefined          | A function called when transaction is successful. Returns a parameter containing unique reference
|  `onClose`            | `function`     | false               |  undefined          | A function called when transaction is cancelled

> For more information checkout [paystack's documentation](https://developers.paystack.co/docs/paystack-inline#section-working-with-paystack-inline)

## Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.


## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or anywhere? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/ashinzekene)!

Thanks!
Ashinze Ekene.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.