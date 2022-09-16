"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[9988],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(83117),a=(r(67294),r(3905));r(8209);const o={sidebar_position:2,toc_max_heading_level:6},i="iFrame paypage",l={unversionedId:"Online Payment Integration/Checkout/iframe-paypage",id:"Online Payment Integration/Checkout/iframe-paypage",title:"iFrame paypage",description:"iFrame Payment Page is a website prepared by PayBy and can be embedded in your website. The Hosted Pay Page still resides on PayBy\u2019 secure servers but the transition to the PayBy secure page is invisible to the cardholder.",source:"@site/docs/Online Payment Integration/Checkout/iframe-paypage.md",sourceDirName:"Online Payment Integration/Checkout",slug:"/Online Payment Integration/Checkout/iframe-paypage",permalink:"/official-doc/docs/Online Payment Integration/Checkout/iframe-paypage",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Hosted paypage",permalink:"/official-doc/docs/Online Payment Integration/Checkout/hosted-paypage"},next:{title:"In-App SDK - Android",permalink:"/official-doc/docs/Online Payment Integration/Checkout/inapp-sdk-android"}},p={},s=[{value:"User experience",id:"user-experience",level:3},{value:"Integrate the API",id:"integrate-the-api",level:3},{value:"Load PayBy JS SDK",id:"load-payby-js-sdk",level:4},{value:"Get tokenUrl",id:"get-tokenurl",level:4},{value:"Create an iFrame",id:"create-an-iframe",level:4},{value:"Redirect URL",id:"redirect-url",level:4},{value:"Asynchronous notification",id:"asynchronous-notification",level:4},{value:"Change Order Status",id:"change-order-status",level:4},{value:"Retrieve order detail",id:"retrieve-order-detail",level:4},{value:"Set payment method",id:"set-payment-method",level:3}],c={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iframe-paypage"},"iFrame paypage"),(0,a.kt)("p",null,"iFrame Payment Page is a website prepared by PayBy and can be embedded in your website. The Hosted Pay Page still resides on PayBy\u2019 secure servers but the transition to the PayBy secure page is invisible to the cardholder.",(0,a.kt)("br",null),"\nUnlike the hosted paypage, using iFrame payapge will not go out of your website when customer pays, which can reduce the failure rate of payment. At the same time, integrating it on its own page will provide you more flexibility."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"user-experience"},"User experience"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When customers are ready to complete their payment, your application creates a new order creation request."),(0,a.kt)("li",{parentName:"ol"},"The PayBy returns a URL that can be rendered in the container on your checkout page."),(0,a.kt)("li",{parentName:"ol"},"Customers choose a payment method and enter their payment details on the payment page to complete the transaction."),(0,a.kt)("li",{parentName:"ol"},"If the payment is completed, customers will be redirected to the merchant's success page.",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"hostedflow",src:r(15358).Z,width:"1725",height:"1005"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"integrate-the-api"},"Integrate the API"),(0,a.kt)("h4",{id:"load-payby-js-sdk"},"Load PayBy JS SDK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<script async src="https://checkout.payby.com/sdk/payby-sdk.umd.js"><\/script>\n')),(0,a.kt)("h4",{id:"get-tokenurl"},"Get tokenUrl"),(0,a.kt)("p",null,"When the customer confirms to pay, call the ",(0,a.kt)("a",{parentName:"p",href:"/docs/createorder"},"Create order")," API,  follow the API description to create a reuest. Pass ",(0,a.kt)("inlineCode",{parentName:"p"},"PAYPAGE")," in the ",(0,a.kt)("strong",{parentName:"p"},"paySceneCode")," parameter.",(0,a.kt)("br",null),"If the request is successful, PayBy will return a token url that can be rendered in the container on your checkout page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"iFrameflow",src:r(7762).Z,width:"1150",height:"1754"})),(0,a.kt)("h4",{id:"create-an-iframe"},"Create an iFrame"),(0,a.kt)("p",null,"Use PayBy.createiFrame with tokenUrl to create an iFrame within a predefined div element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PayBy.createiFrame({\n  id: 'container',\n  lang: 'ar',\n  tokenUrl: tokenUrl,\n  error: function (msg) {\n   alert(msg); \n  }\n }\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"id"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Define the id of the page element contained in the iFrame. You can name the id any character that you can recognize."),(0,a.kt)("p",null,"Example value: container"),(0,a.kt)("p",null,"Max length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"lang"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",null,"The default language of the page PayBy returned in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tokenUrl"),". "),(0,a.kt)("p",null,"Currently only Arabic and English are supported. If no value is passed, or value other than the below two is passed, the page's defaults language will be English."),(0,a.kt)("p",null,"Example value: "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ar"),". Arabic"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"en"),". English"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"tokenUrl"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Link of the paypage, whichcan be rendered in the container on your checkout page."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"success"),"  ",(0,a.kt)("font",{color:" #7d8793"},"String"),"  "),(0,a.kt)("p",null,"The parameter is deprecated. "),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"error"),"  ",(0,a.kt)("font",{color:" #7d8793"},"Function"),"  "),(0,a.kt)("p",null,"When the iFrame processes failed payment, the merchant's website needs to prompt the user with an error message. Please refer to the content of the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"msg")," in PayBy's response to understand the specific error message."),(0,a.kt)("hr",null),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"redirect-url"},"Redirect URL"),(0,a.kt)("p",null,"Create a success page for the URL you provided in the ",(0,a.kt)("strong",{parentName:"p"},"redirectUrl"),"  parameter to display order confirmation message to your customer. PayBy will redirect the payer to this page after the payment has been completed on the checkout."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"asynchronous-notification"},"Asynchronous notification"),(0,a.kt)("p",null,"If the ",(0,a.kt)("strong",{parentName:"p"},"notifyUrl")," is set in the order creation request, after the transaction, PayBy will send payment result to the url.",(0,a.kt)("br",null)),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"change-order-status"},"Change Order Status"),(0,a.kt)("p",null,"You can initiate ",(0,a.kt)("a",{parentName:"p",href:"/docs/revoke"},"Revoke"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/cancel"},"Cancel"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/refund"},"Refund")," and other operations on the created order."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"retrieve-order-detail"},"Retrieve order detail"),(0,a.kt)("p",null,"To retrieve the order detail, call the ",(0,a.kt)("a",{parentName:"p",href:"/docs/retrieveorderdetail"},"Retrieve Order Detail")," API."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"set-payment-method"},"Set payment method"),(0,a.kt)("p",null,"On the paypage page, by default all the payment methods that merchants have activated in PayBy will be listed. If you need to adjust the order of payment methods that your customers see, or temporarily set some payment methods as unavailable to the payer, please configure it in ",(0,a.kt)("a",{parentName:"p",href:"https://b.payby.com/payment-methods"},"Payment Methods"),"."),(0,a.kt)("br",null))}d.isMDXComponent=!0},15358:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/card-ue-iframe-36fedb10fc886a178be75a63d6e4386d.png"},7762:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/iframe-e230b7bdc59ecfb573e9b769dabd6233.png"},8209:(e,t,r)=>{r(67294)}}]);