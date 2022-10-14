---
sidebar_position: 10
toc_max_heading_level: 6
---

# Cash Top Up

For online merchants, this product offers users who don't have bank accounts the ability to use cash to complete their online orders. For example, this product can be used in game account top up scenario, the payer gives cash to cashier of the store that running this business, the cashier helps to complete the online payment.

<br/>

### User experience

1.  The customer confirms to add money to his or her online account, the merchant will generate an QR code for the payer's order. Along with the order, Payby will also send a how-to guide to the user's phone.
2.  The customer follows the guide, find a nearest store that running this business.
3.  The payer gives cash (same amount with the order amount) to cashier of the store, the cashier cheks the cash then use PayBy POS to scan the QR code. In this process, the store's e-waller balance will be used to pay the payer's order.
4.  The payer will receive notification that the payment has been made, and the balance of the online account added.

<br/>

![payer-ue](../pic/ue-payer-cash.png)



### Cashier experience

1. The cashier cheks that the cash amount is correct and then use PayBy POS to scan the QR code presented by the payer. In the process, password is required.
2. After scanning, the PayBy backend system will deduct balance from the store and change the online order status to success.
3. Note that the cashier should make sure the store's PayBy account has enough balance otherwise the payment can't be completed.

![cashier-ue](../pic/ue-cashier-cash.png)

<br/>



### Integrate the API

#### Create order

When the customer confirms to pay, call the [Create order](/docs/createorder) API,  follow the API description to create a reuest. Pass `CASHTOPUP` in the **paySceneCode** parameter.

<br/>

If the request is successful, PayBy will return the **tokenUrl**. The merchant's server needs to convert the URL into an QRcode image and display it to customers on its interface.

<br/>

After the payment the payby server will notify the result to merchant's server, and the customer will see the payment result on the phone.

<br/>

#### Asynchronous notification

If the **notifyUrl** is set in the order creation request, after the transaction, PayBy will send payment result to the url.<br/>

<br/>

#### Change Order Status

You can initiate [Revoke](/docs/revoke), [Cancel](/docs/cancel), [Refund](/docs/refund) and other operations on the created order.

<br/>

#### Retrieve Order

To retrieve the order detail, call the [Retrieve Order Detail](/docs/retrieveorderdetail) API.





