(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1281:function(t,a,e){"use strict";e.r(a);var r=e(42),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"校验数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#校验数据"}},[t._v("#")]),t._v(" 校验数据")]),t._v(" "),r("p",[t._v("从Spring 3.0开始提供对Java校验API(Java Validation API,又称JSR-303)的支持")]),t._v(" "),r("p",[t._v("Java校验API所提供的校验注解(所有注解都在javax.validation.constraints 包下)")]),t._v(" "),r("p",[r("img",{attrs:{src:e(620),alt:"image-20190731224204395"}})]),t._v(" "),r("h2",{attrs:{id:"使用实例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用实例"}},[t._v("#")]),t._v(" 使用实例")]),t._v(" "),r("p",[t._v("Spitter 简单POJO")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("public class Spitter {\n\n    // 非空，5-16个字符\n    @NotNull\n    @Size(min = 5,max = 16)\n    private String username;\n\n}\n")])])]),r("p",[t._v("processRegister注册方法")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('@RequestMapping(value = "/register",method = RequestMethod.POST)\npublic String processRegister(@Valid Spitter spitter, Errors errors){\n    if (errors.hasErrors()){\n        return "registerForm";\n    }\n    ...\n}\n')])])])])}),[],!1,null,null,null);a.default=s.exports},620:function(t,a,e){t.exports=e.p+"assets/img/vali.deb5a534.png"}}]);