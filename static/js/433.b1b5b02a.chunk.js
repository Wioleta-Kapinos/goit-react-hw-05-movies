"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[433],{11:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),i=t(87),o=t(854),f=t(937),p="Home_homeBox__nh4bK",v="Home_movies__g57-6",h="Home_moviesItem__sLS+C",d="Home_error__tKZbo",l=t(184),m=function(){var e=(0,s.useState)(!1),n=(0,a.Z)(e,2),t=n[0],c=n[1],m=(0,s.useState)([]),_=(0,a.Z)(m,2),x=_[0],w=_[1],k=(0,s.useState)(!1),g=(0,a.Z)(k,2),Z=g[0],b=g[1],y=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,(0,f.Df)();case 4:n=e.sent,w(n.data.results),c(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),b(!0),c(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){y()}),[]),(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("h2",{children:"\u2b50 Trending movies today \u2b50"}),(0,l.jsxs)("ul",{className:v,children:[Z&&(0,l.jsx)("p",{className:d,children:"Something went wrong, please try later."}),t&&(0,l.jsx)(o.a,{}),x&&x.map((function(e){var n=e.id,t=e.title;return(0,l.jsx)("li",{className:h,children:(0,l.jsx)(i.rU,{to:"/movies/".concat(n),children:(0,l.jsx)("p",{children:t})})},n)}))]})]})}},854:function(e,n,t){t.d(n,{a:function(){return c}});var r=t(691),a=t(184),c=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.s5,{strokeColor:"green",strokeWidth:"5",animationDuration:"0.85",width:"96",visible:!0})})}},937:function(e,n,t){t.d(n,{Df:function(){return i},IQ:function(){return v},Jh:function(){return p},X6:function(){return o},qF:function(){return f}});var r=t(861),a=t(757),c=t.n(a),u=t(243),s="0ae018dc89a696513a6043d3ec6bfbe3";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/week?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&page=").concat(t));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=433.b1b5b02a.chunk.js.map