(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{292:function(t,e,r){"use strict";var n={name:"ArticleBody",props:{article:{type:Object,required:!0}}},c=r(34),l=r(42),o=r.n(l),d=r(293),v=r(282),m=r(288),C=r(281),f=r(112),w=r(291),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"ma-1 mb-1",attrs:{nuxt:!0,to:t.article.path,outlined:""}},[r("v-container",{staticClass:"pt-0 pb-0"},[r("v-row",[r("v-col",{attrs:{cols:"3"}},[r("v-img",{staticClass:"align-end",attrs:{src:t.article.thumbnail}})],1),t._v(" "),r("v-col",{attrs:{cols:"9"}},[r("v-card-title",{staticClass:"pa-0",domProps:{textContent:t._s(t.article.title)}}),t._v(" "),r("v-card-text",{staticClass:"pa-0",domProps:{textContent:t._s(t.article.description)}})],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;o()(component,{VCard:d.a,VCardText:v.c,VCardTitle:v.d,VCol:m.a,VContainer:C.a,VImg:f.a,VRow:w.a})},315:function(t,e,r){"use strict";r.r(e);r(66);var n=r(14),c={components:{ArticleCard:r(292).a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles").where({category:n.slug}).fetch();case 3:return c=e.sent,e.abrupt("return",{articles:c});case 5:case"end":return e.stop()}}),e)})))()}},l=r(34),o=r(42),d=r.n(o),v=r(288),m=r(291),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-row",this._l(this.articles,(function(article){return e("v-col",{key:article.path},[e("article-card",{attrs:{article:article}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCol:v.a,VRow:m.a})}}]);