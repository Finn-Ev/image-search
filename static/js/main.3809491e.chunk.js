(this["webpackJsonpreact-pixabay-rescue"]=this["webpackJsonpreact-pixabay-rescue"]||[]).push([[0],{63:function(e,t,a){e.exports=a(97)},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},75:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),i=(a(68),a(69),a(21)),l=(a(70),a(7)),s=a(60),u=a(6),m=(a(75),a(100)),f=Object(i.e)((function(e){var t=e.history,a=e.closeModal,n=function(e){t.push("/kategorie/".concat(e)),a()};return r.a.createElement(m.a,{alignRight:!0,size:"sm",className:"dropdown"},r.a.createElement(m.a.Toggle,{variant:"link",id:"dropdown-basic"},"Kategorien"),r.a.createElement(m.a.Menu,null,r.a.createElement(m.a.Item,{onClick:function(){return n("natur")}},"Natur"),r.a.createElement(m.a.Item,{onClick:function(){return n("landschaften")}},"Landschaften"),r.a.createElement(m.a.Item,{onClick:function(){return n("geb\xe4ude")}},"Geb\xe4ude"),r.a.createElement(m.a.Item,{onClick:function(){return n("tiere")}},"Tiere"),r.a.createElement(m.a.Item,{onClick:function(){return n("sport")}},"Sport"),r.a.createElement(m.a.Item,{onClick:function(){return n("personen")}},"Personen")))})),g=(a(78),Object(i.e)(Object(l.b)(null,(function(e){return{closeNavbar:function(){e({type:"CLOSE_NAVBAR"})}}}))((function(e){var t=e.closeNavbar;return r.a.createElement("div",{className:"mobile-category-menu"},r.a.createElement("div",{className:"headline"},"Kategorien:"),r.a.createElement("div",{className:"categories"},r.a.createElement(u.c,{onClick:function(){return t()},to:"/kategorie/landschaften"},"Landschaften"),r.a.createElement(u.c,{onClick:function(){return t()},to:"/kategorie/geb\xe4ude"},"Geb\xe4ude"),r.a.createElement(u.c,{onClick:function(){return t()},to:"/kategorie/natur"},"Natur"),r.a.createElement(u.c,{onClick:function(){return t()},to:"/kategorie/Tiere"},"Tiere"),r.a.createElement(u.c,{onClick:function(){return t()},to:"/kategorie/sport"},"Sport"),r.a.createElement(u.c,{onClick:function(){return t()},to:"/kategorie/personen"},"Personen")))})))),p=function(e){return{type:"OPEN_MODAL",payload:e}},d=Object(l.b)((function(e){return{favouriteImageIDs:e.favouriteImages.imageIDs,showMobileNavbar:e.navbar.showMobileNavbar}}),(function(e){return{toggleNavbar:function(){return e({type:"TOGGLE_NAVBAR"})},closeNavbar:function(){return e({type:"CLOSE_NAVBAR"})},openModal:function(){return e(p())},closeModal:function(){return e({type:"CLOSE_MODAL"})}}}))((function(e){var t=e.favouriteImageIDs,a=e.showMobileNavbar,n=e.toggleNavbar,c=e.closeNavbar,o=e.closeModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{bg:"dark",className:"header"},r.a.createElement(u.b,{onClick:c,className:"brand",to:"/"},"Image Search"),a?r.a.createElement("div",{className:"mobile-nav-links"},r.a.createElement(u.c,{id:"home-link",onClick:c,exact:!0,to:"/"},"Home"),r.a.createElement(g,null),r.a.createElement(u.c,{onClick:c,id:"favourites-link",exact:!0,to:"/favoriten"},"Favoriten (",t.length,")")):"",r.a.createElement("div",{className:"desktop-nav-links"},r.a.createElement(u.c,{onClick:o,exact:!0,to:"/"},"Home"),r.a.createElement(f,{closeModal:o}),r.a.createElement(u.c,{onClick:o,id:"favourites-link",exact:!0,to:"/favoriten"},"Favoriten (",t.length,")")),r.a.createElement("div",{onClick:n,className:"toggle-navbar"},r.a.createElement("div",{className:"".concat(a?"bar-toggled":"bar-default"," bar-1")}),r.a.createElement("div",{className:"".concat(a?"bar-toggled":"bar-default"," bar-2")}),r.a.createElement("div",{className:"".concat(a?"bar-toggled":"bar-default"," bar-3")}))))})),h=(a(79),a(20)),v=(a(80),a(31)),E=a(38),b=function(e){return{type:"SET_IMAGE_AMOUNT",payload:e}},N=Object(l.b)(null,(function(e){return{setImageAmount:function(t){return e(b(t))}}}))((function(e){var t=e.homepage,a=e.handleSubmit,c=Object(n.useState)(""),o=Object(h.a)(c,2),i=o[0],l=o[1];return r.a.createElement("div",{className:"search-area"},r.a.createElement("div",{className:"form-wrapper"},t?r.a.createElement("h3",null,"Beeindruckende lizenzfreie Bilder"):r.a.createElement("h3",null,"Weitere Bilder suchen"),r.a.createElement(v.a,{onSubmit:function(e){return a(e,i)},className:"form"},r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Control,{className:"mb-3",required:!0,"aria-label":"search images",onChange:function(e){l(e.target.value)},type:"text",name:"queryString",placeholder:"Schlagwort eingeben..."}),r.a.createElement("div",{className:"image-amount-wrapper"},r.a.createElement(v.a.Label,null,"Anzahl Bilder:\xa0 "),r.a.createElement("div",{className:"select-wrapper"},r.a.createElement("select",{"aria-label":"select image amount",name:"imageAmount",onInput:function(e){b(e.target.value)},className:"mb-3"},r.a.createElement("option",null,"25"),r.a.createElement("option",null,"50"),r.a.createElement("option",null,"100")))),r.a.createElement(E.a,{type:"submit",variant:"success"},"Suchen")))))})),y=(a(83),[{name:"Natur",imageURL:"https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_1280.jpg"},{name:"Landschaften",imageURL:"https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_1280.jpg"},{name:"Geb\xe4ude",imageURL:"https://cdn.pixabay.com/photo/2017/04/07/06/47/moscow-city-2210335_1280.jpg"},{name:"Tiere",imageURL:"https://cdn.pixabay.com/photo/2018/08/12/16/59/ara-3601194_1280.jpg"},{name:"Sport",imageURL:"https://cdn.pixabay.com/photo/2018/02/06/14/07/dance-3134828_1280.jpg"},{name:"Menschen",imageURL:"https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg"}]),k=(a(84),Object(i.e)((function(e){var t=e.history,a=e.category,n=a.imageURL,c=a.name;return r.a.createElement("div",{onClick:function(){t.push("/kategorie/".concat(c.toLowerCase()))},className:"category-preview",style:{backgroundImage:"url(".concat(n,")")}},r.a.createElement("div",{className:"name-wrapper"},r.a.createElement("span",null,c)))})));var w=function(){return r.a.createElement("div",{className:"category-menu bg-light"},y.map((function(e){return r.a.createElement(k,{key:e.name,category:e})})))},O=(a(85),function(){return r.a.createElement("div",{className:"footer bg-light"},r.a.createElement("span",{onClick:function(){return window.scrollTo(0,0)},className:"button"},r.a.createElement("i",{className:"fas fa-chevron-up"})),r.a.createElement("span",{className:"link"},"\xa9 ",r.a.createElement("a",{href:"https://finnevermann.netlify.com/"},"Finn Evermann")))}),I=function(e){var t=e.history;return r.a.createElement("div",{className:"homepage"},r.a.createElement(N,{homepage:!0,handleSubmit:function(e,a){e.preventDefault(),t.push("/suche/".concat(a))}}),r.a.createElement(w,null),r.a.createElement(O,null))},j=a(8),A=a.n(j),C=a(30),x=a(14),L=(a(87),a(88),a(89),function(e){return{type:"TOGGLE_FAVOURITE_IMAGE",payload:e}}),S=Object(l.b)((function(e){return{favouriteImageIDs:e.favouriteImages.imageIDs}}),(function(e){return{toggleFavouriteImage:function(t){return e(L(t))},openModal:function(t){return e(p(t))}}}))((function(e){var t=e.toggleFavouriteImage,a=e.openModal,n=e.favouriteImageIDs,c=e.image,o=c.largeImageURL,i=c.user;c.userImageURL;return r.a.createElement("div",{className:"image-footer"},r.a.createElement("p",null,"\xa9 ",i),r.a.createElement("div",{className:"button-wrapper"},r.a.createElement("span",{className:"modal-link",onClick:function(){return a(c)}},r.a.createElement("i",{className:"fas fa-search-plus"})),r.a.createElement("span",{className:"mobile-link"},r.a.createElement("a",{href:o}," ",r.a.createElement("i",{className:"fas fa-search-plus"}))),r.a.createElement("span",{onClick:function(){return t(c.id)},className:"toggle-favourite ".concat(n.includes(c.id)?"is-favourite-image":"")},r.a.createElement("i",{className:"fas fa-heart"}))))})),M=function(e){var t=e.image,a=t.webformatURL,n=t.id;return[384178,2534484].includes(n)?null:r.a.createElement("div",{className:"preview-image-wrapper"},r.a.createElement("img",{src:a,alt:""}),r.a.createElement(S,{image:t}))},D=Object(l.b)((function(e){return{favouriteImageIDs:e.favouriteImages.imageIDs}}))((function(e){var t=e.favouriteImageIDs,a=Object(n.useState)([]),c=Object(h.a)(a,2),o=c[0],i=c[1];Object(n.useEffect)((function(){l()}),[t]);var l=function(){var e=[];try{t.length?t.forEach(function(){var t=Object(x.a)(A.a.mark((function t(a){var n,r,c;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pixabay.com/api/?key=15127892-8696442402301390dd419b3b1&id=".concat(a));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,c=r.hits,e=[].concat(Object(C.a)(e),Object(C.a)(c)),i(e);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):i([])}catch(a){throw a}};return r.a.createElement("div",{className:"favoriten-page bg-light"},r.a.createElement("div",{className:"header-area"},r.a.createElement("h3",null,"Deine Favoriten:")),r.a.createElement("div",{className:"favourite-images"},o.length?o.map((function(e){return r.a.createElement(M,{key:e.id,image:e})})):r.a.createElement("span",{className:"empty"},"Du hast keine Bilder zu deinen Favoriten hinzugef\xfcgt")),o.length>3?r.a.createElement(O,null):"")})),_=(a(90),function(){return r.a.createElement("div",{className:"info-page"},r.a.createElement("div",{className:"info-details"},r.a.createElement("h3",null,"Infos zum Projekt"),r.a.createElement("p",null,"Bilderquelle: ",r.a.createElement("a",{className:"color-primary",href:"https://pixabay.com/de/"},"pixabay-API")),r.a.createElement("p",null,"Umsetzung der Such- und Favoritenfunktion, Darstellung der Bilder: ",r.a.createElement("a",{className:"color-primary",href:"https://finnevermann.netlify.com/"},"Finn Evermann")),r.a.createElement("p",{className:"disclaimer"}," Dieses Projekt ist ein Portfolio-Projekt. ",r.a.createElement("br",null)," Es soll den Umgang mit einfachen APIs sowie die Nutzung von Redux und dem Session- bzw. Localstorge darstellen.")))}),R=(a(91),"https://pixabay.com/api/?key=15127892-8696442402301390dd419b3b1"),U=function(){var e=Object(x.a)(A.a.mark((function e(t){var a,n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(R,"&per_page=100&q=").concat(t,"&lang=de&safesearch=true}"));case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,r=n.hits,e.abrupt("return",r);case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(x.a)(A.a.mark((function e(t,a){var n,r,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(R,"&q=").concat(t,"&lang=de&per_page=").concat(a));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.hits,e.abrupt("return",c);case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}(),G=Object(l.b)((function(e){return{imageAmount:e.searchImages.imageAmount}}))((function(e){var t=e.imageAmount,a=e.match,c=e.history,o=Object(n.useState)([]),i=Object(h.a)(o,2),l=i[0],s=i[1],u=a.params.urlQueryString;Object(n.useEffect)((function(){(function(){var e=Object(x.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,T(u,t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u,t]);var m=function(){var e=Object(x.a)(A.a.mark((function e(a,n){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),c.push("/suche/".concat(n)),e.t0=s,e.next=5,T(u,t);case 5:e.t1=e.sent,(0,e.t0)(e.t1),window.scrollTo(0,350);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"user-search-image-page bg-light"},r.a.createElement(N,{handleSubmit:m}),l.length?r.a.createElement("div",null,u?r.a.createElement("p",{id:"query-info",className:"query-info bg-dark"},'Ergebnisse f\xfcr "',u,'":'):"",r.a.createElement("div",{className:"display-images"},l.map((function(e){return r.a.createElement(M,{key:e.id,image:e})})))):r.a.createElement("p",{className:"no-images-found"},"Keine Bilder gefunden"),l.length>3?r.a.createElement(O,null):"")})),B=(a(92),function(e){var t=e.match.params.name,a=Object(n.useState)([]),c=Object(h.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(x.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,U(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log("live")}),[t]),r.a.createElement("div",{className:"category-wrapper "},r.a.createElement("div",{className:"category-heading"},r.a.createElement("h3",null,"Kategorie: ",t.charAt(0).toUpperCase(),t.slice(1))),r.a.createElement("div",{className:"category-images bg-light"},o.map((function(e){return r.a.createElement(M,{key:e.id,image:e})}))),o.length?r.a.createElement(O,null):"")}),F=(a(93),Object(l.b)((function(e){return{currentImage:e.modal.currentImage,favouriteImageIDs:e.favouriteImages.imageIDs}}),(function(e){return{closeModal:function(){return e({type:"CLOSE_MODAL"})},toggleFavouriteImage:function(t){return e(L(t))}}}))((function(e){var t=e.closeModal,a=e.toggleFavouriteImage,n=e.currentImage,c=e.favouriteImageIDs;return n?r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-buttons"},r.a.createElement("span",{onClick:function(){return a(n.id)},className:"toggle-favourite ".concat(c.includes(n.id)?"is-favourite-image":"")},r.a.createElement("i",{className:"fas fa-heart"})),r.a.createElement("span",{onClick:t,className:"close-modal"},"X")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("img",{src:n.largeImageURL,alt:"largeImage"}))):null})));var P=function(){return r.a.createElement("div",{className:"App bg-light"},r.a.createElement(d,null),r.a.createElement(F,null),r.a.createElement(i.a,{exact:!0,path:"/",component:I}),r.a.createElement(i.a,{path:"/favoriten",component:D}),r.a.createElement(i.a,{path:"/infos",component:_}),r.a.createElement(i.a,{path:"/suche/:urlQueryString",component:G}),r.a.createElement(i.a,{exact:!0,path:"/kategorie/:name",component:B}))},z=a(55),q=a(13),W=a(40),V=a(56),K=a.n(V),H=a(15),J=function(e,t){return e.includes(t)?e.filter((function(e){return e!==t})):[].concat(Object(C.a)(e),[t])},Q={imageIDs:[]},X={imageAmount:25,queryString:"",queryInfo:""},$={showMobileNavbar:!1},Y={currentImage:null},Z={key:"root",storage:K.a,whitelist:["favouriteImages"]},ee=Object(q.c)({favouriteImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FAVOURITE_IMAGE":return Object(H.a)({},e,{imageIDs:J(e.imageIDs,t.payload)});default:return e}},searchImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IMAGE_AMOUNT":return Object(H.a)({},e,{imageAmount:t.payload});default:return e}},navbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_NAVBAR":return Object(H.a)({},e,{showMobileNavbar:!e.showMobileNavbar});case"CLOSE_NAVBAR":return Object(H.a)({},e,{showMobileNavbar:!1});default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MODAL":return Object(H.a)({},e,{currentImage:t.payload});case"CLOSE_MODAL":return Object(H.a)({},e,{currentImage:null});default:return e}}}),te=Object(W.a)(Z,ee);a(96);var ae=Object(q.d)(te,q.a.apply(void 0,[])),ne=Object(W.b)(ae),re=a(57),ce=a(58),oe=a(61),ie=a(59),le=a(62),se=function(e){function t(){return Object(re.a)(this,t),Object(oe.a)(this,Object(ie.a)(t).apply(this,arguments))}return Object(le.a)(t,e),Object(ce.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),ue=Object(i.e)(se),me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(l.a,{store:ae},r.a.createElement(u.a,null,r.a.createElement(ue,null,r.a.createElement(z.a,{persistor:ne},r.a.createElement(P,null))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/image-search",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/image-search","/service-worker.js");me?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):fe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):fe(t,e)}))}}()}},[[63,1,2]]]);
//# sourceMappingURL=main.3809491e.chunk.js.map