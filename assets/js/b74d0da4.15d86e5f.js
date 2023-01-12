"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[9395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=s(n),d=a,c=k["".concat(i,".").concat(d)]||k[d]||u[d]||l;return n?r.createElement(c,o(o({ref:t},m),{},{components:n})):r.createElement(c,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},67568:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(83117),a=(n(67294),n(3905));n(8209);const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"applyStatus")," ",(0,a.kt)("font",{color:" #7d8793"},"Enum")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The result of the request. The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS "),"- Application successful.\n",(0,a.kt)("inlineCode",{parentName:"p"},"FAIL")," - Application failed. Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"msg")," for exact reason.\n",(0,a.kt)("inlineCode",{parentName:"p"},"ERROR")," - Application error. The signature verification failed. Please check whether the private key used for the signature and the public key uploaded on the PayBy portal are one key pair."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"code")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Response Codes."),(0,a.kt)("p",{parentName:"li"},"Example value: 0"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"msg")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"Description of this code."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"traceCode")," ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"No special meaning, PayBy internally used to locate the error."),(0,a.kt)("br",null))))}o.isMDXComponent=!0},89305:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(83117),a=(n(67294),n(3905));n(8209);const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Request time passed by the merchant when placing the order."),(0,a.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"merchantOrderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"orderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identification number of the order. "),(0,a.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"product"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The product name of the API method used in the order. This product name is only used for PayBy internal classification."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"100")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"status"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Enum"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The possible values are:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CREATED"),". The order has been created."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS"),".  The transfer completed."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),". The order has been cancelled or expired."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"paymentInfo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object"),"   "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"payerFeeAmount"),"  ",(0,a.kt)("font",{color:" #7d8793"},"Money"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"In this transfer, the fee that the payer needs to pay."),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"arrivalTime"),"  ",(0,a.kt)("font",{color:" #7d8793"},"TimeStamp"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"Estimated time of fund arrival. Note that this is not the actual arrival time."),(0,a.kt)("p",{parentName:"li"},"Example value: 1581493898000"),(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"beneficiaryIdentityType"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required"),"  "),(0,a.kt)("p",{parentName:"li"},"The fund can be transfered to the beneficiary through mobile phone number, PayBy member id or BOTIM member id."),(0,a.kt)("p",{parentName:"li"},"The possible values are: "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"PHONE_NO"),". Transfer through mobile phone number."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"MEMBER_ID"),". Transfer through PayBy member id."))),(0,a.kt)("p",null,"  Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"20")),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"beneficiaryIdentity"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"  ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"After selecting the beneficiary identity type, what value should be passed. "),(0,a.kt)("p",{parentName:"li"},"The parameter needs to be encrypted when passed, and SHA-256 algorithm is recommended."),(0,a.kt)("p",{parentName:"li"},"For ",(0,a.kt)("inlineCode",{parentName:"p"},"PHONE_NO"),", example value: +971-585812345"),(0,a.kt)("p",{parentName:"li"},"For ",(0,a.kt)("inlineCode",{parentName:"p"},"MEMBER_ID"),", example value: 100006514321"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"20")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"beneficiaryFullName"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   "),(0,a.kt)("p",{parentName:"li"},"If the parameter is passed, PayBy will verify whether the parameter is consistent with the beneficiary's KYC information. If not, the transfer will fail. If the parameter is not passed, PayBy will not perform verification."),(0,a.kt)("p",{parentName:"li"},"The parameter needs to be encrypted when passed, and SHA-256 algorithm is recommended."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"100")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"memo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The description of this transfer."),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"128")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"notifyUrl"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String")),(0,a.kt)("p",{parentName:"li"},"To receive asynchronous notifications of order status updates, you can pass the notify URL."),(0,a.kt)("p",{parentName:"li"},"Example value: ",(0,a.kt)("a",{parentName:"p",href:"https://www.yoursite.com"},"https://www.yoursite.com")),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"failCode"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   "),(0,a.kt)("p",{parentName:"li"},"If the order status is ",(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the code to identify the exact reason."),(0,a.kt)("p",{parentName:"li"},"Example value: 504"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"failDes"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   "),(0,a.kt)("p",{parentName:"li"},"If the order status is ",(0,a.kt)("inlineCode",{parentName:"p"},"FAILURE"),", the failure reason."),(0,a.kt)("p",{parentName:"li"},"Example value: SERVICE_TIMEOUT"),(0,a.kt)("br",null))))}o.isMDXComponent=!0},40713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>k});var r=n(83117),a=(n(67294),n(3905)),l=(n(8209),n(89305)),o=n(67568),p=n(50771);const i={sidebar_position:2,toc_max_heading_level:6},s="Retrieve order details",m={unversionedId:"Transfer/transfer-query",id:"Transfer/transfer-query",title:"Retrieve order details",description:"Retrieves the order detail with order number or merchant order number.",source:"@site/docs/Transfer/transfer-query.mdx",sourceDirName:"Transfer",slug:"/Transfer/transfer-query",permalink:"/docs/Transfer/transfer-query",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Transfer",permalink:"/docs/Transfer/"},next:{title:"Asynchronous notification",permalink:"/docs/Transfer/transfer-notification"}},u={},k=[{value:"API URL",id:"api-url",level:3},{value:"Request",id:"request",level:3},{value:"Http Header",id:"http-header",level:4},{value:"Http Body",id:"http-body",level:4},{value:"Request sample",id:"request-sample",level:4},{value:"Response",id:"response",level:3},{value:"Http Header",id:"http-header-1",level:4},{value:"Http Body",id:"http-body-1",level:4},{value:"Response sample",id:"response-sample",level:4}],d={toc:k};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"retrieve-order-details"},"Retrieve order details"),(0,a.kt)("p",null,"Retrieves the order detail with order number or merchant order number."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"api-url"},"API URL"),(0,a.kt)("p",null,"UAT : ",(0,a.kt)("a",{parentName:"p",href:"https://uat.test2pay.com/sgs/api/transfer/getTransferOrder"},"https://uat.test2pay.com/sgs/api/transfer/getTransferOrder")),(0,a.kt)("p",null,"Production : ",(0,a.kt)("a",{parentName:"p",href:"https://api.payby.com/sgs/api/transfer/getTransferOrder"},"https://api.payby.com/sgs/api/transfer/getTransferOrder")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("h4",{id:"http-header"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Attributes"),(0,a.kt)(p.ZP,{mdxType:"RequestHeader"})),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"http-body"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"requestTime"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Timestamp"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"If the request time is more than 15 minutes away from the current time, the request will be rejected. This parameter is used to prevent repeated requests for orders that should have been cancelled due to timeouts."),(0,a.kt)("p",null,"Example value: 1581493898000"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"bizContent"),"   ",(0,a.kt)("font",{color:" #7d8793"},"Object"),"  "),(0,a.kt)("p",null,"You can use either ",(0,a.kt)("inlineCode",{parentName:"p"},"merchantOrderNo"),"  or ",(0,a.kt)("inlineCode",{parentName:"p"},"orderNo")," to specify an order. But you can't use the two parameters at the same time."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"merchantOrderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The merchant's referece number of the request. Used to track every request."),(0,a.kt)("p",{parentName:"li"},"Example value: M965739182419"),(0,a.kt)("p",{parentName:"li"},"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"orderNo"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"    ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",{parentName:"li"},"The PayBy's unique identify number of the order. "),(0,a.kt)("p",{parentName:"li"},"Example value: 131658300517875854"),(0,a.kt)("br",null))),(0,a.kt)("h4",{id:"request-sample"},"Request sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "Content-Language": "en",\n    "Content-Type": "application/json",\n    "Partner-Id": "200000018132",\n    "sign": "WF34t3rh4wuBuiUqlAte0PErySJBrwWEuNAgP5DYTZnI5fah0xC0desDOcLAakN1E6UccD8Yq4zuNBtkmLdA74eSkk2lb5+k+lP9/a5Aa7h12UtLc62JDpzQL/O3NgvPJCDBCat2Mmso5ihNOWKGyw/L4YhaqSrqHGfVEimiyrY/giBPJ5Ktof6Qyy2AiSNMAJPNzYFu73Kmc3ogYUKh487hLTNHGPPBsqPTIOO10+wG9/q0I3P90uOqXCYkoq7JyU3j1WkRZp5YmKTvIcfe4EJ/tsVtvBPVOw4ParnWD6nMlA59/y8K4D+wwZd7exbA/r85FRBkW+JdsY1z+yQJ7Q=="\n}\n\nHttp Body\n{\n    "bizContent": {\n        "merchantOrderNo": "M021482754853"\n    },\n    "requestTime": "1585143324254"\n}\n')),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("h4",{id:"http-header-1"},"Http Header"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign"),"   ",(0,a.kt)("font",{color:" #7d8793"},"String"),"   ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"When PayBy sends response, PayBy will use its own private key to sign the message, and the merchant uses PayBy 's public key to verify the signature. If the verification is passed, it proves that the response was sent by PayBy and not faked by others."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"http-body-1"},"Http Body"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"head")," "),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Attributes"),(0,a.kt)(o.ZP,{mdxType:"ResponseHead"})),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"body")," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"#f19938"},"Notice "))),(0,a.kt)("p",null,"Body is returned only when ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),".\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"failed"),";  or ",(0,a.kt)("inlineCode",{parentName:"p"},"applystatus")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," !=",(0,a.kt)("inlineCode",{parentName:"p"},"0")," , that indicates an error. Please check errors and try again."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"transferOrder")," ",(0,a.kt)("span",{style:{color:" #7d8793"}},"Object")),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,"Attributes"),(0,a.kt)(l.ZP,{mdxType:"TransferToOrder"})))),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"response-sample"},"Response sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Http Header\n{\n    "sign": "I1zfK8Bdfti5+PS0Q1PEdPlS77jF4SaJLRMbgWaisFgUSIW0It03Mk2YCTamWWzVN9ElGd1ditgvWS5/Kjff+yZofnVGc1UQQ2x3sfyz7Z8IL1lLz9KiM4c55b02gILe7VEecJox/Yu6fgURKb0GK3GRxgeUbzoqsIrDlHZ4cy5A1tNf5lAhaVOQ1Zfao0jc+l6nIW7gRhcZb/gOBrEGT5MkNLPbnwUxSkWDISlN3/IOBYgE5Eoaq+lbZO2ji7Xr0AsfKoC9sueVLeubbDRHWgN6fi1vewqA5FFKACS1+UUeXqR/x95MTR0cR6qnfOodf0c09GGyrTIR+x3M0vkFPw=="\n}\n\nHttp Body\n{\n    "head": {\n        "applyStatus": "SUCCESS",\n        "code": "0",\n        "msg": "SUCCESS",\n        "traceCode": "1125"\n    },\n    "body": {\n        "transferOrder": {\n            "amount": {\n                "amount": 1.21,\n                "currency": "AED"\n            },\n            "beneficiaryFullName": "5a0d9e4fd01a40ff3ab89dfde84c2253b5ea07c4ba8b4e5f25b81df3b73b9db0",\n            "beneficiaryIdentity": "a25c5bff2fabf6bccf8ff13a940f5d05d3927c1501373ac6fa129d4fa688417c",\n            "memo": "company single pay",\n            "merchantOrderNo": "M021482754853",\n            "notifyUrl": "http://www.yoursite.com",\n            "orderNo": "911585142879004849",\n            "paymentInfo": {\n                "arrivalTime": 1585142880000,\n                "payerFeeAmount": {\n                    "amount": 0,\n                    "currency": "AED"\n                }\n            },\n            "product": "Transfer",\n            "requestTime": 1585142886252,\n            "status": "SUCCESS"\n        }\n    }\n}\n')))}c.isMDXComponent=!0},50771:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(83117),a=(n(67294),n(3905));n(8209);const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Language")," ",(0,a.kt)("font",{color:"#7d8793"},"String")),(0,a.kt)("p",null,"The language in which the response message will be used, currently only English is supported."),(0,a.kt)("p",null,"Example value: en"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"10")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type")," ",(0,a.kt)("font",{color:"#7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The media type. Required for operations with a request body. The value is ",(0,a.kt)("inlineCode",{parentName:"p"},"application/<format>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("p",null,"Example value: application/json"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sign")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"Requests should be signed using private-key cryptography. This allows the payment gateway to verify that an incoming request is really from your application."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Partner-Id")," ",(0,a.kt)("font",{color:" #7d8793"},"String")," ",(0,a.kt)("font",{color:"#f19938"},"Required")),(0,a.kt)("p",null,"The merchant id of your account."),(0,a.kt)("p",null,"Example value: 200001200101"),(0,a.kt)("p",null,"Maximum length: ",(0,a.kt)("inlineCode",{parentName:"p"},"12")))}o.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);