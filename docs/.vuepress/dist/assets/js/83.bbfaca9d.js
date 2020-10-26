(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1014:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"aqs构建锁和同步器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aqs构建锁和同步器"}},[t._v("#")]),t._v(" AQS构建锁和同步器")]),t._v(" "),e("h2",{attrs:{id:"_1-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),e("p",[t._v("AQS的全称为（AbstractQueuedSynchronizer），这个类在java.util.concurrent.locks包下面。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(369),alt:"image-20190917232909916"}})]),t._v(" "),e("p",[t._v("AQS是一个"),e("strong",[t._v("用来构建锁和同步器的框架")]),t._v("，使用AQS能简单且高效得构造出应用广泛的大量同步器，比如我们提到了ReentrantLock，Semaphore，其他的诸如ReentrantReadWriteLock，SynchronousQueue，FutureTask等等皆是基于AQS的。当然，我们自己也能利用AQS非常轻松容易地构造出符合我们自己需求的同步器。")]),t._v(" "),e("h2",{attrs:{id:"_2-aqs-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-aqs-原理"}},[t._v("#")]),t._v(" 2. AQS 原理")]),t._v(" "),e("h3",{attrs:{id:"_2-1-aqs-原理概览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-aqs-原理概览"}},[t._v("#")]),t._v(" 2.1 AQS 原理概览")]),t._v(" "),e("p",[t._v("AQS 核心思想是")]),t._v(" "),e("ul",[e("li",[t._v("如果被请求的"),e("strong",[t._v("共享资源空闲")]),t._v("，则将当前请求资源的"),e("strong",[t._v("线程设置为有效的工作线程")]),t._v("，并且"),e("strong",[t._v("将共享资源设置为锁定状态")])]),t._v(" "),e("li",[t._v("如果被请求的"),e("strong",[t._v("共享资源被占用")]),t._v("，那么就需要一套"),e("strong",[t._v("线程阻塞等待以及被唤醒时锁分配的机制")]),t._v("，这个机制AQS是用"),e("strong",[t._v("CLH队列")]),t._v("实现的，即将暂时获取不到锁的线程加入到队列中")])]),t._v(" "),e("blockquote",[e("p",[t._v("CLH(Craig,Landin,and Hagersten)队列是一个虚拟的双向队列（虚拟的双向队列既不存在队列实例，仅存在结点之间的关联关系）。AQS是将每条请求共享资源的线程封装成一个CLH锁队列的一个节点（Node）来实现锁的分配")])]),t._v(" "),e("p",[t._v("看个AQS(AbstractQueuedSynchronizer)原理图：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(370),alt:"image-20190917234315783"}})]),t._v(" "),e("p",[t._v("AQS使用一个int成员变量来表示同步状态，通过内置的FIFO队列来完成资源线程的排队工作，AQS使用CAS对该同步状态进行原子操作实现对其值的修改。")]),t._v(" "),e("div",{staticClass:"language-JAVA extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//共享变量，使用volatile修饰保证线程可见性")]),t._v("\n")])])]),e("p",[t._v("状态信息通过procted类型的getState，setState，compareAndSetState进行操作")]),t._v(" "),e("div",{staticClass:"language-JAVA extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回同步状态的当前值")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置同步状态的值")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" newState"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newState"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//原子地（CAS操作）将同步状态值设置为给定值update如果当前同步状态的值等于expect（期望值）")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareAndSetState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" expect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" update"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" unsafe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareAndSwapInt")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stateOffset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" update"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"_2-2-aqs-对资源的共享方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-aqs-对资源的共享方式"}},[t._v("#")]),t._v(" 2.2 AQS 对资源的共享方式")]),t._v(" "),e("p",[e("strong",[t._v("AQS定义两种资源共享方式")])]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Exclusive")]),t._v("（独占）：只有一个线程能执行，如ReentrantLock。又可分为公平锁和非公平锁：")])]),t._v(" "),e("li",[e("ul",[e("li",[t._v("公平锁：按照线程在队列中的排队顺序，先到者先拿到锁")]),t._v(" "),e("li",[t._v("非公平锁：当线程要获取锁时，无视队列顺序直接去抢锁，谁抢到就是谁的")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Share")]),t._v("（共享）：多个线程可同时执行，如Semaphore/CountDownLatch。Semaphore、CountDownLatCh、 CyclicBarrier、ReadWriteLock 我们都会在后面讲到。")])])]),t._v(" "),e("p",[t._v("ReentrantReadWriteLock 可以看成是组合式，因为ReentrantReadWriteLock也就是读写锁允许多个线程同时对某一资源进行读。")]),t._v(" "),e("p",[t._v("不同的自定义同步器争用共享资源的方式也不同。自定义同步器在实现时只需要实现共享资源 state 的获取与释放方式即可，至于具体线程等待队列的维护（如获取资源失败入队/唤醒出队等），AQS已经在上层已经帮我们实现好了。")]),t._v(" "),e("p",[t._v("….")]),t._v(" "),e("h3",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247484832&idx=1&sn=f902febd050eac59d67fc0804d7e1ad5&source=41#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("并发编程面试必备：AQS 原理以及 AQS 同步组件总结"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports},369:function(t,a,s){t.exports=s.p+"assets/img/image-20190917232909916.384326f5.png"},370:function(t,a,s){t.exports=s.p+"assets/img/image-20190917234315783.63557966.png"}}]);