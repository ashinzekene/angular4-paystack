# ANGULAR4-PAYSTACK

> This is an angular module that abstracts the complexity of making paystack payments with Angular2+.
  
## USAGE

### 1. Install the module
  ```sh
  npm install --save angular4-paystack
  ```

### 2. Reference the Paystack inline script in your index.html like so:
  ```html
    <script src="https://js.paystack.co/v1/inline.js"></script>  
  ```

### 3. Import the module
  In your `app.module.ts` or your working module like so:

  ```ts
  import { NgModule } from '@angular/core'; 

  import { Angular4PaystackModule } from 'angular4-paystack';
  ...

  @NgModule({
    imports: [
      Angular4PaystackModule,
    ]
  })

  export class AppModule {}
  ```

### 4. Use the component in your code
  There are two available options

  * Paystack Inline - Loads the credit card form in an iframe that appears as a popup
    ```html
      <angular4-paystack
        [key]="'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx'"
        [email]="'mailexample@mail.com'"
        [amount]="5000000"
        [ref]="'2637458697'"
        [class]="'btn btn-primary'"
        (close)="paymentCancel()"
        (callback)="paymentDone($event)"
      >Pay with Paystack</angular4-paystack>
    ```

  * Paystack Inline Embed - Paystack Inline Embed is the latest addition to the stack, it offers a stylish Inline that loads the credit card form in a set container like it sits in your page.
    ```html
      <angular4-paystack-embed
        [key]="'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx'"
        [email]="'mailexample@mail.com'"
        [amount]="5000000"
        [ref]="'2637458697'"
        [class]="'btn btn-primary'"
        (close)="paymentCancel()"
        (callback)="paymentDone($event)"
      ></angular4-paystack-embed>
    ```
    **NOTE**
    - The payment form will be 100% of the width of wherever you put it.
    - To maintain a uniform design, your page's background color should be white


## OPTIONS

|Name                   | Type           | Required            | Default Value       | Description         |
|-----------------------|----------------|---------------------|---------------------|---------------------| 
|  `amount `            | `number`       | true                |  undefined          | Amount to withdraw (in kobo for NGN)
|  `email `             | `string`       | true                |  undefined          | The customer's email address.
|  `key`                | `string`       | true                |  undefined          | Your pubic Key from Paystack. Use test key for test mode and live key for live mode
|  `ref`                | `string`       | true                |  undefined          | Unique case sensitive transaction reference. Only -,., = and alphanumeric characters allowed.
|  `callback`           | `function`     | true                |  undefined          | A function called when transaction is successful. Returns an object containing unique reference
|  `metadata`           | `object`       | false               |  {}                 | custom details
|  `class`              | `string`       | false               |  undefined          | A string of classes to add to the component (not available for **inline embed**)
|  `style`              | `object`       | false               |  undefined          | CSS stylings, eg ```{fontColor: 'red'}```  (not available for **inline embed**)
|  `text`               | `object`       | false               |  undefined          | Text output of the component
|  `currency`           | `string`       | false               |  "NGN"              | Transaction currency
|  `plan`               | `string`       | false               |  ""                 | If transaction is to create a subscription to a predefined plan, provide plan code here.
|  `quantity`           | `string`       | false               |  ""                 | Used to apply a multiple to the amount returned by the plan code above.
|  `onClose`            | `function`     | false               |  undefined          | A function called if the customer closes the payment window
**For Split Payments** |
|  `subaccount`         | `string`       | false               |  ""                 | The code for the subaccount that owns the payment. 
|  `transaction_charge` | `number`       | false               |  0                  |  A flat fee to charge the subaccount for this transaction, in kobo.
|  `bearer`             | `string`       | false               |  ""                 | Who bears Paystack charges? account or subaccount

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