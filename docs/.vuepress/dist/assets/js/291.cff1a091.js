(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{1265:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"spring-ioc常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc常见问题"}},[t._v("#")]),t._v(" Spring IoC常见问题")]),t._v(" "),s("h2",{attrs:{id:"_1-概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述"}},[t._v("#")]),t._v(" 1. 概述")]),t._v(" "),s("p",[t._v("Spring 框架的核心是Spring IoC 容器。容器创建 Bean 对象，将它们装配在一起，配置它们并管理它们的完整生命周期")]),t._v(" "),s("ul",[s("li",[t._v("Spring 容器使用"),s("strong",[t._v("依赖注入")]),t._v("来管理组成应用程序的 Bean 对象。")]),t._v(" "),s("li",[t._v("容器通过读取提供的"),s("strong",[t._v("配置元数据")]),t._v(" Bean Definition来接收对象进行实例化，配置和组装的指令")]),t._v(" "),s("li",[t._v("该配置元数据Bean Definition 可以"),s("strong",[t._v("通过XML，Java 注解或Java Config代码提供")])])]),t._v(" "),s("h2",{attrs:{id:"_2-什么是依赖注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是依赖注入"}},[t._v("#")]),t._v(" 2. 什么是依赖注入？")]),t._v(" "),s("p",[t._v("在依赖注入中，你不必主动，手动创建对象，但必须描述如何创建它们。")]),t._v(" "),s("ul",[s("li",[t._v("你不是直接在代码中将组件和服务连接在一起，而是描述配置文件中哪些组件需要哪些服务")]),t._v(" "),s("li",[t._v("然后，再由IoC容器将他们装配在一起")])]),t._v(" "),s("p",[t._v("依赖注入的英文缩写是 Dependency Injection ，简称 DI 。")]),t._v(" "),s("h2",{attrs:{id:"_3-ioc-和-di-有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-ioc-和-di-有什么区别"}},[t._v("#")]),t._v(" 3. IoC 和 DI 有什么区别？")]),t._v(" "),s("p",[t._v("IoC 是个更宽泛的概念，DI 是更具体的。")]),t._v(" "),s("h2",{attrs:{id:"_4-可以通过多少种方式完成依赖注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-可以通过多少种方式完成依赖注入"}},[t._v("#")]),t._v(" 4. 可以通过多少种方式完成依赖注入？")]),t._v(" "),s("p",[t._v("通常，依赖注入可以通过以下三种方式完成")]),t._v(" "),s("ul",[s("li",[t._v("接口注入")]),t._v(" "),s("li",[t._v("构造函数注入")]),t._v(" "),s("li",[t._v("setter 注入")])]),t._v(" "),s("p",[t._v("目前，在Spring Framework中，仅使用"),s("strong",[t._v("构造函数和setter 注入")]),t._v("这两种方式")]),t._v(" "),s("h3",{attrs:{id:"_4-1-构造函数和setter-注入的优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-构造函数和setter-注入的优缺点"}},[t._v("#")]),t._v(" 4.1 构造函数和setter 注入的优缺点")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("构造函数注入")]),t._v(" "),s("th",[t._v("setter注入")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("没有部分注入")]),t._v(" "),s("td",[t._v("有部分注入")])]),t._v(" "),s("tr",[s("td",[t._v("不会覆盖setter 属性")]),t._v(" "),s("td",[t._v("会覆盖setter属性")])]),t._v(" "),s("tr",[s("td",[t._v("任意修改都会创建一个新的实例")]),t._v(" "),s("td",[t._v("任意修改不会创建一个新实例")])]),t._v(" "),s("tr",[s("td",[t._v("适用于设置很多属性")]),t._v(" "),s("td",[t._v("适用于设置少量属性")])])])]),t._v(" "),s("p",[t._v("实际场景下，setter 注入使用的更多")]),t._v(" "),s("h2",{attrs:{id:"_5-spring-中有多少种ioc-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-spring-中有多少种ioc-容器"}},[t._v("#")]),t._v(" 5. Spring 中有多少种IoC 容器")]),t._v(" "),s("p",[t._v("Spring 提供了两种（不是”个“）IoC 容器，分别是BeanFactory、ApplicationContext")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("BeanFactory")]),t._v(" "),s("blockquote",[s("p",[t._v("BeanFactory 在Spring-beans 项目提供")])]),t._v(" "),s("p",[t._v("BeanFactory，就像一个包含Bean 集合的工厂类。他会在客户端要求时实例化 Bean 对象。")])]),t._v(" "),s("li",[s("p",[t._v("ApplicationContext")]),t._v(" "),s("blockquote",[s("p",[t._v("ApplicationContext 在 spring-context 项目提供")])]),t._v(" "),s("p",[t._v("ApplicationContext接口扩展了BeanFactory接口，他在BeanFactory基础上提供了一些额外的功能。内置如下功能：")]),t._v(" "),s("ul",[s("li",[t._v("MesssageSource：管理message，实现国际化等功能")]),t._v(" "),s("li",[t._v("ApplicationEventPublisher：事件发布。")]),t._v(" "),s("li",[t._v("ResourcePatternResolver：多资源加载")]),t._v(" "),s("li",[t._v("EnvironmentCapable：系统Environment（profile+Properties）相关")]),t._v(" "),s("li",[t._v("Lifecycle：管理生命周期")]),t._v(" "),s("li",[t._v("Closable：关闭，释放资源")]),t._v(" "),s("li",[t._v("initalizingBean：自定义初始化")]),t._v(" "),s("li",[t._v("BeanNameAware : 设置beanName的Aware接口")])]),t._v(" "),s("p",[t._v("另外，ApplicationContext 会自动初始化非懒加载的Bean 对象们")]),t._v(" "),s("h3",{attrs:{id:"_5-1-beanfactory-与-applicationcontext-的两种差异"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-beanfactory-与-applicationcontext-的两种差异"}},[t._v("#")]),t._v(" 5.1 BeanFactory 与 ApplicationContext 的两种差异")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("BeanFactory")]),t._v(" "),s("th",[t._v("ApplicationContext")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("使用懒加载")]),t._v(" "),s("td",[t._v("使用即时加载")])]),t._v(" "),s("tr",[s("td",[t._v("它使用语法显式提供资源对象")]),t._v(" "),s("td",[t._v("它自己创建和管理资源对象")])]),t._v(" "),s("tr",[s("td",[t._v("不支持国际化")]),t._v(" "),s("td",[t._v("支持国际化")])]),t._v(" "),s("tr",[s("td",[t._v("不支持基于依赖的注解")]),t._v(" "),s("td",[t._v("支持基于依赖的注解")])])])]),t._v(" "),s("p",[t._v("另外、BeanFactory 也被称为"),s("strong",[t._v("低级")]),t._v("容器，而ApplicationContext 被称为"),s("strong",[t._v("高级")]),t._v("容器")])])]),t._v(" "),s("h2",{attrs:{id:"_6-请介绍下常用的beanfactory-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-请介绍下常用的beanfactory-容器"}},[t._v("#")]),t._v(" 6. 请介绍下常用的BeanFactory 容器？")]),t._v(" "),s("p",[t._v("BeanFactory 最常用的是XmlBeanFactory，它可以根据XML文件中定义的内容，创建相应的Bean")]),t._v(" "),s("h2",{attrs:{id:"_7-请介绍下常用的-applicationcontext-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-请介绍下常用的-applicationcontext-容器"}},[t._v("#")]),t._v(" 7.请介绍下常用的 ApplicationContext 容器？")]),t._v(" "),s("p",[t._v("以下是三种较常见的ApplicationContext 实现方式")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("ClassPathXmlApplicationContext：从ClassPath的XML 配置文件中读取上下文，并生成上下文定义。应用程序上下文从程序环境变量中取得")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationContext")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassPathXmlApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“bean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("FileSystemXmlApplicationContext: 由文件系统的XML配置文件读取上下文。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationContext")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileSytemXmlApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bean.xml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("XmlWebApplicationContext: 由Web 应用的XML文件读取上下文。例如我们在Spring MVC 使用情况")])])]),t._v(" "),s("p",[s("strong",[t._v("ConfigServletWebServerApplicationContext")]),t._v("（Spring Boot）：")]),t._v(" "),s("p",[t._v("目前我们更多使用的是Spring Boot 为主，所以使用的是第四种ApplicationContext容器。ConfigServletWebServerApplicationContext。")]),t._v(" "),s("h2",{attrs:{id:"_8-列举一些-ioc-的一些好处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-列举一些-ioc-的一些好处"}},[t._v("#")]),t._v(" 8. 列举一些 IoC 的一些好处？")]),t._v(" "),s("ul",[s("li",[t._v("它将最小化应用程序中的代码")]),t._v(" "),s("li",[t._v("它以最小的影响和最少的侵入机制促进松耦合")]),t._v(" "),s("li",[t._v("它支持即时的实例化和延迟加载Bean对象")]),t._v(" "),s("li",[t._v("它将使您的应用程序易于测试，因为他不需要单元测试用例中的任何单例或JNDI查找机制")])]),t._v(" "),s("h2",{attrs:{id:"_9-简述spring-ioc-的实现机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-简述spring-ioc-的实现机制"}},[t._v("#")]),t._v(" 9. 简述Spring IoC 的实现机制？")]),t._v(" "),s("p",[t._v("简单来说，Spring 中的IoC的实现原理，就是"),s("strong",[t._v("工厂模式")]),t._v("加"),s("strong",[t._v("反射机制")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fruit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Apple")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fruit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Apple"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Orange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fruit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Orange"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Factory")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fruit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" className"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fruit")]),t._v(" f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fruit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("className"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Client")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fruit")]),t._v(" f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Factory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.github.dunwu.spring.Apple"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("Fruit接口，有Apple 和Orange两个实现类")]),t._v(" "),s("li",[t._v("Factory工厂，通过反射机制，创建className 对应的Fruit 对象")]),t._v(" "),s("li",[t._v("Client 通过Factory 工厂，获得对应的Fruit 对象")]),t._v(" "),s("li",[t._v("实际情况下，Spring IoC 比这个复杂很多很多，例如单例Bean 对象，Bean 的属性注入，相互依赖的Bean 的处理")])]),t._v(" "),s("h2",{attrs:{id:"_10-spring-框架中有哪些不同类型的事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-spring-框架中有哪些不同类型的事件"}},[t._v("#")]),t._v(" 10. Spring 框架中有哪些不同类型的事件？")]),t._v(" "),s("p",[t._v("Spring 的ApplicationContext 提供了支持事件和代码中监听器的功能。")]),t._v(" "),s("p",[t._v("我们可以创建 Bean 用来监听在 ApplicationContext 中发布的事件。如果一个 Bean 实现了 ApplicationListener 接口，当一个ApplicationEvent 被发布以后，Bean 会自动被通知。示例代码如下")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AllApplicationEventListener")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationListener")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onApplicationEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationEvent")]),t._v(" applicationEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// process event  ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Spring 提供了以下五种标准的事件")])]),t._v(" "),s("ol",[s("li",[t._v("上下文更新事件（ContextRefreshedEvent）：该事件会在ApplicationContext 被初始化或者更新时发布。也可以在调用ConfigurableApplicationContext 接口中的"),s("code",[t._v("#refresh（）")]),t._v("方法时被触发")]),t._v(" "),s("li",[t._v("上下文开始事件（ContextStartedEvent）：当容器调用ConfigurableApplicationContext的"),s("code",[t._v("#start（）")]),t._v("方法开始/重新开始容器时触发该事件。")]),t._v(" "),s("li",[t._v("上下文停止事件（ContextStoppedEvent）：当容器调用ConfigurableApplicationContext 的"),s("code",[t._v("#stop()")]),t._v("方法停止容器时触发该事件")]),t._v(" "),s("li",[t._v("上下文关闭事件（ContextCloseEvent）：当ApplicationContext 被关闭时触发该事件。容器被关闭时，其管理的所有单例 Bean 都被销毁")]),t._v(" "),s("li",[t._v("请求处理事件（RequestHandledEvent）：在Web应用中，当一个Http 请求（request）结束触发该事件")])]),t._v(" "),s("h3",{attrs:{id:"_10-1-自定义扩展事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-自定义扩展事件"}},[t._v("#")]),t._v(" 10.1 自定义扩展事件")]),t._v(" "),s("p",[t._v("除了以上事件，还可以通过扩展 ApplicationEvent 类来开发"),s("strong",[t._v("自定义")]),t._v("的事件")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("实例自定义的事件的类")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomApplicationEvent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomApplicationEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("为了监听这个事件，还需要创建一个监听器")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomEventListener")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationListener")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomApplicationEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onApplicationEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomApplicationEvent")]),t._v(" applicationEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handle event  ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("之后通过ApplicationContext 接口的"),s("code",[t._v("#publishEvent(Object event)")]),t._v("方法，来发布自定义事件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('// 创建 CustomApplicationEvent 事件\nCustomApplicationEvent customEvent = new CustomApplicationEvent(applicationContext, "Test message");\n// 发布事件\napplicationContext.publishEvent(customEvent);\n')])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);