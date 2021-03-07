(this["webpackJsonpmodulo-3-leccion-02-organizar-ficheros-y-carpetas"]=this["webpackJsonpmodulo-3-leccion-02-organizar-ficheros-y-carpetas"]||[]).push([[0],{22:function(e,c,t){},24:function(e,c,t){},25:function(e,c,t){},26:function(e,c,t){},27:function(e,c,t){},28:function(e,c,t){},29:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){},39:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t(16),r=t.n(n),s=t(7),i=t(10),l=t(2),o=(t(22),t(0)),j=function(){return Object(o.jsx)("header",{className:"containerHeader",children:Object(o.jsx)("div",{className:"containerHeader__image"})})},u=(t(24),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("input",{className:"containerFilter__name",type:"text",name:"name",id:"name",placeholder:"Character name",value:e.name,onChange:function(c){e.handleFilter({key:"name",value:c.target.value})}})})}),h=(t(25),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("select",{className:"containerFilter__specie",name:"specie",id:"specie",onChange:function(c){e.handleFilter({key:"specie",value:c.target.value})},value:e.specie,children:[Object(o.jsx)("option",{value:"all",children:"All species"}),Object(o.jsx)("option",{value:"Human",children:"Human"}),Object(o.jsx)("option",{value:"Alien",children:"Alien"})]})})}),d=(t(26),function(e){return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"containerFilter",children:[Object(o.jsx)("h3",{className:"containerFilter__title",children:"Look for your favorite RickMortCharacter!"}),Object(o.jsx)(u,{handleFilter:e.handleFilter,name:e.name}),Object(o.jsx)(h,{handleFilter:e.handleFilter,specie:e.specie})]})}),m=(t(27),function(e){return Object(o.jsxs)("article",{className:"card",children:[Object(o.jsx)("img",{className:"card__image",src:e.character.image,alt:"character photo"}),Object(o.jsx)("h3",{className:"card__title",children:e.character.name}),Object(o.jsx)("h4",{className:"card__subtitle",children:e.character.specie})]})}),b=(t(28),function(){return Object(o.jsxs)("section",{className:"containerNotFound",children:[Object(o.jsx)("h2",{className:"containerNotFound__title",children:"Character not found"}),Object(o.jsx)("div",{className:"containerNotFound__image"})]})}),O=(t(29),function(e){return Object(o.jsx)("section",{className:"containerRender",children:Object(o.jsxs)("ul",{className:"containerRender__list",children:[" ",0===e.characters.length?Object(o.jsx)(b,{}):e.characters.map((function(e){return Object(o.jsx)("li",{className:"containerRender__list--card",children:Object(o.jsx)(s.b,{to:"./character/".concat(e.id),children:Object(o.jsx)(m,{character:e})})},e.id)}))," "]})})}),f=(t(35),function(e){var c,t;return"Human"===e.character.specie?c=Object(o.jsx)("i",{className:"fas fa-user"}):"Alien"===e.character.specie&&(c=Object(o.jsx)("i",{className:"fab fa-reddit-alien"})),"Alive"===e.character.status?t=Object(o.jsx)("i",{className:"fas fa-heartbeat"}):"Dead"===e.character.status?t=Object(o.jsx)("i",{className:"fas fa-cross"}):"unknown"===e.character.status&&(t=Object(o.jsx)("i",{className:"fas fa-question"})),Object(o.jsxs)("article",{className:"containerDetail",children:[Object(o.jsx)("img",{className:"containerDetail__image",src:e.character.image,alt:"character photo"}),Object(o.jsxs)("div",{className:"containerDetail__description",children:[Object(o.jsx)("h3",{className:"containerDetail__description--name",children:e.character.name}),Object(o.jsxs)("h4",{children:["Status: ",e.character.status]}),Object(o.jsxs)("h4",{children:["Species: ",e.character.specie]}),Object(o.jsxs)("h4",{children:["Origin: ",e.character.origin]}),Object(o.jsxs)("h4",{children:["Episodes: ",e.character.episode.length]}),Object(o.jsxs)("div",{className:"containerDetail__icons",children:[Object(o.jsx)("span",{className:"containerDetail__icons--icon1",children:c}),Object(o.jsx)("span",{className:"containerDetail__icons--icon2",children:t})]}),Object(o.jsx)(s.b,{className:"containerDetail__btn",to:"/",children:Object(o.jsxs)("h3",{children:[" ","<"," go back "]})})]})]})}),x=(t(36),function(){return Object(o.jsxs)("footer",{className:"containerFooter",children:[Object(o.jsx)("small",{children:"By Laura Portillo Rodr\xedguez"}),Object(o.jsx)("small",{children:"\xa92021"})]})}),p=function(){return fetch("//rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,gender:e.gender,specie:e.species,origin:e.origin.name,status:e.status,episode:e.episode}}))}))},_=(t(37),t(38),function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],n=c[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),u=s[0],h=s[1],m=Object(a.useState)("all"),_=Object(i.a)(m,2),N=_[0],g=_[1];Object(a.useEffect)((function(){console.log(p()),p().then((function(e){return n(e)}))}),[]);var v=t.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())})).filter((function(e){return"all"===N||e.specie===N})).sort((function(e,c){return e.name.localeCompare(c.name)}));return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(j,{}),Object(o.jsx)("main",{className:"containerMain",children:Object(o.jsxs)(l.c,{children:[Object(o.jsxs)(l.a,{path:"/",exact:!0,children:[Object(o.jsx)(d,{handleFilter:function(e){"name"===e.key?h(e.value):"specie"===e.key&&(g(e.value),console.log(N))},name:u,specie:N}),Object(o.jsx)(O,{characters:v})]}),Object(o.jsx)(l.a,{path:"/character/:id",render:function(e){var c=parseInt(e.match.params.id),a=t.find((function(e){return e.id===c}));return a?Object(o.jsx)(f,{character:a}):Object(o.jsx)(b,{})}})]})}),Object(o.jsx)(x,{})]})});r.a.render(Object(o.jsx)(s.a,{children:Object(o.jsx)(_,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.bd981120.chunk.js.map