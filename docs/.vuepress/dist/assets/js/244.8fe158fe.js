(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{1099:function(t,a,n){"use strict";n.r(a);var s=n(42),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"druid多数据源配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#druid多数据源配置"}},[t._v("#")]),t._v(" Druid多数据源配置")]),t._v(" "),n("p",[t._v("本篇介绍在 SpringBoot 下如何配置Druid 多数据源")]),t._v(" "),n("h2",{attrs:{id:"集成步骤目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集成步骤目录"}},[t._v("#")]),t._v(" 集成步骤目录")]),t._v(" "),n("ol",[n("li",[t._v("引入jar包")]),t._v(" "),n("li",[t._v("设置配置参数")]),t._v(" "),n("li",[t._v("编写配置文件与\n"),n("ol",[n("li",[t._v("编写数据源常量/枚举")]),t._v(" "),n("li",[t._v("创建动态数据源")]),t._v(" "),n("li",[t._v("动态数据源配置")]),t._v(" "),n("li",[t._v("定义动态数据源注解")]),t._v(" "),n("li",[t._v("设置数据源 AOP 代理")])])]),t._v(" "),n("li",[t._v("修改启动文件")])]),t._v(" "),n("h2",{attrs:{id:"具体集成步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#具体集成步骤"}},[t._v("#")]),t._v(" 具体集成步骤")]),t._v(" "),n("h3",{attrs:{id:"_1-引入jar包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-引入jar包"}},[t._v("#")]),t._v(" 1.引入jar包")]),t._v(" "),n("p",[t._v("以我们公司项目为例，数据库主要使用"),n("code",[t._v("oracle")]),t._v(" 和 国产数据库 "),n("code",[t._v("gbase")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\x3c!-- oracle驱动 --\x3e\n<dependency>\n   <groupId>com.oracle</groupId>\n   <artifactId>ojdbc6</artifactId>\n   <version>11.2.0.4.0</version>\n</dependency>\n\n\n\x3c!--ifxjdbc gbase--\x3e\n<dependency>\n   <groupId>com.informix</groupId>\n   <artifactId>ifxjdbc</artifactId>\n   <version>1.0.1</version>\n</dependency>\n\n\x3c!-- druid数据源驱动 --\x3e\n<dependency>\n   <groupId>com.alibaba</groupId>\n   <artifactId>druid-spring-boot-starter</artifactId>\n   <version>1.1.10</version>\n</dependency>\n\n")])])]),n("h3",{attrs:{id:"_2-配置参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置参数"}},[t._v("#")]),t._v(" 2.配置参数")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("spring:\n  profiles: dev\n  application:\n    name: app-platform\n  datasource:\n    druid:\n      orac: #数据源1 oracle  \n        # 数据库访问配置, 使用druid数据源\n        type: com.alibaba.druid.pool.DruidDataSource\n        driver-class-name: oracle.jdbc.driver.OracleDriver\n        url: jdbc:oracle:thin:@192.168.0.xx:1521:orcl\n        username: username\n        password: password\n      gbase:#数据源2 gbase  \n        driver-class-name: com.informix.jdbc.IfxDriver\n        type: com.alibaba.druid.pool.DruidDataSource\n        name: test\n        url: jdbc:informix-sqli://192.168.0.xx:9088/app_lzf:INFORMIXSERVER=gbaseserver;\n        username: myusername\n        password: mypassword\n")])])]),n("p",[t._v("###3.编写配置文件")]),t._v(" "),n("p",[t._v("####3.1.定义数据源名称常量")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('public interface DataSourceNames {\n    String ORAC = "orac";\n    String GBASE = "gbase";\n}\n')])])]),n("h4",{attrs:{id:"_3-2-创建动态数据源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-创建动态数据源"}},[t._v("#")]),t._v(" 3.2 创建动态数据源")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("/**\n * 动态数据源\n */\npublic class DynamicDataSource extends AbstractRoutingDataSource {\n    private static final ThreadLocal<String> contextHolder = new ThreadLocal<>();\n\n    /**\n     * 配置DataSource, defaultTargetDataSource为主数据库\n     */\n    public DynamicDataSource(DataSource defaultTargetDataSource, Map<Object, Object> targetDataSources) {\n        super.setDefaultTargetDataSource(defaultTargetDataSource);\n        super.setTargetDataSources(targetDataSources);\n        super.afterPropertiesSet();\n    }\n\n    @Override\n    protected Object determineCurrentLookupKey() {\n        return getDataSource();\n    }\n\n    public static void setDataSource(String dataSource) {\n        contextHolder.set(dataSource);\n    }\n\n    public static String getDataSource() {\n        return contextHolder.get();\n    }\n\n    public static void clearDataSource() {\n        contextHolder.remove();\n    }\n\n}\n")])])]),n("h4",{attrs:{id:"_3-3-动态数据源配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-动态数据源配置"}},[t._v("#")]),t._v(" 3.3 动态数据源配置")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\n/**\n * 配置多数据源\n */\n@Configuration\npublic class DynamicDataSourceConfig {\n\n    /**\n     * 创建 DataSource Bean\n     * */\n\n    @Bean\n    @ConfigurationProperties("spring.datasource.druid.orac")\n    public DataSource oneDataSource(){\n        DataSource dataSource = DruidDataSourceBuilder.create().build();\n        return dataSource;\n    }\n\n    @Bean\n    @ConfigurationProperties("spring.datasource.druid.gbase")\n    public DataSource twoDataSource(){\n        DataSource dataSource = DruidDataSourceBuilder.create().build();\n        return dataSource;\n    }\n\n    /**\n     * 如果还有数据源,在这继续添加 DataSource Bean\n     * */\n\n    @Bean\n    @Primary\n    public DynamicDataSource dataSource(DataSource oneDataSource, DataSource twoDataSource) {\n        Map<Object, Object> targetDataSources = new HashMap<>(2);\n        targetDataSources.put(DataSourceNames.ORAC, oneDataSource);\n        targetDataSources.put(DataSourceNames.GBASE, twoDataSource);\n        // 还有数据源,在targetDataSources中继续添加\n        System.out.println("DataSources:" + targetDataSources);\n        return new DynamicDataSource(oneDataSource, targetDataSources);\n    }\n}\n\n')])])]),n("h4",{attrs:{id:"_3-4-定义动态数据源注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-定义动态数据源注解"}},[t._v("#")]),t._v(" 3.4.定义动态数据源注解:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("/**\n * 多数据源注解\n */\n@Documented\n@Target({ElementType.METHOD})\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface DataSource {\n    String value() default DataSourceNames.ORAC;\n}\n")])])]),n("h4",{attrs:{id:"_3-4-设置数据源-aop-代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-设置数据源-aop-代理"}},[t._v("#")]),t._v(" 3.4 设置数据源 AOP 代理:")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 数据源AOP切面处理\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Aspect")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSourceAspect")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ordered")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" logger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 切点: 所有配置 DataSource 注解的方法\n     */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Pointcut")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@annotation(com.ylzinfo.common.druid.DataSource)"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dataSourcePointCut")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Around")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataSourcePointCut()"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("around")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProceedingJoinPoint")]),t._v(" point"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MethodSignature")]),t._v(" signature "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MethodSignature")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" point"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSignature")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Method")]),t._v(" method "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" signature"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSource")]),t._v(" ds "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" method"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAnnotation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过判断 DataSource 中的值来判断当前方法应用哪个数据源")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DynamicDataSource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDataSource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"当前数据源: "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" ds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"set datasource is "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" ds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" point"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("proceed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DynamicDataSource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearDataSource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clean datasource"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOrder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_4-修改启动文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-修改启动文件"}},[t._v("#")]),t._v(" 4.修改启动文件")]),t._v(" "),n("p",[t._v("如果设置了动态数据源，那么需要将自有的配置依赖去除(DataSourceAutoConfiguration)")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})\npublic class AppPlatformApplication {\n\n\tpublic static void main(String[] args) {\n\t\tSpringApplication.run(AppPlatformApplication.class, args);\n\t}\n\n}\n\n")])])]),n("h2",{attrs:{id:"参考博客"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考博客"}},[t._v("#")]),t._v(" 参考博客")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://my.oschina.net/u/3681868/blog/1813011",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringBoot--Druid多数据源配置"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://gitee.com/wenshao/druid/tree/master/druid-spring-boot-starter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Druid配置"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);