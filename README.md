# vue3-travel

## 概述：

Vue3Travel 是一个 web 移动端的旅行住房订购项目，该项目使用 Vue3 + TypeScript + Pinia + Vant 开发

项目通篇使用 Composition API （setup 语法糖）

本项目中，部分接口无法使用，开发目的是为了着重体验和学习 Pinia 结合 Vue3 Composition API 的开发流程。

本项目参考 coderwhy 老师的 HyTrip 完整项目，并将 JavaScript 改为使用 TypeScript 开发

## 额外的包：

1. VConsole 移动端设备的调试工具
2. CandyBag 我自己的工具库

## 使用：

### 1. 安装依赖

```sh
npm install
```

### 2. 构建开发模式

```sh
npm run dev
```

### 3. 打包构建发布

```sh
npm run build
```

## 项目难点：

1. 移动设备的兼容性

## 项目规范：

- 文件名： 统一使用小写字母，多个单词使用 `-` 分割
- 变量名： 统一使用小写字母，多个单词使用小驼峰
- 方法名：统一使用小写字母，多个单词使用小驼峰
- 接口：以 `I` 开头，多个单词使用大驼峰
- 模板内使用组件：使用大驼峰，例如： `<Home></Home>`
- 组件以文件夹的形式组织，例如：Home 组件，格式为`src/views/home/index.vue`
- 子组件的结构为：`src/views/home/cpns/*`
- 公共组件统一存放至：`src/base-ui` 文件夹下
- 项目内公共组件存放至：`src/components/` 文件夹下
- 路由使用懒加载：`() => import('@/views/home/index.vue')`
- 条件渲染尽量避免使用`v-if` 改为使用 `<component :is="About"></component>`

## 总结：

pinia 用起来简直不要太爽
