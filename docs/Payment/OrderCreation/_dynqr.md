**DYNQR**

Merchant presented QR code

---

**<font color="#333333"> PayScene parameters</font>**

- **changePayer**   <span style={{color:" #7d8793"}}>String</span>   

  If the user tries to pay with BOTIM / PayBy, whether to bind the payer information to the order after payer scanning the code. If false, if user A does not complete the payment after scanning the QR code, other users can continue to scan the QR code to pay. If true, if user A does not complete the payment after scanning the QR code, other users will fail when they try to scan the QR code to pay. The default value is true.

  Default value: True.
  
  <br/>
  
- **oneTimePayment** <span style={{color:" #7d8793"}}>String</span>

  When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's successful.

  Default value: False
  
  <br/>

- **email** <span style={{color:" #7d8793"}}>String</span>

  Payer's email.

  Example value: customer@payment.com

  <br/>
