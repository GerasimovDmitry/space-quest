(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"4fZH":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("gsaD");class i extends a.a{constructor(){super(...arguments),this.allFlowsURL="section/flow/all",this.flowBriefsURL="section/brief/all"}getAllQuestFlow(){return this.get(this.allFlowsURL)}getAllQuestFlowBriefs(){return this.get(this.flowBriefsURL)}}},"7QIX":function(t,e,n){"use strict";var a=n("8Y7J"),i=n("/HVE"),s=n("XNiG"),r=n("itXk"),l=n("GyhO"),o=n("HDdC"),u=n("IzEk"),c=n("7o/Q");class d{constructor(t){this.total=t}call(t,e){return e.subscribe(new h(t,this.total))}}class h extends c.a{constructor(t,e){super(t),this.total=e,this.count=0}_next(t){++this.count>this.total&&this.destination.next(t)}}var p=n("Kj3r"),m=n("lJxs"),b=n("JX91"),w=n("1G5W"),f=n("KCVW");n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return y}));const x=new Set;let k,g=(()=>{class t{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):_}matchMedia(t){return this._platform.WEBKIT&&function(t){if(!x.has(t))try{k||(k=document.createElement("style"),k.setAttribute("type","text/css"),document.head.appendChild(k)),k.sheet&&(k.sheet.insertRule(`@media ${t} {.fx-query-test{ }}`,0),x.add(t))}catch(e){console.error(e)}}(t),this._matchMedia(t)}}return t.ngInjectableDef=Object(a.Qb)({factory:function(){return new t(Object(a.Rb)(i.a))},token:t,providedIn:"root"}),t})();function _(t){return{matches:"all"===t||""===t,media:t,addListener:()=>{},removeListener:()=>{}}}let v=(()=>{class t{constructor(t,e){this._mediaMatcher=t,this._zone=e,this._queries=new Map,this._destroySubject=new s.a}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return j(Object(f.a)(t)).some(t=>this._registerQuery(t).mql.matches)}observe(t){const e=j(Object(f.a)(t)).map(t=>this._registerQuery(t).observable);let n=Object(r.a)(e);return n=Object(l.a)(n.pipe(Object(u.a)(1)),n.pipe(t=>t.lift(new d(1)),Object(p.a)(0))),n.pipe(Object(m.a)(t=>{const e={matches:!1,breakpoints:{}};return t.forEach(t=>{e.matches=e.matches||t.matches,e.breakpoints[t.query]=t.matches}),e}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const e=this._mediaMatcher.matchMedia(t),n={observable:new o.a(t=>{const n=e=>this._zone.run(()=>t.next(e));return e.addListener(n),()=>{e.removeListener(n)}}).pipe(Object(b.a)(e),Object(m.a)(e=>({query:t,matches:e.matches})),Object(w.a)(this._destroySubject)),mql:e};return this._queries.set(t,n),n}}return t.ngInjectableDef=Object(a.Qb)({factory:function(){return new t(Object(a.Rb)(g),Object(a.Rb)(a.y))},token:t,providedIn:"root"}),t})();function j(t){return t.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}const y={XSmall:"(max-width: 599.99px)",Small:"(min-width: 600px) and (max-width: 959.99px)",Medium:"(min-width: 960px) and (max-width: 1279.99px)",Large:"(min-width: 1280px) and (max-width: 1919.99px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.99px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.99px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"}},iw1O:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));class a{}},n9pj:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("IheW"),i=n("gsaD");class s extends i.a{constructor(){super(...arguments),this.taskDetailsUrl="task",this.taskAnswerUrl="task/answer",this.questAllTaskBriefUrl="task/brief/section",this.questTaskBriefUrl="task/brief/",this.questTooltipUrl="task/tooltip/lvl",this.questTooltipCountUrl="task/tooltip/count"}getQuestTaskById(t){return this.get(this.taskDetailsUrl,{params:(new a.h).set("taskId",t.toString())})}getQuestTaskBriefById(t){return this.get(this.questTaskBriefUrl,{params:(new a.h).set("taskId",t.toString())})}setQuestAnswer(t){return this.post(this.taskAnswerUrl,t)}getQuestTooltipByLvl(t){return this.post(this.questTooltipUrl,t)}getQuestTooltipCountByLvl(t){return this.get(this.questTooltipCountUrl,{params:(new a.h).set("taskId",t.toString())})}}},tGzp:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("8Y7J");n("+NYR");class i{constructor(t){this.navigationService=t,this.onBackClick=new a.m,this.hostClass=!0}_onBackClick(){this.navigationService.back(),this.onBackClick.emit()}}},uL8C:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return u}));var a=n("8Y7J"),i=n("bujt"),s=n("Fwaw"),r=n("5GAg"),l=n("omvX"),o=(n("tGzp"),n("+NYR"),a.qb({encapsulation:2,styles:[],data:{}}));function u(t){return a.Mb(2,[(t()(),a.sb(0,0,null,null,8,"div",[["class","spq-page-header__inner"]],null,null,null,null,null)),(t()(),a.sb(1,0,null,null,7,"div",[["class","spq-page-header__header"]],null,null,null,null,null)),(t()(),a.sb(2,0,null,null,1,"div",[["class","spq-page-header__header-caption"]],null,null,null,null,null)),(t()(),a.Kb(3,null,[" "," "])),(t()(),a.sb(4,0,null,null,4,"div",[["class","spq-page-header__header-actions"]],null,null,null,null,null)),a.Db(null,0),(t()(),a.sb(6,0,null,null,2,"button",[["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(t,e,n){var a=!0;return"click"===e&&(a=!1!==t.component._onBackClick()&&a),a}),i.b,i.a)),a.rb(7,180224,null,0,s.b,[a.k,r.e,[2,l.a]],null,null),(t()(),a.Kb(-1,0,[" \u041d\u0430\u0437\u0430\u0434 "]))],null,(function(t,e){t(e,3,0,e.component.pageTitle),t(e,6,0,a.Eb(e,7).disabled||null,"NoopAnimations"===a.Eb(e,7)._animationMode)}))}}}]);