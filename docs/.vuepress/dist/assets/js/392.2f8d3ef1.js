(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{1122:function(n,e,t){"use strict";t.r(e);var a=t(42),r=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"bean的生命周期实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bean的生命周期实例"}},[n._v("#")]),n._v(" bean的生命周期实例")]),n._v(" "),t("p",[n._v("但看生命周期可能比较难理解，可以结合实例加深印象")]),n._v(" "),t("p",[n._v("生命周期大体就是")]),n._v(" "),t("ol",[t("li",[n._v("初始化构造函数")]),n._v(" "),t("li",[n._v("设置对应属性")]),n._v(" "),t("li",[n._v("判断是否实现了各个接口\n"),t("ol",[t("li",[n._v("若实现BeanNameAware接口，则调用setBeanName（）方法")]),n._v(" "),t("li",[n._v("若实现BeanFactoryAware接口，则调用setBeanFactory()方法")]),n._v(" "),t("li",[n._v("若实现ApplicationContextAware接口，则调用setApplicationContext()方法")]),n._v(" "),t("li",[n._v("若实现BeanPostProcessor接口，则调用postProcessBeforeInitialization()")]),n._v(" "),t("li",[n._v("初始化接口方法\n"),t("ol",[t("li",[n._v("若实现InitializingBean接口，则调用afterPropertiesSet()方法")]),n._v(" "),t("li",[n._v("init-method 声明了初始化方法，该方法也会被调用")])])]),n._v(" "),t("li",[n._v("若实现BeanpostProcessor接口，则调用postProcessorAfterInitialization()方法")])])]),n._v(" "),t("li",[n._v("bean准备就绪，一直驻留在应用上下文，直到上下文销毁")]),n._v(" "),t("li",[n._v("上下文销毁，额外处理\n"),t("ol",[t("li",[n._v("若实现DisposableBean接口，调用destory方法")]),n._v(" "),t("li",[n._v("若 destroy-method 申明了销毁方法，调用销毁方法")])])])]),n._v(" "),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[n._v("#")]),n._v(" 实例")]),n._v(" "),t("h4",{attrs:{id:"myperson-类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myperson-类"}},[n._v("#")]),n._v(" MyPerson 类")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('package com.zszdevelop;\n\nimport org.springframework.beans.BeansException;\nimport org.springframework.beans.factory.*;\nimport org.springframework.beans.factory.config.BeanPostProcessor;\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.ApplicationContextAware;\n\n/**\n * Created by zhangshengzhong on 2019/7/23.\n */\npublic class MyPerson implements BeanNameAware,BeanFactoryAware,ApplicationContextAware,BeanPostProcessor,InitializingBean,DisposableBean{\n\n    private String name;\n    private int age;\n\n    public MyPerson() {\n        System.out.println("第1步：Spring调用bean 的构造器实例化");\n    }\n\n    public void setName(String name) {\n        System.out.println("第2步：【注入属性】注入属性name:"+name);\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public void setAge(int age) {\n        System.out.println("第2步：【注入属性】注入属性age:"+age);\n        this.age = age;\n    }\n\n    @Override\n    public void setBeanName(String s) {\n        System.out.println("第3步：Spring调用 BeanNameAware 的setBeanName    id:"+s);\n    }\n\n    @Override\n    public void setBeanFactory(BeanFactory beanFactory) throws BeansException {\n        System.out.println("第4步：Spring调用 BeanFactoryAware 的 setBeanFactory,并将beanFactory传递进来");\n    }\n\n    @Override\n    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {\n        System.out.println("第5步：Spring调用 ApplicationContextAware 的 setApplicationContext，并将applicationContext传递进来");\n    }\n\n    @Override\n    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {\n        System.out.println("第6步：Spring调用 BeanPostProcessor 的 postProcessBeforeInitialization()");\n        return null;\n    }\n\n    @Override\n    public void afterPropertiesSet() throws Exception {\n        System.out.println("第7步：Spring调用 InitializingBean 的 afterPropertiesSet()");\n    }\n\n    // 通过<bean>的init-method属性指定的初始化方法\n    public void myInit() {\n        System.out.println("第7步：调用<bean>的init-method属性指定的初始化方法");\n    }\n\n    @Override\n    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {\n        System.out.println("第8步：Spring调用 BeanPostProcessor 的 postProcessAfterInitialization()");\n        return null;\n    }\n\n    @Override\n    public void destroy() throws Exception {\n        System.out.println("第10步：Spring调用 DisposableBean 的 destroy()");\n    }\n\n    // 通过<bean>的destroy-method属性指定的初始化方法\n    public void myDestory() {\n        System.out.println("第10步：调用<bean>的destroy-method属性指定的初始化方法");\n    }\n}\n')])])]),t("p",[n._v("#####myPersonBeans.xml")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('<?xml version="1.0" encoding="UTF-8"?>\n\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:p="http://www.springframework.org/schema/p"\n       xmlns:aop="http://www.springframework.org/schema/aop"\n       xsi:schemaLocation="\n            http://www.springframework.org/schema/beans\n            http://www.springframework.org/schema/beans/spring-beans-3.2.xsd">\n\n\n\n    <bean id="myPersonBean" class="com.zszdevelop.MyPerson"\n          p:name="张三" p:age="15"\n          init-method="myInit"\n          destroy-method="myDestory"\n         />\n</beans>\n')])])]),t("h4",{attrs:{id:"测试类mybeanlifecycle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试类mybeanlifecycle"}},[n._v("#")]),n._v(" 测试类MyBeanLifeCycle")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('package com.zszdevelop;\n\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\n\n/**\n * Created by zhangshengzhong on 2019/7/23.\n */\npublic class MyBeanLifeCycle {\n    public static void main(String[] args) {\n\n        System.out.println("现在开始初始化容器");\n\n        ApplicationContext factory = new ClassPathXmlApplicationContext("myPersonBeans.xml");\n        System.out.println("容器初始化成功");\n        //得到Preson，并使用\n        MyPerson person = factory.getBean("myPersonBean",MyPerson.class);\n        System.out.println(person);\n\n        System.out.println("现在开始关闭容器！");\n        ((ClassPathXmlApplicationContext)factory).registerShutdownHook();\n    }\n}\n\n')])])]),t("h4",{attrs:{id:"运行结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行结果"}},[n._v("#")]),n._v(" 运行结果")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("第1步：Spring调用bean 的构造器实例化\n第2步：【注入属性】注入属性age:15\n第2步：【注入属性】注入属性name:张三\n第3步：Spring调用 BeanNameAware 的setBeanName    id:myPersonBean\n第4步：Spring调用 BeanFactoryAware 的 setBeanFactory,并将beanFactory传递进来\n第5步：Spring调用 ApplicationContextAware 的 setApplicationContext，并将applicationContext传递进来\n第7步：Spring调用 InitializingBean 的 afterPropertiesSet()\n第7步：调用<bean>的init-method属性指定的初始化方法\n容器初始化成功\ncom.zszdevelop.MyPerson@396e2f39\n现在开始关闭容器！\n00:52:56.622 [Thread-0] DEBUG org.springframework.context.support.ClassPathXmlApplicationContext - Closing org.springframework.context.support.ClassPathXmlApplicationContext@383534aa, started on Wed Jul 24 00:52:56 CST 2019\n第10步：Spring调用 DisposableBean 的 destroy()\n第10步：调用<bean>的destroy-method属性指定的初始化方法\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);