(function(){"use strict";var t={5138:function(t,e,o){var n=o(5130),s=o(6768);const r={class:"layout"},i={class:"content"};function a(t,e,o,n,a,l){const c=(0,s.g2)("Header"),u=(0,s.g2)("router-view"),p=(0,s.g2)("Footer");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",r,[(0,s.bF)(c,{logo:a.logoPath},null,8,["logo"]),(0,s.Lk)("div",i,[(0,s.bF)(u)]),(0,s.bF)(p,{logo:a.logoPath},null,8,["logo"])])])}const l={class:"header"},c=["src"];function u(t,e,o,n,r,i){const a=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.Lk)("img",{src:o.logo,alt:"Logo",class:"logo"},null,8,c),(0,s.Lk)("nav",null,[(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,[(0,s.bF)(a,{to:"/"},{default:(0,s.k6)((()=>e[0]||(e[0]=[(0,s.eW)("Posts")]))),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(a,{to:"/SignUp"},{default:(0,s.k6)((()=>e[1]||(e[1]=[(0,s.eW)("Sign up")]))),_:1})])])])])}var p={name:"Header",props:{logo:{type:String,required:!0}}},f=o(1241);const d=(0,f.A)(p,[["render",u],["__scopeId","data-v-f0a3237a"]]);var g=d;const k={class:"footer"},m=["src"];function v(t,e,o,n,r,i){return(0,s.uX)(),(0,s.CE)("div",k,[(0,s.Lk)("img",{src:o.logo,alt:"Logo",class:"logo"},null,8,m),e[0]||(e[0]=(0,s.Lk)("p",null,"Copyright © 2024 Group AS. All rights reserved.",-1)),e[1]||(e[1]=(0,s.Lk)("h4",null,"Links to the resources of this course",-1)),e[2]||(e[2]=(0,s.Lk)("a",{href:"https://ois2.ut.ee/#/courses/LTAT.05.004/version/4db291d6-0997-e142-b9d4-9ee95cdacf20/details",target:"_blank",rel:"noopener"},"OIS",-1)),e[3]||(e[3]=(0,s.Lk)("a",{href:"https://courses.cs.ut.ee/2024/WAD/fall",target:"_blank",rel:"noopener"},"Courses",-1))])}var h={name:"Footer",props:{logo:{type:String,required:!0}}};const L=(0,f.A)(h,[["render",v],["__scopeId","data-v-43ec436f"]]);var b=L,y={name:"App",components:{Header:g,Footer:b},data(){return{logoPath:o(6852)}}};const P=(0,f.A)(y,[["render",a]]);var w=P,E=o(1387);const C={class:"home-page"};function O(t,e,o,n,r,i){const a=(0,s.g2)("Posts");return(0,s.uX)(),(0,s.CE)("div",C,[(0,s.bF)(a)])}const S={class:"post-container"},_={class:"posts-list"};function A(t,e,o,n,r,i){const a=(0,s.g2)("Post");return(0,s.uX)(),(0,s.CE)("div",S,[(0,s.Lk)("div",_,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.posts,(e=>((0,s.uX)(),(0,s.Wv)(a,{key:e-t.id,post:e,onLikePost:i.likePost},null,8,["post","onLikePost"])))),128)),(0,s.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>i.resetAllLikes&&i.resetAllLikes(...t)),class:"reset-likes-button"}," Reset Likes ")])])}var j=o(4232);const F={class:"post"},T={class:"post-header"},X={class:"user-profile"},I=["src"],x={class:"Username"},N={class:"post-date"},W={class:"post-text"},H=["src"],q={class:"likes"};function U(t,e,o,n,r,i){return(0,s.uX)(),(0,s.CE)("div",F,[(0,s.Lk)("div",T,[(0,s.Lk)("div",X,[o.post.profile?((0,s.uX)(),(0,s.CE)("img",{key:0,src:o.post.profile,alt:"post-profile-pic"},null,8,I)):(0,s.Q3)("",!0),(0,s.Lk)("p",x,(0,j.v_)(o.post.user),1)]),(0,s.Lk)("p",N,[e[1]||(e[1]=(0,s.Lk)("strong",null,"Date:",-1)),(0,s.eW)(" "+(0,j.v_)(o.post.date),1)])]),(0,s.Lk)("p",W,[e[2]||(e[2]=(0,s.Lk)("strong",null,"Post:",-1)),(0,s.eW)(" "+(0,j.v_)(o.post.post),1)]),o.post.img?((0,s.uX)(),(0,s.CE)("img",{key:0,src:o.post.img,alt:"Post Image"},null,8,H)):(0,s.Q3)("",!0),(0,s.Lk)("div",q,[(0,s.Lk)("button",{onClick:e[0]||(e[0]=t=>i.likePost(o.post.id)),class:"like-button"}," 👍 "),(0,s.Lk)("p",null,(0,j.v_)(o.post.likes)+" Likes",1)])])}var J={name:"Post",props:{post:{type:Object,required:!0}},methods:{likePost(){this.$emit("like-post",this.post.id)}}};const M=(0,f.A)(J,[["render",U]]);var $=M,B=o(782),D={name:"Posts",components:{Post:$},computed:{...(0,B.L8)({posts:"allPosts"})},methods:{...(0,B.i0)(["fetchPosts","incrementLike","resetLikes"]),likePost(t){this.incrementLike(t)},resetAllLikes(){this.resetLikes()}},mounted(){this.fetchPosts()}};const Q=(0,f.A)(D,[["render",A]]);var G=Q,K={name:"HomeView",components:{Posts:G},methods:{}};const R=(0,f.A)(K,[["render",O]]);var V=R;const z=[{path:"/",name:"posts",component:V},{path:"/SignUp",name:"signUp",component:()=>o.e(594).then(o.bind(o,8625))}],Y=(0,E.aE)({history:(0,E.Bt)(),routes:z});var Z=Y;o(8992),o(2577),o(3949);const tt={posts:JSON.parse(localStorage.getItem("posts"))||[]},et={allPosts:t=>t.posts},ot={async fetchPosts({commit:t}){try{if(0===tt.posts.length){const e=await fetch("/posts.json");if(!e.ok)throw new Error("HTTP error! Status: ${response.status}");const o=await e.json();t("setPosts",o.posts)}}catch(e){console.error("Error fetching posts: ",e)}},incrementLike({commit:t},e){t("incrementLike",e)},resetLikes({commit:t}){t("resetLikes")}},nt={setPosts:(t,e)=>{t.posts=e},incrementLike:(t,e)=>{const o=t.posts.find((t=>t.id===e));o&&(o.likes++,localStorage.setItem("posts",JSON.stringify(t.posts)))},resetLikes:t=>{t.posts.forEach((t=>{t.likes=0})),localStorage.setItem("posts",JSON.stringify(t.posts))}};var st={state:tt,getters:et,actions:ot,mutations:nt},rt=(0,B.y$)({strict:!0,state:{},getters:{},mutations:{},actions:{},modules:{posts:st}});(0,n.Ef)(w).use(rt).use(Z).mount("#app")},6852:function(t,e,o){t.exports=o.p+"img/as_logo.62e44dca.png"}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,r){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],s=t[u][1],r=t[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(a=!1,r<i&&(i=r));if(a){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,s,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.4b3547ac.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="wad-hw3:";o.l=function(n,s,r,i){if(t[n])t[n].push(s);else{var a,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==e+r){a=p;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",e+r),a.src=n),t[n]=[s];var f=function(e,o){a.onerror=a.onload=null,clearTimeout(d);var s=t[n];if(delete t[n],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach((function(t){return t(o)})),e)return e(o)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t={524:0};o.f.j=function(e,n){var s=o.o(t,e)?t[e]:void 0;if(0!==s)if(s)n.push(s[2]);else{var r=new Promise((function(o,n){s=t[e]=[o,n]}));n.push(s[2]=r);var i=o.p+o.u(e),a=new Error,l=function(n){if(o.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",a.name="ChunkLoadError",a.type=r,a.request=i,s[1](a)}};o.l(i,l,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,r,i=n[0],a=n[1],l=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(l)var u=l(o)}for(e&&e(n);c<i.length;c++)r=i[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},n=self["webpackChunkwad_hw3"]=self["webpackChunkwad_hw3"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(5138)}));n=o.O(n)})();
//# sourceMappingURL=app.1a942609.js.map