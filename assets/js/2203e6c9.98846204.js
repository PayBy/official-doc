"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[9988],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));r(8209);const i={sidebar_position:2,toc_max_heading_level:6},o="iFrame paypage",l={unversionedId:"Online Payment Integration/Checkout/iframe-paypage",id:"Online Payment Integration/Checkout/iframe-paypage",title:"iFrame paypage",description:"The iFrame Payment Page is a webpage prepared by PayBy that can be embedded within your website. Although it resides on PayBy\u2019s secure servers, the transition to the PayBy secure page is invisible to the cardholder. Unlike the Hosted Paypage, using the iFrame Paypage ensures that customers remain on your website when making a payment, potentially reducing the payment failure rate. Additionally, integrating the iFrame Paypage within your site provides greater flexibility.",source:"@site/docs/Online Payment Integration/Checkout/iframe-paypage.md",sourceDirName:"Online Payment Integration/Checkout",slug:"/Online Payment Integration/Checkout/iframe-paypage",permalink:"/docs/Online Payment Integration/Checkout/iframe-paypage",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Hosted paypage",permalink:"/docs/Online Payment Integration/Checkout/hosted-paypage"},next:{title:"In-App SDK - Android",permalink:"/docs/Online Payment Integration/Checkout/inapp-sdk-android"}},s={},c=[{value:"User experience",id:"user-experience",level:3},{value:"Integrate the API",id:"integrate-the-api",level:3},{value:"Load PayBy JS SDK",id:"load-payby-js-sdk",level:4},{value:"Get tokenUrl",id:"get-tokenurl",level:4},{value:"Create an iFrame",id:"create-an-iframe",level:4},{value:"3DS Verification Handling",id:"3ds-verification-handling",level:3},{value:"Redirect URL",id:"redirect-url",level:4},{value:"Asynchronous notification",id:"asynchronous-notification",level:4},{value:"Change Order Status",id:"change-order-status",level:4},{value:"Retrieve order detail",id:"retrieve-order-detail",level:4},{value:"Set payment method",id:"set-payment-method",level:3}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iframe-paypage"},"iFrame paypage"),(0,a.kt)("p",null,"The iFrame Payment Page is a webpage prepared by PayBy that can be embedded within your website. Although it resides on PayBy\u2019s secure servers, the transition to the PayBy secure page is invisible to the cardholder. ",(0,a.kt)("br",null),"Unlike the Hosted Paypage, using the iFrame Paypage ensures that customers remain on your website when making a payment, potentially reducing the payment failure rate. Additionally, integrating the iFrame Paypage within your site provides greater flexibility."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"user-experience"},"User experience"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When customers are ready to complete their payment, your application creates a new order creation request."),(0,a.kt)("li",{parentName:"ol"},"The PayBy returns a URL that can be rendered in the container on your checkout page."),(0,a.kt)("li",{parentName:"ol"},"Customers choose a payment method and enter their payment details on the payment page to complete the transaction."),(0,a.kt)("li",{parentName:"ol"},"If the payment is completed, customers will be redirected to the merchant's success page.",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"hostedflow",src:r(15358).Z,width:"1725",height:"1005"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"integrate-the-api"},"Integrate the API"),(0,a.kt)("h4",{id:"load-payby-js-sdk"},"Load PayBy JS SDK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<script async src="https://checkout.payby.com/sdk/payby-sdk.umd.js"><\/script>\n')),(0,a.kt)("h4",{id:"get-tokenurl"},"Get tokenUrl"),(0,a.kt)("p",null,"When the customer confirms to pay, call the ",(0,a.kt)("a",{parentName:"p",href:"/docs/createorder"},"Create order")," API,  follow the API description to create a request. Pass ",(0,a.kt)("inlineCode",{parentName:"p"},"PAYPAGE")," in the ",(0,a.kt)("strong",{parentName:"p"},"paySceneCode")," parameter.",(0,a.kt)("br",null),"If the request is successful, PayBy will return a token url that can be rendered in the container on your checkout page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"iFrameflow",src:r(7762).Z,width:"1150",height:"1754"})),(0,a.kt)("h4",{id:"create-an-iframe"},"Create an iFrame"),(0,a.kt)("p",null,"Use PayBy.createIframe with tokenUrl to create an iFrame within a predefined div element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PayBy.createIframe({\n  id: 'container',\n  lang: 'ar',\n  tokenUrl: tokenUrl,\n  error: function (msg) {\n   alert(msg); \n  }\n });\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Handling success Function:\n\u2022\tIf the merchant passes a success function while creating the iFrame, the redirection will not happen automatically. Instead, the merchant can handle the result themselves.\n\u2022\tThe data parameter in the success function contains a JSON object with the payment result."),(0,a.kt)("li",{parentName:"ol"},"Handling redirectURI:\n\u2022\tThe redirectURI can either be a URL or a form.\n\u2022\tIf the redirectURI is a URL (starts with \u201chttps\u201d), the merchant needs to redirect the user to that URL.\n\u2022\tIf the redirectURI is a form, it will contain an HTML form that needs to be rendered and submitted automatically. The form includes a script for auto-submission."),(0,a.kt)("li",{parentName:"ol"},"3D Secure (3DS) Handling:\n\u2022\tMerchants need to handle the 3DS verification themselves. The redirectURI will either lead to a 3DS verification link or contain a form that triggers the 3DS process.")),(0,a.kt)("p",null,"When you create the iFrame using PayBy.createIframe, you can pass a success function to handle the payment result manually. The success function receives a data parameter that contains the payment result in JSON format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"window.PayBy.createIframe({\n    id: 'paypage',\n    tokenUrl: tokenUrl.value,\n    success: function(data) {\n        // Parse and handle the result\n        var result = JSON.stringify(data);\n        document.querySelector('#payment_result_message').innerText = result;\n        document.querySelector('#payment_result_dialog').showModal();\n\n        // Handle redirectURI\n        var redirectURI = data.redirectURI;\n        if (redirectURI.startsWith('https')) {\n            window.location.href = redirectURI;\n        } else {\n            // Render and submit the form for 3DS\n            var formHtml = redirectURI;\n            document.body.innerHTML += formHtml;\n            document.forms['frmBankID'].submit();\n        }\n    },\n    error: function(err) {\n        console.error('Payment failed:', err);\n    }\n});\n\n")),(0,a.kt)("h3",{id:"3ds-verification-handling"},"3DS Verification Handling"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2022   URL Handling: If redirectURI is a URL, redirect the user to this URL for 3DS verification.\n\u2022   Form Handling: If redirectURI is an HTML form, render the form on your page and let it auto-submit for 3DS verification.\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"id"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Define the id of the page element contained in the iFrame. You can name the id any character that you can recognize."),(0,a.kt)("p",null,"Example value: container"),(0,a.kt)("p",null,"Max length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"lang"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",null,"The default language of the page PayBy returned in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tokenUrl"),". "),(0,a.kt)("p",null,"Currently only Arabic and English are supported. If no value is passed, or value other than the below two is passed, the page's defaults language will be English."),(0,a.kt)("p",null,"Example value: "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ar"),". Arabic"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"en"),". English"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"tokenUrl"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Link of the paypage, which can be rendered in the container on your checkout page."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"success"),"  ",(0,a.kt)("font",{color:" #7d8793"},"String"),"  "),(0,a.kt)("p",null,"The parameter is deprecated. "),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"error"),"  ",(0,a.kt)("font",{color:" #7d8793"},"Function"),"  "),(0,a.kt)("p",null,"When the iFrame processes failed payment, the merchant's website needs to prompt the user with an error message. Please refer to the content of the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"msg")," in PayBy's response to understand the specific error message."),(0,a.kt)("hr",null),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"redirect-url"},"Redirect URL"),(0,a.kt)("p",null,"Create a success page for the URL you provided in the ",(0,a.kt)("strong",{parentName:"p"},"redirectUrl"),"  parameter to display order confirmation message to your customer. PayBy will redirect the payer to this page after the payment has been completed on the checkout."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"asynchronous-notification"},"Asynchronous notification"),(0,a.kt)("p",null,"If the ",(0,a.kt)("strong",{parentName:"p"},"notifyUrl")," is set in the order creation request, after the transaction, PayBy will send payment result to the url.",(0,a.kt)("br",null)),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"change-order-status"},"Change Order Status"),(0,a.kt)("p",null,"You can initiate ",(0,a.kt)("a",{parentName:"p",href:"/docs/revoke"},"Revoke"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/cancel"},"Cancel"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/refund"},"Refund")," and other operations on the created order."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"retrieve-order-detail"},"Retrieve order detail"),(0,a.kt)("p",null,"To retrieve the order detail, call the ",(0,a.kt)("a",{parentName:"p",href:"/docs/retrieveorderdetail"},"Retrieve Order Detail")," API."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"set-payment-method"},"Set payment method"),(0,a.kt)("p",null,"On the paypage, by default, all payment methods activated by the merchant in PayBy will be listed. To adjust the order of payment methods or temporarily disable some payment methods for the payer, configure it in Payment Methods. ",(0,a.kt)("a",{parentName:"p",href:"https://b.payby.com/payment-methods"},"Payment Methods"),"."),(0,a.kt)("br",null))}d.isMDXComponent=!0},15358:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/card-ue-iframe-36fedb10fc886a178be75a63d6e4386d.png"},7762:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/iframe-e230b7bdc59ecfb573e9b769dabd6233.png"},8209:(e,t,r)=>{r(67294)}}]);