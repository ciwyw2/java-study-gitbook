(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1063:function(e,t,r){"use strict";r.r(t);var a=r(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"io转换流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#io转换流"}},[e._v("#")]),e._v(" IO转换流")]),e._v(" "),a("p",[e._v("转换流提供了字节流和字符流之间的转换，")]),e._v(" "),a("p",[e._v("当字节流中的数据"),a("strong",[e._v("都是字符时，转成字符流的操作效率更高")])]),e._v(" "),a("h3",{attrs:{id:"操作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作流程"}},[e._v("#")]),e._v(" 操作流程")]),e._v(" "),a("p",[a("img",{attrs:{src:r(396),alt:"image-20190725232432252"}})]),e._v(" "),a("h3",{attrs:{id:"复制文件实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制文件实例"}},[e._v("#")]),e._v(" 复制文件实例")]),e._v(" "),a("ul",[a("li",[e._v("编码：字符串 —>字节数组")]),e._v(" "),a("li",[e._v("解码：字节数组—>字符串")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  // 解码\n        File file = new File("hello.txt");\n        FileInputStream fis = new FileInputStream(file);\n        InputStreamReader isr = new InputStreamReader(fis,"UTF-8");\n        BufferedReader br = new BufferedReader(isr);\n        //编码\n        File file2 = new File("cphello2.txt");\n        FileOutputStream fos = new FileOutputStream(file2);\n        OutputStreamWriter osw = new OutputStreamWriter(fos,"UTF-8");\n        BufferedWriter bw = new BufferedWriter(osw);\n//        char[] c =new char[1024];\n        String str;\n        while ((str = br.readLine())!=null){\n            bw.write(str);\n            bw.newLine();\n            bw.flush();\n        }\n')])])])])}),[],!1,null,null,null);t.default=n.exports},396:function(e,t,r){e.exports=r.p+"assets/img/image-20190725232432252.252de941.png"}}]);