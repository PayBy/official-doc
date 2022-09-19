**E-wallet**

---

**<font color="#333333"> PayScene parameters</font>**

- **eWalletCode** <span style={{color:" #7d8793"}}>Enum</span> <span style={{color:"#f19938"}}>Required</span>

  Which e-wallet you want to invoke via the deeplink. 

  Example value: 

  `payby`. PayBy app.

  `botim-pay`. BOTIM app.

  Maximum length: `20`

  <br/>

- **redirectUrl** <span style={{color:" #7d8793"}}>String</span>

  Link that the payer will be redirected once the payer finalizes payments on the e-wallet's checkout.

  Example value: https://www.yoursite.com

  Maximum length: `512`.

  <br/>

- **oneTimePayment** <span style={{color:" #7d8793"}}>Boolean</span>

  When passed true, it means that the merchant requires the order to be paid only once. For example, if an order is not paid successfully the first time, the user will not be allowed to continue trying to pay for the order. When passed false, the order can be paid multiple times before it's succesful.

  Default value: False
  
  <br/>
