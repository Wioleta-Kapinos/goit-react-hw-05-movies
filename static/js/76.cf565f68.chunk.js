"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(937),s=n(791),o=n(689),p=n(854),f="Cast_castBox__KVoEk",h="Cast_description__uN0VA",v="Cast_error__hQWWB",l=n(184),d=function(){var t=(0,s.useState)(),e=(0,a.Z)(t,2),n=e[0],c=e[1],d=(0,o.UO)().movieId,m=(0,s.useState)(!1),x=(0,a.Z)(m,2),w=x[0],_=x[1],g=(0,s.useState)(!1),k=(0,a.Z)(g,2),b=k[0],Z=k[1],j=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!0),t.prev=1,t.next=4,(0,i.IQ)(e);case 4:n=t.sent,c(n.data.cast),_(!1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),Z(!0),_(!1);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return(0,s.useEffect)((function(){j(d)}),[d]),(0,l.jsxs)("div",{children:[w&&(0,l.jsx)(p.a,{}),(0,l.jsxs)("ul",{className:f,children:[b&&(0,l.jsx)("p",{className:v,children:"Something went wrong, please try later."}),n&&n.length?(0,l.jsx)(l.Fragment,{children:n.map((function(t){var e=t.id,n=t.profile_path,r=t.original_name,a=t.name,c=t.character;return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:n?"https://www.themoviedb.org/t/p/w500/".concat(n):(0,l.jsx)("p",{children:"Image is not available."}),alt:r,width:150}),(0,l.jsx)("h4",{children:a}),(0,l.jsxs)("p",{className:h,children:["Character: ",c]})]},e)}))}):(0,l.jsx)("p",{children:"There is no cast for this movie."})]})]})}},854:function(t,e,n){n.d(e,{a:function(){return c}});var r=n(691),a=n(184),c=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.s5,{strokeColor:"green",strokeWidth:"5",animationDuration:"0.85",width:"96",visible:!0})})}},937:function(t,e,n){n.d(e,{Df:function(){return s},IQ:function(){return h},Jh:function(){return f},X6:function(){return o},qF:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i="0ae018dc89a696513a6043d3ec6bfbe3";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/week?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&page=").concat(n));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.cf565f68.chunk.js.map