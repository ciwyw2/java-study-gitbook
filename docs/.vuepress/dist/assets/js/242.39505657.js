(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{1149:function(_,v,t){"use strict";t.r(v);var a=t(42),r=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[_._v("#")]),_._v(" CDN")]),_._v(" "),t("h2",{attrs:{id:"_1-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-是什么"}},[_._v("#")]),_._v(" 1. 是什么")]),_._v(" "),t("p",[_._v("CDN是将"),t("strong",[_._v("源站内容")]),_._v("分发至"),t("strong",[_._v("最接近用户")]),_._v("的节点，使用户可就近取得所需内容，提高用户访问的响应速度和成功率。")]),_._v(" "),t("h2",{attrs:{id:"_2-解决了什么问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决了什么问题"}},[_._v("#")]),_._v(" 2.解决了什么问题")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("加速网站的访问")]),_._v(" "),t("p",[_._v("一个网站每慢一秒钟，就会丢失许多访客")])]),_._v(" "),t("li",[t("p",[_._v("视音频点播/大文件下载分发加速")])]),_._v(" "),t("li",[t("p",[_._v("视频直播加速")])]),_._v(" "),t("li",[t("p",[_._v("移动应用加速")]),_._v(" "),t("p",[_._v("移动app更新文件（apk文件）分发，图片，短视频等")])])]),_._v(" "),t("h3",{attrs:{id:"_3-适用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-适用场景"}},[_._v("#")]),_._v(" 3.适用场景")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("网站站点/应用加速")]),_._v(" "),t("p",[_._v("静态资源如各类型的图片、html、css、js文件等")]),_._v(" "),t("p",[_._v("前后端分离之后，前端就可以使用cdn加速")])])]),_._v(" "),t("h3",{attrs:{id:"_4-基本工作过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-基本工作过程"}},[_._v("#")]),_._v(" 4.基本工作过程")]),_._v(" "),t("p",[_._v("最简单的cdn网络由一个DNS服务器和几台缓存服务器组成")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("当用户点击网站页面上的url，经过本地DNS系统解析，DNS系统会最终将域名解析权交给"),t("strong",[_._v("CNAME指向的CND专用DNS服务器")])])]),_._v(" "),t("li",[t("p",[_._v("CDN的DNS服务器将CDN的全局负载均衡设备ip地址返回用户")])]),_._v(" "),t("li",[t("p",[_._v("用户向CDN的全局负载均衡设备发起内容URL访问请求")])]),_._v(" "),t("li",[t("p",[_._v("CDN全局负载均衡设备根据用户的ip地址，以及用户请求的内容url，选择一台用户所属区域的负载均衡设备，告诉用户想这台设备发起请求")])]),_._v(" "),t("li",[t("p",[_._v("区域负载均衡设备会为用户"),t("strong",[_._v("选择一台合适的缓存服务器")]),_._v("提供服务器，选择的依据包括：")]),_._v(" "),t("ol",[t("li",[_._v("根据用户的ip地址，判断拿一台服务器距用户最近")]),_._v(" "),t("li",[_._v("根据用户所请求的url携带的内容名称，判断哪一台服务器上有用户所需内容")]),_._v(" "),t("li",[_._v("查询各个服务器当前的负载情况，判断哪一台服务器尚有服务器能力")])]),_._v(" "),t("p",[_._v("基于以上这些条件的综合分析之后，区域负载均衡设备会向全局负载均衡设备返回一台缓存服务器的ip 地址")])]),_._v(" "),t("li",[t("p",[_._v("全局负载均衡设备吧服务器的ip地址返回给用户")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("用户向缓存服务器发起请求")]),_._v("，缓存服务器响应用户请求，将用户所需内容传送到用户终端，如果这台缓存服务器上没有用户想要的内容，而区域均衡设备依然将它分配给了用户。那么这台服务器就要"),t("strong",[_._v("向他的上一级缓存服务器请求内容")]),_._v("，"),t("strong",[_._v("直至追溯大网站的源服务")]),_._v("将内容拉到本地")])])]),_._v(" "),t("p",[_._v("![image-20190824223533082](/Users/zhangshengzhong/Library/Application Support/typora-user-images/image-20190824223533082.png)")])])}),[],!1,null,null,null);v.default=r.exports}}]);