

**Paypage**

(Hosted paypage & iFrame paypage)

---

**<span style={{color:"#333333"}}> PayScene parameters</span>**

- **redirectUrl**   <span style={{color:" #7d8793"}}>String</span> 

  Link that the payer will be redirected once the payer finalizes payments on PayBy's checkout. 

  Example value: https://www.yoursite.com

  Maximum length: `512`.

  <br/>

- **customerId**   <span style={{color:" #7d8793"}}>String</span>   

  The payer's id in the merchant's system. If this parameter is used, after the user enters the card details and completes the payment for the first time, PayBy will save the card under the customer id. When another transaction is made, the payer will see the saved card on the PayPage checkout. Then the customer just need to enter cvv to complete the transaction without entering card number, holder name and card expiration time again.

  <br/>
  
- **changePayer**   <span style={{color:" #7d8793"}}>String</span>   

  If the user tries to pay with BOTIM / PayBy, whether to bind the payer information to the order after payer scanning the code. If false, if user A does not complete the payment after scanning the QR code, other users can continue to scan the QR code to pay. If true, if user A does not complete the payment after scanning the QR code, other users will fail when they try to scan the QR code to pay. The default value is true.

  Default value: Ture.
  
  <br/>
  
- **oneTimePayment**   <span style={{color:" #7d8793"}}>String</span>   

  When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's succesful.

  Default value: False.
  
  <br/>
