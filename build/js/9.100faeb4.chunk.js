(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{19:function(t,a,s){},20:function(t,a,s){},21:function(t,a,s){"use strict";var e={name:"list",props:{listType:String,data:Object}},i=(s(23),s(1)),n=Object(i.a)(e,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"list"},[s("router-link",{attrs:{to:{name:"user",params:{id:t.data.author.loginname}}}},[s("img",{attrs:{src:t.data.author.avatar_url,alt:t.data.author.loginname}})]),t._v(" "),s("div",{staticClass:"content"},["reply"!==t.listType?s("router-link",{attrs:{to:{name:"topic",params:{id:t.data.id}}}},[s("h2",[t._v(t._s(t.data.title))])]):t._e(),t._v(" "),s("div",{staticClass:"meta"},[s("span",[t._v(t._s(t.data.author.loginname))]),t._v(" "),t.data.create_at?s("span",[t._v("发表时间："+t._s(new Date(t.data.create_at).getFullYear()+"-"+(new Date(t.data.create_at).getMonth()+1)))]):t._e(),t._v(" "),"reply"!==t.listType?s("span",[t._v("最后回复："+t._s(t.data.last_reply_at))]):t._e()]),t._v(" "),"reply"==t.listType?s("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.data.content)}}):t._e(),t._v(" "),"post"==t.listType?s("div",{staticClass:"tag"},[t.data.good?s("span",[t._v("good")]):t._e(),t._v(" "),t.data.top?s("span",[t._v("top")]):t._e()]):t._e(),t._v(" "),"post"==t.listType?s("div",{staticClass:"view"},[s("span",[t._v(t._s(t.data.reply_count||0)+" ")]),t._v(" "),s("span",[t._v("/"+t._s(t.data.visit_count||0))])]):t._e()],1)],1)},[],!1,null,"630232cc",null);a.a=n.exports},23:function(t,a,s){"use strict";var e=s(19);s.n(e).a},25:function(t,a,s){"use strict";var e={name:"loading"},i=(s(33),s(1)),n=Object(i.a)(e,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"loading"}},[a("span"),this._v(" "),a("span"),this._v(" "),a("span")])}],!1,null,"f0aa6358",null);a.a=n.exports},31:function(t,a,s){},33:function(t,a,s){"use strict";var e=s(20);s.n(e).a},52:function(t,a,s){"use strict";var e=s(31);s.n(e).a},72:function(t,a,s){"use strict";s.r(a);var e=s(24),i=s.n(e),n=s(21),o=s(25),r=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e])}return t},c={name:"post",data:function(){return{isLoading:!0,topics:[],topicsParams:{tab:"all",page:1,limit:15,mdrender:!0}}},mounted:function(){window.scrollTo(0,0),document.addEventListener("scroll",this.onScrollHandle),this.$route.query.tab&&(this.topicsParams.tab=this.$route.query.tab),this.getTopics()},beforeDestroyed:function(){document.removeEventListener("scroll",this.onScrollHandle)},beforeRouteLeave:function(t,a,s){document.removeEventListener("scroll",this.onScrollHandle),s()},methods:{getTopics:function(){var t=this;this.$message("加载中"),this.isLoading=!0,i.a.get("https://cnodejs.org/api/v1/topics",{params:this.topicsParams}).then(function(a){t.topics=t.topics.concat(a.data.data),t.isLoading=!1})},onScrollHandle:function(t){if(document.body.scrollTop){var a=t.target.body.clientHeight,s=t.target.body.scrollHeight;t.target.body.scrollTop+a===s&&(this.topicsParams.page+=1,this.getTopics())}else{var e=t.target.documentElement.clientHeight,i=t.target.documentElement.scrollHeight;t.target.documentElement.scrollTop+e===i&&(this.topicsParams.page+=1,this.getTopics())}}},watch:{$route:function(t){window.scrollTo(0,0),t.query.tab&&(this.topicsParams=r({},this.topicsParams,{tab:t.query.tab,page:1}),this.topics=[],this.getTopics()),"/"===t.fullPath&&(this.topicsParams=r({},this.topicsParams,{tab:"all",page:1}),this.topics=[],this.getTopics())}},components:{List:n.a,Loading:o.a}},l=(s(52),s(1)),p=Object(l.a)(c,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"post"}},[this._l(this.topics,function(t){return a("li",{key:t.id},[a("list",{attrs:{data:t,listType:"post"}})],1)}),this._v(" "),this.isLoading?a("loading"):this._e()],2)},[],!1,null,"469d5d33",null);a.default=p.exports}}]);