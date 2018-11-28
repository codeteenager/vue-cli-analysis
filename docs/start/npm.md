---
sidebarDepth: 0
---

# 常见 npm 包

在进去 `vue-cli` 源码学习之前，这里先介绍下在 `vue-cli` 项目中用到的一些必备的 `npm` 包，这样在后面分析源码的时候会比较快的理解。
* [commander](https://github.com/tj/commander.js)：node.js command-line interfaces made easy
* [Inquirer](https://github.com/SBoudrias/Inquirer.js)：A collection of common interactive command line user interfaces.
* [handlebars](https://github.com/wycats/handlebars.js)：一个 javascript 语以模版库
* [metalsmith](https://github.com/segmentio/metalsmith)
* [chalk](https://github.com/chalk/chalk)
* [download-git-repo](https://github.com/flipxfx/download-git-repo)
* [consolidate](https://github.com/tj/consolidate.js)

下面逐个介绍：

## commander

`commander` 是一款重量轻，表现力和强大的命令行框架，提供了用户命令行输入和参数解析强大功能。

``` javascript
#!/usr/bin/env node

const program = require('commander')

program
  .version('0.0.1')
  .command('rmdir <dir> [otherDirs...]')
  .action(function(dir, otherDirs) {
    console.log('rmdir %s', dir);
    if (otherDirs) {
      otherDirs.forEach(function(oDir) {
        console.log('rmdir %s', oDir);
      });
    }
  });

program.parse(process.argv);
```
这段代码为 `commander.js` 官方的一个示例，它展示了 `commander.js` 可变参数的特性，可以在 `action` 的回调中获取对应的参数，当然也可以通过 `process.argv` 获取，[commander.js 中文文档](https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md)。

## Inquirer
`Inquirer` 为交互式命令行工具，比如执行 `vue create` 命令会有以下的命令行交互：

<img :src="$withBase('/assets/install-img01.png')">

`Inquirer` 的基本使用如下：

``` javascript
var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  });
```
`inquirer.prompt` 接受一个 `questions` 数组， 一个 `question` 对象包含 `type`，`name`， `message`， `default` 等等字段，然后通过回调获取命令行交互的值，[详细文档](https://github.com/SBoudrias/Inquirer.js)。


## handlebars
`handlebars` 是一个 `javascript` 语义模版库，而且与 `Mustache` 模板 是兼容的，通过一个 `demo` 来感受下：

``` javascript
var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
             "{{kids.length}} kids:</p>" +
             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
var template = Handlebars.compile(source);

var data = { "name": "Alan", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
var result = template(data);

// Would render:
// <p>Hello, my name is Alan. I am from Somewhere, TX. I have 2 kids:</p>
// <ul>
//   <li>Jimmy is 12</li>
//   <li>Sally is 4</li>
// </ul>
```
这是官方的一个 `demo`, 就是通过 `Handlebars` 的 `compile` 方法将模板编译成 `html` 。在 `vue-cli` 的 `init` 命令中，利用 `Handlebars.registerHelper` 方法注册了一些 `helper`，这样就可以在模板中方便的使用这些 `helper`，[详细文档](https://handlebarsjs.com/)。