"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[6768],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},27150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(83117),a=(r(67294),r(3905));r(8209);const o={sidebar_position:2,toc_max_heading_level:6},i="DYNRQ",l={unversionedId:"Online Payment Integration/Special Payment Scenes/dynrq",id:"Online Payment Integration/Special Payment Scenes/dynrq",title:"DYNRQ",description:"Merchant presented QR code",source:"@site/docs/Online Payment Integration/Special Payment Scenes/dynrq.md",sourceDirName:"Online Payment Integration/Special Payment Scenes",slug:"/Online Payment Integration/Special Payment Scenes/dynrq",permalink:"/official-doc/docs/Online Payment Integration/Special Payment Scenes/dynrq",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"E-wallet",permalink:"/official-doc/docs/Online Payment Integration/Special Payment Scenes/ewallet"},next:{title:"QRPAY",permalink:"/official-doc/docs/Online Payment Integration/Special Payment Scenes/qrpay"}},c={},s=[{value:"User experience",id:"user-experience",level:3},{value:"Integrate the API",id:"integrate-the-api",level:3},{value:"Create order",id:"create-order",level:4},{value:"Asynchronous notification",id:"asynchronous-notification",level:4},{value:"Change Order Status",id:"change-order-status",level:4},{value:"Retrieve Order",id:"retrieve-order",level:4}],p={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dynrq"},"DYNRQ"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Merchant presented QR code")),(0,a.kt)("p",null,"After the customer places an order, a dynamic code is generated on the merchant's interface - website, mobile app or even a vending machine, and the customer can scan the code by PayBy , BOTIM APP to complete the payment.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Some interfaces are not suitable for customers to enter card information, such as vending machines or parking garages, this method can effectively transfer the payment process from the merchant interface to the user's mobile phone. Making payments via QR codes is very secure. It\u2019s because the QR code is nothing but just a tool that is used to exchange information. Any data which is transferred via QR codes is encrypted thus making the payment foolproof secure."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"user-experience"},"User experience"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The customer confirms to pay for an order, the merchant generates a QR codes on the interface.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The customer uses PayBy, BOTIM to scan the QR code to obtain order information. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the order information returned by payby server, there is a parameter ",(0,a.kt)("strong",{parentName:"p"},"tokenUrl"),", PayBy or BOTIM application will parse this parameter and redirect the customer to the built-in checkout of the app.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Customers enter their payment details on the payment page and complete the transaction.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If the payment is completed, the customer will see the payment result on the app."))),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"integrate-the-api"},"Integrate the API"),(0,a.kt)("h4",{id:"create-order"},"Create order"),(0,a.kt)("p",null,"When the customer confirms to pay, call the ",(0,a.kt)("a",{parentName:"p",href:"/docs/createorder"},"Create order")," API,  follow the API description to create a reuest. Pass ",(0,a.kt)("inlineCode",{parentName:"p"},"DYNQR")," in the ",(0,a.kt)("strong",{parentName:"p"},"paySceneCode")," parameter.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"If the request is successful, PayBy will return the ",(0,a.kt)("strong",{parentName:"p"},"tokenUrl"),". The merchant's server needs to convert the URL into an QRcode image and display it to customers on its interface.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"After the payment the payby server will notify the result to PayBy or BOTIM app, and the customer will see the payment result on the app.",(0,a.kt)("br",null)),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"asynchronous-notification"},"Asynchronous notification"),(0,a.kt)("p",null,"If the ",(0,a.kt)("strong",{parentName:"p"},"notifyUrl")," is set in the order creation request, after the transaction, PayBy will send payment result to the url.",(0,a.kt)("br",null)),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"change-order-status"},"Change Order Status"),(0,a.kt)("p",null,"You can initiate ",(0,a.kt)("a",{parentName:"p",href:"/docs/revoke"},"Revoke"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/cancel"},"Cancel"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/refund"},"Refund")," and other operations on the created order."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"retrieve-order"},"Retrieve Order"),(0,a.kt)("p",null,"To retrieve the order detail, call the ",(0,a.kt)("a",{parentName:"p",href:"/docs/retrieveorderdetail"},"Retrieve Order Detail")," API.",(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dynrqflow",src:r(95534).Z,width:"1333",height:"1551"})),(0,a.kt)("br",null))}d.isMDXComponent=!0},95534:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dynqr-e8d8ad4b0e17a29f6974a2ae8443026e.png"},8209:(e,t,r)=>{r(67294)}}]);