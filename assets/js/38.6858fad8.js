(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{234:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"常见-npm-包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见-npm-包","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见 npm 包")]),t._v(" "),a("p",[t._v("在进去 "),a("code",[t._v("vue-cli")]),t._v(" 源码学习之前，这里先介绍下在 "),a("code",[t._v("vue-cli")]),t._v(" 项目中用到的一些必备的 "),a("code",[t._v("npm")]),t._v(" 包，这样在后面分析源码的时候会比较快的理解（"),a("code",[t._v("handlebars")]),t._v("，"),a("code",[t._v("metalsmith")]),t._v("，"),a("code",[t._v("consolidate")]),t._v(" 主要用于\n"),a("code",[t._v("vue init")]),t._v(" 命令）。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/tj/commander.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("commander"),a("OutboundLink")],1),t._v("：node.js command-line interfaces made easy。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/SBoudrias/Inquirer.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inquirer"),a("OutboundLink")],1),t._v("：A collection of common interactive command line user interfaces。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/sindresorhus/execa",target:"_blank",rel:"noopener noreferrer"}},[t._v("execa"),a("OutboundLink")],1),t._v("：A better "),a("a",{attrs:{href:"https://nodejs.org/api/child_process.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("child_process"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/wycats/handlebars.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("handlebars"),a("OutboundLink")],1),t._v("：一个 javascript 语以模版库。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/segmentio/metalsmith",target:"_blank",rel:"noopener noreferrer"}},[t._v("metalsmith"),a("OutboundLink")],1),t._v("；An extremely simple, pluggable static site generator。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/chalk/chalk",target:"_blank",rel:"noopener noreferrer"}},[t._v("chalk"),a("OutboundLink")],1),t._v("：Terminal string styling done right。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/flipxfx/download-git-repo",target:"_blank",rel:"noopener noreferrer"}},[t._v("download-git-repo"),a("OutboundLink")],1),t._v("：Download and extract a git repository (GitHub, GitLab, Bitbucket) from node。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tj/consolidate.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("consolidate"),a("OutboundLink")],1),t._v("：Template engine consolidation library for node.js 。")])]),t._v(" "),a("p",[t._v("下面逐个介绍：")]),t._v(" "),a("h2",{attrs:{id:"commander"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commander","aria-hidden":"true"}},[t._v("#")]),t._v(" commander")]),t._v(" "),a("p",[a("code",[t._v("commander")]),t._v(" 是一款重量轻，表现力和强大的命令行框架，提供了用户命令行输入和参数解析强大功能。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("#"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("env node\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" program "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commander'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nprogram\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rmdir <dir> [otherDirs...]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" otherDirs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rmdir %s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("otherDirs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      otherDirs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("oDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rmdir %s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nprogram"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这段代码为 "),a("code",[t._v("commander.js")]),t._v(" 官方的一个示例，它展示了 "),a("code",[t._v("commander.js")]),t._v(" 可变参数的特性，可以在 "),a("code",[t._v("action")]),t._v(" 的回调中获取对应的参数，当然也可以通过 "),a("code",[t._v("process.argv")]),t._v(" 获取，"),a("a",{attrs:{href:"https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("commander.js 中文文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"inquirer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inquirer","aria-hidden":"true"}},[t._v("#")]),t._v(" Inquirer")]),t._v(" "),a("p",[a("code",[t._v("Inquirer")]),t._v(" 为交互式命令行工具，比如执行 "),a("code",[t._v("vue create")]),t._v(" 命令会有以下的命令行交互：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/install-img01.png")}}),t._v(" "),a("p",[a("code",[t._v("Inquirer")]),t._v(" 的基本使用如下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" inquirer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inquirer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninquirer\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prompt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Pass your questions in here */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("answers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use user feedback for... whatever!!")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("inquirer.prompt")]),t._v(" 接受一个 "),a("code",[t._v("questions")]),t._v(" 数组， 一个 "),a("code",[t._v("question")]),t._v(" 对象包含 "),a("code",[t._v("type")]),t._v("，"),a("code",[t._v("name")]),t._v("， "),a("code",[t._v("message")]),t._v("， "),a("code",[t._v("default")]),t._v(" 等等字段，然后通过回调获取命令行交互的值，"),a("a",{attrs:{href:"https://github.com/SBoudrias/Inquirer.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"execa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execa","aria-hidden":"true"}},[t._v("#")]),t._v(" execa")]),t._v(" "),a("p",[a("code",[t._v("execa")]),t._v(" 是可以调用 shell 和本地外部程序的 javascript 封装。会启动子进程执行，支持多操作系统，包括 windows，如果父进程退出，则生成的全部子进程都被杀死。它是在 Node.js 内置的 "),a("code",[t._v("child_process.exec")]),t._v(" 基础上进行了提升，比如更好地支持 windows 平台，以及提供 "),a("code",[t._v("Promise")]),t._v(" 的接口等等。可以看一个很简单的例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" execa "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'execa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'echo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unicorns'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 'unicorns'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("上面例子就是执行  "),a("code",[t._v("echo unicorns")]),t._v(" 命令输出 unicorns。关于 "),a("code",[t._v("execa")]),t._v(" 更多的用法可查看 "),a("a",{attrs:{href:"https://github.com/sindresorhus/execa#API",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"handlebars"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlebars","aria-hidden":"true"}},[t._v("#")]),t._v(" handlebars")]),t._v(" "),a("p",[a("code",[t._v("handlebars")]),t._v(" 是一个 "),a("code",[t._v("javascript")]),t._v(" 语义模版库，而且与 "),a("code",[t._v("Mustache")]),t._v(" 模板 是兼容的，通过一个 "),a("code",[t._v("demo")]),t._v(" 来感受下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" source "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<p>Hello, my name is {{name}}. I am from {{hometown}}. I have "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{kids.length}} kids:</p>"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Handlebars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Alan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hometown"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Somewhere, TX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kids"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jimmy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sally"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Would render:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <p>Hello, my name is Alan. I am from Somewhere, TX. I have 2 kids:</p>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <ul>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   <li>Jimmy is 12</li>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   <li>Sally is 4</li>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// </ul>")]),t._v("\n")])])]),a("p",[t._v("这是官方的一个 "),a("code",[t._v("demo")]),t._v(", 就是通过 "),a("code",[t._v("Handlebars")]),t._v(" 的 "),a("code",[t._v("compile")]),t._v(" 方法将模板编译成 "),a("code",[t._v("html")]),t._v(" 。在 "),a("code",[t._v("vue-cli")]),t._v(" 的 "),a("code",[t._v("init")]),t._v(" 命令中，利用 "),a("code",[t._v("Handlebars.registerHelper")]),t._v(" 方法注册了一些 "),a("code",[t._v("helper")]),t._v("，这样就可以在模板中方便的使用这些 "),a("code",[t._v("helper")]),t._v("，"),a("a",{attrs:{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"metalsmith"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metalsmith","aria-hidden":"true"}},[t._v("#")]),t._v(" metalsmith")]),t._v(" "),a("p",[a("code",[t._v("metalsmith")]),t._v(" 一个静态网站生成器，可以用在批量处理模板的场景，和 "),a("code",[t._v("hexo")]),t._v(" 类似。它最大的特点就是所有的逻辑都是由插件处理，你只需要将这些插件用 "),a("code",[t._v("metalsmith")]),t._v(" 连接起来使用即可，比如官方的一个 "),a("code",[t._v("demo")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Metalsmith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("markdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("layouts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handlebars'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Build finished!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这段代码就是通过使用 "),a("a",{attrs:{href:"https://github.com/segmentio/metalsmith-markdown",target:"_blank",rel:"noopener noreferrer"}},[t._v("metalsmith-markdown"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://github.com/metalsmith/metalsmith-layouts",target:"_blank",rel:"noopener noreferrer"}},[t._v("metalsmith-layouts"),a("OutboundLink")],1),t._v(" 插件 将 "),a("code",[t._v("markdown")]),t._v(" 文件以 "),a("code",[t._v("handlebars")]),t._v(" 的模板形式来生成"),a("code",[t._v("html")]),t._v(" 文件，在 "),a("code",[t._v("vue-cli")]),t._v(" 的 "),a("code",[t._v("init")]),t._v(" 命令中使用了三个插件："),a("code",[t._v("askQuestions")]),t._v(" "),a("code",[t._v("filterFiles")]),t._v(" "),a("code",[t._v("renderTemplateFiles")]),t._v(" 从这名字就知道这个插件的作用了。编写 metalsmith 其实不是很难，官方对插件的编写介绍地比较详细，示例代码：")]),t._v(" "),a("p",[a("strong",[t._v("metalsmith-myplugin")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we would like you to use debug")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" debug "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'debug'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'metalsmith-myplugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" multimatch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'multimatch'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Expose `plugin`.")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("opts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pattern "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pattern "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" metalsmith"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("multimatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pattern"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myplugin working on: %s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// here would be your code")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("关于 "),a("code",[t._v("metalsmith")]),t._v(" 的更多介绍以及语法可查看"),a("a",{attrs:{href:"https://metalsmith.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"chalk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chalk","aria-hidden":"true"}},[t._v("#")]),t._v(" chalk")]),t._v(" "),a("p",[a("code",[t._v("chalk")]),t._v(" 是用于修改控制台字符串的样式，包括字体样式（加粗），颜色以及背景颜色等。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/install-img02.png")}}),t._v(" "),a("p",[t._v("使用比较简单：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chalk "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chalk'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chalk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("blue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("更多的用法以及 "),a("code",[t._v("API")]),t._v(" 可查看"),a("a",{attrs:{href:"https://github.com/chalk/chalk",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"download-git-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-git-repo","aria-hidden":"true"}},[t._v("#")]),t._v(" download-git-repo")]),t._v(" "),a("p",[a("code",[t._v("download-git-repo")]),t._v(" 是用于 从 "),a("code",[t._v("GitHub")]),t._v(", "),a("code",[t._v("GitLab")]),t._v(", "),a("code",[t._v("Bitbucket")]),t._v(" 下载一个 "),a("code",[t._v("git")]),t._v(" 仓库，"),a("code",[t._v("API")]),t._v(" 如下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("download")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("repository：仓库地址。")]),t._v(" "),a("li",[t._v("destination：存放下载 git 仓库的路径。")]),t._v(" "),a("li",[t._v("options：选项，clone。是以 http download 的形式还是 git clone 的形式下载。其中 git clone 的形式支持下载 private 仓库。")]),t._v(" "),a("li",[t._v("callback：下载完成地回调。")])]),t._v(" "),a("p",[t._v("更多例子可查看 "),a("a",{attrs:{href:"https://github.com/flipxfx/download-git-repo",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"consolidate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consolidate","aria-hidden":"true"}},[t._v("#")]),t._v(" consolidate")]),t._v(" "),a("p",[a("code",[t._v("consolidate")]),t._v(" 是一个模版引擎整合库，它的作用是把一些著名的模板引擎适配成 "),a("code",[t._v("Express")]),t._v(" 兼容的接口。在 "),a("code",[t._v("vue-cli")]),t._v(" 的 "),a("code",[t._v("init")]),t._v(" 命令中利用 "),a("code",[t._v("consolidate.handlebars.render")]),t._v(" 是实现模版的渲染。在 "),a("code",[t._v("/example/metalsmith")]),t._v(" 目录里有个 "),a("code",[t._v("demo")]),t._v("，就是通过 "),a("code",[t._v("metalsmith")]),t._v(" 以及"),a("code",[t._v("consolidate.handlebars.render")]),t._v(" 方法将一个 "),a("code",[t._v("package.json")]),t._v(" 以 "),a("code",[t._v("handlebars")]),t._v(" 的模板引擎来渲染，在项目里运行")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run metalsmith\n")])])]),a("img",{attrs:{src:t.$withBase("/assets/install-img03.gif")}}),t._v(" "),a("p",[t._v("希望可以通过这个小 "),a("code",[t._v("demo")]),t._v(" 可以比较好地理解 "),a("code",[t._v("metalsmith")]),t._v("， "),a("code",[t._v("handlebars")]),t._v(" ，"),a("code",[t._v("consolidate")]),t._v(" 以及"),a("code",[t._v("inquirer")]),t._v("，关于 "),a("code",[t._v("consolidate")]),t._v(" 的更多语法请查看"),a("a",{attrs:{href:"https://github.com/tj/consolidate.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("这部分主要介绍了在利用 "),a("code",[t._v("node")]),t._v(" 搭建脚手架工具时一些常见的 "),a("code",[t._v("npm")]),t._v(" 包，对这些 "),a("code",[t._v("npm")]),t._v(" 包进行一定的了解后，在后面看源码的时候会比较容易些，下面开始进行源码分析。")])])}),[],!1,null,null,null);s.default=e.exports}}]);