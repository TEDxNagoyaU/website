(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{328:function(t,e,r){"use strict";r(10),r(7),r(6),r(4),r(8);var n=r(2),o=(r(16),r(329),r(157)),l=r(1),c=(r(104),r(331),r(105)),d=r(18),h=r(73),v=r(106),f=r(13),m=r(0),_=r(5);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var x=Object(_.a)(d.a,Object(h.b)(["absolute","fixed","top","bottom"]),v.a,f.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(m.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(m.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(t,this.isReversed?"right":"left",Object(m.f)(this.normalizedValue,"%")),Object(n.a)(t,"width",Object(m.f)(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?c.b:c.c},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(m.f)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(m.k)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(m.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),w=l.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(x,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),k=r(49);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(_.a)(w,k.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return j(j({"v-card":!0},k.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=j({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=w.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},329:function(t,e,r){var content=r(330);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("e23b7040",content,!0,{sourceMap:!1})},330:function(t,e,r){(e=r(11)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=e},331:function(t,e,r){var content=r(332);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("cf87dc84",content,!0,{sourceMap:!1})},332:function(t,e,r){(e=r(11)(!1)).push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%;z-index:1}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%;z-index:2}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),t.exports=e},344:function(t,e,r){var content=r(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("09a04ce2",content,!0,{sourceMap:!1})},345:function(t,e,r){var content=r(362);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("47fc6052",content,!0,{sourceMap:!1})},346:function(t,e,r){var content=r(364);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("875d7928",content,!0,{sourceMap:!1})},359:function(t,e,r){"use strict";var n=r(344);r.n(n).a},360:function(t,e,r){(e=r(11)(!1)).push([t.i,".event-title[data-v-64475e9c]{color:#851818;border-bottom:1px solid #b83131;line-height:1.5}.event-title span[data-v-64475e9c]{border-bottom:6px solid #b83131}",""]),t.exports=e},361:function(t,e,r){"use strict";var n=r(345);r.n(n).a},362:function(t,e,r){(e=r(11)(!1)).push([t.i,".event-title[data-v-0d9da5ea]{color:#851818;border-bottom:1px solid #b83131;line-height:1.5}.event-title span[data-v-0d9da5ea]{border-bottom:6px solid #b83131}",""]),t.exports=e},363:function(t,e,r){"use strict";var n=r(346);r.n(n).a},364:function(t,e,r){(e=r(11)(!1)).push([t.i,".event-title{color:#851818;border-bottom:1px solid #b83131;line-height:1.5}.event-title span{border-bottom:6px solid #b83131}",""]),t.exports=e},365:function(t,e,r){var content=r(366);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("7132a15d",content,!0,{sourceMap:!1})},366:function(t,e,r){(e=r(11)(!1)).push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=e},367:function(t,e,r){var content=r(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("e8b41e5e",content,!0,{sourceMap:!1})},368:function(t,e,r){(e=r(11)(!1)).push([t.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),t.exports=e},420:function(t,e,r){"use strict";r.r(e);var n={props:["title","abstruct","date"]},o=(r(359),r(15)),l=r(22),c=r.n(l),d=r(319),h=r(321),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"event-title display-1 font-weight-bold mb-4"},[r("span",[t._v(t._s(t.title))])])])],1),t._v(" "),r("v-row",{attrs:{align:"start",justify:"center"}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"6"}},[r("h1",{staticClass:"display-1 font-weight-bold mb-4"},[t._v("\n        概要\n      ")]),t._v(" "),r("p",[t._v(t._s(t.date))])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("p",{staticClass:"subheading"},[t._v("\n        "+t._s(t.abstruct)+"\n      ")])])],1)],1)}),[],!1,null,"64475e9c",null),v=component.exports;c()(component,{VCol:d.a,VRow:h.a});var f={props:["title","keyVisual","theme","wishs","content"]},m=(r(361),r(131)),_=Object(o.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"event-title display-1 font-weight-bold mb-4"},[r("span",[t._v(t._s(t.title))])])])],1),t._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{attrs:{src:t.keyVisual,"aspect-ratio":"3.7"}})],1)],1),t._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"event-title display-1 font-weight-bold mb-4"},[r("span",[t._v(t._s(t.wishs))])])])],1),t._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"6"}},[r("v-img",{attrs:{src:"eventTheme.jpg","aspect-ratio":"1.7"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("div",[r("p",{staticClass:"subheading"},[t._v("\n          "+t._s(t.content)+"\n        ")]),t._v(" "),r("p",{staticClass:"subheading"},[t._v("\n          TEDxNagoyaU2020 代表 上田蓮\n        ")])])])],1)],1)}),[],!1,null,"0d9da5ea",null),y=_.exports;c()(_,{VCol:d.a,VImg:m.a,VRow:h.a});var x={data:function(){return{admins:[["Management","people_outline"],["Settings","settings"]],faqs_before_event:{faq_1:{question:"申し込みしたのに、メールが届かない",answers:['<a href="mailto:info@tedxnagoyau.com">info@tedxnagoyau.com</a>に件名を申し込みメール不在にして送ってください。']},faq_2:{question:"オープンチャットに入れない",answers:['<a href="/event/open_chat">こちらのサイト</a>より、案内しております。',"それでも入れない場合は、メールにて個別に対応させていただきます。"]},faq_3:{question:"参加するブレイクのブースが分からない。",answers:["ブースの詳細は下記に記載されています。また、希望されているブースはメールにてお問い合わせいただけますと、<br>現在のブースを通知いたします。"]},faq_4:{question:"参加するブレイクのブースを変更したい",answers:["メールにて希望のブース変更を受け付けております。ただし、定員のため対応できない可能性がございます。<br>また、オープンチャットでは対応しかねますことをご了承ください。","期限は10月9日23：59です。"]},faq_5:{question:"イベント参加を取りやめたい",answers:["メールまたはオープンチャットにて、お名前をご記名のもと、ご連絡ください。"]}},faqs_now_event:{faq_1:{question:"参加するブレイクのブースが違う",answers:["メールまたはオープンチャットにて、お名前をご記名のもと、ご連絡ください。早急に対処させていただきます。オープンチャットでは、より素早く対応できますので、なるべくそちらの方で連絡してください。"]},faq_2:{question:"youtube視聴が出来ない",answers:["メールまたはオープンチャットにて、お名前をご記名のもと、ご連絡ください。早急に対処させていただきます。オープンチャットでは、より素早く対応できますので、なるべくそちらの方で連絡してください。"]},faq_3:{question:"Zoomに参加できない",answers:["メールまたはオープンチャットにて、お名前をご記名のもと、ご連絡ください。早急に対処させていただきます。オープンチャットでは、より素早く対応できますので、なるべくそちらの方で連絡してください。"]}}}}},w=(r(363),r(328)),k=(r(10),r(7),r(6),r(4),r(8),r(2)),O=(r(365),r(13));function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(k.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P=O.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:C({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:C({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),B=r(151),S=r(152),V=r(95),z=r(68),$=(r(367),r(5));function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(k.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var L=Object($.a)(O.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:D({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}}),T=Object(o.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("v-card",{staticClass:"mx-auto"},[r("v-list",[r("v-subheader",[t._v("イベント開催前")]),t._v(" "),t._l(t.faqs_before_event,(function(e){return r("v-list-group",{key:e,attrs:{value:"true"},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-title",[t._v(t._s(e.question))])]},proxy:!0}],null,!0)},[t._v(" "),r("v-divider"),t._v(" "),t._l(e.answers,(function(e){return r("v-list-item",{key:e},[r("v-list-item-content",[r("v-list-item-subtitle",{domProps:{innerHTML:t._s(e)}})],1)],1)}))],2)}))],2),t._v(" "),r("v-list",[r("v-subheader",[t._v("イベント本番中")]),t._v(" "),t._l(t.faqs_now_event,(function(e){return r("v-list-group",{key:e,attrs:{value:"true"},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-title",[t._v(t._s(e.question))])]},proxy:!0}],null,!0)},[t._v(" "),r("v-divider"),t._v(" "),t._l(e.answers,(function(e){return r("v-list-item",{key:e,attrs:{inactive:t.inactive}},[r("v-list-item-content",[r("v-list-item-subtitle",{domProps:{innerHTML:t._s(e)}})],1)],1)}))],2)}))],2)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"event-title display-1 font-weight-bold mb-4"},[e("span",[this._v("FAQ")])])}],!1,null,null,null),M=T.exports;c()(T,{VCard:w.a,VDivider:P,VList:B.a,VListGroup:S.a,VListItem:V.a,VListItemContent:z.a,VListItemSubtitle:z.b,VListItemTitle:z.c,VSubheader:L});var I={layout:"bg",components:{VSectionInfo:v,VSectionTheme:y,VSectionFaq:M},data:function(){return{theme:{title:"2020 TEDxNagoyaU Theme is ...",keyVisual:"keyvisual_black.png",theme:"steer your ship!",wishs:"テーマへの思い",content:"今年のテーマは「Steer Your Ship!」（舵を取れ！）です。テーマを考える上で、私たちは人生を「航海」と位置付けました。オンライン開催を余儀なくされてしまいましたが、私たちは本イベントが、時には目指す方向を見失いながらも自らの手で前に進もうとするあなたにとって新たな船出となることを切に願い、運営・開催をしていく所存です。その日が来ることを、スタッフ一同心待ちにしております。"},info:{title:"Event Information",abstruct:"今年はオンライン開催となりました。詳細は後日お知らせします。",date:"2020/10/11(日)"}}},head:function(){return{title:"Steer Your Ship!"}}},N=Object(o.a)(I,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-section-theme",this._b({},"v-section-theme",this.theme,!1)),this._v(" "),e("v-section-info",this._b({},"v-section-info",this.info,!1)),this._v(" "),e("v-section-faq")],1)}),[],!1,null,null,null);e.default=N.exports}}]);