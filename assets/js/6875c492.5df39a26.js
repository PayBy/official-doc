"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[8610],{99703:(e,t,l)=>{l.d(t,{Z:()=>s});var a=l(67294),n=l(95999),r=l(32244);function s(e){const{metadata:t}=e,{previousPage:l,nextPage:s}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l&&a.createElement(r.Z,{permalink:l,title:a.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&a.createElement(r.Z,{permalink:s,title:a.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},79985:(e,t,l)=>{l.d(t,{Z:()=>s});var a=l(67294),n=l(9460),r=l(30390);function s(e){let{items:t,component:l=r.Z}=e;return a.createElement(a.Fragment,null,t.map((e=>{let{content:t}=e;return a.createElement(n.n,{key:t.metadata.permalink,content:t},a.createElement(l,null,a.createElement(t,null)))})))}},41714:(e,t,l)=>{l.r(t),l.d(t,{default:()=>b});var a=l(67294),n=l(86010),r=l(95999),s=l(88824),o=l(1944),i=l(35281),c=l(39960),g=l(39058),u=l(99703),m=l(90197),p=l(79985);function d(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const l=d(t);return a.createElement(a.Fragment,null,a.createElement(o.d,{title:l}),a.createElement(m.Z,{tag:"blog_tags_posts"}))}function f(e){let{tag:t,items:l,sidebar:n,listMetadata:s}=e;const o=d(t);return a.createElement(g.Z,{sidebar:n},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,o),a.createElement(c.Z,{href:t.allTagsPath},a.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.createElement(p.Z,{items:l}),a.createElement(u.Z,{metadata:s}))}function b(e){return a.createElement(o.FG,{className:(0,n.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},a.createElement(h,e),a.createElement(f,e))}},20626:(e,t,l)=>{l.d(t,{Z:()=>p});var a,n,r=l(66505),s=l(67294);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},o.apply(this,arguments)}const i=e=>{let{title:t,titleId:l,...r}=e;return s.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",className:"icon",viewBox:"0 0 1024 1024","aria-labelledby":l},r),t?s.createElement("title",{id:l},t):null,a||(a=s.createElement("path",{d:"M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"})),n||(n=s.createElement("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"})))};const c={display:"block",overflow:"hidden",height:"400px"},g={display:"block",overflow:"visible",height:"auto"};function u(e,t){const l=t&&e.scrollHeight>800?c:g;e.style.display=l.display,e.style.overflow=l.overflow,e.style.height=l.height}function m(e){let{maskRef:t,collapsed:l,collapsibleRef:a,toggleSpanRef:n}=e;const r=(0,s.useRef)(!1);(0,s.useEffect)((()=>{const e=a.current,s=t.current,o=n.current.children[0];function i(){const t=e.scrollHeight,l=function(e){const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(t);return{transition:"height "+l+"ms ease-in-out",height:t+"px"}}function g(){const t=i();e.style.transition=t.transition,e.style.height=t.height}if(!r.current)return u(e,l),void(r.current=!0);return e.style.willChange="height",function(){const t=requestAnimationFrame((()=>{l?(g(),requestAnimationFrame((()=>{e.style.height=c.height,e.style.overflow=c.overflow,o.style.transform="rotate(0deg)",s.style.display="block"}))):(s.style.display="none",o.style.transform="rotate(180deg)",e.style.display="block",requestAnimationFrame((()=>{g()})))}));return()=>cancelAnimationFrame(t)}()}),[l,a])}function p(e){const t=(0,s.useRef)(null),l=(0,s.useRef)(null),a=(0,s.useRef)(null),[n,o]=(0,s.useState)(!0);return m({collapsed:n,collapsibleRef:t,maskRef:a,toggleSpanRef:l}),function(e){let{toggleSpanRef:t,maskRef:l,collapsibleRef:a}=e;const n=(0,s.useRef)(!1);(0,s.useEffect)((()=>{const e=t.current,r=l.current,s=a.current;n.current||(s.scrollHeight<800?(r.style.display="none",e.style.display="none"):(r.style.display="block",e.style.display="block"),n.current=!0)}),[t,l,a])}({toggleSpanRef:l,maskRef:a,collapsibleRef:t}),s.createElement("div",null,s.createElement("div",{className:"block__container-div",onTransitionEnd:e=>{"height"===e.propertyName&&u(t.current,n)},ref:t},s.createElement("div",{className:"block__container__mask-div",ref:a}),s.createElement(r.Z,e),s.createElement("span",{className:"block__toggle-span",ref:l},s.createElement(i,{className:"holder",width:28,onClick:()=>o((e=>!e)),fill:"#999999"}))))}}}]);