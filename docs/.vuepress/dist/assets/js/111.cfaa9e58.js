(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1411:function(i,_,v){"use strict";v.r(_);var a=v(42),t=Object(a.a)({},(function(){var i=this,_=i.$createElement,a=i._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[a("h1",{attrs:{id:"微服务治理梳理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务治理梳理"}},[i._v("#")]),i._v(" 微服务治理梳理")]),i._v(" "),a("p",[i._v("​\t微服务架构之后服务越来越多，可能会几十上百个服务。要对这些服务进行管理并非易事。又出现一堆让人头晕眼花的概念：服务注册发现，请求链路追踪，服务熔断，服务限流，服务管控配置，服务预警。还有一大堆开源工具：Eurake，Zuul，Ribbon，hystrix，zipkin，dubbo，Sleuth，Elastic Search，grafna，Promethues。")]),i._v(" "),a("p",[i._v("​\t这么多的概念和工具究竟在解决什么问题，解决哪些问题，为了解决这些问题应该具备哪些能力")]),i._v(" "),a("h2",{attrs:{id:"_2-服务治理的那些药"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-服务治理的那些药"}},[i._v("#")]),i._v(" 2. 服务治理的那些药")]),i._v(" "),a("p",[i._v("如果我们把服务治理类比成是在给一个人治病，那么上面提到的那些概念和工具，就是治病的要。")]),i._v(" "),a("p",[i._v("那么都有什么病，对症的药是什么")]),i._v(" "),a("p",[i._v("我们先从Spring cloud的工具栈来进行介绍")]),i._v(" "),a("ul",[a("li",[a("p",[i._v("Eureka，这是一个用来注册服务的工具，通过简单的配置，在服务启动的时候就会自动注册到Eureka服务器上。")])]),i._v(" "),a("li",[a("p",[i._v("Hystrix，这是一个用来保护服务的熔断工具，虽然最近宣布已经停止维护更新了。")])]),i._v(" "),a("li",[a("p",[i._v("Zuul，这是一个用来对请求进行路由的服务网关工具，最近的zuul2采用了Netty实现了异步非阻塞编程模型。")])]),i._v(" "),a("li",[a("p",[i._v("Ribbon，这是一个用来分配请求的负载均衡工具")])]),i._v(" "),a("li",[a("p",[i._v("Feign，这是一个用来更方便调用其它服务的工具，也能进行负载均衡")])]),i._v(" "),a("li",[a("p",[i._v("Archaius，这是一个管理配置API的工具")])]),i._v(" "),a("li",[a("p",[i._v("Spring Cloud Config，用来对配置进行管理，可以把每个服务的配置放在远端服务器以方便进行配置修改")])]),i._v(" "),a("li",[a("p",[i._v("Spring Cloud Sleuth，Tracing采集工具包，对Zipkin，HTrace进行了封装")])]),i._v(" "),a("li",[a("p",[i._v("Spring Cloud Consul，封装了Consul操作，同样是用来进行服务注册发现的")])]),i._v(" "),a("li",[a("p",[i._v("Spring Cloud Zookeeper，封装了Zookeeper，也是用来进行服务注册发现的")])]),i._v(" "),a("li",[a("p",[i._v("Spring Cloud Gateway，给Spring MVC提供API网关功能的工具，里面也包含安全处理等特性")])])]),i._v(" "),a("p",[i._v("除了Spring Cloud和Netfix提供的这些工具以外，还有下面这些工具也经常在服务监控治理中被使用：")]),i._v(" "),a("ul",[a("li",[i._v("Dubbo，自称是一个高性能的Java RPC框架，但是其实广泛用于服务注册发现，提供三个核心能力：面向接口的远程方法调用，智能容错和负载均衡，服务注册发现。")]),i._v(" "),a("li",[i._v("logback，java日志框架，是log4j的升级版本")]),i._v(" "),a("li",[i._v("ElasticSearch，虽然是一个搜索引擎和分析框架，但因为提供很好的存储和查询性能，所以经常用于日志的采集和存储")]),i._v(" "),a("li",[i._v("Kibana，Elastic的可视化插件，可以配合Elastic使用可视化查询日志")]),i._v(" "),a("li",[i._v("logstash，Elastic的日志分析工具")]),i._v(" "),a("li",[i._v("grafna，时序性分析工具，提供漂亮的图形化界面")]),i._v(" "),a("li",[i._v("Promethues，强大系统监控和报警框架，提供多维度数据模型，灵活强大的查询语句，有多种可视化图形界面")]),i._v(" "),a("li",[i._v("Spring boot admin，用来管理Spring Boot应用的工具，提供可视化的用户界面")]),i._v(" "),a("li",[i._v("Zipkin，分布式追踪工具，用来采集程序的延时数据")]),i._v(" "),a("li",[i._v("Htrace，Apache的分布式追踪工具。")]),i._v(" "),a("li",[i._v("resilience4j，用来被Hystrix指定作为熔断的替代工具。")])]),i._v(" "),a("p",[i._v("虽然已经列了20多个工具，但是这20多个也仅仅是整个微服务治理生态工具链中的一小部分分。还没很多没有列出的工具。由于这里我们的目的并不是找出所有的药，而是想分析一下这些流行的药都有什么特点，都是治什么病的。所以就先基于这些药，看看他们的共性是什么。")]),i._v(" "),a("p",[i._v("如果把功能相同的进行一下归类，会发现有这样几个主要功能：")]),i._v(" "),a("ul",[a("li",[i._v("服务注册发现：Eurake，Dobbo，Consul，ZooKeeper")]),i._v(" "),a("li",[i._v("服务配置：Spring Cloud Config，Archaius")]),i._v(" "),a("li",[i._v("服务熔断：Hystrix，resilience4j")]),i._v(" "),a("li",[i._v("网关：Zuul，Spring Cloud Gateway")]),i._v(" "),a("li",[i._v("负载均衡：Ribbon，Feign")]),i._v(" "),a("li",[i._v("追踪工具：Sleuth，Zipkin，Htrace")]),i._v(" "),a("li",[i._v("日志采集：logback，ElasticSearch")]),i._v(" "),a("li",[i._v("监控平台：Promethues，Kibana，grafna，Spring boot admin")])]),i._v(" "),a("p",[i._v("这样面对这些纷繁复杂的工具我们有了一个基本的划分，当然即便是这8个分类还是有点多，而且相互之间的关系也不明确，为什么会有这8个分类的原因也不清楚。下面就一起深入一下，看看这些工具之间的内在关系究竟是什么。")]),i._v(" "),a("h2",{attrs:{id:"服务治理究竟要治的是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务治理究竟要治的是什么"}},[i._v("#")]),i._v(" 服务治理究竟要治的是什么？")]),i._v(" "),a("p",[i._v("让我们先放下微服务，像《微服务设计》那本书中说的一样，把自己想象成一个城市规划师，我们的目标不是治理微服务，而是要治理一个城市的交通，那么我们会怎么思考？")]),i._v(" "),a("p",[a("img",{attrs:{src:v(742),alt:"image-20200719223911658"}})]),i._v(" "),a("blockquote",[a("p",[i._v("在进行城市交通规划之前首先要做的第一个事情是收集信息，要能够知道这个城市发生了什么，所以在各个路口需要安装采集探头，记录车来车往的信息。有了信息以后就需要对信息进行分析了，那么就需要可视化的图形界面，能够一眼就看出什么地方出了问题，通往哪个工厂的路坏了。发现了问题就要解决问题了，限制一下拥堵路段的流量，把去往一个公园的车辆导向到另外一个类似的公园。最后，如果把城市作为一个国家来考虑，那么每个进入这个城市的车辆都需要进行检查，看看有没有携带违禁品，最后给这些不熟悉道路的外地车规划路线。通过上面这个思考的过程，我们发现要对一个城市进行治理的时候，第一要采集信息，然后要能够对采集的信息进行监控和分析，最后根据分析的结果采取对应的治理策略。另外从整体安全的角度考虑还需要一个守门人。")])]),i._v(" "),a("p",[i._v("因此我们也用同样的思路来思考服务治理，网关就是整个整体的守门人，日志采集，追踪工具，服务注册发现都是用来采集信息的，然后需要监控平台来展现这些采集的信息，并进行监控和分析。最后根据分析的结果采取治理策略，有的服务快撑不住了要限流，有的服务坏了要熔断，并且还能够及时的调整这些服务的配置。")]),i._v(" "),a("p",[i._v("下面的脑图就从这四个方面构建了一个简易的服务治理体系：\n请求网关，信息采集，信息分析，治理策略")]),i._v(" "),a("p",[a("img",{attrs:{src:v(743),alt:"image-20200719224304892"}})]),i._v(" "),a("h2",{attrs:{id:"_2-参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-参考文章"}},[i._v("#")]),i._v(" 2. 参考文章")]),i._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/dd818114ab4b",target:"_blank",rel:"noopener noreferrer"}},[i._v("当我们在说微服务治理的时候究竟在说什么"),a("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=t.exports},742:function(i,_,v){i.exports=v.p+"assets/img/image-20200719223911658.59aa7b24.png"},743:function(i,_,v){i.exports=v.p+"assets/img/image-20200719224304892.af088f46.png"}}]);