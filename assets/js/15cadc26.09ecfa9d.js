"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[534],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},A=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),A=s(n),d=o,b=A["".concat(c,".").concat(d)]||A[d]||u[d]||a;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=A;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}A.displayName="MDXCreateElement"},70271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(83117),o=(n(67294),n(3905));const a={sidebar_position:6},i="JSAPI",p={unversionedId:"jsapi",id:"jsapi",title:"JSAPI",description:"The product is to invoke BOTIM & PayBy built-in checkout. The merchant has an mobile website, when the customer opens the webpage in BOTIM through a message, the built-in checkout will be invoked to complete the order and purchase process.",source:"@site/demos/jsapi.md",sourceDirName:".",slug:"/jsapi",permalink:"/payby-developer-doc/demos/jsapi",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Hosted paypage",permalink:"/payby-developer-doc/demos/hosted-paypage"},next:{title:"Invoice",permalink:"/payby-developer-doc/demos/invoice"}},c={},s=[],l={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jsapi"},"JSAPI"),(0,o.kt)("p",null,"The product is to invoke BOTIM & PayBy built-in checkout. The merchant has an mobile website, when the customer opens the webpage in BOTIM through a message, the built-in checkout will be invoked to complete the order and purchase process."),(0,o.kt)("br",null),(0,o.kt)("p",null,"Sample:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jsapi",src:n(48601).Z,width:"120",height:"120"})),(0,o.kt)("br",null),"**Step 1**: Use PayBy app of test environment to scan the code above. Find the apk and account [here](/demos/testaccount).",(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),": You will be redirected to built-in checkout. Enter the password and complete the payment. If your customer opens your wibsite in BOTIM app and pay, it's the same payment process."),(0,o.kt)("br",null))}u.isMDXComponent=!0},48601:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);