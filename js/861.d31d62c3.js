"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[861],{9861:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"map"}},[t.isSidebarOpen?e("div",{staticClass:"sidebar"},[e("div",{staticClass:"menuBtn"},[e("div",{class:{menu:"news"===t.menuPage},on:{click:function(e){return t.menuContent("news")}}},[t._v("NEWS")]),e("div",{class:{menu:"review"===t.menuPage},on:{click:function(e){return t.menuContent("review")}}},[t._v("REVIEW")])]),"news"===t.menuPage?e("div",{staticClass:"news"},[e("div",{staticClass:"newsbar-header"},[e("div",{staticClass:"search-icon",domProps:{textContent:t._s(t.searchText)}})]),e("div",{ref:"chatArea",staticClass:"newsbar-body"},t._l(t.searchList,(function(a,n){return e("div",{key:n,staticClass:"newsbar-contain"},[e("div",[e("div",{staticClass:"newsbar-title",domProps:{innerHTML:t._s(a.title)}}),e("a",{staticClass:"newsbar-link",attrs:{href:a.url,target:"_blank"}})]),e("div",{staticClass:"newsbar-datetime",domProps:{innerHTML:t._s(t.formatDate(a.datetime))}}),e("div",{staticClass:"newsbar-contents",domProps:{innerHTML:t._s(a.contents)}})])})),0),e("div",{staticClass:"newsbar-footer"},[e("button",{on:{click:t.closeSidebar}},[t._v("Close")])])]):e("div",{staticClass:"review"},[e("div",{staticClass:"review-header"},[e("div",{staticClass:"review-icon"}),e("div",{staticClass:"review-title",domProps:{textContent:t._s(t.searchText)}})]),e("div",{ref:"chatArea",staticClass:"review-body"},[t._l(t.reviewContent,(function(a,n){return e("div",{key:n},[e("div",{staticClass:"chatDate"},[e("div",{staticClass:"chatDate-content"},[t._v(" "+t._s(a.chatDate)+" ")])]),e("div",{staticClass:"userId"},[t._v(" "+t._s(a.userID)+" ")]),e("div",{staticClass:"chat"},[e("div",{staticClass:"chatting"},[t._v(" "+t._s(a.chatting)+" ")]),e("div",{staticClass:"chatTime"},[t._v(" "+t._s(a.chatTime)+" ")])])])})),e("div",{staticClass:"chatDate"},[0!==t.reviewList.length?e("div",{staticClass:"myChatdate",domProps:{textContent:t._s(t.currentDate)}}):t._e()]),0!==t.reviewList.length?e("div",{staticClass:"myChat-contain"},t._l(t.reviewList,(function(a,n){return e("div",{key:n,staticClass:"myChat"},[n===t.reviewList.length-1||t.reviewList[n+1]?.time!==a.time?e("div",{staticClass:"myChattime"},[t._v(" "+t._s(a.time)+" ")]):t._e(),e("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"flex-end"}},[e("div",{staticClass:"myChatting"},[t._v(" "+t._s(a.chat)+" ")])])])})),0):t._e()],2),e("div",{staticClass:"review-footer"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reviewText,expression:"reviewText"}],ref:"textarea",attrs:{type:"text",placeholder:"발자국을 남겨주세요."},domProps:{value:t.reviewText},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.SendReview.apply(null,arguments)},input:function(e){e.target.composing||(t.reviewText=e.target.value)}}}),t._v(" "),e("div",{staticClass:"review-closeBtn"},[e("button",{on:{click:t.closeSidebar}},[t._v(" Close")])])])])]):t._e(),e("div",{attrs:{id:"mapContain"}})])},r=[],i=(a(4114),a(1454),{data:()=>({map:null,overlay:null,isSidebarOpen:!1,marker:null,customOverlay:null,searchText:"실미유원지 안전",searchList:[],reviewText:"",reviewList:[],menuPage:"news",reviewContent:[{userID:"차차차",chatting:"여름에 갔는데 샤워실도 있고 수영하기도 좋았어요 !!",chatDate:"2023 . 7 . 27",chatTime:"11 : 20"},{userID:"차린이",chatting:"처음 차박하시는 분들께 추천드립니다!",chatTime:"14 : 22"},{userID:"차박마스터꿈나무",chatting:"바다 보고 싶으시면 왼쪽으로 들어가는 것 ㅊㅊ",chatDate:"2023 . 11 . 23",chatTime:"18 : 37"},{userID:"차박박하사탕탕후루",chatting:"근처 00횟집이 레전드 맛있음;;",chatDate:"2024 . 10 . 17",chatTime:"15 : 20"},{userID:"차박해볼까",chatting:"상당히 추움. 외투 챙겨가세요",chatDate:"2024 . 11 . 16",chatTime:"18 : 33"}],currentDate:"",currentTime:""}),async mounted(){this.currentDate=new Date,window.kakao&&window.kakao.maps?this.loadMap():this.loadScript();const t=await this.$axios.get("https://dapi.kakao.com/v2/search/web",{params:{query:this.searchText,sort:"accuracy",page:1,size:10},headers:{Authorization:"KakaoAK 6f28d7e14b2449fb380b7a2c0af2d9b4"}});this.searchList=t.data&&t.data.documents?t.data.documents:[]},methods:{handleEnter(){const t=this.$refs.textarea;if(t){const e=t.selectionEnd;t.setSelectionRange(e,e)}},searchAction(t){this.searchText=t.target.value},formatDate(t){if(!t)return"";const[e]=t.split("T");return e},loadMap(){const t=document.getElementById("mapContain"),e={center:new window.kakao.maps.LatLng(37.40198,126.4021),level:3};this.map=new window.kakao.maps.Map(t,e);var a=new window.kakao.maps.ZoomControl;this.map.addControl(a,window.kakao.maps.ControlPosition.RIGHT),this.loadMarker()},loadScript(){const t=document.createElement("script");t.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cdb7bc47b59d2de4ee68f3e460e373cf&autoload=false",t.onload=()=>window.kakao.maps.load(this.loadMap),document.head.appendChild(t)},loadMarker(){const t="https://paperless-dev.bizmeka.com/resources/public/template/_kddx/images/marker.svg",e=new window.kakao.maps.Size(35,35),a={offset:new window.kakao.maps.Point(19,20)},n=new window.kakao.maps.MarkerImage(t,e,a),r=new window.kakao.maps.LatLng(37.40198,126.4021);this.marker=new window.kakao.maps.Marker({position:r,image:n}),this.marker.setMap(this.map);const i='\n        <div class="marker-tooltip">\n          <span class="center">Click 👇</span>\n        </div>';this.customOverlay=new window.kakao.maps.CustomOverlay({position:r,content:i}),this.customOverlay.setMap(this.map),window.kakao.maps.event.addListener(this.marker,"click",(()=>{this.customOverlay.setMap(null),document.querySelector("#mapContain >div>div>div:last-of-type>div:first-of-type img").style.animationName="none",setTimeout((()=>{const t=this.marker.getPosition();this.map.relayout(),this.map.setCenter(t)}),0)})),this.sidebarOverlay=new window.kakao.maps.CustomOverlay({map:this.map}),this.sidebarOverlay.setMap(null),window.kakao.maps.event.addListener(this.marker,"click",(()=>{this.sidebarOverlay.setMap(this.map),this.isSidebarOpen=!0}))},closeSidebar(){this.isSidebarOpen=!1,this.customOverlay&&(this.customOverlay.setMap(this.map),document.querySelector("#mapContain >div>div>div:last-of-type>div:first-of-type img").style.animationName="tooltip"),setTimeout((()=>{const t=this.marker.getPosition();this.map.relayout(),this.map.setCenter(t)}),0)},menuContent(t){this.menuPage=t,"review"===this.menuPage&&this.$nextTick((()=>{const t=document.querySelector(".review-body"),e=this.$refs.chatArea;e.scrollTo({top:t.scrollHeight,behavior:"smooth"})}))},SendReview(t){if(13===t.keyCode&&!t.shiftKey){if(t.preventDefault(),!this.reviewText.trim())return;const e={chat:this.reviewText,time:this.timeFormat()};this.reviewList.push(e),this.reviewText="",this.$nextTick((()=>{this.currentDate=this.dateFormat(),this.currentTime=this.timeFormat();const t=document.querySelector(".review-body"),e=this.$refs.chatArea;e.scrollTo({top:t.scrollHeight,behavior:"smooth"})}))}},dateFormat(){const t=new Date,e=t.getFullYear(),a=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0"),r=e+"."+a+"."+n;return r},timeFormat(t=new Date){const e=t.getHours(),a=t.getMinutes().toString().padStart(2,"0");return e+":"+a}}}),s=i,o=a(1656),c=(0,o.A)(s,n,r,!1,null,"55c80e1c",null),d=c.exports},6319:function(t,e,a){var n=a(8551),r=a(9539);t.exports=function(t,e,a,i){try{return i?e(n(a)[0],a[1]):e(a)}catch(s){r(t,"throw",s)}}},2211:function(t,e,a){var n=a(9039);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},2529:function(t){t.exports=function(t,e){return{value:t,done:e}}},6279:function(t,e,a){var n=a(6840);t.exports=function(t,e,a){for(var r in e)n(t,r,e[r],a);return t}},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},397:function(t,e,a){var n=a(7751);t.exports=n("document","documentElement")},9539:function(t,e,a){var n=a(9565),r=a(8551),i=a(5966);t.exports=function(t,e,a){var s,o;r(t);try{if(s=i(t,"return"),!s){if("throw"===e)throw a;return a}s=n(s,t)}catch(c){o=!0,s=c}if("throw"===e)throw a;if(o)throw s;return r(s),a}},9462:function(t,e,a){var n=a(9565),r=a(2360),i=a(6699),s=a(6279),o=a(8227),c=a(1181),d=a(5966),u=a(7657).IteratorPrototype,l=a(2529),v=a(9539),m=o("toStringTag"),h="IteratorHelper",p="WrapForValidIterator",f=c.set,w=function(t){var e=c.getterFor(t?p:h);return s(r(u),{next:function(){var a=e(this);if(t)return a.nextHandler();try{var n=a.done?void 0:a.nextHandler();return l(n,a.done)}catch(r){throw a.done=!0,r}},return:function(){var a=e(this),r=a.iterator;if(a.done=!0,t){var i=d(r,"return");return i?n(i,r):l(void 0,!0)}if(a.inner)try{v(a.inner.iterator,"normal")}catch(s){return v(r,"throw",s)}return r&&v(r,"normal"),l(void 0,!0)}})},k=w(!0),y=w(!1);i(y,m,"Iterator Helper"),t.exports=function(t,e){var a=function(a,n){n?(n.iterator=a.iterator,n.next=a.next):n=a,n.type=e?p:h,n.nextHandler=t,n.counter=0,n.done=!1,f(this,n)};return a.prototype=e?k:y,a}},713:function(t,e,a){var n=a(9565),r=a(9306),i=a(8551),s=a(1767),o=a(9462),c=a(6319),d=o((function(){var t=this.iterator,e=i(n(this.next,t)),a=this.done=!!e.done;if(!a)return c(t,this.mapper,[e.value,this.counter++],!0)}));t.exports=function(t){return i(this),r(t),new d(s(this),{mapper:t})}},7657:function(t,e,a){var n,r,i,s=a(9039),o=a(4901),c=a(34),d=a(2360),u=a(2787),l=a(6840),v=a(8227),m=a(6395),h=v("iterator"),p=!1;[].keys&&(i=[].keys(),"next"in i?(r=u(u(i)),r!==Object.prototype&&(n=r)):p=!0);var f=!c(n)||s((function(){var t={};return n[h].call(t)!==t}));f?n={}:m&&(n=d(n)),o(n[h])||l(n,h,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},2360:function(t,e,a){var n,r=a(8551),i=a(6801),s=a(8727),o=a(421),c=a(397),d=a(4055),u=a(6119),l=">",v="<",m="prototype",h="script",p=u("IE_PROTO"),f=function(){},w=function(t){return v+h+l+t+v+"/"+h+l},k=function(t){t.write(w("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){var t,e=d("iframe"),a="java"+h+":";return e.style.display="none",c.appendChild(e),e.src=String(a),t=e.contentWindow.document,t.open(),t.write(w("document.F=Object")),t.close(),t.F},C=function(){try{n=new ActiveXObject("htmlfile")}catch(e){}C="undefined"!=typeof document?document.domain&&n?k(n):y():k(n);var t=s.length;while(t--)delete C[m][s[t]];return C()};o[p]=!0,t.exports=Object.create||function(t,e){var a;return null!==t?(f[m]=r(t),a=new f,f[m]=null,a[p]=t):a=C(),void 0===e?a:i.f(a,e)}},6801:function(t,e,a){var n=a(3724),r=a(8686),i=a(4913),s=a(8551),o=a(5397),c=a(1072);e.f=n&&!r?Object.defineProperties:function(t,e){s(t);var a,n=o(e),r=c(e),d=r.length,u=0;while(d>u)i.f(t,a=r[u++],n[a]);return t}},2787:function(t,e,a){var n=a(9297),r=a(4901),i=a(8981),s=a(6119),o=a(2211),c=s("IE_PROTO"),d=Object,u=d.prototype;t.exports=o?d.getPrototypeOf:function(t){var e=i(t);if(n(e,c))return e[c];var a=e.constructor;return r(a)&&e instanceof a?a.prototype:e instanceof d?u:null}},1072:function(t,e,a){var n=a(1828),r=a(8727);t.exports=Object.keys||function(t){return n(t,r)}},1701:function(t,e,a){var n=a(6518),r=a(713),i=a(6395);n({target:"Iterator",proto:!0,real:!0,forced:i},{map:r})},1454:function(t,e,a){a(1701)}}]);
//# sourceMappingURL=861.d31d62c3.js.map