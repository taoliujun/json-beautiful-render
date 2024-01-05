[中文](https://github.com/taoliujun/json-beautiful-render/blob/master/README.zh_CN.md) | [English](https://github.com/taoliujun/json-beautiful-render/blob/master/README.en_US.md)

[![npm](https://img.shields.io/npm/v/json-beautiful-render.svg)](https://www.npmjs.com/package/json-beautiful-render)

Features：

-   Beautify JSON data into HTML, and use it in native Javascript or React, Vue and other frameworks.

![image](https://cdn.jsdelivr.net/gh/taoliujun/json-beautiful-render/assets/readme/demo1.png)

-   Format JSON data, add line breaks, indentations, etc. for easy reading.

![image](https://cdn.jsdelivr.net/gh/taoliujun/json-beautiful-render/assets/readme/demo2.png)

## Installation

### NPM

```bash
npm add json-beautiful-render
```

### UMD

```html
<script src="//cdn.jsdelivr.net/npm/json-beautiful-render/lib/umd/index.js"></script>
```

Exposed global variables `jsonRender` and `jsonRenderNoStyle` in umd mode.

## Usage

-   Basic usage

```javascript
import jsonRender from 'json-beautiful-render';

const dom = jsonRender(document.querySelector('#container'), {
    name: 'hello world',
});
```

-   Customize the rendering color

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

-   Format JSON data, add line breaks, indentations, etc. for easy reading.

```javascript
import { jsonRenderNoStyle } from 'json-beautiful-render';

const result = jsonRenderNoStyle(document.querySelector('#your_textarea'), { name: 'hello world' });
console.log(result);
```

## API

### jsonRender

`(el, json, options) => HTMLElement`

Beautify rendering, if el is an HTMLElement, the rendering result will be mounted on el.

| Parameter | Description          | Type                             | Default |
| --------- | -------------------- | -------------------------------- | ------- |
| el        | Container be mounted | HTMLElement \| null \| undefined | -       |
| json      | JSON data            | Object                           | -       |
| options   | Option               | Options                          | -       |

#### Options

Option

| Parameter            | Description                                                     | Type        | Default |
| -------------------- | --------------------------------------------------------------- | ----------- | ------- |
| activeBgColor        | Background color of the entire row area when the item is active | string      | -       |
| activeHighLightColor | Background color of the text area when the item is active       | string      | -       |
| levelHighLightColor  | Text color of all parent key names when the item is active      | string      | -       |
| labelColor           | Text color of the key name                                      | string      | -       |
| valueColor           | Text color of the key value                                     | string      | -       |
| valueColors          | Text colors for different variable types                        | ValueColors | -       |
| expand | Enable expand and collapse | boolean | true |
| showItemsLength | Show the child items length, `collapse` means show when collapsed items, `always` means always show, and otherwise means non-show. | 'collapse' \| 'always' \| false | 'collapse' | 

#### ValueColors

Text colors for different variable types

| Parameter   | Description                           | Type   | Default |
| ----------- | ------------------------------------- | ------ | ------- |
| string      | string                                | string | -       |
| number      | numeric                               | string | -       |
| specialness | Special values, such as boolean, null | string | -       |

### jsonRenderNoStyle

`(el, json, options) => string`

Format rendering without style, if el is an HTMLElement, the rendering result will be mounted on el container.

| Parameter | Description          | Type                             | Default |
| --------- | -------------------- | -------------------------------- | ------- |
| el        | Container be mounted | HTMLElement \| null \| undefined | -       |
| json      | JSON data            | Object                           | -       |
| options   | Option               | Options                          | -       |

#### Options

Option

| Parameter | Description         | Type   | Default |
| --------- | ------------------- | ------ | ------- |
| indent    | Indented characters | string | -       |

## FAQ

### Which types of values are rendered?

Support render standard json value such as `"123"`、`123`，others render their types such as `Date`、`Function` etc.

> Value can be a string enclosed in double quotes, a number, true, false, null, an object or an array. These structures can be nested. [See details >>](https://www.json.org/json-en.html)
