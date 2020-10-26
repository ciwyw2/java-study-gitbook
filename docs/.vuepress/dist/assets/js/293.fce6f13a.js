(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1220:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"接收请求参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接收请求参数"}},[t._v("#")]),t._v(" 接收请求参数")]),t._v(" "),e("p",[t._v("Spring MVC 接收参数的方式")]),t._v(" "),e("ul",[e("li",[t._v("查询参数（Query Parameter）")]),t._v(" "),e("li",[t._v("表单参数（Form Paramter）")]),t._v(" "),e("li",[t._v("路径参数（Path Variable）")])]),t._v(" "),e("h3",{attrs:{id:"_1-处理查询参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-处理查询参数"}},[t._v("#")]),t._v(" 1.处理查询参数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@RequestMapping(method = RequestMethod.GET)\npublic List<Data> getData(@RequestParam(value = "max",defaultValue = "100") long max,\n                          @RequestParam(value = "count",defaultValue = "20") int count\n                          ){\n    ...\n    return data;\n}\n')])])]),e("p",[t._v("使用@RequestParam获取请求参数")]),t._v(" "),e("ul",[e("li",[t._v("value ：参数名，没有额外添加时可以不要value")]),t._v(" "),e("li",[t._v("defaultValue：设置默认值")])]),t._v(" "),e("h3",{attrs:{id:"_2-通过路径参数接受输入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过路径参数接受输入"}},[t._v("#")]),t._v(" 2.通过路径参数接受输入")]),t._v(" "),e("p",[t._v("从面向资源的角度，要识别的资源应该通过url路径进行标示，而不是参数")]),t._v(" "),e("p",[t._v("为了实现这种路径变量，Spring MVC允许我们在@RequestMapping路径中添加占位符，占位符的名称要用大括号（”{“和”}“）括起来")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@RequestMapping(value = "/{spittleId}",method = RequestMethod.GET)\npublic String spittle(@PathVariable("spittleId") long spittleId){\n    ...\n}\n')])])]),e("p",[t._v("当参数名与  @PathVariable注解的值相同时可以去掉")]),t._v(" "),e("h3",{attrs:{id:"_3-处理表单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-处理表单"}},[t._v("#")]),t._v(" 3.处理表单")]),t._v(" "),e("p",[t._v("使用对象来接收表单参数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('  @RequestMapping(value = "/register",method = RequestMethod.POST)\n    public String processRegister(Spitter spitter){\n        ...\n    }\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);