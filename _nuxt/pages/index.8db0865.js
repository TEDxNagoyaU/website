(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{347:function(t,e,n){var content=n(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("0cd63bd9",content,!0,{sourceMap:!1})},348:function(t,e,n){(e=n(11)(!1)).push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=e},360:function(t,e,n){"use strict";n.r(e);var r={name:"TheShowYoutube"},o=n(21),l=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null).exports,c={},h=n(27),d=n.n(h),f=n(96),m=n(311),w=n(129),v=(n(15),n(347),n(1).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),x=n(5),_=Object(x.a)(v).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),y=n(313),T=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-parallax",{attrs:{dark:"",src:"/bgFirstView.jpg",height:"500"}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e("h1",{staticClass:"display-1 font-weight-thin mb-4"},[this._v("2020 TedxNagoyaU Theme")])]),this._v(" "),e("v-col",{staticClass:"text-center",attrs:{sm:"6",xs:"12"}},[e("v-img",{attrs:{src:"/keyVisual.png"}}),this._v(" "),e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"white",href:"/event"}},[this._v("View more")])],1)],1)],1)}),[],!1,null,"6b67c7c6",null),H=T.exports;d()(T,{VBtn:f.a,VCol:m.a,VImg:w.a,VParallax:_,VRow:y.a});var j={components:{TheShowYoutube:l,FirstView:H},head:function(){return{titleTemplate:"TEDxNagoyaU"}}},C=Object(o.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("the-show-youtube"),this._v(" "),e("first-view")],1)}),[],!1,null,null,null);e.default=C.exports}}]);