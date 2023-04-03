(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"99fd":function(t,e,a){"use strict";a.r(e);a("ac1f"),a("5319"),a("b680");var s=function(){var t=this,e=t._self._c;return e("q-page",{attrs:{padding:""}},[t.data?t._e():e("div",[e("div",{staticClass:"text-h4 text-negative"},[t._v("ERROR: Unknown Gekko instance")]),e("p",[t._v("Gekko doesn't know what watcher this is!")])]),t.data?[t.isArchived?e("q-banner",{staticClass:"q-mb-sm bg-warning",attrs:{rounded:""},scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-icon",{attrs:{name:"info",color:"white"}})]},proxy:!0}],null,!1,654320519)},[t._v("\n      This is an archived Gekko. It's currently not running anymore.\n    ")]):t._e(),t.data.errorMessage?e("q-banner",{staticClass:"q-mb-sm bg-negative",scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-icon",{attrs:{name:"error",color:"white"}})]},proxy:!0}],null,!1,3709320977)},[e("p",[t._v("This Gekko crashed with the following error-message: "),e("br"),e("br"),t._v(t._s(t.data.errorMessage))])]):t._e(),e("div",{staticClass:"row items-center justify-center",class:{"bg-green-11":t.latestEvents.performanceReport&&t.latestEvents.performanceReport.profit>0,"bg-red-11":t.latestEvents.performanceReport&&t.latestEvents.performanceReport.profit<0}},[e("div",{staticClass:"text-h4 text-uppercase"},[t._v("\n        Gekko "),e("strong",[t._v(t._s(t.type))]),t._v(", on "),e("strong",[t._v(t._s(t.data.config.watch.exchange))]),t._v(" - trading\n        "),e("strong",[e("em",[t._v(t._s(t.data.config.watch.currency)+" - "+t._s(t.data.config.watch.asset))])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("q-btn",{staticClass:"q-ma-xs",attrs:{color:"orange",icon:"stop",label:"Stop Gekko",disabled:t.isArchived},nativeOn:{click:function(e){return t.stopGekko.apply(null,arguments)}}}),e("q-btn",{staticClass:"q-ma-xs",attrs:{color:"negative",icon:"delete",label:"Delete Gekko",disabled:!t.isArchived},nativeOn:{click:function(e){return t.deleteGekko.apply(null,arguments)}}}),t.isStratrunner&&t.watcher&&!t.isArchived?e("p",{staticClass:"q-ma-sm"},[e("em",[t._v("This Gekko gets market data from\n            "),e("router-link",{attrs:{to:"/live-gekkos/"+t.watcher.id}},[t._v("this")]),t._v("\n            market watcher.")],1)]):t._e()],1)]),e("q-tabs",{staticClass:"bg-blue-grey-8 text-blue-grey-1",attrs:{"active-color":"blue-grey-1","indicator-color":"blue-grey-1"},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[e("q-tab",{attrs:{default:"",label:"runtime",name:"runtime-tab",icon:"timer"}}),t.isStratrunner?e("q-tab",{attrs:{label:"profit",name:"profit-tab",icon:"trending_up"}}):t._e(),t.isStratrunner?e("q-tab",{attrs:{label:"strategy",name:"strategy-tab",icon:"multiline_chart"}}):t._e()],1),e("q-separator"),e("q-tab-panels",{staticClass:"q-mb-md",attrs:{animated:""},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[e("q-tab-panel",{staticClass:"bg-blue-grey-1",attrs:{name:"runtime-tab"}},[t.warmupRemaining?e("q-banner",{staticClass:"q-pa-md bg-warning",attrs:{icon:"warning"}},[e("p",[t._v("This stratrunner is still warming up for the next "),e("br"),t._v("\n            "+t._s(t.warmupRemaining.replace(","," and "))+" "),e("br"),t._v("\n            , it will not trade until it is warmed up.")])]):t._e(),t.isLoading?e("div",{staticClass:"row q-gutterxs"},[e("div",{staticClass:"col text-center"},[e("q-spinner-bars",{attrs:{size:"36",color:"accent"}})],1)]):t._e(),!t.isLoading&&t.initialEvents.candle?e("div",{staticClass:"row q-gutterxs"},[e("div",{staticClass:"col"},[e("strong",[t._v("Watching since:")])]),e("div",{staticClass:"col"},[t._v(t._s(t.fmt(t.initialEvents.candle.start)))])]):t._e(),!t.isLoading&&t.latestEvents.candle?e("div",{staticClass:"row q-gutterxs"},[e("div",{staticClass:"col"},[e("strong",[t._v("Received data until:")])]),e("div",{staticClass:"col"},[t._v(t._s(t.fmt(t.latestEvents.candle.start)))])]):t._e(),!t.isLoading&&t.data.events.initial.candle?e("div",{staticClass:"row q-gutterxs"},[e("div",{staticClass:"col"},[e("strong",[t._v("Data spanning:")])]),e("div",{staticClass:"col"},[t._v(t._s(t.dataSpanning))])]):t._e(),t.isStratrunner?[!t.isLoading&&t.trades.length?e("div",{staticClass:"row q-gutterxs"},[e("div",{staticClass:"col"},[e("strong",[t._v("Amount of trades:")])]),e("div",{staticClass:"col"},[t._v("\n              "+t._s(t.trades.length)+"\n            ")])]):t._e(),e("div",{staticClass:"row q-gutterxs"},[e("div",{staticClass:"col"},[e("strong",[t._v("Latest Trade:")])]),t.lastCompletedTrade?e("div",{staticClass:"col"},[t._v(t._s(t.lastCompletedTrade.action)+" "),e("strong",[t._v(t._s(t.lastCompletedTrade.amount.toFixed(8)))]),t._v("\n              "+t._s(t.data.config.watch.asset)+"\n              "),e("br"),t._v("at "),e("strong",[t._v(t._s(t.lastCompletedTrade.effectivePrice.toFixed(8)))]),t._v(" "+t._s(t.data.config.watch.currency)+"\n            ")]):t._e()]),!t.isLoading&&t.latestEvents.advice?e("div",{staticClass:"row q-gutterxs"},[e("div",{staticClass:"col"},[e("strong",[t._v("Last Advice")])]),e("div",{staticClass:"col"},[e("b",[t._v(t._s(t.latestEvents.advice.recommendation))])])]):t._e()]:t._e()],2),t.isStratrunner?e("q-tab-panel",{staticClass:"bg-blue-grey-1",attrs:{name:"profit-tab"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("p",[t.isArchived&&!t.report?e("em",[t._v("\n                This Gekko never executed a trade.\n              ")]):t._e(),t.isArchived||t.report?t._e():e("em",[t._v("\n                Waiting for at least one trade.\n              ")])])])]),t.report?[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("strong",[t._v("Start balance:")])]),e("div",{staticClass:"col"},[t._v(" "+t._s(t.round(t.report.startBalance)))])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("strong",[t._v("Current balance:")])]),e("div",{staticClass:"col"},[t._v(" "+t._s(t.round(t.report.balance)))])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("strong",[t._v("Market:")])]),e("div",{staticClass:"col"},[t._v(" "+t._s(t.round(t.report.market/100*t.report.startPrice))+" "+t._s(t.config.watch.currency)+"\n              ("+t._s(t.round(t.report.market))+" %)\n            ")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("strong",[t._v("Profit:")])]),e("div",{staticClass:"col"},[t._v(" "+t._s(t.round(t.report.profit))+" "+t._s(t.config.watch.currency)+"\n              ("+t._s(t.round(t.report.relativeProfit))+" %)\n            ")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("strong",[t._v("Alpha:")])]),e("div",{staticClass:"col"},[t._v(" "+t._s(t.round(t.report.alpha))+" "+t._s(t.config.watch.currency))])])]:t._e()],2):t._e(),e("q-tab-panel",{staticClass:"bg-blue-grey-1",attrs:{name:"strategy-tab"}},[t.isStratrunner?[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("strong",[t._v("Name:")])]),e("div",{staticClass:"col"},[t._v(t._s(t.stratName))])]),!t.isLoading&&t.config.tradingAdvisor?e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("strong",[t._v("Candle size:")])]),e("div",{staticClass:"col"},[e("strong",[t._v(t._s(t.config.tradingAdvisor.candleSize||"n/a"))]),t._v(" minutes")])]):t._e(),!t.isLoading&&t.config.tradingAdvisor?e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("strong",[t._v("History size:")])]),e("div",{staticClass:"col"},[e("strong",[t._v(t._s(t.historySize))]),t._v("\n                  minutes "+t._s(t.historyFormula)+"\n                ")])]):t._e(),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("strong",[t._v("Parameters:")])]),e("div",{staticClass:"col"},[e("q-scroll-area",{staticClass:"bg-blue-grey-11",staticStyle:{height:"200px"}},[e("pre",[t._v(t._s(t.stratParams))])])],1)])])])]:t._e()],2)],1),!t.isStratrunner||t.watcher||t.isArchived?t._e():e("q-banner",{staticClass:"q-pa-md bg-warning",attrs:{icon:"warning"}},[e("p",[t._v("WARNING: stale Gekko, not attached to a watcher, please report an\n        "),e("a",{attrs:{href:"https://github.com/askmike/gekko/issues"}},[t._v("issue")]),t._v(" here.")])]),t.isLoading?t._e():e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},["fetching"===t.candleFetch?e("q-spinner-bars",{attrs:{color:"accent",size:"48"}}):t._e(),"fetched"===t.candleFetch?e("echart",{attrs:{candles:t.candles,trades:t.trades,height:"500"}}):t._e()],1)]),t.isStratrunner?e("div",{staticClass:"row"},[e("roundtrips",{staticClass:"col-12",attrs:{roundtrips:t.roundtrips}})],1):t._e()]:t._e()],2)},n=[],i=a("7ec2"),r=a.n(i),o=a("c973"),c=a.n(o),l=a("ded3"),d=a.n(l),u=(a("99af"),a("4de4"),a("d3b7"),a("e260"),a("ddb0"),a("e9c4"),a("7db0"),a("d81d"),a("14d9"),a("2b0e")),v=a("2f62"),h=a("c1df"),g=a.n(h),f=a("8f14"),p=a.n(f),_=a("2ef0"),k=a.n(_),m=a("1a90"),b=a("bdfd"),C={created:function(){this.isLoading||this.getCandles()},components:{echart:m["a"],roundtrips:b["a"]},data:function(){return{candleFetch:"idle",candles:[],currentTab:"runtime-tab"}},computed:d()(d()({},Object(v["b"])("gekkos",{gekkos:"list",archivedGekkos:"archive"})),{},{id:function(){return this.$route.params.id},historySize:function(){return(this.config.tradingAdvisor.candleSize||0)*(this.config.tradingAdvisor.historySize||0)},historyFormula:function(){return"(".concat(this.config.tradingAdvisor.historySize," x ").concat(this.config.tradingAdvisor.candleSize," min.)")},watchers:function(){return k.a.values(this.gekkos).concat(k.a.values(this.archivedGekkos)).filter((function(t){return"watcher"===t.logType}))},data:function(){return!!this.gekkos&&(k.a.has(this.gekkos,this.id)?this.gekkos[this.id]:!!k.a.has(this.archivedGekkos,this.id)&&this.archivedGekkos[this.id])},config:function(){return k.a.get(this,"data.config")},latestEvents:function(){return k.a.get(this,"data.events.latest")},lastCompletedTrade:function(){return k.a.get(this,"data.events.latest.tradeCompleted")},initialEvents:function(){return k.a.get(this,"data.events.initial")},trades:function(){return k.a.get(this,"data.events.tradeCompleted")||[]},roundtrips:function(){return k.a.get(this,"data.events.roundtrip")||[]},isLive:function(){return k.a.has(this.gekkos,this.id)},type:function(){return this.data.logType},isStratrunner:function(){return"watcher"!==this.type},isArchived:function(){return this.data.stopped},warmupRemaining:function(){if(!this.isStratrunner)return!1;if(this.isArchived)return!1;if(this.initialEvents.stratWarmupCompleted)return!1;if(!this.initialEvents.candle)return!1;var t=k.a.get(this.config,"tradingAdvisor.historySize");if(!t)return!1;var e=k.a.get(this.config,"tradingAdvisor.candleSize")*t;return p()(g()(this.initialEvents.candle.start).add(e,"m").diff(g()()),{largest:2})},report:function(){return k.a.get(this.latestEvents,"performanceReport")},stratName:function(){if(this.data)return this.data.config.tradingAdvisor.method},stratParams:function(){if(!this.data)return"Loading...";var t=u["a"].util.extend({},this.data.config[this.stratName]);return delete t.__empty,k.a.isEmpty(t)?"No parameters":JSON.stringify(t,null,4)},isLoading:function(){return!this.data||(!k.a.get(this.data,"events.initial.candle")||!k.a.get(this.data,"events.latest.candle"))},watcher:function(){var t=this;if(!this.isStratrunner)return!1;var e=u["a"].util.extend({},this.data.config.watch);return k.a.find(this.gekkos,(function(a){return a.id!==t.id&&k.a.isEqual(e,a.config.watch)}))},hasLeechers:function(){var t=this;if(this.isStratrunner)return!1;var e=u["a"].util.extend({},this.data.config.watch);return k.a.find(this.gekkos,(function(a){return a.id!==t.id&&k.a.isEqual(e,a.config.watch)}))},dataSpanning:function(){return p()(g()(this.latestEvents.candle.start).diff(g()(this.initialEvents.candle.start)))||""}}),watch:{"data.events.latest.candle.start":function(){this.getCandles()},data:function(t,e){var a=t&&t.events.initial.candle&&t.events.latest.candle;a&&"fetched"!==this.candleFetch&&this.getCandles()}},methods:{round:function(t){return(+t).toFixed(5)},moment:function(t){return g.a.utc(t)},fmt:function(t){return g.a.utc(t).format("YYYY-MM-DD HH:mm")},getCandles:function(){var t=c()(r()().mark((function t(){var e,a,s,n,i;return r()().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.isLoading){t.next=2;break}return t.abrupt("return");case 2:if("fetching"!==this.candleFetch){t.next=4;break}return t.abrupt("return");case 4:return this.candleFetch="fetching",e=this.data.events.latest.candle.start,a=this.data.events.initial.candle.start,s=1,"watcher"!==this.type&&(s=this.data.config.tradingAdvisor.candleSize),n={watch:this.data.config.watch,daterange:{to:e,from:a},candleSize:s},t.prev=10,t.next=13,this.$axios.post("".concat(this.$store.state.config.apiBaseUrl,"getCandles"),n);case 13:if(i=t.sent,this.candleFetch="fetched",k.a.isArray(i.data)){t.next=17;break}return t.abrupt("return",console.log("No data retrieved!"));case 17:this.candles=i.data.map((function(t){return t.start=g.a.unix(t.start).utc().format(),t})),t.next=24;break;case 20:return t.prev=20,t.t0=t["catch"](10),console.log("Error on getting candle Data",t.t0),t.abrupt("return");case 24:case"end":return t.stop()}}),t,this,[[10,20]])})));function e(){return t.apply(this,arguments)}return e}(),stopGekko:function(){var t=this;this.hasLeechers&&this.$q.dialog({title:"Dependant Gekkos found",message:"This Gekko is fetching market data für multiple stratrunners. Stop these first!",type:"warning"}).onOk((function(){return!0})),this.$q.dialog({title:"Stop Gekko",message:"Are you sure you wand to stop this Gekko?",ok:"Yes",cancel:"No"}).onOk(c()(r()().mark((function e(){return r()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("".concat(t.$store.state.config.apiBaseUrl,"stopGekko"),{id:t.data.id});case 3:e.sent,t.$q.notify("Gekko has been stopped."),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$q.notify("Error - could not stop Gekko."),console.log("Error stopping gekko",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).onCancel((function(){}))},deleteGekko:function(){var t=this;this.isArchived||this.$q.dialog({title:"Still running!",message:"This Gekko is still running. Stop it first!",type:"warning"}).onOk((function(){return!0})),this.$q.dialog({title:"Delete Gekko",message:"Are you sure you wand to delete this Gekko?",ok:"Yes",cancel:"No"}).onOk(c()(r()().mark((function e(){return r()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("".concat(t.$store.state.config.apiBaseUrl,"deleteGekko"),{id:t.data.id});case 3:e.sent,t.$q.notify("Gekko has been deleted. Redirecting..."),t.$router.push({path:"/live-gekkos/"}),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$q.notify("Error - could not delete Gekko."),console.log("Error deleteing gekko",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).onCancel((function(){}))}}},w=C,y=a("2877"),x=a("9989"),q=a("54e1"),S=a("0016"),G=a("9c40"),A=a("429b"),E=a("7460"),T=a("eb85"),L=a("adad"),$=a("823b"),z=a("a154"),R=a("4983"),F=a("eebe"),N=a.n(F),Q=Object(y["a"])(w,s,n,!1,null,null,null);e["default"]=Q.exports;N()(Q,"components",{QPage:x["a"],QBanner:q["a"],QIcon:S["a"],QBtn:G["a"],QTabs:A["a"],QTab:E["a"],QSeparator:T["a"],QTabPanels:L["a"],QTabPanel:$["a"],QSpinnerBars:z["a"],QScrollArea:R["a"]})}}]);