---
sidebar_position: 2
toc_max_heading_level: 6
---

# DYNRQ

## Payment QR Code

After the customer places an order, a dynamic code is generated on the merchant's interface - website, mobile app or even a vending machine, and the customer can scan the code by PayBy , BOTIM APP to complete the payment.<br/>

Some interfaces are not suitable for customers to enter card information, such as vending machines or parking garages, this method can effectively transfer the payment process from the merchant interface to the user's mobile phone. Making payments via QR codes is very secure. It’s because the QR code is nothing but just a tool that is used to exchange information. Any data which is transferred via QR codes is encrypted thus making the payment foolproof secure.

## User Experience

1.  The customer confirms to pay for an order, the merchant generates a QR codes on the interface.
2. The customer uses PayBy, BOTIM to scan the QR code to obtain order information. 
3. In the order information returned by payby server, there is a parameter **tokenUrl**, PayBy or BOTIM application will parse this parameter and redirect the customer to the built-in checkout of the app.
4. Customers enter their payment details on the payment page and complete the transaction.
5. If the payment is completed, the customer will see the payment result on the app.

## Integrate the API

### Initiate Payment and Display QR Code

1. **Customer Confirmation**  
   Wait for the customer to confirm their intent to make a payment.

2. **Create Order Request**  
   Call the [Create Order](/docs/createorder) API.  
   - Follow the API documentation to construct the request.
   - Set the `paySceneCode` parameter to `DYNQR`.

3. **Handle API Response**  
   If the API call is successful:
   - Retrieve the `tokenUrl` from the response.

4. **Generate and Display QR Code**  
   - Convert the `tokenUrl` into a QR code image.
   - Display the QR code on the merchant's interface for the customer to scan.

5. **Payment Notification**  
   - After the customer completes the payment, PayBy will send the payment result notification to either the PayBy server or the BOTIM app.
   - The customer will see the payment result in the app.

### Asynchronous Notification

If the **notifyUrl** is set in the order creation request, after the transaction, PayBy will send payment result to the url.

### Change Order Status

You can initiate [Revoke](/docs/revoke), [Cancel](/docs/cancel), [Refund](/docs/refund) and other operations on the created order.

### Retrieve Order

To retrieve the order detail, call the [Retrieve Order Detail](/docs/retrieveorderdetail) API.

![dynrqflow](../pic/dynqr.png)
