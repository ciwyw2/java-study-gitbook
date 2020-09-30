(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1145:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"整合spring-boot-admin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#整合spring-boot-admin"}},[t._v("#")]),t._v(" 整合Spring Boot Admin")]),t._v(" "),n("h2",{attrs:{id:"_1-简称"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-简称"}},[t._v("#")]),t._v(" 1. 简称")]),t._v(" "),n("p",[t._v("Spring Boot Admin 通过 "),n("code",[t._v("Spring-boot-starter-actuator")]),t._v(" 提供的REST接口实现了图形化的监控界面，包括应用的配置信息，Beans信息、环境属性、线程信息、JVM 状态等。")]),t._v(" "),n("p",[t._v("Spring Boot Admin 分为服务端和客户端。客户端通过HTTP向服务端提供自身信息，服务端收集这些信息并以图形化界面的方式呈现。（Spring Boot Admin客户端简称为SBA客户端，Spring Boot Admin 服务端简称为SBA服务端）")]),t._v(" "),n("h2",{attrs:{id:"_2-sba服务端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-sba服务端"}},[t._v("#")]),t._v(" 2. SBA服务端")]),t._v(" "),n("h3",{attrs:{id:"_2-1-添加pom依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-添加pom依赖"}},[t._v("#")]),t._v(" 2.1 添加pom依赖")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[t._v("        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("de.codecentric"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-admin-server"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.1.6"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("de.codecentric"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-admin-server-ui"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.1.6"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[n("code",[t._v("spring-boot-admin-server-ui")]),t._v("依赖，该依赖用于图形化展示监控数据。")]),t._v(" "),n("h3",{attrs:{id:"_2-2-添加-enableadminserver注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-添加-enableadminserver注解"}},[t._v("#")]),t._v(" 2.2 添加"),n("code",[t._v("@EnableAdminServer")]),t._v("注解")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableAdminServer")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FebsMonitorAdminApplication")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FebsMonitorAdminApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2-3-编写配置文件application-yml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-编写配置文件application-yml"}},[t._v("#")]),t._v(" 2.3 编写配置文件application.yml：")]),t._v(" "),n("div",{staticClass:"language-yml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Monitor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Admin\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("boot")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("admin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ui")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("spring.application.name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("应用名称为FEBS-Monitor-Admin，"),n("code",[t._v("spring.boot.admin.ui.title")]),t._v("配置了Web页面的title为Monitor-Admin。")]),t._v(" "),n("h3",{attrs:{id:"_2-4-浏览器访问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-浏览器访问"}},[t._v("#")]),t._v(" 2.4 浏览器访问")]),t._v(" "),n("p",[t._v("使用浏览器访问 [http://localhost:8080：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(539),alt:"image-20191202233352164"}})]),t._v(" "),n("p",[t._v("因为没有登录，页面直接被重定向到登录页，输入用户名和密码后：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(540),alt:"image-20191202233413273"}})]),t._v(" "),n("p",[t._v("因为还没有搭建SBA客户端，所以监控信息都是空的")]),t._v(" "),n("h2",{attrs:{id:"_3-sba客户端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-sba客户端"}},[t._v("#")]),t._v(" 3. SBA客户端")]),t._v(" "),n("p",[t._v("被SBA服务端监控的微服务就是SBA 客户端")]),t._v(" "),n("h3",{attrs:{id:"_3-1-添加pom依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-添加pom依赖"}},[t._v("#")]),t._v(" 3.1 添加POM依赖")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("de.codecentric"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-admin-starter-client"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.1.6"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h3",{attrs:{id:"_3-2-添加配置信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-添加配置信息"}},[t._v("#")]),t._v(" 3.2 添加配置信息")]),t._v(" "),n("div",{staticClass:"language-yml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("boot")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("admin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8401")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zsz\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("spring.application.name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@project.description@"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@project.version@"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("management")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoints")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exposure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("include")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("health")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("show-details")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ALWAYS\n")])])]),n("p",[t._v("这些配置的含义如下：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("spring.boot.admin.client.url")]),t._v("指定了SBA服务端地址；")]),t._v(" "),n("li",[n("code",[t._v("spring.boot.admin.client.username")]),t._v("对应SBA服务端的用户名；")]),t._v(" "),n("li",[n("code",[t._v("spring.boot.admin.client.password")]),t._v("对应SBA服务端的密码；")]),t._v(" "),n("li",[n("code",[t._v("info.**")]),t._v("配置了SBA客户端的名称，描述和版本信息；")]),t._v(" "),n("li",[n("code",[t._v("management.endpoints.web.exposure.include='*'")]),t._v("表示将SBA客户端的所有监控端点都暴露给SBA服务端；")]),t._v(" "),n("li",[n("code",[t._v("management.endpoint.health.show-details")]),t._v("表示总是展示详细的健康信息。")])]),t._v(" "),n("h3",{attrs:{id:"_3-3-浏览器访问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-浏览器访问"}},[t._v("#")]),t._v(" 3.3 浏览器访问")]),t._v(" "),n("p",[n("img",{attrs:{src:s(541),alt:"image-20191202234726467"}})]),t._v(" "),n("p",[n("img",{attrs:{src:s(542),alt:"image-20191202234734852"}})]),t._v(" "),n("p",[n("img",{attrs:{src:s(543),alt:"image-20191202234742046"}})])])}),[],!1,null,null,null);a.default=e.exports},539:function(t,a,s){t.exports=s.p+"assets/img/image-20191202233352164.d4bcf921.png"},540:function(t,a,s){t.exports=s.p+"assets/img/image-20191202233413273.54c75956.png"},541:function(t,a,s){t.exports=s.p+"assets/img/image-20191202234726467.4b7a5338.png"},542:function(t,a,s){t.exports=s.p+"assets/img/image-20191202234734852.773690e0.png"},543:function(t,a,s){t.exports=s.p+"assets/img/image-20191202234742046.a6cf60c1.png"}}]);