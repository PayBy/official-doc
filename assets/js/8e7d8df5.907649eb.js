"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[4356],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),u=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),o=u(a),N=l,g=o["".concat(m,".").concat(N)]||o[N]||k[N]||r;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=o;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},96785:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=a(83117),l=(a(67294),a(3905));a(8209);const r={sidebar_position:1,toc_max_heading_level:6},i="Get Balance",p={unversionedId:"Member/get-balance",id:"Member/get-balance",title:"Get Balance",description:"The GetBalance API allows merchants to query their account balance, providing detailed information about available, frozen, and total balance amounts.",source:"@site/docs/Member/get-balance.md",sourceDirName:"Member",slug:"/Member/get-balance",permalink:"/docs/Member/get-balance",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"Online payment SDK - PHP",permalink:"/docs/SDKs/online-php"}},m={},u=[{value:"API URL",id:"api-url",level:3},{value:"Http Header",id:"http-header",level:2},{value:"Http Body",id:"http-body",level:2},{value:"GetMemberBalanceRequest",id:"getmemberbalancerequest",level:2},{value:"Request Sample",id:"request-sample",level:2},{value:"Http Header",id:"http-header-1",level:3},{value:"Response Parameters",id:"response-parameters",level:2},{value:"Http Header",id:"http-header-2",level:3},{value:"Http Body",id:"http-body-1",level:3},{value:"MemberBalance",id:"memberbalance",level:3},{value:"Balance",id:"balance",level:3},{value:"Sample Response",id:"sample-response",level:3},{value:"Http Header",id:"http-header-3",level:4},{value:"Return Code",id:"return-code",level:4}],d={toc:u};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"get-balance"},"Get Balance"),(0,l.kt)("p",null,"The GetBalance API allows merchants to query their account balance, providing detailed information about available, frozen, and total balance amounts."),(0,l.kt)("p",null,"This API is used to query the member account balance."),(0,l.kt)("h3",{id:"api-url"},"API URL"),(0,l.kt)("p",null,"UAT : ",(0,l.kt)("a",{parentName:"p",href:"https://uat.test2pay.com/sgs/api/member/getBalance"},"https://uat.test2pay.com/sgs/api/member/getBalance")),(0,l.kt)("p",null,"Production : ",(0,l.kt)("a",{parentName:"p",href:"https://api.payby.com/sgs/api/member/getBalance"},"https://api.payby.com/sgs/api/member/getBalance")),(0,l.kt)("h2",{id:"http-header"},"Http Header"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content-Language"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},"String(10)"),(0,l.kt)("td",{parentName:"tr",align:null},"in"),(0,l.kt)("td",{parentName:"tr",align:null},"en-English")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sign"),(0,l.kt)("td",{parentName:"tr",align:null},"Sign"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Partner-Id"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},"String(12)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"http-body"},"Http Body"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"When requested"),(0,l.kt)("td",{parentName:"tr",align:null},"requestTime"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp(3)"),(0,l.kt)("td",{parentName:"tr",align:null},"1581493898000"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Business"),(0,l.kt)("td",{parentName:"tr",align:null},"bizContent"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},"GetMemberBalanceRequest"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"getmemberbalancerequest"},"GetMemberBalanceRequest"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Currency"),(0,l.kt)("td",{parentName:"tr",align:null},"currencyCode"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"AED"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"request-sample"},"Request Sample"),(0,l.kt)("h3",{id:"http-header-1"},"Http Header"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Content-Language": "en",\n  "Content-Type": "application/json",\n  "Partner-Id": "200000018128",\n  "sign": "RXF8WmC67QSnr62l3oU33fjpUvAo6Yr9vk05c/vYLtmHRGMoAH4qSnap2pto3mY7KgyP5wkNUsyQXJ/ZwbfcSONLb5zA77q74lsOwdJw3BKXxVWr4tfjkA02Pfcp0cZWjE/Y8jTcbtgdc5Vl90LNmkgPWbrSlDbNW8p3NIhnKg+Xfl95SgMBPF9afftsU/2a5jLnZXSVcXoSthxpJ6XkZwd45+jhOjBguT+lC8uLVSNRvwDisRGgf9PYv39OH6lTEhbY2sgjkdZBZBOZlt7awy2vkMEsePsuafwrNhuz7xzjj55PzNzk8+zCUu/791OhC/eFUyGimtDw5mX9cyQw=="\n}\n\n\n{\n  "bizContent": {\n    "currencyCode": "AED"\n  },\n  "requestTime": 1708485334645\n}\n\n\n')),(0,l.kt)("h2",{id:"response-parameters"},"Response Parameters"),(0,l.kt)("h3",{id:"http-header-2"},"Http Header"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sign"),(0,l.kt)("td",{parentName:"tr",align:null},"Sign"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"The body field in the Http Body is returned only when applyStatus is SUCCESS and code is 0."),(0,l.kt)("h3",{id:"http-body-1"},"Http Body"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Response header"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},"ResponseHeader"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Response body"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},"MemberBalance"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"memberbalance"},"MemberBalance"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Member ID"),(0,l.kt)("td",{parentName:"tr",align:null},"memberId"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"200000018128"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Order information"),(0,l.kt)("td",{parentName:"tr",align:null},"balanceList"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"balance"},"Balance"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Available Balance"),(0,l.kt)("td",{parentName:"tr",align:null},"availableBalance"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},"Money"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"sample-response"},"Sample Response"),(0,l.kt)("h4",{id:"http-header-3"},"Http Header"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sign": "nDdCIX1tAyV3qcX/Epay6AXFNRGSsWd8ysWO9SgwPrNTetSePLA9C39mGp6qRbjJeqXLEnYLwSkBu5eKdtvXX3HtiGLi2kvRYjfYpTCjXdVL2Pncv2w+ghjHe2jL988ilk7q5AjAgdtXNphpHTcTes9pk6W3bVCbvjiH6atOfExUZt91L1LmPGELT1IJm/IFW3w4KLh0Gxs7FzDPi9RDFUemObNlRzV8kCtkWahvPgs/hBnS69GyYDKN7ihQX2iUiLP239wI6IA+VG/ZZKHPhLs8bbuOS+LKWORlp6jRt+JsAx7c/O1tRNyOnHKxPRKJ8bVTohEp39yUz/HwG8oA=="\n}\n\n{\n  "body": {\n    "balanceList": [\n      {\n        "availableBalance": {\n          "amount": 897993.88,\n          "currency": "AED"\n        }\n      }\n    ],\n    "memberId": "200000030907"\n  },\n  "head": {\n    "applyStatus": "SUCCESS",\n    "code": "0",\n    "msg": "SUCCESS",\n    "success": true,\n    "traceCode": "375099"\n  }\n}\n\n\n\n')),(0,l.kt)("h4",{id:"return-code"},"Return Code"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"msg"),(0,l.kt)("th",{parentName:"tr",align:null},"reason"),(0,l.kt)("th",{parentName:"tr",align:null},"solution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"SUCCESS"),(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"INVALID_PARAMETER"),(0,l.kt)("td",{parentName:"tr",align:null},"Parameter error"),(0,l.kt)("td",{parentName:"tr",align:null},"Adjusting request parameters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUESTTIME_TOO_EARLY"),(0,l.kt)("td",{parentName:"tr",align:null},"The request time is greater than the current time Too early"),(0,l.kt)("td",{parentName:"tr",align:null},"Adjust request time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUESTTIME_TOO_LATER"),(0,l.kt)("td",{parentName:"tr",align:null},"The request time is greater than the current time Too late"),(0,l.kt)("td",{parentName:"tr",align:null},"Adjust request time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"402"),(0,l.kt)("td",{parentName:"tr",align:null},"RATE_LIMIT_REJECT"),(0,l.kt)("td",{parentName:"tr",align:null},"Too many requests"),(0,l.kt)("td",{parentName:"tr",align:null},"Reduce request frequency")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"UNAUTHORIZED"),(0,l.kt)("td",{parentName:"tr",align:null},"API not authorized"),(0,l.kt)("td",{parentName:"tr",align:null},"Contact PayBy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"SERVICE_NOT_AVAILABLE"),(0,l.kt)("td",{parentName:"tr",align:null},"API service unavailable"),(0,l.kt)("td",{parentName:"tr",align:null},"Contact PayBy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"SYSTEM_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"system error"),(0,l.kt)("td",{parentName:"tr",align:null},"Contact PayBy later Retry")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"504"),(0,l.kt)("td",{parentName:"tr",align:null},"SERVICE_TIMEOUT"),(0,l.kt)("td",{parentName:"tr",align:null},"Service timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Try again later")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"601"),(0,l.kt)("td",{parentName:"tr",align:null},"RISK_FAIL"),(0,l.kt)("td",{parentName:"tr",align:null},"Risk control verification failed"),(0,l.kt)("td",{parentName:"tr",align:null},"Please adjust your business")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"78001"),(0,l.kt)("td",{parentName:"tr",align:null},"CURRENCY_CODE_NOT_SUPPORTED"),(0,l.kt)("td",{parentName:"tr",align:null},"The currency is not supported."),(0,l.kt)("td",{parentName:"tr",align:null},"Adjusting request parameters")))))}k.isMDXComponent=!0},8209:(t,e,a)=>{a(67294)}}]);