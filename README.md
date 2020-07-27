# ANGULAR4-PAYSTACK

> This is an angular module that abstracts the complexity of making paystack payments with Angular2+.

## USAGE

### 1. Install the module

```sh
npm install --save angular4-paystack
```

### 2. Import the module

In your `app.module.ts` or any module where the component or directive would be used like so:

```ts
import { NgModule } from '@angular/core';

import { Angular4PaystackModule } from 'angular4-paystack';
...

@NgModule({
  imports: [
    Angular4PaystackModule.forRoot('pk_test_xxxxxxxxxxxxxxxxxxxxxxxx'),
  ]
})

export class AppModule {}
```

### 3. Implement in your project

There are two available options

- **AngularPaystackComponent**: Renders a button which when clicked loads paystack Inline in an iframe

  ```html
  <angular4-paystack
    [email]="'mailexample@mail.com'"
    [amount]="5000000"
    [ref]="reference"
    [channels]="['bank']"
    [class]="'btn btn-primary'"
    (onClose)="paymentCancel()"
    (callback)="paymentDone($event)"
  >
    Pay with Paystack
  </angular4-paystack>
  ```

- **AngularPaystackDirective**: A directive that loads paystack inline in an iframe when clicked

```html
<button
  angular4-paystack
  [key]="'pk_test_xxxxxxxxxxxxxxxxxxxxxxx'"
  [email]="'mailexample@mail.com'"
  [amount]="5000000"
  [ref]="reference"
  [class]="'btn btn-primary'"
  (paymentInit)="paymentInit()"
  (onClose)="paymentCancel()"
  (callback)="paymentDone($event)"
>
  Pay with Paystack
</button>
```

And then in your `component.ts`

```ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  reference = "";
  constructor() {}

  paymentInit() {
    console.log("Payment initialized");
  }

  paymentDone(ref: any) {
    this.title = "Payment successfull";
    console.log(this.title, ref);
  }

  paymentCancel() {
    console.log("payment failed");
  }

  ngOnInit() {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  }
}
```

Also you can use the `paystackOptions` object like so:

```html
<button
  angular4-paystack
  [paystackOptions]="options"
  (paymentInit)="paymentCancel()"
  (onClose)="paymentCancel()"
  (callback)="paymentDone($event)"
>
  Pay with Paystack
</button>
```

And then in your `component.ts`

```ts
import { Component } from "@angular/core";
import { PaystackOptions } from "angular4-paystack";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  options: PaystackOptions = {
    amount: 50000,
    email: "user@mail.com",
    ref: `${Math.ceil(Math.random() * 10e10)}`,
  };
  constructor() {}

  paymentInit() {
    console.log("Payment initialized");
  }

  paymentDone(ref: any) {
    this.title = "Payment successfull";
    console.log(this.title, ref);
  }

  paymentCancel() {
    console.log("payment failed");
  }
}
```

Also, you can pass in a key in the component and the directive, in such situation, this key is given a higher preference over the global `forRoot` key. For example, if you have this is your file

```ts
@NgModule({
  imports: [
    Angular4PaystackModule.forRoot('pk_test_1'),
  ]
})
```

and this in your component

```html
<button
  angular4-paystack
  [key]="'pk_test_2'"
  [email]="'mailexample@mail.com'"
  [amount]="5000000"
  [ref]="reference"
  [class]="'btn btn-primary'"
  (paymentInit)="paymentInit()"
  (onClose)="paymentCancel()"
  (callback)="paymentDone($event)"
>
  Pay with Paystack
</button>
```

Then `pk_test_2` would be used instead

## OPTIONS

| Name                   | Type       | Required | Default Value | Description                                                                                                                             |
| ---------------------- | ---------- | -------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`               | `number`   | true     | undefined     | Amount to withdraw (in kobo for NGN)                                                                                                    |
| `email`                | `string`   | true     | undefined     | The customer's email address.                                                                                                           |
| `key`                  | `string`   | true     | undefined     | Your pubic Key from Paystack. Use test key for test mode and live key for live mode                                                     |
| `ref`                  | `string`   | true     | undefined     | Unique case sensitive transaction reference. Only -,., = and alphanumeric characters allowed.                                           |
| `callback`             | `function` | true     | undefined     | A function called when transaction is successful. Returns an object containing unique reference                                         |
| `metadata`             | `object`   | false    | {}            | custom details                                                                                                                          |
| `class`                | `string`   | false    | undefined     | A string of classes to add to the component (not available for **inline embed**)                                                        |
| `style`                | `object`   | false    | undefined     | CSS stylings, eg `{fontColor: 'red'}` (not available for **inline embed**)                                                              |
| `text`                 | `object`   | false    | undefined     | Text output of the component                                                                                                            |
| `currency`             | `string`   | false    | "NGN"         | Transaction currency                                                                                                                    |
| `plan`                 | `string`   | false    | ""            | If transaction is to create a subscription to a predefined plan, provide plan code here.                                                |
| `quantity`             | `string`   | false    | ""            | Used to apply a multiple to the amount returned by the plan code above.                                                                 |
| `paystackOptions`      | `object`   | false    | undefined     | An object containing the paystack options above. **NOTE:** The function listeners eg `callback`, `paymentInit` should not be added here |
| `paymentInit`          | `function` | false    | undefined     | A function called when the payment is about to begin                                                                                    |
| `onClose`              | `function` | false    | undefined     | A function called if the customer closes the payment window                                                                             |
| **For Split Payments** |
| `subaccount`           | `string`   | false    | ""            | The code for the subaccount that owns the payment.                                                                                      |
| `transaction_charge`   | `number`   | false    | 0             | A flat fee to charge the subaccount for this transaction, in kobo.                                                                      |
| `bearer`               | `string`   | false    | ""            | Who bears Paystack charges? account or subaccount                                                                                       |
| `channels`             | `array`    | false    | undefined     | Send 'card' or 'bank' or 'card','bank' as an array to specify what options to show the user paying                                      |

> For more information checkout [paystack's documentation](https://developers.paystack.co/docs/paystack-inline#section-working-with-paystack-inline)

## Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.

## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or anywhere? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/ashinzekene)!

Two projects exist in this repository
- The `Angular4-Paystack` package: [`./projects/angular4-paystack`](./projects/angular4-paystack)
- The demo: [`./src`](./src)

### Angular4-paystack project
- Found at `./projects/angular4-paystack/src/lib`.
- The artifacts ([README.md](./projects/angular4-paystack/README.md), [CHANGELOG.md](./projects/angular4-paystack/CHANGELOG.md) and [LICENSE.md](./projects/angular4-paystack/LICENSE.md)) in the `./projects/angular4-paystack/` folder are overwritten on [build](https://github.com/ashinzekene/angular4-paystack/blob/master/package.json#L7)
- Running `npm run build` on the main folder builds this project by [default](https://github.com/ashinzekene/angular4-paystack/blob/master/angular.json#L155)

### Demo
- To serve this project run `npm start`/`ng serve`.
- This project makes use of the [built package](https://github.com/ashinzekene/angular4-paystack/blob/master/tsconfig.json#L23) from the `angular4-paystack` library for quick testing and real-life debugging. So it's **important** to initially run `npm run build`/`ng build` before serving this project
- This project is also served on github pages at https://ashinzekene.github.io/angular4-paystack/


Thanks!
Ashinze Ekene.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
