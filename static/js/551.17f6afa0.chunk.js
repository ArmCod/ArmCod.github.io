"use strict";(self.webpackChunkeytipi=self.webpackChunkeytipi||[]).push([[551],{6551:function(n,e,s){s.r(e),s.d(e,{default:function(){return x}});var t=s(9439),i="news_news_title__fiemU",c="news_line__sFEXo",l="news_read_news__ug6Rv",o="news_news_item_block__cL43s",r="news_news_section__Q3nH7",a="news_seeMoreBox__B9R36",u="news_seeMoreBtn__KLx7l",d=s(2791),_=s(2677),h=s(7022),f=s(9743),m=s(3504),p=s(9434),g=s(3168),v=s(8215),w=s(184),x=function(){var n,e,s=(0,p.I0)(),x=(0,g.$)().t,j=(0,d.useState)(1),y=(0,t.Z)(j,2),N=y[0],b=y[1],I=(0,p.v9)((function(n){return n.newsReducer.news}));(0,d.useEffect)((function(){s((0,v.Z)(N))}),[N]);var k=null!==I&&void 0!==I&&I.products?null===I||void 0===I||null===(n=I.products)||void 0===n?void 0:n.map((function(n){return(0,w.jsx)(_.Z,{sm:12,md:6,lg:3,className:"mb-5",children:(0,w.jsx)(m.rU,{to:"/detail/".concat(n.id),children:(0,w.jsxs)("div",{className:o,children:[(0,w.jsx)("img",{src:n.image,alt:"img"}),(0,w.jsx)("h3",{children:"am"==localStorage.getItem("lang")?n.titleHy:n.titleEn}),(0,w.jsxs)("p",{children:["am"==localStorage.getItem("lang")?n.descriptionHy.substr(0,80):n.descriptionEn.substr(0,80),"..."]})]},n.id)})},n.id)})):null;return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("section",{children:[(0,w.jsxs)(h.Z,{className:r,children:[(0,w.jsxs)("div",{className:i,children:[(0,w.jsx)("div",{className:c}),(0,w.jsx)("p",{children:x("latest")})]}),(0,w.jsx)("h3",{className:l,children:x("read")}),(0,w.jsx)(f.Z,{children:k})]}),(0,w.jsx)("div",{className:a,children:(null===I||void 0===I?void 0:I.count)!==(null===I||void 0===I||null===(e=I.products)||void 0===e?void 0:e.length)&&(0,w.jsx)("button",{className:u,onClick:function(){return b(N+1)},children:x("seeMore")})})]})})}},8215:function(n,e,s){s.d(e,{H:function(){return r},Z:function(){return o}});var t=s(3605),i=s(4207),c=s(4569),l=s.n(c),o=function(n){return function(e){l().get("".concat(i.X.API_URI,"/api/v1/news"),{params:{page:n}}).then((function(n){e({type:t.wh,payload:n.data})})).catch((function(n){return console.log(n)}))}},r=function(n){return function(e){console.log(n,"631024702798000.0"),l().get("".concat(i.X.API_URI,"/api/v1/news/single"),{params:{id:n}}).then((function(n){e({type:t.gF,payload:[n.data]})})).catch((function(n){return console.log(n)}))}}}}]);
//# sourceMappingURL=551.17f6afa0.chunk.js.map