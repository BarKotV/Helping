(window["webpackJsonpgive-staff"]=window["webpackJsonpgive-staff"]||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/Decoration.2290784e.svg"},47:function(e,t,a){e.exports=a.p+"static/media/Icon-1.91147906.svg"},48:function(e,t,a){e.exports=a.p+"static/media/Icon-2.db91e33e.svg"},49:function(e,t,a){e.exports=a.p+"static/media/Icon-3.2cfe9dfe.svg"},50:function(e,t,a){e.exports=a.p+"static/media/Icon-4.436df0aa.svg"},51:function(e,t,a){e.exports=a.p+"static/media/Signature.e54cfcfc.svg"},52:function(e,t,a){e.exports=a.p+"static/media/Facebook.df65b6c0.svg"},53:function(e,t,a){e.exports=a.p+"static/media/Instagram.703479fd.svg"},57:function(e,t,a){e.exports=a(78)},62:function(e,t,a){},63:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=(a(62),a(63),a(13)),s=a(16),m=a.n(s),i=a(22),u="ADD_MOVIE",p="RESET_MOVIES",E=function(e){return{type:u,item:e}},b=function(e){return{type:p,item:e}},f=function(){var e=Object(i.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/movies",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),v=(Object(o.b)(function(e){return{movies:e.movies}},function(e){return{getAllMovies:function(){return e(function(){var e=Object(i.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:e.sent.map(function(e){return t(E(e.name))});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}})(function(e){var t=e.movies,a=e.getAllMovies;return Object(n.useEffect)(function(){a()},{}),r.a.createElement("ul",null,t.list.map(function(e){return r.a.createElement("li",null,e)}))}),Object(o.b)(null,function(e){return{add:function(t){return e(E(t))}}})(function(e){var t=e.add,a=r.a.createRef();return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(a.current.value),null===a.current.value?console.log("nie ma nic"):a.current.value=""}},r.a.createElement("input",{ref:a}),r.a.createElement("button",{type:"submit"},"Add movie"))}),Object(o.b)(null,function(e){return{reset:function(){return e(b())}}})(function(e){var t=e.reset;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t()}},r.a.createElement("button",{type:"submit"},"Remove ALl"))}),a(2)),d=a(3),_=a(5),j=a(4),h=a(6),O=a(9),g=a(10),y=a.n(g),N=a(23),k=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav__menu--row"},r.a.createElement("li",{className:"nav__menu--link"},r.a.createElement(N.Link,{activeClass:"active",to:"nav",spy:!0,smooth:!0,offset:-70,duration:500,className:"nav__menu--link1"},"Start")),r.a.createElement("li",{className:"nav__menu--link"},r.a.createElement(N.Link,{activeClass:"active",to:"thremusketeers",spy:!0,smooth:!0,offset:-300,duration:500}," Ilu nas jest?")),r.a.createElement("li",{className:"nav__menu--link"},r.a.createElement(N.Link,{activeClass:"active",to:"abutus",spy:!0,smooth:!0,offset:-70,duration:500},"O nas")),r.a.createElement("li",{className:"nav__menu--link"},r.a.createElement(N.Link,{activeClass:"active",to:"x",spy:!0,smooth:!0,offset:-70,duration:500},"Fundajce i organizacje")),r.a.createElement("li",{className:"nav__menu--link"},r.a.createElement(N.Link,{activeClass:"active",to:"contactform",spy:!0,smooth:!0,offset:-70,duration:500},"Kontakt"))))}}]),t}(n.Component),w=a(8),C=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"nav",id:"nav"},r.a.createElement("div",{className:"nav__img"}),r.a.createElement(x,null)))}}]),t}(n.Component),x=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav__menu"},r.a.createElement("ul",{className:"nav__menu--row nav__menu--login"},r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/log"},"Zaloguj")),r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/reg"},"Za\u0142o\u017c konto"))),r.a.createElement(k,null),r.a.createElement(z,null))}}]),t}(n.Component),z=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content",id:"nav"},r.a.createElement("em",null,"Zacznij pomaga\u0107! ",r.a.createElement("br",null),"Oddaj niechciane rzeczy w zaufane r\u0119ce"),r.a.createElement("div",null,r.a.createElement(O.a,{src:y.a})),r.a.createElement("div",{className:"content__button"},r.a.createElement("div",{className:"content__button--left"},r.a.createElement(w.b,{className:"content__button--link",to:"/"},"ODDAJ",r.a.createElement("br",null),"RZECZY")),r.a.createElement("div",{className:"content__button--right"},r.a.createElement(w.b,{className:"content__button--link",to:"/"},"ZORGANIZUJ",r.a.createElement("br",null),"ZBI\xd3RK\u0118"))))}}]),t}(n.Component),S=C,A=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container",id:"thremusketeers"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info__bar"},r.a.createElement("span",null,"10"),r.a.createElement("em",null,"ODDANYCH WORK\xd3W"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam est eum laboriosam optio quibusdam totam!")),r.a.createElement("div",{className:"info__bar"},r.a.createElement("span",null,"10"),r.a.createElement("em",null,"WSPARTYCH ORGANIZACJI"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam est eum laboriosam optio quibusdam totam!")),r.a.createElement("div",{className:"info__bar"},r.a.createElement("span",null,"10"),r.a.createElement("em",null,"ZORGANIZOWANYCH ZBI\xd3REK"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam est eum laboriosam optio quibusdam totam!"))))}}]),t}(n.Component),D=a(47),Z=a.n(D),P=a(48),R=a.n(P),I=a(49),W=a.n(I),L=a(50),q=a.n(L),K=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"steps"},r.a.createElement("div",{className:"steps__title"},r.a.createElement("p",{className:"steps__title--padding"},"Wystarcz\u0105 4 proste kroki"),r.a.createElement(O.a,{src:y.a})),r.a.createElement(B,null),r.a.createElement("div",{className:"steps__button"},r.a.createElement("p",null,r.a.createElement(w.b,{className:"steps__button--link",to:"/login"},"ODDAJ ",r.a.createElement("br",null),"RZECZY")," "))))}}]),t}(n.Component),B=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"steps__icons"},r.a.createElement("div",{className:"steps__icons--tshirt"},r.a.createElement(O.a,{src:Z.a}),r.a.createElement("p",null,"Wybierz rzeczy"),r.a.createElement("hr",null),r.a.createElement("p",null,"Ubrania, zabawki, ",r.a.createElement("br",null),"sprzety i inne")),r.a.createElement("div",{className:"steps__icons--tshirt"},r.a.createElement(O.a,{src:R.a}),r.a.createElement("p",null,"Spakuj je"),r.a.createElement("hr",null),r.a.createElement("p",null,"Skorzystaj z ",r.a.createElement("br",null),"work\xf3w na \u015bmieci")),r.a.createElement("div",{className:"steps__icons--tshirt"},r.a.createElement(O.a,{src:W.a}),r.a.createElement("p",null,"Komu pomo\u017cesz"),r.a.createElement("hr",null),r.a.createElement("p",null,"wybierz zaufane ",r.a.createElement("br",null),"miejsce")),r.a.createElement("div",{className:"steps__icons--tshirt"},r.a.createElement(O.a,{src:q.a}),r.a.createElement("p",null,"Zam\xf3w kuriera"),r.a.createElement("hr",null),r.a.createElement("p",null,"Kurier przyjdzie ",r.a.createElement("br",null),"w dogodnym terminie")))}}]),t}(n.Component),J=K,M=a(51),F=a.n(M),H=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container",id:"abutus"},r.a.createElement("div",{className:"abaut"},r.a.createElement(T,null),r.a.createElement("div",{className:"abaut__img"}," ")))}}]),t}(n.Component),T=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"abaut__text"},r.a.createElement("span",null,"O nas"),r.a.createElement(O.a,{className:"abaut__text--icon decoration--padding",src:y.a}),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa error excepturi inventore minus voluptate!"),r.a.createElement("div",{className:"abaut__text--signature"},r.a.createElement(O.a,{src:F.a})))}}]),t}(n.Component),G=H,Y=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"help"},r.a.createElement("em",null,"Komu pomagamy?"),r.a.createElement(O.a,{className:"decoration--padding",src:y.a}),r.a.createElement($,null),r.a.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum et ipsam necessitatibus nisi obcaecati quaerat ratione sapiente? Assumenda dicta ea magnam quae quasi, tenetur!")))}}]),t}(n.Component),$=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"help__teams"},r.a.createElement("p",null,"Fundacjom"),r.a.createElement("p",null,"Organizacjom ",r.a.createElement("br",null),"pozarz\u0105dowym"),r.a.createElement("p",null,"Lokalnym ",r.a.createElement("br",null),"zbi\xf3rkom"))}}]),t}(n.Component),U=Y,V=a(25),Q="ADD_NAME",X="ADD_EMAIL",ee="ADD_MESSAGE",te=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container",id:"contactform"},r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"contact__img"}),r.a.createElement(ae,null)))}}]),t}(n.Component),ae=function(){var e=Object(n.useState)(),t=Object(V.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(V.a)(c,2),s=o[0],u=o[1],p=Object(n.useState)(),E=Object(V.a)(p,2),b=E[0],f=E[1],v=Object(n.useState)(!1),d=Object(V.a)(v,2),_=d[0],j=d[1],h=r.a.createRef(),g=r.a.createRef(),N=r.a.createRef(),k="http://localhost:3000/form",w=function(e,t,a){if(e.test(t))return a(!0),!0;a(!1)},C=null,x=null,z=null,S=null;return!1===a&&(C=r.a.createElement("em",null,"Podane imie jest nieprawid\u0142owe")),!1===s&&(x=r.a.createElement("em",null,"Podany email jest nieprawid\u0142owy")),!1===b&&(z=r.a.createElement("em",null,"Prosz\u0119 wpisa\u0107 min. 100 znakow ")),!0===_&&(S=r.a.createElement("em",null,"Wiadomo\u015b\u0107 zosta\u0142a wys\u0142ana! ",r.a.createElement("br",null),"Wkr\xf3tce si\u0119 skontaktujemy.")),r.a.createElement("div",{className:"contact__form"},r.a.createElement("p",null,"Skontaktuj sie z nami"),r.a.createElement(O.a,{src:y.a}),S,r.a.createElement("form",{onSubmit:function(e){var t=function(e,t,n,r){!0===e&&!0===t&&!0===n&&(j(!0),function(e){a.apply(this,arguments)}(r))};function a(){return(a=Object(i.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(k,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log("Success:",JSON.stringify(n)),r(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error:",e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}))).apply(this,arguments)}var n={name:h.current.value,email:g.current.value,message:N.current.value},r=function(){l(),u(),f(),document.getElementById("name").value=" ",document.getElementById("email").value=" ",document.getElementById("message").value=" "};e.preventDefault();var c={Rname:/^[a-zA-Z ]{2,30}$/,Remail:/^[a-z0-9\._%-]+@[a-z0-9\.-]+\.[a-z]{2,4}$/i,Rmessage:/^[a-zA-Z ]{10,200}$/};function o(){return(o=Object(i.a)(m.a.mark(function e(){var a,r,o,s;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={a:"",b:"",c:""},e.next=3,w(c.Rname,n.name,l);case 3:return r=e.sent,a.a=r,e.next=7,w(c.Remail,n.email,u);case 7:return o=e.sent,a.b=o,e.next=11,w(c.Rmessage,n.message,f);case 11:s=e.sent,a.c=s,t(a.a,a.b,a.c,n);case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){o.apply(this,arguments)}()}},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table__name"},r.a.createElement("th",{className:"table__name--padding table__name--error"},r.a.createElement("span",null,"Wpisz swoje imie"),r.a.createElement("br",null),r.a.createElement("input",{ref:h,className:"table__name--style",id:"name",type:"text"}),r.a.createElement("br",null),r.a.createElement("hr",null),C),r.a.createElement("th",{className:"table__name--error"},r.a.createElement("span",null,"Wpisz sw\xf3j email"),r.a.createElement("br",null),r.a.createElement("input",{ref:g,className:"table__name--style",id:"email",type:"text"}),r.a.createElement("br",null),r.a.createElement("hr",null),x)),r.a.createElement("tr",{className:"table__area"},r.a.createElement("th",{className:"table__name--error"},r.a.createElement("span",null,"Wpisz swoj\u0105 wiadomo\u015bc"),r.a.createElement("br",null),r.a.createElement("textarea",{ref:N,id:"message",className:"table__area--style"}),r.a.createElement("br",null),r.a.createElement("hr",null),z)),r.a.createElement("tr",null,r.a.createElement("th",{className:"table__button"},r.a.createElement("button",{className:"table__button--style"},"Wy\u015blij")))))))},ne=te,re=a(52),le=a.n(re),ce=a(53),oe=a.n(ce),se=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"media"},r.a.createElement("p",null,"Copyright Bartosz Kotniewicz"),r.a.createElement("div",{className:"media__icons"},r.a.createElement(O.a,{src:le.a}),r.a.createElement(O.a,{src:oe.a}))))}}]),t}(n.Component),me=a(20),ie=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("ul",{className:"nav__menu--row nav__menu--login"},r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/log"},"Zaloguj")),r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/reg"},"Za\u0142o\u017c konto"))),r.a.createElement(ue,null)),r.a.createElement(pe,null))}}]),t}(n.Component),ue=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",{className:"log"},r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/"},"Start")),r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/"}," Ilu nas jest?")),r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/"},"O nas")),r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/"},"Fundajce i organizacje")),r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/"},"Kontakt")))))}}]),t}(n.Component),pe=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={login:"",pass:""},a.handleChange=function(e){a.setState(Object(me.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){console.log("dupa")},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form__log"},r.a.createElement("h2",null,"Zaloguj si\u0119"),r.a.createElement(O.a,{src:y.a}),r.a.createElement("form",{className:"form__log--padding"},r.a.createElement("p",{className:"form__log--top"},"Email"),r.a.createElement("input",{onChange:this.handleChange,name:"login",className:"form__log--style",type:"text"}),r.a.createElement("p",{className:"form__log--top"},"Has\u0142o"),r.a.createElement("input",{onChange:this.handleChange,name:"pass",className:"form__log--style",type:"password"})),r.a.createElement("div",{className:"form__log--top form__log--space"},r.a.createElement(w.b,{className:"nav__menu--color form__log--move",to:"/reg"},"Za\u0142u\u017c konto"),r.a.createElement("button",{onClick:this.handleSubmit,className:"form__submit",type:"submit"},"Zaloguj si\u0119"))))}}]),t}(n.Component),Ee=ie,be=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("ul",{className:"nav__menu--row nav__menu--login"},r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/log"},"Zaloguj")),r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/reg"},"Za\u0142o\u017c konto"))),r.a.createElement(fe,null)),r.a.createElement(ve,null))}}]),t}(n.Component),fe=function(e){function t(){return Object(v.a)(this,t),Object(_.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",{className:"log"},r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/"},"Start")),r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/"}," Ilu nas jest?")),r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/"},"O nas")),r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/"},"Fundajce i organizacje")),r.a.createElement("li",null,r.a.createElement(w.b,{className:"nav__menu--color",to:"/"},"Kontakt")))))}}]),t}(n.Component),ve=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={login:"",pass:"",repass:""},a.handleChange=function(e){a.setState(Object(me.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){console.log(a.state),a.setState({login:"",pass:"",repass:""})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form__log"},r.a.createElement("h2",null,"Za\u0142\xf3\u017c konto"),r.a.createElement(O.a,{src:y.a}),r.a.createElement("form",{className:"form__log--padding"},r.a.createElement("p",{className:"form__log--top"},"Email"),r.a.createElement("input",{onChange:this.handleChange,value:this.state.login,name:"login",className:"form__log--style",type:"text"}),r.a.createElement("p",{className:"form__log--top"},"Has\u0142o"),r.a.createElement("input",{onChange:this.handleChange,value:this.state.pass,name:"pass",className:"form__log--style",type:"password"}),r.a.createElement("p",{className:"form__log--top"},"Powt\xf3rz Has\u0142o"),r.a.createElement("input",{onChange:this.handleChange,value:this.state.repass,name:"repass",className:"form__log--style",type:"password"})),r.a.createElement("div",{className:"form__log--top form__log--space"},r.a.createElement(w.b,{className:"nav__menu--color form__log--move",to:"/log"},"Zaloguj si\u0119"),r.a.createElement("button",{onClick:this.handleSubmit,className:"form__submit",type:"submit"},"Zaloguj si\u0119"))))}}]),t}(n.Component),de=be,_e=a(19),je=a(54);function he(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?he(a,!0).forEach(function(t){Object(me.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):he(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ge={name:"",email:"",message:""},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Oe({},e,{name:t.item});case X:return Oe({},e,{email:t.item});case ee:return Oe({},e,{message:t.item});default:return e}},Ne=a(56);function ke(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function we(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ke(a,!0).forEach(function(t){Object(me.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ke(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Ce={listName:"Favourite",list:[]},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return we({},e,{list:[].concat(Object(Ne.a)(e.list),[t.item])});case p:return we({},e,{list:[]});default:return e}},ze=Object(_e.combineReducers)({form:ye,movies:xe}),Se=a(55),Ae=Object(_e.createStore)(ze,Object(je.composeWithDevTools)(Object(_e.applyMiddleware)(Se.a))),De=a(21);var Ze=function(){return r.a.createElement(o.a,{store:Ae},r.a.createElement("div",{className:"App"},r.a.createElement(w.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(De.a,{exact:!0,path:"/",component:S}),r.a.createElement(De.a,{exact:!0,path:"/",component:A}),r.a.createElement(De.a,{exact:!0,path:"/",component:J}),r.a.createElement(De.a,{exact:!0,path:"/",component:G}),r.a.createElement(De.a,{exact:!0,path:"/",component:U}),r.a.createElement(De.a,{exact:!0,path:"/",component:ne}),r.a.createElement(De.a,{exact:!0,path:"/",component:se}),r.a.createElement(De.a,{exact:!0,path:"/log",component:Ee}),r.a.createElement(De.a,{exact:!0,path:"/reg",component:de})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{store:Ae},r.a.createElement(Ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[57,1,2]]]);
//# sourceMappingURL=main.f6a37d0b.chunk.js.map