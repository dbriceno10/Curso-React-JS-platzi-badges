(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/portal-transparent.16fae08d.png"},,,,function(e,a,t){e.exports=t.p+"static/media/twitter.2de2bfa1.svg"},,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/react-logo3.06e73328.svg"},function(e,a,t){e.exports=t.p+"static/media/error-500.772e3ffa.png"},function(e,a,t){e.exports=t.p+"static/media/Error404.3e2b05c7.jpg"},function(e,a,t){e.exports=t.p+"static/media/logo@2x.186f6f92.png"},,function(e,a,t){e.exports=t(50)},,,,,function(e,a,t){},,,function(e,a,t){},function(e,a,t){},,,function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(25),l=t.n(c),s=(t(18),t(36),t(53)),o=t(54),i=t(55),m=t(11),u=t.n(m),d=t(12),g=t(2),E=t(3),p=t(5),v=t(4),f=t(6),h=(t(20),t(9)),b=t.n(h),N=t(26),_=t.n(N),j=t(52),O=(t(39),t(21),function(e){function a(){return Object(g.a)(this,a),Object(p.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"lds-grid"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}}]),a}(n.Component)),y=function(){return r.a.createElement("div",{className:"PageLoading"},r.a.createElement(O,null))},w=(t(40),t(27)),B=t.n(w);var x=function(e){return r.a.createElement("div",{className:"PageError"},r.a.createElement(j.a,{to:"/"},r.a.createElement("img",{className:"error-img",src:B.a,alt:"server-internal error"})),r.a.createElement("h1",{className:"h1-title"},e.error.message,", please reload the page."),r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(j.a,{className:"btn btn-primary",to:"/"},"Home")))},k=function(e){function a(){return Object(g.a)(this,a),Object(p.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"lds-grid"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}}]),a}(n.Component),C=(t(43),t(13)),D=t.n(C),L=t(14),S=t.n(L),I=function(e){function a(){var e,t;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!0,error:null,data:{results:[]},nextPage:1},t.fetchData=Object(d.a)(u.a.mark(function e(){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,error:null}),e.prev=1,e.next=4,fetch("https://rickandmortyapi.com/api/character/?page=".concat(t.state.nextPage));case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t.setState({loading:!1,data:{info:n.info,results:[].concat(t.state.data.results,n.results)},nextPage:t.state.nextPage+1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0),t.setState({loading:!1,error:e.t0});case 15:case"end":return e.stop()}},e,null,[[1,11]])})),t}return Object(f.a)(a,e),Object(E.a)(a,[{key:"componentDidMount",value:function(){this.intervalID=this.fetchData()}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){var e=this;return!0!==this.state.loading||this.state.data?this.state.error?r.a.createElement(x,{error:this.state.error}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges__hero sup-margin"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("div",{className:"Badges__list"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("ul",{className:"list-unstyled BadgesList"},this.state.data.results.map(function(e){return r.a.createElement(j.a,{className:"text-reset text-decoration-none",to:"/badges/".concat(e.id)},r.a.createElement("li",{key:e.id,className:"BadgesListItem"},r.a.createElement("img",{src:e.image,alt:e.name,className:"BadgesListItem__avatar"}),r.a.createElement("div",null,r.a.createElement("b",null,e.name),r.a.createElement("div",{className:"Twitter__name"},r.a.createElement("span",{className:"Twitter__logo"},r.a.createElement("img",{className:"Twitter__logo-img",src:D.a,alt:"logo de twitter"})),"@",e.name.split(" ").join("").toLowerCase()),e.species)))})),this.state.loading&&r.a.createElement("div",{className:"miniloader"},r.a.createElement(k,null)),!this.state.loading&&this.state.data.info.next&&r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){e.fetchData()}},"Loading More")),r.a.createElement("div",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){S()({title:"Coming Soon",text:"We hope to activate this soon",icon:"info"})}},"New Badge")),r.a.createElement("div",{className:"badge-logos-container"},r.a.createElement(j.a,{to:"/comingson"},r.a.createElement("img",{className:"Badges_conf-logo Badges_conf-logo-width",src:b.a,alt:"Conf Logo"})),r.a.createElement("a",{href:"https://es.reactjs.org/",target:"_blank"},r.a.createElement("img",{className:"Badges_conf-logo react-logo",src:_.a,alt:"Logo de React js"}))))))))))):r.a.createElement(y,null)}}]),a}(r.a.Component),P=(t(23),t(46),function(e){function a(){return Object(g.a)(this,a),Object(p.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=this.props,a=e.image,t=e.name,n=e.species;return r.a.createElement("div",{className:"Badge"},r.a.createElement("div",{className:"Badge__header"},r.a.createElement("img",{className:"confLogo",src:b.a,alt:"Logo"})),r.a.createElement("div",{className:"Badge__section-name"},r.a.createElement("img",{className:"Badge__avatar",src:a,alt:"Avatar"}),r.a.createElement("h1",null,t)),r.a.createElement("div",{className:"Badge__section-info"},r.a.createElement("h3",null,n),r.a.createElement("span",null,r.a.createElement("img",{className:"twitter-logo",src:D.a,alt:"logo de twitter"})),r.a.createElement("div",null,"@",t.split(" ").join("").toLowerCase())),r.a.createElement("div",{className:"Badge__footer"},r.a.createElement("p",null,"#spaceconfig")))}}]),a}(r.a.Component)),A=function(){return window.location.hash.slice(9)},F=function(e){function a(){var e,t;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!0,error:null,data:{results:[]}},t.fetchData=function(){var e=Object(d.a)(u.a.mark(function e(a){var n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,error:null}),e.prev=1,e.next=4,fetch("https://rickandmortyapi.com/api/character/".concat(a));case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,t.setState({loading:!1,data:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.setState({loading:!1,error:e.t0});case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(a){return e.apply(this,arguments)}}(),t}return Object(f.a)(a,e),Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=A();this.intervalID=this.fetchData(e)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){if(this.state.loading)return r.a.createElement(y,null);if(this.state.error)return r.a.createElement(x,{error:this.state.error});var e=this.state.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeDetails__hero"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 BadgeDetails__hero-attendant-name"})))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(P,{image:e.image,name:e.name,species:e.species})),r.a.createElement("div",{className:"col container-actions"},r.a.createElement("h2",null,"Actions"),r.a.createElement("div",null,r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"btn btn-primary btn-action",onClick:function(){S()({title:"Coming Soon",text:"We hope to activate this soon",icon:"info"})}},"Edit"),r.a.createElement(j.a,{className:"btn btn-primary btn-action",to:"/badges"},"Back")))))))}}]),a}(r.a.Component),H=(t(47),function(e){function a(){return Object(g.a)(this,a),Object(p.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(j.a,{className:"Navbar__brand",to:"/"},r.a.createElement("img",{className:"Navbar__brand-logo",src:b.a,alt:"logo"}),r.a.createElement("span",{className:"fw-light"},"Space"),r.a.createElement("span",{className:"fw-bold"},"Badges"))))}}]),a}(r.a.Component)),M=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),e.children)},T=(t(24),t(48),t(28)),W=t.n(T),J=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"container-error"},r.a.createElement("div",null,r.a.createElement(j.a,{to:"/"},r.a.createElement("img",{className:"Error404-img",src:W.a,alt:"Error404: Not Found"})),r.a.createElement("h1",{className:"error-mesagge"},"Page Not Found"))))},R=t(29),U=t.n(R),q=function(e){function a(){return Object(g.a)(this,a),Object(p.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"Home__col col-12 col-md-4"},r.a.createElement("div",{className:"title-container"},r.a.createElement("img",{src:b.a,alt:"Space Conf Logo",className:"img-fluid mb-2 space-logo img-fluid"}),r.a.createElement("h1",null,"Space Badges: Trae a todos los personajes de Rick And Morty"),r.a.createElement(j.a,{className:"btn btn-primary btn-start",to:"/badges"},"Start"))),r.a.createElement("div",{className:"Home__col d-none d-md-block col-md-8"},r.a.createElement("img",{src:U.a,alt:"Astronauts",className:"img-fluid p-4 astronaut"})))))}}]),a}(n.Component),z=function(){return r.a.createElement(s.a,null,r.a.createElement(M,null,r.a.createElement(o.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:q}),r.a.createElement(i.a,{exact:!0,path:"/badges",component:I}),r.a.createElement(i.a,{exact:!0,path:"/badges/:badgeId",component:F}),r.a.createElement(i.a,{component:J})," ")))},G=document.getElementById("app");l.a.render(r.a.createElement(z,null),G)}],[[31,1,2]]]);
//# sourceMappingURL=main.211a44df.chunk.js.map