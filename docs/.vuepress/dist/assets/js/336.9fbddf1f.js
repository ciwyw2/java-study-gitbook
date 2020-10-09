(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1254:function(t,_,v){"use strict";v.r(_);var e=v(42),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"list列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#list列表"}},[t._v("#")]),t._v(" List列表")]),t._v(" "),v("p",[t._v("redis的列表允许用户从序列两端推入或者弹出元素")]),t._v(" "),v("h2",{attrs:{id:"_1-操作命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-操作命令"}},[t._v("#")]),t._v(" 1.操作命令")]),t._v(" "),v("h3",{attrs:{id:"_1-1-常用命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-常用命令"}},[t._v("#")]),t._v(" 1.1 常用命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("用例")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("LPUSH")]),t._v(" "),v("td",[t._v("LPUSH key-name value [value ...]")]),t._v(" "),v("td",[t._v("将一个或多个值推入列表的左端")])]),t._v(" "),v("tr",[v("td",[t._v("RPUSH")]),t._v(" "),v("td",[t._v("RPUSH key-name value [value ...]")]),t._v(" "),v("td",[t._v("将一个或多个值推入列表的右端")])]),t._v(" "),v("tr",[v("td",[t._v("LPOP")]),t._v(" "),v("td",[t._v("LPOP key-name")]),t._v(" "),v("td",[t._v("移除并返回列表最左端的元素")])]),t._v(" "),v("tr",[v("td",[t._v("RPOP")]),t._v(" "),v("td",[t._v("RPOP key-name")]),t._v(" "),v("td",[t._v("移除并返回列表最右端的元素")])]),t._v(" "),v("tr",[v("td",[t._v("LINDEX")]),t._v(" "),v("td",[t._v("LINDEX key-name offset")]),t._v(" "),v("td",[t._v("返回列表中偏移量为offset的元素")])]),t._v(" "),v("tr",[v("td",[t._v("LRANGE")]),t._v(" "),v("td",[t._v("LRANGE key-name start end")]),t._v(" "),v("td",[t._v("返回列表从start偏移量到end偏移量范围内的所有元素(包含start,end)")])]),t._v(" "),v("tr",[v("td",[t._v("LTRIM")]),t._v(" "),v("td",[t._v("LTRIM key-name start end")]),t._v(" "),v("td",[t._v("对列表进行修剪，只保留start和end偏移量之间的元素（包含start,end）")])])])]),t._v(" "),v("h2",{attrs:{id:"_1-2-阻塞式的列表弹出命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-阻塞式的列表弹出命令"}},[t._v("#")]),t._v(" 1.2 阻塞式的列表弹出命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("用例")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("BLPOP")]),t._v(" "),v("td",[t._v("BLPOP key-name [key-name …] timeout")]),t._v(" "),v("td",[t._v("从第一个非空列表中弹出位于最左端的元素，或者在timeout秒之内阻塞并等待可弹出的元素出现")])]),t._v(" "),v("tr",[v("td",[t._v("BRPOP")]),t._v(" "),v("td",[t._v("BRPOP key-name [key-name …] timeout")]),t._v(" "),v("td",[t._v("从第一个非空列表中弹出位于最右端的元素，或者在timeout秒之内阻塞并等待可弹出的元素出现")])])])]),t._v(" "),v("h3",{attrs:{id:"_1-3-列表之间移动元素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-列表之间移动元素"}},[t._v("#")]),t._v(" 1.3 列表之间移动元素")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("用例")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("RPOPLPUSH")]),t._v(" "),v("td",[t._v("RPOPLPUSH source-key dest-key")]),t._v(" "),v("td",[t._v("从souce-key列表中弹出位于最右端的元素，然后将这个元素推入desr-key最左端。并向用户返回这个元素")])]),t._v(" "),v("tr",[v("td",[t._v("BRPOPLPUSH")]),t._v(" "),v("td",[t._v("BRPOPLPUSH source-key dest-key")]),t._v(" "),v("td",[t._v("从source-key列表中弹出位于最右端的元素，然后将这个元素推入dest-key列表最左端。并向用户返回这个元素。如果soutce-key为空，那么在timeout秒之内之内阻塞并等待可弹出的元素出现")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);