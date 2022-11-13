
# CKEditor5-plugins

基于ckeditor5的，适用于自定义构建的插件包。要使用此插件包，则不建议直接使用官方的`classic`、`decoupled`、`inline`、`balloon`等构建，建议自定义构建

[![NPM version](https://img.shields.io/npm/v/@iimm/ckeditor5-plugins.svg?style=flat)](https://npmjs.org/package/@iimm/ckeditor5-plugins)
[![NPM downloads](http://img.shields.io/npm/dm/@iimm/ckeditor5-plugins.svg?style=flat)](https://npmjs.org/package/@iimm/ckeditor5-plugins)

> **fork from <https://github.com/letsbug/ckeditor5-plugins>，修改了depends和目录结构,修改了部分插件的名称**

## features 包含功能
 
```text
├── src
│   ├── clear-empty-paragraph   清除空行
│   ├── clear-space-character   清除多余空格和空行(开头、结尾的空格，中间连续的空格只保留1个)
│   ├── convert-full-half       全角、半角标点符号相互转换
│   ├── figure-attributes       为figure包裹的元素添加自定义属性
│   ├── format-painter          格式刷(将选择的区块的样式应用于其他区块)
│   ├── indent-first-line       首行缩进
│   ├── outline                 文本轮廓线框
│   ├── paragraph-style
│       ├── line-height         行高(行距)控制
│       ├── paragraph-spacing   段落间距(实际为段前距)
│   ├── quick-style             快速排版
│   ├── simple-adapter          重写官方的SimpleUploadAdapter，支持文件字段自定义
│   ├── soft-break-to-enter     软换行转硬换行
```

## Preview 呈现结果

![ckeditor5-plugins build screenshot](./demo.png)

## Usage 食用方法

### installation

```bash
npm i -S https://github.com/liudichen/ckeditor5-plugins.git

# 后续可能上传到npmjs.com：
npm i @iimm/ckeditor5-plugins
```

### custom build

```javascript
// The editor creator to use.
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor.js';

// Official plugin packages from Ckeditor
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// ...

// Custom plug-in packages
import IndentFirstLine from '@iimm/ckeditor5-plugins/src/indent-first-line';
import ParagraphSpacing from '@iimm/ckeditor5-plugins/src/paragraph-style/paragraph-spacing';
import LineHeight from '@iimm/ckeditor5-plugins/src/paragraph-style/line-height';
import ClearEmptyParagraph from '@iimm/ckeditor5-plugins/src/clear-empty-paragraph';
import ClearSpaceCharacter from '@iimm/ckeditor5-plugins/src/clear-space-character';
import SoftBreakToEnter from '@iimm/ckeditor5-plugins/src/soft-break-to-enter';
import QuickStyle from '@iimm/ckeditor5-plugins/src/quick-style';
import ConvertFullHalf from '@iimm/ckeditor5-plugins/src/convert-full-half';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import SimpleAdapter from '@iimm/ckeditor5-plugins/src/simple-adapter';
import Outline from '@iimm/ckeditor5-plugins/src/outline';
import FormatPainter from '@iimm/ckeditor5-plugins/src/format-painter';

export default class DecoupledEditor extends DecoupledEditorBase {}

// Plugins to include in the build.
DecoupledEditor.builtinPlugins = [
  // ...

  IndentFirstLine,
  ParagraphSpacing,
  LineHeight,
  ClearEmptyParagraph,
  ClearSpaceCharacter,
  SoftBreakToEnter,
  QuickStyle,
  ConvertFullHalf,
  Extensions,
];

DecoupledEditor.defaultConfig = {
  toolbar: {
    items: [
      // ...

      '|',
      'indentFirstLine', 'lineHeight', 'paragraphSpacing', '|',
      'outline', 'formatPainter', '|',
      'removeFormat', 'convertFullHalf', 'clearEmptyParagraph', 'clearSpaceCharacter', 'softBreakToEnter', '|',
      'quickStyle'
    ]
  }
}
```

更多文档资料请移步CKEditor5官方文档 [https://ckeditor.com/docs/ckeditor5/latest/](https://ckeditor.com/docs/ckeditor5/latest/)
