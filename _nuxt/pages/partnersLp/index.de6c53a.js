(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{377:function(t,e,n){var content=n(378);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("0cd63bd9",content,!0,{sourceMap:!1})},378:function(t,e,n){(e=n(11)(!1)).push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=e},422:function(t,e,n){"use strict";n.r(e);var o={name:"TheFirstView"},r=n(15),l=n(22),c=n.n(l),v=n(322),d=n(328),m=n(133),h=n(324),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-img",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{src:"https://live.staticflickr.com/65535/48247140977_d4ea623259_o.jpg",height:"400"}},[e("v-container",{staticStyle:{background:"rgba(125, 125, 125, 0.5)"}},[e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{staticClass:"text-center",attrs:{cols:"8"}},[e("h1",{staticClass:"white--text display-1"},[this._v("\n          協賛企業募集\n        ")])]),this._v(" "),e("v-col",{staticClass:"white--text subheading text-center pb-0",staticStyle:{"font-weight":"900"},attrs:{cols:"7"}},[this._v("\n        理念に共感し、応援してくださる方々を探しています。\n      ")])],1)],1)],1)}),[],!1,null,"217195ae",null),_=component.exports;c()(component,{VCol:v.a,VContainer:d.a,VImg:m.a,VRow:h.a});var f={name:"MissionVisionSession",data:function(){return{imgLink:{missionView:"/partnersLp/img/25.jpg",visionView:"/partnersLp/img/23.jpg"}}}},x=(n(16),n(377),n(1).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),y=n(5),w=Object(y.a)(x).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),V=Object(r.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-parallax",{attrs:{src:t.imgLink.missionView}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("\n          Mission( 活動目的 )\n        ")]),t._v(" "),n("h3",{staticClass:"subheading"},[t._v("\n          ありたい姿に向かって挑戦し、ひとりひとりが楽しく生きる社会の実現に貢献する\n        ")]),t._v(" "),n("p"),t._v(" "),n("p",{staticStyle:{"line-height":"2em"}},[t._v('\n          "should" (しなければならない) があふれる社会から、"want" (やりたい) があふれる社会へ。\n        ')])])],1)],1),t._v(" "),n("v-parallax",{attrs:{src:t.imgLink.visionView}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("\n          Vision( 目指す姿 )\n        ")]),t._v(" "),n("h3",{staticClass:"subheading"},[t._v("\n          あらゆる人と人、アイデアとアイデアをつなげ、挑戦するに足る高いエネルギーを生み出す場にする\n        ")]),t._v(" "),n("p",[t._e()]),t._v(" "),n("p",{staticStyle:{"line-height":"2em"}},[t._v("\n          新しいアイデアに触れ、様々な人と交流することで新たな自分を見つけ、一歩踏み出すエネルギーを創出する。\n        ")])])],1)],1)],1)}),[],!1,null,null,null),T=V.exports;c()(V,{VCol:v.a,VParallax:w,VRow:h.a});var C={name:"PlanSession",data:function(){return{defaultElevation:20,planList:[{title:"ロゴ掲載",img:"https://live.staticflickr.com/65535/48254817982_6cd3d3b7a4_c.jpg",price:"2万円～",desc:"TEDxNagoyaUホームページ、イベントトーク動画（YouTube 公式TEDxチャンネル 総再生回数 約40万回、2020/07/03時点））など、TEDxNagoyaU2020イベントに関わる様々なところに、貴社のロゴを掲載させていただきます。",bool:!0,overlay:!0},{title:"企業宣伝",img:"/partnersLp/img/megahon.png",price:"3万円",desc:"TEDxNagoyaUイベントにどのようなご協力をしていただいているかや、応援していただいている理由などをインタビューさせていただき、TEDxNagoyaUのホームページや公式SNSで発信いたします。"},{title:"アンケート調査",img:"/partnersLp/img/yes_no.jpg",price:"目安2万円（3社限定）",desc:"貴社からの質問のアンケート結果と、年齢・出身地などの属性を掛け合わせた調査報告をいたします。対象である100名以上の学生に対し、調査したい質問や最近の若者の流行まで、お気軽にご質問いただけます。"},{title:"物品協賛",img:"https://live.staticflickr.com/65535/48218583016_d25eddc1d1_c.jpg",price:"ご相談ください",desc:"物品協賛は物品に応じて金額に換算し、ロゴ掲載や企業宣伝など、他の協賛プランに代えさせていただきます。"}]}},methods:{}},E=n(331),L=n(330),D=Object(r.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",[n("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("\n        協賛プラン\n      ")]),t._v(" "),n("p",[t._v("TEDxNagoyaUにご協賛していただくにあたり、いくつかのプランをご用意させていただきました。下記プランの組み合わせにより、協賛金額が上下いたします。")]),t._v(" "),n("p",[t._v("また、全ての協賛企業様の企業名を、弊団体のホームページに掲載させていただくほか、全ての企業様を当日イベント（10/11）と活動報告会（10/25）にご招待致します。人数制限はございません。")])])],1),t._v(" "),n("v-row",t._l(t.planList,(function(e){return n("v-col",{key:e.title,attrs:{xs:"12",sm:"6",md:"4"}},[n("v-card",{attrs:{height:"100%"}},[n("v-img",{attrs:{src:e.img}}),t._v(" "),n("v-card-title",[t._v(t._s(e.title))]),t._v(" "),n("v-card-subtitle",[t._v(t._s(e.price)),e.per?n("span",[t._v(" / "+t._s(e.per))]):t._e()]),t._v(" "),n("v-card-text",[t._v(t._s(e.desc))])],1)],1)})),1)],1)}),[],!1,null,"df6f89e6",null),S=D.exports;c()(D,{VCard:E.a,VCardSubtitle:L.b,VCardText:L.c,VCardTitle:L.d,VCol:v.a,VContainer:d.a,VImg:m.a,VRow:h.a});var j={name:"TedxNagoyau"},k=Object(r.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{sm:"12"}},[n("v-card",[n("v-card-title",[t._v("about TEDxNagoyaU")]),t._v(" "),n("v-card-text",[n("p",[t._v("TEDxNagoyaU は、TED Talks に感銘を受けたメンバーが TEDx イベントを名古屋大学で開催しようという意気込みのもと2013年度に発足し、以降毎年TEDから正式なライセンスを取得して活動しています。 実行委員会は名古屋大学を中心とした名古屋近辺の学生のみで構成され、企画・運営を行っております。")]),t._v(" "),n("p",[t._v("今年の本番イベントにつきましては、新型コロナウイルス感染拡大防止のため、YouTube PremiereとZoomを用いたオンラインで開催いたします。イベント運営資金の多くは、協賛企業様からのご好意によって寄せられた協賛金によって成り立っています。")]),t._v(" "),n("p",[t._v("本ページをご覧になり、私たちの"),n("strong",[t._v("理念")]),t._v("に共感し、ともに歩んでいただける方々との出会いをお待ちしております。")])])],1)],1)],1)],1)}),[],!1,null,null,null),N=k.exports;c()(k,{VCard:E.a,VCardText:L.c,VCardTitle:L.d,VCol:v.a,VContainer:d.a,VRow:h.a});var P={name:"PleaseSponsor",data:function(){return{parallaxHeight:500,messageFromTeam:[{title:"協賛金の使途",body:"撮影・配信機材費、コンテンツ準備費、イベント広告費などに充てられます。これらの費用を総じて、今年度のオンライン本番イベントを開催するには総計約40万円が必要となります。\n我々は学生のみで活動している団体でありますので、理念に共感してくださるサポーター企業様のお力添えが必要不可欠です。"},{title:"協賛していただくメリット",body:"弊団体にご協賛していただくことで、YouTubeに公開されるトーク動画へのロゴ掲載や公式SNSへの企業紹介文の掲載などによる宣伝効果が期待できます。その上、TEDxNagoyaUのイベントは、高い理想や価値観を持った学生と多く出会える場となっておりますので、今の優秀な学生が何を考え、どのように行動したいと考えているのかを知る機会にもなります。"},{title:"理念に共感",body:"TEDxNagoyaUのイベントは毎回テーマが設定されます。このテーマは社会に関する問題意識や、皆が普段当たり前と思っていることを見直すといった鋭い視点が反映されております。このテーマに共感していただくことは、貴社の理想や目標を達成することの一助となりえます。"},{title:"協賛プラン",body:"協賛プランは、ロゴ掲載、企業宣伝、アンケート調査、物品協賛がございます。各項目の詳細は下記に説明がございます。その他ご提案いただければ、可能な限り対応させていただきます。"}],imgLink:{normalSize:"/partnersLp/img/21.jpg",bigSize:"/partnersLp/img/21_big.jpg"}}},created:function(){}},U=Object(r.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{xs:"12"}},[n("h1",{staticClass:"display-1 font-weight-thin"},[t._v("\n          協賛のお願い\n        ")])])],1),t._v(" "),n("v-row",{attrs:{justify:"center"}},t._l(t.messageFromTeam,(function(e){return n("v-col",{key:e.title,attrs:{cols:"12",sm:"6",md:"6"}},[n("v-card",[n("v-card-title",[t._v(t._s(e.title))]),t._v(" "),n("v-card-text",[t._v(t._s(e.body))])],1)],1)})),1)],1)],1)}),[],!1,null,"ec99daa6",null),H=U.exports;c()(U,{VCard:E.a,VCardText:L.c,VCardTitle:L.d,VCol:v.a,VContainer:d.a,VRow:h.a});var O={name:"FaqList",data:function(){return{faqList:[{header:"TEDxNagoyaUとは",content:"TEDxNagoyaUは、TED Talk に感銘を受けたメンバーが、TEDxイベントを名古屋大学で開催しようという意気込みのもと、2013年度に発足しました。過去に7回トークイベントを開催し、多くの人からの反響を呼びました。今年は8回目のイベントをオンラインにて開催する予定です。"},{header:"学生だけで運営している？",content:"はい。私たちの団体は学生のみで運営している非営利組織であり、イベント企画から実行まですべて学生ボランティアによって行われています。実行委員会は名古屋大学を中心に名古屋近辺の学生で構成されています。メンバーの中には受験生のときTED TALKに励まされた、新しいことにチャレンジしたい、イベント運営に興味がある、など自分の志やビジョンを持って入る人が多いです。"},{header:"イベントの参加者について教えてほしい",content:"イベントには毎年100人以上の方に参加していただいております。そのうち半数以上が学生です。昨年の場合、参加者の54.5％が学生、29.1％が一般の方、16.4％が協賛企業の方です。イベントの参加者には、視野を広げたい、色んな人たちと交流したいなど、志の高い人が集まっています。また、TEDと同じ理念を持って活動している団体が世界中にあるため、留学生や外国人の方にも参加しやすいイベントになっています。"},{header:"協賛することのメリットを簡単に教えてほしい",content:"貴社の企業宣伝を通して、イベントに参加する学生、社会人や後日YouTubeにアップロードされる動画を見た人に普段ではなかなか伝えられない社風などをアピールできます。特に学生が運営しているイベントなので学生の方にリーチしやすいです。また、当日のイベントに協賛企業の方も参加することができ、参加者と交流することが可能です"},{header:"例年イベントにはどんな人が登壇しているの？",content:"イベントには、例年様々な分野から様々な志、思いを持ったスピーカーさんが登壇していただいてます。トークの内容は運営メンバーと数か月かけてトークを作り込むので、トークの質も高く、人生に影響を与えてくれるようなアイデアに出会えるかもしれません。また、毎年名古屋大学の教授に登壇していただいており、過去にはノーベル賞を受賞した天野浩教授にも登壇していただきました。"}]}}},$=n(416),I=n(417),F=n(418),z=n(419),R=Object(r.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",[n("v-expansion-panels",{attrs:{accordion:""}},t._l(t.faqList,(function(e){return n("v-expansion-panel",{key:e.title},[n("v-expansion-panel-header",[t._v(t._s(e.header))]),t._v(" "),n("v-expansion-panel-content",[t._v(t._s(e.content))])],1)})),1)],1)],1)],1)}),[],!1,null,null,null),B=R.exports;c()(R,{VCol:v.a,VContainer:d.a,VExpansionPanel:$.a,VExpansionPanelContent:I.a,VExpansionPanelHeader:F.a,VExpansionPanels:z.a,VRow:h.a});var M={name:"PastSponsorSession",data:function(){return{imgLink:{logoPartner:"/partnersLp/img/logoMatrix.jpg"},sponsorList2019normal:[{name:"大同特殊鋼株式会社"},{name:"株式会社イエス"},{name:"アビームシステムズ株式会社"},{name:"イー・エフ・エデュケーション・ファースト・ジャパン"},{name:"株式会社青柳総本家"},{name:"株式会社サーラコーポレーション"},{name:"株式会社ソフトバリー"},{name:"株式会社キャディッシュ"},{name:"中京テレビ放送株式会社"},{name:"東京海上日動火災保険株式会社"},{name:"株式会社Harmony For"},{name:"株式会社イノベスト"},{name:"株式会社コーチング・システムズ"},{name:"株式会社ジェイエスティ"}],sponsorList2019material:[{name:"株式会社シーマ"},{name:"Peatix Japan株式会社"},{name:"磯田園製茶株式会社"},{name:"株式会社 エス・ピー・プラネット"},{name:"レッドブル・ジャパン株式会社"}],loading:!0}}},Y=Object(r.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",[n("v-card",[n("v-card-title",[t._v("昨年度協賛企業様ご芳名")]),t._v(" "),n("v-card-text",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"7"}},[n("v-img",{attrs:{src:t.imgLink.logoPartner,alt:"2019年パンフレット"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"5"}},[n("span",[t._v("Partners")]),t._v(" "),n("ul",t._l(t.sponsorList2019normal,(function(e){return n("li",{key:e.name},[t._v("\n                  "+t._s(e.name)+" 様\n                ")])})),0),t._v(" "),n("span",[t._v("Inkind Partners")]),t._v(" "),n("ul",t._l(t.sponsorList2019material,(function(e){return n("li",{key:e.name},[t._v("\n                  "+t._s(e.name)+" 様\n                ")])})),0),t._v(" "),n("span",[t._v("後援")]),t._v(" "),n("ul",[n("li",[t._v("名古屋大学")])])])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null),J=Y.exports;c()(Y,{VCard:E.a,VCardText:L.c,VCardTitle:L.d,VCol:v.a,VContainer:d.a,VImg:m.a,VRow:h.a});var Z={name:"Contact",data:function(){return{overlay:!1,addressList:[{title:"info[at]tedxnagoyau.com",link:"mail:info[at]tedxngoyau.com",icon:"mdi-email",subTitle:"[at]を@にしてご連絡ください。"},{title:"TEDxNagoyaUホームページ",link:"/",icon:"mdi-home"},{title:"イベントページ",link:"/event",icon:"mdi-ship-wheel"}]}},methods:{}},A=n(155),K=n(153),G=n(97),Q=n(68),W=n(81),X=Object(r.a)(Z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",[n("v-card",[n("v-card-title",[t._v("Contact & Link")]),t._v(" "),n("v-card-text",[n("v-list",t._l(t.addressList,(function(e){return n("v-list-item",{key:e.title},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[n("a",{attrs:{href:e.link}},[t._v(t._s(e.title))])]),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(e.subTitle))])],1)],1)})),1)],1)],1)],1)],1)],1)}),[],!1,null,"42142477",null),tt=X.exports;c()(X,{VCard:E.a,VCardText:L.c,VCardTitle:L.d,VCol:v.a,VContainer:d.a,VIcon:A.a,VList:K.a,VListItem:G.a,VListItemContent:Q.a,VListItemIcon:W.a,VListItemSubtitle:Q.b,VListItemTitle:Q.c,VRow:h.a});var et={layout:"nothing",components:{TheFirstView:_,MissionVisionSession:T,PlanSession:S,TedxNagoyau:N,PleaseSponsor:H,FaqList:B,PastSponsorSession:J,Contact:tt},head:function(){return{title:"協賛のお願い",meta:[{hid:"description",name:"description",content:"TEDxNagoyaUは名古屋大学を中心に活動する、学生のみで構成されたTEDx運営団体・イベントです。今年はYouTubeをZoomを活用したオンラインイベントを開催いたします。"},{hid:"og:site_name",property:"og:site_name",content:"TEDxNagoyaU"},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:url",property:"og:url",content:"https://tedxnagoyau.com"},{hid:"og:title",property:"og:title",content:"協賛企業募集中"},{hid:"og:description",property:"og:description",content:"TEDxNagoyaUは名古屋大学を中心に活動する、学生のみで構成されたTEDx運営団体・イベントです。今年はYouTubeをZoomを活用したオンラインイベントを開催いたします。"},{hid:"og:image",property:"og:image",content:"https://tedxnagoyau.com/partnersLp/img/ogp.png"}]}}},at=n(317),nt=n(325),it=Object(r.a)(et,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{staticStyle:{"background-color":"#F5F5F5"}},[e("v-main",[e("div",[e("the-first-view")],1),this._v(" "),e("div",[e("tedx-nagoyau")],1),this._v(" "),e("div",[e("mission-vision-session")],1),this._v(" "),e("div",[e("please-sponsor")],1),this._v(" "),e("div",[e("plan-session")],1),this._v(" "),e("div",[e("faq-list")],1),this._v(" "),e("div",[e("past-sponsor-session")],1),this._v(" "),e("div",[e("Contact")],1)])],1)}),[],!1,null,null,null);e.default=it.exports;c()(it,{VApp:at.a,VMain:nt.a})}}]);