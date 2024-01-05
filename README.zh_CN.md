[中文](https://github.com/taoliujun/json-beautiful-render/blob/master/README.zh_CN.md) | [English](https://github.com/taoliujun/json-beautiful-render/blob/master/README.en_US.md)

[![npm](https://img.shields.io/npm/v/json-beautiful-render.svg)](https://www.npmjs.com/package/json-beautiful-render)

支持两个功能：

-   将json数据美化成html，在原生javascript或react、vue等框架中使用。

![image](https://cdn.jsdelivr.net/gh/taoliujun/json-beautiful-render/assets/readme/demo1.png)

-   将json数据格式化，加入换行符、缩进符等，方便阅读。

![image](https://cdn.jsdelivr.net/gh/taoliujun/json-beautiful-render/assets/readme/demo2.png)

## 安装

### NPM

```bash
npm add json-beautiful-render
```

### UMD

```html
<script src="//cdn.jsdelivr.net/npm/json-beautiful-render/lib/umd/index.js"></script>
```

umd模式暴露了全局变量`jsonRender`、`jsonRenderNoStyle`。

## 使用

-   基础使用

```javascript
import jsonRender from 'json-beautiful-render';

const dom = jsonRender(document.querySelector('#container'), {
    name: 'hello world',
});
```

-   定制渲染的颜色

```javascript
import jsonRender from 'json-beautiful-render';

jsonRender(
    document.querySelector('#container'),
    {
        name: 'hello world',
    },
    {
        valueColor: 'green',
    },
);
```

-   将json数据格式化，加入换行符、缩进符等，方便阅读。

```javascript
import { jsonRenderNoStyle } from 'json-beautiful-render';

const result = jsonRenderNoStyle(document.querySelector('#your_textarea'), { name: 'hello world' });
console.log(result);
```

## API

### jsonRender

`(el, json, options) => HTMLElement`

美化渲染，如果el是HTMLElement，则将渲染结果挂载到el上。

| 参数    | 说明       | 类型                             | 默认值 |
| ------- | ---------- | -------------------------------- | ------ |
| el      | 挂载的容器 | HTMLElement \| null \| undefined | -      |
| json    | JSON数据   | Object                           | -      |
| options | 配置       | Options                          | -      |

#### Options

配置项

| 参数                 | 说明                                 | 类型        | 默认值 |
| -------------------- | ------------------------------------ | ----------- | ------ |
| activeBgColor        | 项目激活时，整行区域的背景色         | string      | -      |
| activeHighLightColor | 项目激活时，文字区域的背景色         | string      | -      |
| levelHighLightColor  | 项目激活时，该项目所有父级键名的颜色 | string      | -      |
| labelColor           | 键名的文本颜色                       | string      | -      |
| valueColor           | 键值的文本颜色                       | string      | -      |
| valueColors          | 不同变量类型的文本颜色               | ValueColors | -      |
| expand | 允许展开和收缩功能 | boolean | true |
| showItemsLength | 显示子元素的长度，`collapse`表示收缩时显示，`always`表示始终显示，其他值则不显示 | 'collapse' \| 'always' \| false | 'collapse' | 

#### ValueColors

不同变量类型的文本颜色

| 参数        | 说明                    | 类型   | 默认值 |
| ----------- | ----------------------- | ------ | ------ |
| string      | 字符串                  | string | -      |
| number      | 数值                    | string | -      |
| specialness | 特殊值，如boolean、null | string | -      |

### jsonRenderNoStyle

`(el, json, options) => string`

无样式的格式化渲染，如果el是HTMLElement，则将渲染结果挂载到el容器上。

| 参数    | 说明       | 类型                             | 默认值 |
| ------- | ---------- | -------------------------------- | ------ |
| el      | 挂载的容器 | HTMLElement \| null \| undefined | -      |
| json    | JSON数据   | Object                           | -      |
| options | 配置       | Options                          | -      |

#### Options

配置项

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| indent | 缩进字符 | string | -      |

## FAQ

### 渲染哪些类型的值？

支持渲染标准的json值如`"123"`、`123`，其余则渲染其类型如`Date`、`Function`等。

> 值（value）可以是双引号括起来的字符串（string）、数值(number)、true、false、 null、对象（object）或者数组（array）。这些结构可以嵌套。[详情见>>](https://www.json.org/json-zh.html)
