(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{306:function(t,e,n){var content=n(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("790a7675",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";var r=n(306);n.n(r).a},309:function(t,e,n){(e=n(14)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},310:function(t,e,n){"use strict";var r=n(1).a.extend({props:{icon:{type:String}}}),o=(n(308),n(5)),l=n(39),c=n.n(l),d=n(299),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports;c()(component,{VIcon:d.a})},319:function(t,e,n){var content=n(358);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("2110844c",content,!0,{sourceMap:!1})},320:function(t,e,n){var content=n(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0f0f4320",content,!0,{sourceMap:!1})},357:function(t,e,n){"use strict";var r=n(319);n.n(r).a},358:function(t,e,n){(e=n(14)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},359:function(t,e,n){"use strict";var r=n(320);n.n(r).a},360:function(t,e,n){(e=n(14)(!1)).push([t.i,".StaticInfo{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;background-color:#fff;border:1px solid #d9d9d9;box-shadow:0 0 2px rgba(0,0,0,.15);border-radius:4px;padding:.5em 1em;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.StaticInfo:hover{text-decoration:underline}.StaticInfo-Button{flex:1 0 auto;text-align:right}.StaticInfo-Button>span{padding:4px 8px;font-size:14px;font-size:0.875rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.StaticInfo-Button>span:hover{background-color:#008830;color:#fff}.StaticInfo-Button>span:hover>i{color:#fff !important}@media screen and (max-width: 600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=e},376:function(t,e,n){var content=n(571);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("f4c3005e",content,!0,{sourceMap:!1})},377:function(t,e,n){var content=n(573);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("e9512022",content,!0,{sourceMap:!1})},378:function(t,e,n){var content=n(576);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("7c16c3e2",content,!0,{sourceMap:!1})},379:function(t,e,n){var content=n(578);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("36f1a08f",content,!0,{sourceMap:!1})},401:function(t,e,n){"use strict";var r=n(1).a.extend({props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}},computed:{linkTag:function(){return this.isInternalLink?"nuxt-link":"a"},linkAttrs:function(){return this.isInternalLink?{to:this.url,class:"StaticInfo"}:{href:this.url,class:"StaticInfo"}},isInternalLink:function(){return!/^https?:\/\//.test(this.url)}}}),o=(n(359),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.linkTag,t._b({tag:"component"},"component",t.linkAttrs,!1),[n("span",[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("span",[t._v("\n      "+t._s(t.btnText)+"\n    ")])]):t._e()])}),[],!1,null,null,null);e.a=component.exports},402:function(t,e,n){"use strict";var r=n(1),o=n(108),l=r.a.extend({props:{items:{type:Array,required:!0}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(o.a)(t)}}}),c=(n(357),n(5)),d=n(39),f=n.n(d),h=n(299),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("h3",{staticClass:"WhatsNew-heading"},[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("最新のお知らせ"))+"\n  ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[],!1,null,null,null);e.a=component.exports;f()(component,{VIcon:h.a})},568:function(t,e,n){"use strict";n(24),n(11);var r=n(3),o=(n(62),n(178),n(37),n(7),n(6),n(16),n(36),n(40),n(180),n(1)),l=n(133),c=n(9);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return f.reduce((function(n,r){return n[t+Object(c.z)(r)]=e(),n}),{})}var v=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},x=m("align",(function(){return{type:String,default:null,validator:v}})),y=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},_=m("justify",(function(){return{type:String,default:null,validator:y}})),w=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},C=m("alignContent",(function(){return{type:String,default:null,validator:w}})),k={align:Object.keys(x),justify:Object.keys(_),alignContent:Object.keys(C)},D={align:"align",justify:"justify",alignContent:"align-content"};function $(t,e,n){var r=D[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var j=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},x,{justify:{type:String,default:null,validator:y}},_,{alignContent:{type:String,default:null,validator:w}},C),render:function(t,e){var n=e.props,data=e.data,o=e.children,c="";for(var d in n)c+=String(n[d]);var f=j.get(c);return f||function(){var t,e;for(e in f=[],k)k[e].forEach((function(t){var r=n[t],o=$(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),j.set(c,f)}(),t(n.tag,Object(l.a)(data,{staticClass:"row",class:f}),o)}})},569:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/04/04","url":"https://www.pref.nagasaki.jp/shared/uploads/2020/04/1586001476.pdf","text":"本県11例目の感染者が確認されました。積極的疫学調査を確実に行い、感染拡大防止に努めてまいります。県民の皆さまには、感染予防の取組をお願いするとともに、感染者、その家族のプライバシーには十分ご配慮をお願いします。"},{"date":"2020/04/04","url":"https://www.pref.nagasaki.jp/shared/uploads/2020/04/1585980258.pdf","text":"本県10例目の感染者が確認されました。積極的疫学調査を確実に行い、感染拡大防止に努めてまいります。県民の皆さまには、感染予防の取組をお願いするとともに、感染者、その家族ののプライバシーには十分ご配慮をお願いします。"},{"date":"2020/04/02","url":"https://www.pref.nagasaki.jp/shared/uploads/2020/04/1585869756.pdf","text":"佐世保市において、本県7,8例目となる新型コロナウイルス感染症の患者が発生しました。"},{"date":"2020/04/02","url":"https://www.pref.nagasaki.jp/shared/uploads/2020/04/1585869772.pdf","text":"本県6例目となる新型コロナウイルス感染症の患者が発生しました。"},{"date":"2020/04/01","url":"https://www.pref.nagasaki.jp/shared/uploads/2020/04/1585745839.pdf","text":"本県5例目となる新型コロナウイルス感染症の患者が確認されました。今後、積極的疫学調査を確実に行い、感染拡大防止に努めてまいります。"},{"date":"2020/04/01","url":"https://www.pref.nagasaki.jp/shared/uploads/2020/04/1585732436.pdf","text":"本県4例目となる新型コロナウイルス感染症の患者が確認されました。今後、積極的疫学調査を確実に行い、感染拡大防止に努めてまいります。"},{"date":"2020/04/01","url":"https://www.city.sasebo.lg.jp/hokenhukusi/kenkou/covid19-hasseijokyo.html","text":"本県3例目となる新型コロナウイルスの感染者が確認されました。"}]}')},570:function(t,e,n){"use strict";var r=n(376),o=n.n(r);e.default=o.a},571:function(t,e,n){(e=n(14)(!1)).push([t.i,".note_2FWg4{margin-top:10px;margin-bottom:0;font-size:12px;color:#707070}",""]),e.locals={note:"note_2FWg4"},t.exports=e},572:function(t,e,n){"use strict";var r=n(377),o=n.n(r);e.default=o.a},573:function(t,e,n){(e=n(14)(!1)).push([t.i,".GraphDesc_2ov-E{width:100%;margin:0;margin-bottom:0 !important;padding-left:0 !important;font-size:12px;color:#707070;list-style:none}.DataViewDesc_BOyA_{margin-top:10px;margin-bottom:0 !important;font-size:12px;line-height:15px;color:#707070}",""]),e.locals={GraphDesc:"GraphDesc_2ov-E",DataViewDesc:"DataViewDesc_BOyA_"},t.exports=e},574:function(t){t.exports=JSON.parse('{"healthCenters":{"date":"2020/03/25 09:00","data":[{"保健所名":"長崎県相談センター","担当部署":"地域保健課","電話番号":"070-4223-4371","開設時間":"平日　9時から17時45分","夜間":"土日祝日の9時から17時30分まで 070-2667-3211","管轄":"長崎市、佐世保市を除く県内","所在地":""},{"保健所名":"西彼保健所","担当部署":"地域保健課","電話番号":"095-856-5059","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"西海市、長与町、時津町","所在地":"長崎市滑石1-9-5"},{"保健所名":"県央保健所","担当部署":"地域保健課","電話番号":"0957-26-9870","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"諫早市、大村市、東彼杵町、川棚町、波佐見町","所在地":"諫早市栄田町26-49"},{"保健所名":"県南保健所","担当部署":"地域保健課","電話番号":"0957-62-3289","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"島原市、雲仙市、南島原市","所在地":"島原市新田町347-9"},{"保健所名":"県北保健所","担当部署":"地域保健課","電話番号":"0950-57-3933","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"平戸市、松浦市、佐々町","所在地":"平戸市田平町里免1126-1"},{"保健所名":"五島保健所","担当部署":"企画保健課","電話番号":"0959-72-3125","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"五島市","所在地":"五島市福江町7-2"},{"保健所名":"上五島保健所","担当部署":"企画保健課","電話番号":"0959-42-1121","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"新上五島町、小値賀町","所在地":"南松浦郡新上五島町有川郷2254-17"},{"保健所名":"壱岐保健所","担当部署":"企画保健課","電話番号":"0920-47-0260","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"壱岐市","所在地":"壱岐市郷ノ浦町本村触620-5"},{"保健所名":"対馬保健所","担当部署":"企画保健課","電話番号":"0920-52-0166","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"対馬市","所在地":"対馬市厳原町宮谷224"},{"保健所名":"長崎市保健所","担当部署":"長崎市帰国者・接触者相談センター","電話番号":"095-801-1712","開設時間":"平日　9時から17時30分","夜間":"closed","管轄":"長崎市","所在地":"長崎市桜町6番3号"},{"保健所名":"佐世保市保健所","担当部署":"健康づくり課","電話番号":"0956-25-9646","開設時間":"平日　9時から17時30分","夜間":"closed","管轄":"佐世保市","所在地":"佐世保市高砂町5番1号"}]}}')},575:function(t,e,n){"use strict";var r=n(378),o=n.n(r);e.default=o.a},576:function(t,e,n){(e=n(14)(!1)).push([t.i,".cardTable_1FUN-.v-data-table_1o_Cb th{padding:8px 10px;height:auto;border-bottom:1px solid #d9d9d9;white-space:nowrap;color:#4d4d4d;font-size:12px}.cardTable_1FUN-.v-data-table_1o_Cb th.text-center_3a8pD{text-align:center}.cardTable_1FUN-.v-data-table_1o_Cb tbody tr{color:#333}.cardTable_1FUN-.v-data-table_1o_Cb tbody tr td{padding:8px 10px;height:auto;font-size:12px}.cardTable_1FUN-.v-data-table_1o_Cb tbody tr td.text-center_3a8pD{text-align:center}.cardTable_1FUN-.v-data-table_1o_Cb tbody tr:nth-child(odd) td{background:rgba(217,217,217,.3)}.cardTable_1FUN-.v-data-table_1o_Cb tbody tr:not(:last-child) td:not(.v-data-table__mobile-row_Plxq3){border:none}.alert_fJKeM{padding:8px;font-size:12px;color:red}",""]),e.locals={cardTable:"cardTable_1FUN-","v-data-table":"v-data-table_1o_Cb","text-center":"text-center_3a8pD","v-data-table__mobile-row":"v-data-table__mobile-row_Plxq3",alert:"alert_fJKeM"},t.exports=e},577:function(t,e,n){"use strict";var r=n(379);n.n(r).a},578:function(t,e,n){(e=n(14)(!1)).push([t.i,".MainPage .Header[data-v-05db56d8]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width: 600px){.MainPage .Header[data-v-05db56d8]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-05db56d8]{font-size:14px;font-size:0.875rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-05db56d8]{font-size:12px;font-size:0.75rem;color:#707070}@media screen and (min-width: 601px){.MainPage .Annotation[data-v-05db56d8]{margin:0 0 0 auto}}.MainPage .DataBlock[data-v-05db56d8]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-05db56d8]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-05db56d8]{padding:4px 8px}}",""]),t.exports=e},628:function(t,e,n){"use strict";n.r(e);n(34);var r=n(4),o=n(1),l=n(310),c=n(402),d=n(401),f=n(107),h=n(569),m=(n(106),n(416)),v=n(314),x=n(434),y={components:{DataView:v.a,ConfirmedCasesDetailsTable:x.a},data:function(){var t=this.$store.state.bodik1,e=this.$store.state.bodik2,n=0;if(t){n=t.map((function(t){return Number(t.件数)})).reduce((function(t,e){return t+e}))}var summary=f.main_summary;summary.value=n;var r=e.length;summary.children[0].value=r;var o=Object(m.a)(summary);console.log(o,"confirmedCases");var data={Data:f,confirmedCases:o};return data}},_=n(570),w=n(5),C=n(39),k=n.n(C),D=n(623);var component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("data-view",{attrs:{title:t.$t("検査陽性者の状況"),"title-id":"details-of-confirmed-cases",date:t.Data.patients.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("p",{class:t.$style.note},[t._v("\n        "+t._s(t.$t("（注）チャーター機帰国者、クルーズ船乗客等は含まれていない"))+"\n      ")])]},proxy:!0}])},[t._v(" "),n("confirmed-cases-details-table",t._b({attrs:{"aria-label":t.$t("検査陽性者の状況")}},"confirmed-cases-details-table",t.confirmedCases,!1))],1)],1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null),$=component.exports;k()(component,{VCol:D.a});n(61);var j=n(323),S=n(326),O={components:{TimeBarChart:S.a},data:function(){var t,e=this.$store.state.bodik1,n=this.$store.state.bodik2,r=(t=function(t){return t.公表_年月日},n.reduce((function(e,n,r,o){var l=t(n,r,o);return(e[l]||(e[l]=[])).push(n),e}),{})),o=[];e&&(o=e.map((function(t){return t.年月日})));var l=n[n.length-1].公表_年月日;null==o.find((function(element){return element===l}))&&o.push(l);var c=[];o.forEach((function(t){var e=[];if(e["日付"]=t,e["小計"]=0,r[t]){var n=r[t];e["小計"]=n.length}c.push(e)}));var d=Object(j.a)(c),data={Data:f,patientsGraph:d};return data}},I=Object(w.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("陽性患者数"),"title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":this.patientsGraph,date:this.Data.patients.date,unit:this.$t("人"),url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068"}})],1)}),[],!1,null,null,null),N=I.exports;k()(I,{VCol:D.a});n(50),n(11),n(7);var T=n(422),W={components:{DataTable:n(430).a},data:function(){var t=this.$store.state.bodik2,e=[];t&&t.forEach((function(t){var n=[];n["リリース日"]=t.公表_年月日,n["居住地"]=t.居住地,n["年代"]=t.年代,n["性別"]=t.性別,n["退院"]="1"===t.退院済フラグ?"○":null,n.date=t.公表_年月日,e.push(n)}));var n=Object(T.a)(e),r={lText:e.length.toLocaleString(),sText:this.$t("{date}の累計",{date:""}),unit:this.$t("人")},o=!0,l=!1,c=void 0;try{for(var d,f=n.headers[Symbol.iterator]();!(o=(d=f.next()).done);o=!0){var header=d.value;header.text="退院"===header.value?this.$t("退院※"):this.$t(header.value)}}catch(t){l=!0,c=t}finally{try{o||null==f.return||f.return()}finally{if(l)throw c}}var h=!0,m=!1,v=void 0;try{for(var x,y=n.datasets[Symbol.iterator]();!(h=(x=y.next()).done);h=!0){var _=x.value;if(_["居住地"]=this.$t(_["居住地"]),_["性別"]=this.$t(_["性別"]),_["退院"]=this.$t(_["退院"]),"10歳未満"===_["年代"])_["年代"]=this.$t("10歳未満");else if("不明"===_["年代"])_["年代"]=this.$t("不明");else{var w=_["年代"].substring(0,2);_["年代"]=this.$t("{age}代",{age:w})}}}catch(t){m=!0,v=t}finally{try{h||null==y.return||y.return()}finally{if(m)throw v}}var data={patients:e,patientsTable:n,sumInfoOfPatients:r};return data}},z=Object(w.a)(W,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-table",{attrs:{title:this.$t("陽性患者の属性"),"title-id":"attributes-of-confirmed-cases","chart-data":this.patientsTable,"chart-option":{},date:this.patients,info:this.sumInfoOfPatients,url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068",source:this.$t("オープンデータを入手")}})],1)}),[],!1,null,null,null),L=z.exports;k()(z,{VCol:D.a});n(31);var A=n(3),E=n(132),P=n(400),M=n(330),B=n(324),V={created:function(){this.canvas=!0},components:{DataView:v.a,DataSelector:P.a,DataViewBasicInfoPanel:M.a},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,default:"time-stacked-bar-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},items:{type:Array,default:function(){return[]}},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},unit:{type:String,default:""}},data:function(){return{dataKind:"transition",canvas:!0}},computed:{displayInfo:function(){return"transition"===this.dataKind?{lText:this.sum(this.pickLastNumber(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の合計",{date:this.labels[this.labels.length-1]})),unit:this.unit}:{lText:this.sum(this.cumulativeSum(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の全体累計",{date:this.labels[this.labels.length-1]})),unit:this.unit}},displayData:function(){var t=this,e=Object(B.a)(this.chartData.length);return"transition"===this.dataKind?{labels:this.labels,datasets:this.chartData.map((function(n,r){return{label:t.items[r],data:n,backgroundColor:e[r].fillColor,borderColor:e[r].strokeColor,borderWidth:1}}))}:{labels:this.labels,datasets:this.chartData.map((function(n,r){return{label:t.items[r],data:t.cumulative(n),backgroundColor:e[r].fillColor,borderColor:e[r].strokeColor,borderWidth:1}}))}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(E.a)(this.items.map((function(text,t){return{text:text,value:String(t)}}))))},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign.apply(Object,[{text:t.labels[i]}].concat(Object(E.a)(t.items.map((function(e,n){return Object(A.a)({},n,t.displayData.datasets[n].data[i])})))))}))},options:function(){var t=this,e=this.unit,n=this.eachArraySum(this.chartData),data=this.chartData,r=this.chartData.map((function(e){return t.cumulative(e)})),o=this.eachArraySum(r),l={tooltips:{displayColors:!1,callbacks:{label:function(l){var c,d;return"transition"===t.dataKind?(c=n[l.index].toLocaleString(),d=data[l.datasetIndex][l.index].toLocaleString()):(c=o[l.index].toLocaleString(),d=r[l.datasetIndex][l.index].toLocaleString()),"".concat(t.dataLabels[l.datasetIndex],": ").concat(d," ").concat(e," (").concat(t.$t("合計"),": ").concat(c," ").concat(e,")")},title:function(t,data){return data.labels[t[0].index]}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!0,onHover:function(t){t.currentTarget.style.cursor="pointer"},onLeave:function(t){t.currentTarget.style.cursor="default"}},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",parser:"M/D",displayFormats:{month:"MMM"}}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]}};return"true"===this.$route.query.ogp&&Object.assign(l,{animation:{duration:0}}),l}},methods:{cumulative:function(t){var e=[],n=0;return t.forEach((function(t){n+=t,e.push(n)})),e},sum:function(t){return t.reduce((function(t,e){return t+e}))},pickLastNumber:function(t){return t.map((function(t){return t[t.length-1]}))},cumulativeSum:function(t){return t.map((function(t){return t.reduce((function(t,e){return t+e}))}))},eachArraySum:function(t){for(var e=[],i=0;i<t[0].length;i++)e.push(t[0][i]);return e}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},U=o.a.extend(V),F=n(572),G=n(626);var H=Object(w.a)(U,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("ul",{class:t.$style.GraphDesc},[n("li",[t._v("\n        "+t._s(t.$t("（注）医療機関が保険適用で行った検査は含まれていない"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("（注）同一の対象者について複数の検体を検査する場合あり"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("（注）速報値として公開するものであり、後日確定データとして修正される場合あり"))+"\n      ")])]),t._v(" "),n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0}])},[t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("bar",{ref:"barChart",style:{display:t.canvas?"block":"none"},attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.options,height:240}}),t._v(" "),n("v-data-table",{staticClass:"cardTable",style:{top:"-9999px",position:t.canvas?"fixed":"static"},attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"}}),t._v(" "),n("p",{class:t.$style.DataViewDesc},[t._t("additionalNotes")],2)],1)}),[],!1,(function(t){this.$style=F.default.locals||F.default}),null,null),K=H.exports;k()(H,{VDataTable:G.a});var J={components:{TimeStackedBarChart:K},data:function(){var t=this.$store.state.bodik1,e=[],n=[],r=[];t&&t.forEach((function(t){e.push(t.年月日.slice(-5)),n.push(t.件数?Number(t.件数):0),r.push(0)}));var o=[n,r],l=[this.$t("県内発生（※1）"),this.$t("")],c=[this.$t("県内"),this.$t("その他.graph")],data={Data:f,inspectionsGraph:o,inspectionsItems:l,inspectionsLabels:e,inspectionsDataLabels:c};return console.log(data,"data"),data}},R=Object(w.a)(J,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-stacked-bar-chart",{attrs:{title:t.$t("検査実施件数"),"title-id":"number-of-tested","chart-id":"time-stacked-bar-chart-inspections","chart-data":t.inspectionsGraph,date:t.lastUpdate,items:t.inspectionsItems,labels:t.inspectionsLabels,unit:t.$t("件.tested"),"data-labels":t.inspectionsDataLabels},scopedSlots:t._u(["ja-basic"!==t.$i18n.locale?{key:"additionalNotes",fn:function(){return[t._v("\n      "+t._s(t.$t("※1: 疑い例・接触者調査"))+"\n    ")]},proxy:!0}:null],null,!0)})],1)}),[],!1,null,null,null),Q=R.exports;k()(R,{VCol:D.a});var X=n(574),Y=[{text:"保健所名",value:"保健所名"},{text:"担当部署",value:"担当部署"},{text:"電話番号",value:"電話番号"},{text:"開設時間",value:"開設時間"},{text:"夜間",value:"夜間"},{text:"管轄",value:"管轄"},{text:"所在地",value:"所在地"}],Z=o.a.extend({components:{DataView:v.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""}},mounted:function(){this.$refs.displayedTable.$el.querySelectorAll("table").forEach((function(table){table.setAttribute("tabindex","0")}))}}),tt=n(575);var at=Object(w.a)(Z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("span",[n("p",{class:[t.$style.alert]},[t._v("\n        ※\n        相談センター開所時間以外の緊急対応は、最寄の保健所までお電話ください。\n      ")])])]},proxy:!0}])},[t._v(" "),n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:700,"fixed-header":!0,"mobile-breakpoint":0}})],1)}),[],!1,(function(t){this.$style=tt.default.locals||tt.default}),null,null),et=at.exports;k()(at,{VDataTable:G.a});var nt={components:{DataTableHealthCenter:et},data:function(){var data={patientsTable:function(data){var t={headers:Y,datasets:[]};return data.forEach((function(e){var n,r,o,l,c,d,f,h={"保健所名":null!==(n=e["保健所名"])&&void 0!==n?n:"不明","担当部署":null!==(r=e["担当部署"])&&void 0!==r?r:"不明","電話番号":null!==(o=e["電話番号"])&&void 0!==o?o:"不明","開設時間":null!==(l=e["開設時間"])&&void 0!==l?l:"不明","夜間":null!==(c=e["夜間"])&&void 0!==c?c:"不明","管轄":null!==(d=e["管轄"])&&void 0!==d?d:"不明","所在地":null!==(f=e["所在地"])&&void 0!==f?f:"不明"};t.datasets.push(h)})),t.datasets.sort((function(a,b){return a===b?0:a<b?1:-1})),t}(X.healthCenters.data)};return data}},it=Object(w.a)(nt,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"12"}},[e("data-table-health-center",{attrs:{title:"帰国者接触者相談センター","title-id":"health-center","chart-data":this.patientsTable,"chart-option":{},info:this.sumInfoOfPatients}})],1)}),[],!1,null,null,null),st=it.exports;k()(it,{VCol:D.a});var ot=n(108),lt="https://data.bodik.jp/api/action/datastore_search?resource_id=",ct=o.a.extend({components:{PageHeader:l.a,WhatsNew:c.a,StaticInfo:d.a,ConfirmedCasesDetailsCard:$,ConfirmedCasesNumberCard:N,ConfirmedCasesAttributesCard:L,TestedNumberCard:Q,HealthCenterCard:st},fetch:function(t){var e=t.store,n=t.app.$axios;return Object(r.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.get(lt+"71e83845-2648-4cb3-a69d-9f5f5412feb2");case 3:return r=t.sent,console.log(r.data,"url"),e.commit("setBodicData1",r.data.result.records),t.next=8,n.get(lt+"de7ce61e-1849-47a1-b758-bca3f809cdf8");case 8:o=t.sent,e.commit("setBodicData2",o.data.result.records),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(0);case 14:case"end":return t.stop()}}),t,null,[[0,12]])})))()},data:function(){var data={Data:f,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("県内の最新感染動向")},newsItems:h.newsItems};return data},computed:{updatedAt:function(){return Object(ot.c)(this.$data.Data.lastUpdate)}},head:function(){return{title:this.$t("県内の最新感染動向")}}}),ut=(n(577),n(421)),pt=n(568),ft=Object(w.a)(ct,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n      "+t._s(t.headerItem.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.Data.lastUpdate))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])],1),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("static-info",{staticClass:"mb-4",attrs:{url:t.localePath("/flow"),text:t.$t("自分や家族の症状に不安や心配があればまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("tested-number-card")],1),t._v(" "),n("v-row",[n("health-center-card")],1),t._v(" "),n("v-divider")],1)}),[],!1,null,"05db56d8",null);e.default=ft.exports;k()(ft,{VDivider:ut.a,VRow:pt.a})}}]);