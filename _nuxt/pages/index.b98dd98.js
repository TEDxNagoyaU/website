(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{384:function(t,e,r){"use strict";r.r(e);r(67);var n=r(16),l={},o=r(17),c=r(22),v=r.n(c),d=r(97),f=r(319),h=r(131),m=r(401),_=r(321),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-parallax",{attrs:{dark:"",src:"/bgFirstView.jpg",height:"500"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("h1",{staticClass:"display-1 font-weight-bold mb-4"},[t._v("TedxNagoyaU2020オンラインイベント開催が決定しました！")])]),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{sm:"6",xs:"12"}},[r("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("2020 TedxNagoyaU Theme")]),t._v(" "),r("v-img",{attrs:{src:"/keyVisual.png"}})],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{sm:"6",xs:"12"}},[r("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("なんかださいどうしよう")]),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"white",href:"/event"}},[t._v("View more")])],1)],1)],1)}),[],!1,null,"6a317b9e",null),w=component.exports;v()(component,{VBtn:d.a,VCol:f.a,VImg:h.a,VParallax:m.a,VRow:_.a});var y=r(1),k=r(356),x=r.n(k);y.a.use(x.a);var C={name:"ShowTalksDiglog",props:{youtubeId:{type:String,required:!1}},data:function(){return{dialog:!1}}},V=r(382),S=r(153),T=Object(o.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"red",text:""}},"v-btn",l,!1),n),[r("v-icon",{attrs:{large:""}},[t._v("mdi-youtube")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("youtube",{ref:"youtube",attrs:{"video-id":t.youtubeId,resize:!0}})],1)}),[],!1,null,null,null),j=T.exports;v()(T,{VBtn:d.a,VDialog:V.a,VIcon:S.a});var D={name:"ShowTalks",components:{ShowTalksDialog:j},props:{speakers:{type:Array,required:!0}},data:function(){return{youtubeModalOn:!1,youtubeModalData:""}},computed:{shuffleSlicedSpeakers:function(){return Object.create(this.speakers).sort((function(){return Math.random()-.5})).slice(0,4)}}},I=r(328),O=r(327),E=r(325),$=Object(o.a)(D,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",[r("h1",{staticClass:"pl-3"},[t._v("TEDxNagoyaU Talk")])]),t._v(" "),r("v-row",t._l(t.shuffleSlicedSpeakers,(function(e){return r("v-col",{key:e.name,attrs:{sm:"12",md:"6"}},[r("v-card",[r("v-img",{staticClass:"align-end",attrs:{src:e.img}},[r("div",{staticStyle:{background:"rgba(0,0,0,0.3)"}},[r("v-container",{staticClass:"pa-0"},[r("v-row",[r("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"8"}},[r("v-card-title",{staticClass:"white--text"},[t._v(t._s(e.title))]),t._v(" "),r("v-card-subtitle",{staticClass:"white--text"},[t._v(t._s(e.name))])],1),t._v(" "),r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"4"}},[r("show-talks-dialog",{attrs:{youtubeId:e.youtubeId}})],1)],1)],1)],1)])],1)],1)})),1)],1)],1)}),[],!1,null,null,null),N=$.exports;v()($,{VCard:I.a,VCardSubtitle:O.b,VCardTitle:O.d,VCol:f.a,VContainer:E.a,VImg:h.a,VRow:_.a});var R={layout:"full",components:{FirstView:w,ShowTalks:N},head:function(){return{titleTemplate:"TEDxNagoyaU"}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("speakers","2019").fetch();case 3:return n=e.sent,e.abrupt("return",{speakers:n});case 5:case"end":return e.stop()}}),e)})))()}},U=Object(o.a)(R,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("first-view"),this._v(" "),e("show-talks",{attrs:{speakers:this.speakers}})],1)}),[],!1,null,null,null);e.default=U.exports}}]);