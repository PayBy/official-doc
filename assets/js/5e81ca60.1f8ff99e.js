(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[4526],{33558:(e,s,t)=>{"use strict";t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=t(83117),n=(t(67294),t(3905)),r=t(42889);const i={sidebar_position:4},o="Iframe paypage",c={unversionedId:"iframe-paypage",id:"iframe-paypage",title:"Iframe paypage",description:"Iframe Payment Page is a website prepared by PayBy and can be embedded in your website. The Hosted Pay Page still resides on PayBy\u2019 secure servers but the transition to the PayBy secure page is invisible to the cardholder.",source:"@site/demos/iframe-paypage.mdx",sourceDirName:".",slug:"/iframe-paypage",permalink:"/official-doc/demos/iframe-paypage",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Test apps and accounts",permalink:"/official-doc/demos/testaccount"},next:{title:"E-wallet",permalink:"/official-doc/demos/ewallet"}},l={},m=[],d={toc:m};function u(e){let{components:s,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iframe-paypage"},"Iframe paypage"),(0,n.kt)("p",null,"Iframe Payment Page is a website prepared by PayBy and can be embedded in your website. The Hosted Pay Page still resides on PayBy\u2019 secure servers but the transition to the PayBy secure page is invisible to the cardholder."),(0,n.kt)("br",null),(0,n.kt)("p",null,"If your site has integrated our iframe paypage, your site will look like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1",src:t(28278).Z,width:"1725",height:"1005"})),(0,n.kt)("p",null,"To experience the payment process, enter the fields and click ",(0,n.kt)("strong",{parentName:"p"},"Pay Now")," below. Please use the bank account and PayBy account of test environment version to experience. Find the apk and account ",(0,n.kt)("a",{parentName:"p",href:"/demos/testaccount"},"here"),"."),(0,n.kt)(r.Z,{mdxType:"IframePayPage"}))}u.isMDXComponent=!0},42889:(e,s,t)=>{"use strict";t.d(s,{Z:()=>g});var a=t(67294),n=t(52263),r=t(34278),i=t(92688),o=t(11889),c=t(27049),l=t(25272),m=t(16536),d=t(43931),u=t(98678);const j={createIframe:function(e){var s=document.getElementById(e.id),t=e.tokenUrl.replace("/pay-page/main","/iframe/pay-page"),a=document.createElement("iframe");a.src=t,a.height="100%",a.width="100%",a.style.border="none",s.hasChildNodes()&&(s.innerHTML=""),s.appendChild(a),window.addEventListener("message",(function(t){var a=t.data.data;if("PayBy_Messages"===t.data.message)switch(a.name){case"PAYMENT_SUCCESS":"function"==typeof e.success?e.success(a):(a.merchantReturnUrl&&(window.location.href=a.merchantReturnUrl),a.bankForm&&(document.open(),document.write(a.bankForm),document.close()));break;case"PAYMENT_FAILED":var n=a.msg+" ["+a.traceCode+"]";"function"==typeof e.error?e.error(n):alert(n);break;case"RESIZE_CONTAINER":s.style.height=a.height+"px"}}))}};var p=t(72389);const g=function(e){const{siteConfig:{customFields:s}}=(0,n.Z)();let t=s.env;const g=(0,p.Z)();return a.createElement(a.Fragment,null,a.createElement(r.Z,{style:{maxWidth:400,margin:"0 auto"},layout:"vertical",onFinish:async e=>{const s={amount:e.amount,paySceneParams:{redirectUrl:e.redirectUrl}};(0,d.Z)(s)||(s.paySceneCode="PAYPAGE",(0,u.Z)(s,(e=>{j.createIframe({id:"paypage-container",tokenUrl:e.interActionParams.tokenUrl,error:function(e){m.ZP.error(e)}})}),t))}},a.createElement(l.Z,{name:"amount",label:"Payment Amount",rules:[{required:!0,message:"Amount is required, Please Check it!"}]},a.createElement(i.Z,{addonBefore:"AED",size:"large"})),a.createElement(r.Z.Item,{name:"redirectUrl",label:"Redirect Url After Payment (change as your wish)",rules:[{required:!0,message:"Redirect Url is required, Please Check it!"}],initialValue:g?window.location.href:void 0},a.createElement(i.Z,{size:"large",className:"ant-input form-module-xl"})),a.createElement(l.Z,null,a.createElement(o.Z,{type:"primary",htmlType:"submit",size:"large",block:!0},"PAY NOW"))),a.createElement(c.Z,null),a.createElement("div",{id:"paypage-container",style:{maxWidth:375,margin:"0 auto",boxShadow:"0px -4px 30px rgba(0, 0, 0, 0.12)"}}))}},98678:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var a=t(30381),n=t.n(a),r=t(81354),i=t.n(r);const o="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCr0pXA8AX4O4ld\n5GAePhDvSIu5gRr+ICVj1qHUgiGvWH8fp1Y8QL+Q5Mxq44L7G2Z4ygKetgbEUAb4\nvmPXR31tduAxcRPV4V4SNWuwtSczUyiSoZ1LueudmNy+WcmF80JKxt6XfAI6+Pg5\nVNonCTRU4rlDa1ayU/5+phIb5OMi4g7uR3Mc/YEqYhoJS3zLNxXK4qLMTl6z7xqz\n6pmb9NELLbeYAk4tGmm4cqN/sdvpf94ujQUJDzm7lMPe94HFNV7iAShT+/+YccHU\nMAIUM6HbPhCb+DSwutmBvgAbMgG2fi7n2riiQ8LN80SI/5N8dHoRuZiyiNhZ3LSq\ndYdSlIGfAgMBAAECggEAN7/L9x3p0fD/UQeYaDebJwhSzY2mRG4Js6sgNuNCKrJ8\nDLkusb4QaeLSsJvBE9iAFxD0aKqG54tPt8WOf3sipzG67E/UL8E/1IiguGUOowiI\nUYs+jiN0312Jwfk/+cZD7B86ecwyrQ+6+l8dqSzDXgdyNP3O022NVWps1cAeMmK+\nU4lauuReZNQqbhMuZU+wNlVR93xYRmM6jF4MFEwBcn29A3ChL0HVEvnbeKFawjyy\nJ88S+aIaKNlqOpc7beUEbOD78WaLVvvGSAnwQpXeLxaWniwet1oXBkxAT98LNCWR\nKHMfGYF2pWLVyeD9a4pEp1onryT2kCmCkOX+QbQYgQKBgQDcGFIPd8L1PrMqfnkC\ngnB/vc8rrqh8BDkAx9byQDavFpqRIPF+ycemPfnkMxORHGcNrFlIUDZKI5NDFboK\nVTKSTD1R84pnanMx8K0NcJLJgxnQDG9Dj2aHIO0Ki3EgXpULZBzNRTAXd2f5SKkE\nmonKmGDY2dHYzwM50H625pJmJQKBgQDH2kvmMdtHCtuiRbK8o1VBam7c3F47Qu6H\niAAYyXE0qH9Q1CHl7TUMCmBNbWcpDGGTAbSqs/h7HaUyuW1boz58PLTmJLMgZWKR\nYkG/hCgPLty4H8dj5L0hQP5W4mXT0jgNMaG0gXnzrthnB26Ma41CbZxfa+vm0xVa\njrymuNZzcwKBgQDIMYr6rMl1PynCnjU9lh3z41c8eWqhG0oqLpuRz9ytl5bSKS/g\nTnM+ACN7cQX8OOR3qGuxfdxTxVYeb/W/jk0oixY/o5Ehjc7n/u25SssJZikldxoB\nTr9IbCeQLtOgSMezC8Wy5JrgzWiSc4fhOxvYXo/Azyez2GArxzxq6wEAzQKBgEkg\nSx1TqNR52JurvRbg/NUOyLnvuFsexoC49rAbJV0LOmqs9CpZfUuGkG5EVbbjXOCZ\ngy3i5EzIMCY7SxR4yuhSni6HxzNXZZWkykH1bWMA1qpYlnCqxblhOq837+JtzSym\nuHB/38uWcoBga8bdo7ZmvQz9RDgVjH6yM70dbPqZAoGBAK+wgDnftT9L8wipL7v6\nxhnBIXCJQAPvHJ3+Xn5b2NOrxJ6Z2ji+yQtqLsF5VTW7K9gSOiYNKF76G4Ynsslc\nCENt3BkAvFzCkphmEpPT+g0SPv/9dhZyM0bP0s/QEJ73E6CYKD8FsqfVVUqtctxo\njvrFOQhJ0CRQsD8MBlR/rk1p\n-----END PRIVATE KEY-----";const c=async function(e,s,a){const r=n()().valueOf(),{amount:c,paySceneParams:l,...m}=e,d={amount:c.toString().replace(/,/g,""),currency:"AED"},u={signature:!0,requestTime:n()().valueOf(),bizContent:{merchantOrderNo:r,subject:"productName",totalAmount:d,paySceneParams:{redirectUrl:window.location.href,...l},...m}};let j=window.location.origin;"development"===a&&(j="http://localhost:7000");const p=await async function(e){let s;"undefined"==typeof window?(s=new(0,t(57565).default),s.setPrivateKey(o)):(s=new((await Promise.resolve().then(t.bind(t,57565))).JSEncrypt),s.setPrivateKey(o));return s.sign(JSON.stringify(e),i().SHA256,"sha256")}(u),g=await fetch(j+"/sgs/api/acquire2/placeOrder",{headers:{"Content-Language":"en",sign:p,"Partner-Id":"200000042613"},method:"POST",body:JSON.stringify(u)});if(g&&200===g.status){const e=await g.json();s&&s(e.body)}}},43931:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var a=t(16536);const n=function(e){let{amount:s}=e;if(s=s?s.toString().replace(/,/g,""):0,s<=0)return a.ZP.error("Please enter valid amount.")}},46700:(e,s,t)=>{var a={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function n(e){var s=r(e);return t(s)}function r(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id=46700},28278:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});const a=t.p+"assets/images/iframe-36fedb10fc886a178be75a63d6e4386d.png"},42480:()=>{}}]);