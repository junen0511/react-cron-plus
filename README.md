# react-cron-plus

[![NPM version](https://img.shields.io/npm/v/react-cron-plus.svg?style=flat)](https://npmjs.org/package/react-cron-plus)
[![NPM downloads](http://img.shields.io/npm/dm/react-cron-plus.svg?style=flat)](https://npmjs.org/package/react-cron-plus)
[![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi)

react antd corn表达式 

## Development

```bash
npm install
npm start
open http://localhost:8000
```

## Install

[![react-cron-plus](https://nodei.co/npm/react-cron-plus.png)](https://npmjs.org/package/react-cron-plus)

## Usage

```js | pure
import React from 'react';
import CronPlus from 'react-cron-plus';

export default () => (
  <>
    <CronPlus result="normal"></CronPlus>
  </>
);
```

## 🔥 API
| Prop        | Description                 | Type                  | Accepted Values | Default   |
| ----------- | --------------------------- | --------------------- | --------------- | --------- |
| value       | 外部传入的cron解析式           | string                |                 |           |
| language    | 国际化                       | string                | zhCN / en       | zhCN        |
| result      | cron 结果样式                | string \| boolean    | normal / simple/ false | false|
| onOk        | 确定方法           |                 |                 |           |
| onCancel    | 取消方法           |                 |                 |           |

## LICENSE

MIT
