(this["webpackJsonpreact-pixabay-rescue"]=this["webpackJsonpreact-pixabay-rescue"]||[]).push([[0],{61:function(e,a,t){e.exports=t(94)},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),o=t.n(c),i=(t(66),t(67),t(19)),l=(t(68),t(7)),u=t(58),s=t(6),m=(t(73),function(e){return{type:"OPEN_MODAL",payload:e}}),g=function(e){return{type:"TOGGLE_FAVOURITE_IMAGE",payload:e}},f=Object(l.b)((function(e){return{currentImage:e.modal.currentImage,favouriteImageIDs:e.favouriteImages.imageIDs}}),(function(e){return{closeModal:function(){return e({type:"CLOSE_MODAL"})},toggleFavouriteImage:function(a){return e(g(a))}}}))((function(e){var a=e.closeModal,t=e.toggleFavouriteImage,n=e.currentImage,c=e.favouriteImageIDs;return n?r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-buttons"},r.a.createElement("span",{onClick:function(){return t(n.id)},className:"toggle-favourite ".concat(c.includes(n.id)?"is-favourite-image":"")},r.a.createElement("i",{className:"fas fa-heart"})),r.a.createElement("span",{onClick:a,className:"close-modal"},"X")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("img",{src:n.largeImageURL,alt:"largeImage"}))):null})),d=(t(74),t(97)),p=Object(i.e)((function(e){var a=e.history,t=e.closeModal,n=function(e){a.push("/kategorie/".concat(e)),t()};return r.a.createElement(d.a,{alignRight:!0,size:"sm",className:"dropdown"},r.a.createElement(d.a.Toggle,{variant:"link",id:"dropdown-basic"},"Kategorien"),r.a.createElement(d.a.Menu,null,r.a.createElement(d.a.Item,{onClick:function(){return n("natur")}},"Natur"),r.a.createElement(d.a.Item,{onClick:function(){return n("landschaften")}},"Landschaften"),r.a.createElement(d.a.Item,{onClick:function(){return n("geb\xe4ude")}},"Geb\xe4ude"),r.a.createElement(d.a.Item,{onClick:function(){return n("tiere")}},"Tiere"),r.a.createElement(d.a.Item,{onClick:function(){return n("sport")}},"Sport"),r.a.createElement(d.a.Item,{onClick:function(){return n("personen")}},"Personen")))})),h=(t(77),Object(i.e)(Object(l.b)(null,(function(e){return{closeNavbar:function(){e({type:"CLOSE_NAVBAR"})}}}))((function(e){var a=e.closeNavbar;return r.a.createElement("div",{className:"mobile-category-menu"},r.a.createElement("div",{className:"headline"},"Kategorien:"),r.a.createElement("div",{className:"categories"},r.a.createElement(s.c,{onClick:function(){return a()},to:"/kategorie/landschaften"},"Landschaften"),r.a.createElement(s.c,{onClick:function(){return a()},to:"/kategorie/geb\xe4ude"},"Geb\xe4ude"),r.a.createElement(s.c,{onClick:function(){return a()},to:"/kategorie/natur"},"Natur"),r.a.createElement(s.c,{onClick:function(){return a()},to:"/kategorie/Tiere"},"Tiere"),r.a.createElement(s.c,{onClick:function(){return a()},to:"/kategorie/sport"},"Sport"),r.a.createElement(s.c,{onClick:function(){return a()},to:"/kategorie/personen"},"Personen")))})))),E=Object(l.b)((function(e){return{favouriteImageIDs:e.favouriteImages.imageIDs,showMobileNavbar:e.navbar.showMobileNavbar}}),(function(e){return{toggleNavbar:function(){return e({type:"TOGGLE_NAVBAR"})},closeNavbar:function(){return e({type:"CLOSE_NAVBAR"})},openModal:function(){return e(m())},closeModal:function(){return e({type:"CLOSE_MODAL"})}}}))((function(e){var a=e.favouriteImageIDs,t=e.showMobileNavbar,n=e.toggleNavbar,c=e.closeNavbar,o=e.closeModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{bg:"dark",className:"header"},r.a.createElement(s.b,{onClick:c,className:"brand",to:"/"},"Image Search"),t?r.a.createElement("div",{className:"mobile-nav-links"},r.a.createElement(s.c,{id:"home-link",onClick:c,exact:!0,to:"/"},"Home"),r.a.createElement(h,null),r.a.createElement(s.c,{onClick:c,id:"favourites-link",exact:!0,to:"/favoriten"},"Favoriten (",a.length,")")):"",r.a.createElement("div",{className:"desktop-nav-links"},r.a.createElement(s.c,{onClick:o,exact:!0,to:"/"},"Home"),r.a.createElement(p,{closeModal:o}),r.a.createElement(s.c,{onClick:o,id:"favourites-link",exact:!0,to:"/favoriten"},"Favoriten (",a.length,")")),r.a.createElement("div",{onClick:n,className:"toggle-navbar"},r.a.createElement("div",{className:"".concat(t?"bar-toggled":"bar-default"," bar-1")}),r.a.createElement("div",{className:"".concat(t?"bar-toggled":"bar-default"," bar-2")}),r.a.createElement("div",{className:"".concat(t?"bar-toggled":"bar-default"," bar-3")}))))})),v=(t(78),t(79),t(29)),b=t(36),y=Object(l.b)((function(e){return{queryString:e.searchImages.queryString}}),(function(e){return{setImageAmount:function(a){return e(function(e){return{type:"SET_IMAGE_AMOUNT",payload:e}}(a))},setQueryString:function(a){return e(function(e){return{type:"SET_QUERY_STRING",payload:e}}(a))},setQueryInfo:function(a){return e(function(e){return{type:"SET_QUERY_INFO",payload:e}}(a))}}}))((function(e){var a=e.homepage,t=e.handleSubmit,n=e.setQueryString,c=e.setImageAmount;return r.a.createElement("div",{className:"search-area"},r.a.createElement("div",{className:"form-wrapper"},a?r.a.createElement("h3",null,"Beeindruckende lizenzfreie Bilder"):r.a.createElement("h3",null,"Weitere Bilder suchen"),r.a.createElement(v.a,{onSubmit:t,className:"form"},r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Control,{className:"mb-3",required:!0,"aria-label":"search images",onChange:function(e){n(e.target.value)},type:"text",name:"queryString",placeholder:"Schlagwort eingeben..."}),r.a.createElement("div",{className:"image-amount-wrapper"},r.a.createElement(v.a.Label,null,"Anzahl Bilder:\xa0 "),r.a.createElement("div",{className:"select-wrapper"},r.a.createElement("select",{"aria-label":"select image amount",name:"imageAmount",onInput:function(e){c(e.target.value)},className:"mb-3"},r.a.createElement("option",null,"25"),r.a.createElement("option",null,"50"),r.a.createElement("option",null,"100")))),r.a.createElement(b.a,{type:"submit",variant:"success"},"Suchen")))))})),N=(t(82),[{name:"Natur",imageURL:"https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_1280.jpg"},{name:"Landschaften",imageURL:"https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_1280.jpg"},{name:"Geb\xe4ude",imageURL:"https://cdn.pixabay.com/photo/2017/04/07/06/47/moscow-city-2210335_1280.jpg"},{name:"Tiere",imageURL:"https://cdn.pixabay.com/photo/2018/08/12/16/59/ara-3601194_1280.jpg"},{name:"Sport",imageURL:"https://cdn.pixabay.com/photo/2018/02/06/14/07/dance-3134828_1280.jpg"},{name:"Menschen",imageURL:"https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg"}]),I=(t(83),Object(i.e)((function(e){var a=e.history,t=e.category,n=t.imageURL,c=t.name;return r.a.createElement("div",{onClick:function(){a.push("/kategorie/".concat(c.toLowerCase()))},className:"category-preview",style:{backgroundImage:"url(".concat(n,")")}},r.a.createElement("div",{className:"name-wrapper"},r.a.createElement("span",null,c)))})));var k=function(){return r.a.createElement("div",{className:"category-menu bg-light"},N.map((function(e){return r.a.createElement(I,{key:e.name,category:e})})))},O=(t(84),function(){return r.a.createElement("div",{className:"footer bg-light"},r.a.createElement("span",{onClick:function(){return window.scrollTo(0,0)},className:"button"},r.a.createElement("i",{className:"fas fa-chevron-up"})),r.a.createElement("span",{className:"link"},"\xa9 ",r.a.createElement("a",{href:"https://finnevermann.netlify.com/"},"Finn Evermann")))}),j=Object(l.b)((function(e){return{queryString:e.searchImages.queryString}}))((function(e){var a=e.history,t=e.queryString;return r.a.createElement("div",{className:"homepage"},r.a.createElement(y,{homepage:!0,handleSubmit:function(e){e.preventDefault(),a.push("/suche/".concat(t))}}),r.a.createElement(k,null),r.a.createElement(O,null))})),w=t(28),S=t(18),A=(t(85),t(86),t(87),Object(l.b)((function(e){return{favouriteImageIDs:e.favouriteImages.imageIDs}}),(function(e){return{toggleFavouriteImage:function(a){return e(g(a))},openModal:function(a){return e(m(a))}}}))((function(e){var a=e.toggleFavouriteImage,t=e.openModal,n=e.favouriteImageIDs,c=e.image,o=c.largeImageURL,i=c.user;return r.a.createElement("div",{className:"image-footer"},r.a.createElement("p",null,"\xa9 ",i),r.a.createElement("div",{className:"button-wrapper"},r.a.createElement("span",{className:"modal-link",onClick:function(){return t(c)}},r.a.createElement("i",{className:"fas fa-search-plus"})),r.a.createElement("span",{className:"mobile-link"},r.a.createElement("a",{href:o}," ",r.a.createElement("i",{className:"fas fa-search-plus"}))),r.a.createElement("span",{onClick:function(){return a(c.id)},className:"toggle-favourite ".concat(n.includes(c.id)?"is-favourite-image":"")},r.a.createElement("i",{className:"fas fa-heart"}))))}))),C=function(e){var a=e.image,t=a.webformatURL,n=a.id;return[384178,2534484].includes(n)?null:r.a.createElement("div",{className:"preview-image-wrapper"},r.a.createElement("img",{src:t,alt:""}),r.a.createElement(A,{image:a}))},_=Object(l.b)((function(e){return{favouriteImageIDs:e.favouriteImages.imageIDs}}))((function(e){var a=e.favouriteImageIDs,t=Object(n.useState)([]),c=Object(S.a)(t,2),o=c[0],i=c[1],l=[];return Object(n.useEffect)((function(){a.length?a.forEach((function(e){fetch("https://pixabay.com/api/?key=15127892-8696442402301390dd419b3b1&id=".concat(e)).then((function(e){return e.json()})).then((function(e){var a=e.hits;l=[].concat(Object(w.a)(l),Object(w.a)(a)),i(l)}))})):i([])}),[a]),r.a.createElement("div",{className:"favoriten-page bg-light"},r.a.createElement("div",{className:"header-area"},r.a.createElement("h3",null,"Deine Favoriten:")),r.a.createElement("div",{className:"favourite-images"},o.length?o.map((function(e){return r.a.createElement(C,{key:e.id,image:e})})):r.a.createElement("span",{className:"empty"},"Du hast keine Bilder zu deinen Favoriten hinzugef\xfcgt")),o.length>3?r.a.createElement(O,null):"")})),L=(t(88),function(){return r.a.createElement("div",{className:"info-page"},r.a.createElement("div",{className:"info-details"},r.a.createElement("h3",null,"Infos zum Projekt"),r.a.createElement("p",null,"Bilderquelle: ",r.a.createElement("a",{className:"color-primary",href:"https://pixabay.com/de/"},"pixabay-API")),r.a.createElement("p",null,"Umsetzung der Such- und Favoritenfunktion, Darstellung der Bilder: ",r.a.createElement("a",{className:"color-primary",href:"https://finnevermann.netlify.com/"},"Finn Evermann")),r.a.createElement("p",{className:"disclaimer"}," Dieses Projekt ist ein Portfolio-Projekt. ",r.a.createElement("br",null)," Es soll den Umgang mit einfachen APIs sowie die Nutzung von Redux und dem Session- bzw. Localstorge darstellen.")))}),M=(t(89),Object(l.b)((function(e){return{imageAmount:e.searchImages.imageAmount,queryString:e.searchImages.queryString,queryInfo:e.searchImages.queryInfo}}))((function(e){var a=e.imageAmount,t=e.queryString,c=e.match,o=e.history,i=Object(n.useState)([]),l=Object(S.a)(i,2),u=l[0],s=l[1],m=Object(n.useState)(!1),g=Object(S.a)(m,2),f=g[0],d=g[1],p=Object(n.useState)(""),h=Object(S.a)(p,2),E=h[0],v=h[1],b=c.params.urlQueryString,N=function(){fetch("https://pixabay.com/api/?key=15127892-8696442402301390dd419b3b1&q=".concat(b,"&lang=de&per_page=").concat(a)).then((function(e){return e.json()})).then((function(e){var a=e.hits;a.length?(s(a),d(!1)):a.length||d(!0)}))};Object(n.useEffect)((function(){N(),v(b)}),[b]);return r.a.createElement("div",{className:"user-search-image-page bg-light"},r.a.createElement(y,{handleSubmit:function(e){e.preventDefault(),v(b),o.push("/suche/".concat(t)),N(),window.scrollTo(0,350)}}),f?r.a.createElement("p",{className:"no-images-found"},"Keine Bilder gefunden"):r.a.createElement("div",null,E&&u.length?r.a.createElement("p",{id:"query-info",className:"query-info bg-dark"},'Ergebnisse f\xfcr "',E,'":'):"",r.a.createElement("div",{className:"display-images"},u.map((function(e){return r.a.createElement(C,{key:e.id,image:e})})))),u.length>3?r.a.createElement(O,null):"")}))),R=(t(90),function(e){var a=e.match.params.name,t=Object(n.useState)([]),c=Object(S.a)(t,2),o=c[0],i=c[1];Object(n.useEffect)((function(){l()}),[a]);var l=function(){fetch("https://pixabay.com/api/?key=15127892-8696442402301390dd419b3b1&per_page=100&q=".concat(a,"&lang=de&safesearch=true}")).then((function(e){return e.json()})).then((function(e){var a=e.hits;i(a)}))};return r.a.createElement("div",{className:"category-wrapper "},r.a.createElement("div",{className:"category-heading"},r.a.createElement("h3",null,"Kategorie: ",a.charAt(0).toUpperCase(),a.slice(1))),r.a.createElement("div",{className:"category-images bg-light"},o.map((function(e){return r.a.createElement(C,{key:e.id,image:e})}))),o.length?r.a.createElement(O,null):"")});var D=function(){return r.a.createElement("div",{className:"App bg-light"},r.a.createElement(E,null),r.a.createElement(f,null),r.a.createElement(i.a,{exact:!0,path:"/",component:j}),r.a.createElement(i.a,{path:"/favoriten",component:_}),r.a.createElement(i.a,{path:"/infos",component:L}),r.a.createElement(i.a,{path:"/suche/:urlQueryString",component:M}),r.a.createElement(i.a,{exact:!0,path:"/kategorie/:name",component:R}))},T=t(53),U=t(13),x=t(38),q=t(54),G=t.n(q),F=t(11),B=function(e,a){return e.includes(a)?e.filter((function(e){return e!==a})):[].concat(Object(w.a)(e),[a])},P={imageIDs:[]},z={imageAmount:25,queryString:"",queryInfo:""},Q={showMobileNavbar:!1},W={currentImage:null},V={key:"root",storage:G.a,whitelist:["favouriteImages"]},K=Object(U.c)({favouriteImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_FAVOURITE_IMAGE":return Object(F.a)({},e,{imageIDs:B(e.imageIDs,a.payload)});default:return e}},searchImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_IMAGE_AMOUNT":return Object(F.a)({},e,{imageAmount:a.payload});case"SET_QUERY_STRING":return Object(F.a)({},e,{queryString:a.payload});case"SET_QUERY_INFO":return Object(F.a)({},e,{queryInfo:a.payload});default:return e}},navbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_NAVBAR":return Object(F.a)({},e,{showMobileNavbar:!e.showMobileNavbar});case"CLOSE_NAVBAR":return Object(F.a)({},e,{showMobileNavbar:!1});default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"OPEN_MODAL":return Object(F.a)({},e,{currentImage:a.payload});case"CLOSE_MODAL":return Object(F.a)({},e,{currentImage:null});default:return e}}}),Y=Object(x.a)(V,K);t(93);var H=Object(U.d)(Y,U.a.apply(void 0,[])),J=Object(x.b)(H),X=t(55),$=t(56),Z=t(59),ee=t(57),ae=t(60),te=function(e){function a(){return Object(X.a)(this,a),Object(Z.a)(this,Object(ee.a)(a).apply(this,arguments))}return Object(ae.a)(a,e),Object($.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(r.a.Component),ne=Object(i.e)(te),re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(l.a,{store:H},r.a.createElement(s.a,null,r.a.createElement(ne,null,r.a.createElement(T.a,{persistor:J},r.a.createElement(D,null))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/image-search",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/image-search","/service-worker.js");re?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(a,e)}))}}()}},[[61,1,2]]]);
//# sourceMappingURL=main.2bbc8159.chunk.js.map