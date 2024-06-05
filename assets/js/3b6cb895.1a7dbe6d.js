"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[6757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,d=u["".concat(p,".").concat(c)]||u[c]||k[c]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70653:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(83117),r=(n(67294),n(3905));n(8209);const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"merchantOrderNo")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The merchant's reference number of the request. Used to track every request."),(0,r.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"64")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"orderNo")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The merchant's reference number of the request. Used to track every request."),(0,r.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"64")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"holderName")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The holder name of the beneficiary account. The parameter needs to be encrypted when passed, and SHA-256 algorithm is recommended."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"100")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"iban")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The IBAN number of the beneficiary account. The parameter needs to be encrypted when passed, and SHA-256 algorithm is recommended."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"34")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"swiftCode")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"A SWIFT code consists of 8-11 characters and follows a format that identifies the benificiary account's bank, country, location, and branch."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"11")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"beneficiaryAddress")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the beneficiary account is a personal account, the beneficiary address must be passed, and the sum of the characters of the two values of holderName and beneficiaryAddress cannot exceed 140, otherwise the transfer may fail.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Only the following characters are allowed to pass, if the parameter contains other characters, the response will be error: a - z A - Z 0 - 9 / . -")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The parameter needs to be encrypted when passed, and SHA-256 algorithm is recommended."),(0,r.kt)("p",{parentName:"li"},"Example value: Liwa Street off Khalifa Street"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"140")))),(0,r.kt)("p",{parentName:"li"},"Example value: Liwa Street off Khalifa Street"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"140")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"amount")," ",(0,r.kt)("font",{color:" #7d8793"},"Money")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"How much AED do you want to transfer. The currency code must be ",(0,r.kt)("inlineCode",{parentName:"p"},"AED"),"."),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"memo")," ",(0,r.kt)("font",{color:" #7d8793"},"String")," ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",{parentName:"li"},"The description of this transfer."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"128")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"notifyUrl")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"To receive asynchronous notifications of order status updates, you can pass the notify URL."),(0,r.kt)("p",{parentName:"li"},"Example value: ",(0,r.kt)("a",{parentName:"p",href:"https://www.yoursite.com"},"https://www.yoursite.com")),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"accountNo")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"Bank account number of the beneficiary account."),(0,r.kt)("p",{parentName:"li"},"Example value: 2000000000001"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"64")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"networkCode")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The code of which transfer network is used in this payout. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"LOCAL"),"."),(0,r.kt)("p",{parentName:"li"},"Example value: LOCAL, SWIFT"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"20")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"bankName")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The bank name of the beneficiary account."),(0,r.kt)("p",{parentName:"li"},"Example value: First Abu Dhabi Bank PJSC"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"64")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"countryCode")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The code of the country where the bank of the beneficiary account belongs. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"UAE"),"."),(0,r.kt)("p",{parentName:"li"},"Example value: UAE, SG, US, etc."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"16")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"fundoutCurrencyCode")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"In this payout, the currency of the funds received by the beneficiary account. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"AED"),"."),(0,r.kt)("p",{parentName:"li"},"Example value: AED, USD."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"16")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"fedwireCode")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"A Fedwire (or ABA) code is a bank code used in the United States, which identifies financial institutions. Fedwire/ABA codes are always nine (9) digits in length."),(0,r.kt)("p",{parentName:"li"},"Example value: 133563585"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"9")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"branchName")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"The branch name of the bank of the beneficiary account."),(0,r.kt)("p",{parentName:"li"},"Example value: Mall of the Emirates Branch"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"35")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"intermediaryBank")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"An intermediary bank is required when making international funds transfers between the originator bank and the beneficiary bank. This only happens when the banks don\u2019t have an established relationship, such as an account that would otherwise facilitate a direct deposit in a SWIFT network."),(0,r.kt)("p",{parentName:"li"},"Example value: iPhone"),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"12")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"beneficiaryType")," ",(0,r.kt)("font",{color:" #7d8793"},"String")),(0,r.kt)("p",{parentName:"li"},"In this payout method, what type of code is used to identify the beneficiary account or the bank to which the beneficiary account belongs."),(0,r.kt)("p",{parentName:"li"},"Example value: IBAN, BBAN."),(0,r.kt)("p",{parentName:"li"},"Maximum length: ",(0,r.kt)("inlineCode",{parentName:"p"},"16")),(0,r.kt)("br",null))))}i.isMDXComponent=!0},6812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(83117),r=(n(67294),n(3905)),o=(n(8209),n(70653));const i={sidebar_position:5,toc_max_heading_level:6},l="Asynchronous notification",p={unversionedId:"Transfer to bank/transfer-to-bank-notification",id:"Transfer to bank/transfer-to-bank-notification",title:"Asynchronous notification",description:"If the notifyUrl parameter is passed in the transfer to bank request to receive notifications, PayBy will send a message to the address when when the order status changes from CREATED to SUCCESS or  FAILURE.",source:"@site/docs/Transfer to bank/transfer-to-bank-notification.mdx",sourceDirName:"Transfer to bank",slug:"/Transfer to bank/transfer-to-bank-notification",permalink:"/docs/Transfer to bank/transfer-to-bank-notification",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Retrieve order details",permalink:"/docs/Transfer to bank/transfer-to-bank-query"},next:{title:"Transfer"}},s={},m=[{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Notification sample",id:"notification-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4}],k={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"asynchronous-notification"},"Asynchronous notification"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"notifyUrl")," parameter is passed in the transfer to bank request to receive notifications, PayBy will send a message to the address when when the order status changes from ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATED")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESS")," or ",(0,r.kt)("inlineCode",{parentName:"p"}," FAILURE"),"."),(0,r.kt)("br",null),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{color:"#f19938"},"Notice"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("font",{color:"black"},"In this scenario, the request is sent by PayBy to the merchant, and the merchant needs to send response to PayBy.")),(0,r.kt)("li",{parentName:"ol"},"After receiving the notification, please return the success message, otherwise PayBy will try to send multiple times. The maximum number of attempts is 7. The interval time between each attempt is as follows:  2 minutes, 10 minutes, 10  minutes, 1 hour, 2 hours, 6 hours, and 15 hours. "),(0,r.kt)("li",{parentName:"ol"},"The notification request is signed by payBy side. The merchant must verify the notification signature before processing the content.")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("h4",{id:"http-header"},"Http Header"),(0,r.kt)("hr",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Attributes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type"),"    ",(0,r.kt)("font",{color:"#7d8793"},"String"),"  ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,r.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,r.kt)("p",null,"Example value: application/json"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sign"),"   ",(0,r.kt)("font",{color:" #7d8793"},"String"),"   ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"When PayBy sends response, PayBy will use its own private key to sign the message, and the merchant uses PayBy 's public key to verify the signature. If the verification is passed, it proves that the response was sent by PayBy and not faked by others.")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"http-body"},"Http Body"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"notify_timestamp"),"  ",(0,r.kt)("font",{color:" #7d8793"},"Timestamp"),"  ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The timestamp when PayBy sent the request."),(0,r.kt)("p",null,"Example value: 1586849271877"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"notify_id"),"  ",(0,r.kt)("font",{color:" #7d8793"},"String"),"  ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The unique identification number of this notification within the PayBy system."),(0,r.kt)("p",null,"Example value: 202004140007474501"),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"transferToBankOrder"),"   ",(0,r.kt)("font",{color:" #7d8793"},"Object")),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"Attributes"),(0,r.kt)(o.ZP,{mdxType:"TransferToBankOrder"})))),(0,r.kt)("br",null),(0,r.kt)("font",{color:"grey"},"**notify_time**"),"  ",(0,r.kt)("font",{color:" #7d8793"},"String"),(0,r.kt)("p",null,"The parameter is deprecated. Please use the ",(0,r.kt)("inlineCode",{parentName:"p"},"notify_timestamp")," instead."),(0,r.kt)("br",null),(0,r.kt)("font",{color:"grey"},"**_input_charset**"),"  ",(0,r.kt)("font",{color:" #7d8793"},"String"),(0,r.kt)("p",null,"The parameter is deprecated. "),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"notification-sample"},"Notification sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Type": "application/json; charset=UTF-8"\n}\n\nHttp Body\n{\n    "_input_charset": "UTF-8",\n    "notify_id": "202004140007474501",\n    "notify_time": "20200414113800",\n    "transferToBankOrder": {\n        "amount": {\n            "amount": 0.02,\n            "currency": "AED"\n        },\n        "holderName": "00d74f270d2251e8fa6e7f3b1ea06bd3b5f32dfe4719f9df60982c55b24e4898",\n        "iban": "1fc44f25c178c422f705054c669cfa6133f6dc8e1fe24b3d96f847667db8b92c",\n        "memo": "company single pay",\n        "merchantOrderNo": "M188573109026",\n        "notifyUrl": "http://www.yoursite.com",\n        "orderNo": "911586849271010217",\n        "paymentInfo": {\n            "arrivalTime": 1586849273000,\n            "payerFeeAmount": {\n                "amount": 5.0,\n                "currency": "D"\n            }\n        },\n        "product": "Transfer To Bank",\n        "requestTime": 1586849271877,\n        "status": "SUCCESS",\n        "swiftCode": "BBME AEAD"\n    }\n}\n')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"Please reply ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," after receiving the notification, otherwise PayBy will send the notification repeatedly for the same order."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"http-header-1"},"Http Header"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type"),"    ",(0,r.kt)("font",{color:"#7d8793"},"String"),"  ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,r.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,r.kt)("p",null,"Example value: application/json"),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"http-body-1"},"Http Body"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"response"),"  ",(0,r.kt)("font",{color:" #7d8793"},"String"),"  ",(0,r.kt)("font",{color:"#f19938"},"Required")),(0,r.kt)("p",null,"Example value: Success"),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n "Content-Type": "application/json; charset=UTF-8" \n}\n\nHttp Body\n{\n    "response":"SUCCESS"\n}\n')))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);