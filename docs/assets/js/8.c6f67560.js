(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{56:function(t,a,s){t.exports=s.p+"assets/img/dict.8a9e8175.jpg"},84:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"字典管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字典管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 字典管理")]),t._v(" "),n("p",[t._v("该模块提供了对各种枚举数据进行维护的功能。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(56),alt:"dict"}})]),t._v(" "),n("p",[t._v("后台中常量工厂ConstantFactory封装了的对字典的常规功能。")]),t._v(" "),n("h2",{attrs:{id:"根据名称获取其所有字典列表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据名称获取其所有字典列表","aria-hidden":"true"}},[t._v("#")]),t._v(" 根据名称获取其所有字典列表")]),t._v(" "),n("p",[t._v("使用场景，比如页面查询表单中需要一个联系人关系的下拉框来所搜索，具体用法为：")]),t._v(" "),n("p",[t._v("controller中调用常量工厂所有字典页面返回到页面")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("  List"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DictVo"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" degrees "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ConstantFactory"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("me")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("findByDictName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"学历类型"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  model"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addAttribute")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"degrees"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("degrees"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("页面使用该数据即可")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("      "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("#select")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("account"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("我方账户"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            @for(degree in degrees){\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("option")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("value")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${degree.key}"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${degree.value}"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("option")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n              @}\n      "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("#select")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h2",{attrs:{id:"根据字典id获取字典名称"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据字典id获取字典名称","aria-hidden":"true"}},[t._v("#")]),t._v(" 根据字典id获取字典名称")]),t._v(" "),n("p",[t._v("数据库中村的是字典id，但是页面展示需要具体的值")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("String degreeName "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ConstantFactory"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("me")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("findByPnameAndCode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"学历类型"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodel"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addAttribute")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'degreeName'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("degreeName"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],e=s(0),c=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);c.options.__file="dict.md";a.default=c.exports}}]);