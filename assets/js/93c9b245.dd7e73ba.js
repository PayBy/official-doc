"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[4380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),y=c(r),d=a,f=y["".concat(i,".").concat(d)]||y[d]||s[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4268:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const o={sidebar_position:5},l="E-wallet",p={unversionedId:"ewallet",id:"ewallet",title:"E-wallet",description:"Put one or more E-wallet icons that we supported on your mobile application's checkout. After your customer selects one, he or she will be redirected to that E-wallet app to finish the payment. Currently our supported wallets are BOTIM and PayBy APP.",source:"@site/demos/ewallet.md",sourceDirName:".",slug:"/ewallet",permalink:"/payby-developer-doc/demos/ewallet",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Iframe paypage",permalink:"/payby-developer-doc/demos/iframe-paypage"},next:{title:"Hosted paypage",permalink:"/payby-developer-doc/demos/hosted-paypage"}},i={},c=[],u={toc:c};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"e-wallet"},"E-wallet"),(0,a.kt)("p",null,"Put one or more E-wallet icons that we supported on your mobile application's checkout. After your customer selects one, he or she will be redirected to that E-wallet app to finish the payment. Currently our supported wallets are BOTIM and PayBy APP."),(0,a.kt)("br",null),(0,a.kt)("p",null,"Sample Link: ",(0,a.kt)("a",{parentName:"p",href:"https://uat-m.test2pay.com/uat/payment?code=EWALLET"},"https://uat-m.test2pay.com/uat/payment?code=EWALLET"),"  (Open it on your mobile browser, not PC)"),(0,a.kt)("p",null,"You can also scan code to get the link above:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1",src:r(51482).Z,width:"120",height:"120"})),(0,a.kt)("p",null,"\u200b\t"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),": Visit the link above. "),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),": If you have opened the page of the link above, this page simulates a scenario that multiple selectable e-wallets appear on your checkout page. Enter payment amount and choose one e-wallet. Since we only provide the PayBy apk in test environment, please choose PayBy. And make sure that you have installed the PayBy app. Find the apk and account ",(0,a.kt)("a",{parentName:"p",href:"/demos/testaccount"},"here"),"."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),": Now you have been redirected to the PayBy app and the built-in checkout has been invoked. Enter the password and complete the payment."),(0,a.kt)("br",null))}s.isMDXComponent=!0},51482:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);