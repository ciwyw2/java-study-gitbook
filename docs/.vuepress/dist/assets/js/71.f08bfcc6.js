(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1355:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"spring-cloud-gateway之filter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-gateway之filter"}},[t._v("#")]),t._v(" Spring Cloud GateWay之Filter")]),t._v(" "),n("h2",{attrs:{id:"_1-filter的作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-filter的作用"}},[t._v("#")]),t._v(" 1. Filter的作用")]),t._v(" "),n("ul",[n("li",[t._v("“pre”类型的过滤器：参数校验、权限校验、流量监控、日志输出、协议转换等")]),t._v(" "),n("li",[t._v("“post”类型的过滤器：响应内容、响应头的修改，日志的输出，流量监控等")])]),t._v(" "),n("h3",{attrs:{id:"_1-1-filter的作用实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-filter的作用实例"}},[t._v("#")]),t._v(" 1.1 Filter的作用实例")]),t._v(" "),n("p",[t._v("当我们有很多服务时，比如下图中的user-service、goods-service、sales-service等服务，客户端"),n("strong",[t._v("请求各个服务的Api时，每个服务都需要做相同的事情，比如鉴权、限流、日志输出")]),t._v("等。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(786),alt:"image-20200119210223296"}})]),t._v(" "),n("p",[t._v("对于这样重复工作，有没有办法做得更好？我们可以在"),n("strong",[t._v("微服务的上一层加一个全局的权限控制，限流、日志输出的Api Gateway服务")]),t._v("。然后再将请求转发到具体的业务服务层。这个Api Gateway服务就是起到一个服务边界的作用，"),n("strong",[t._v("外界的请求访问系统，必须先通过网关层")]),t._v("。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(787),alt:"image-20200119210408713"}})]),t._v(" "),n("h2",{attrs:{id:"_2-生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-生命周期"}},[t._v("#")]),t._v(" 2. 生命周期")]),t._v(" "),n("p",[t._v("Spring Cloud Gateway同zuul类似，"),n("strong",[t._v("有“pre”和“post”两种方式的filter")]),t._v("。客户端的请求先经过“pre”类型的filter，然后将请求转发到具体的业务服务，比如上图中的user-service，收到业务服务的响应之后，再经过“post”类型的filter处理，最后返回响应到客户端。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(788),alt:"image-20200119210640782"}})]),t._v(" "),n("h2",{attrs:{id:"_3-作用范围"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-作用范围"}},[t._v("#")]),t._v(" 3. 作用范围")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("gateway filter：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("针对单个路由")])]),t._v(" "),n("li",[n("p",[t._v("需要通过spring.cloud.routes.filters 配置在具体路由下，只作用在当前路由上或通过spring.cloud.default-filters配置在全局，作用在所有路由上")])])])]),t._v(" "),n("li",[n("p",[t._v("global gateway filer")]),t._v(" "),n("ul",[n("li",[t._v("针对所有路由")]),t._v(" "),n("li",[t._v("全局过滤器，不需要在配置文件中配置，作用在所有的路由上，最终通过GatewayFilterAdapter包装成GatewayFilterChain可识别的过滤器，它为请求业务以及路由的URI转换为真实业务服务的请求地址的核心过滤器，不需要配置，系统初始化时加载，并作用在每个路由上。")])])])]),t._v(" "),n("h2",{attrs:{id:"_4-自定义globalfilter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-自定义globalfilter"}},[t._v("#")]),t._v(" 4. 自定义GlobalFilter")]),t._v(" "),n("p",[t._v("自定义filter 需要实现GlobalFilter, Ordered")]),t._v(" "),n("p",[t._v("例如：该GlobalFilter会校验请求中是否包含了请求参数“token”，如何不包含请求参数“token”则不转发路由，否则执行正常的逻辑。代码如下：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TokenFilter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GlobalFilter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ordered")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" logger"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TokenFilter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mono")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerWebExchange")]),t._v(" exchange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GatewayFilterChain")]),t._v(" chain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" token "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" exchange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getQueryParams")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFirst")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token is empty..."')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            exchange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResponse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStatusCode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpStatus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UNAUTHORIZED"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" exchange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResponse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setComplete")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" chain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exchange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOrder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"参考文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/forezp/article/details/85057268",target:"_blank",rel:"noopener noreferrer"}},[t._v("spring cloud gateway之filter篇"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports},786:function(t,s,a){t.exports=a.p+"assets/img/image-20200119210223296.93eb7b43.png"},787:function(t,s,a){t.exports=a.p+"assets/img/image-20200119210408713.fbd0d6ed.png"},788:function(t,s,a){t.exports=a.p+"assets/img/image-20200119210640782.17e02a04.png"}}]);