(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{1164:function(s,t,a){"use strict";a.r(t);var e=a(42),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_5e数据大表-分区表查数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5e数据大表-分区表查数据"}},[s._v("#")]),s._v(" 5e数据大表，分区表查数据")]),s._v(" "),a("p",[s._v("分区表是按日自动创建的。")]),s._v(" "),a("p",[s._v("记下思路")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("查询出该表所有分区")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" PARTITION_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" HIGH_VALUE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" user_tab_partitions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" table_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DAVE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("对比 HIGH_VALUE 查出近3年的所有分区值")])]),s._v(" "),a("li",[a("p",[s._v("将所有分区值进行union all")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dave "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SYS_P53"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dave "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SYS_P54"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);