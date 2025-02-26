# Code-to-Animation 🚀

将C++代码实时转换为3D动画的可视化工具，帮助初学者直观理解程序结构

## 功能特性 ✨
- C++代码语法解析（基于ANTLR4）
- 3D代码结构可视化（Three.js）
- 实时编辑反馈
- 跨平台运行（Electron）

## 技术栈 💻
- 前端框架：Electron + Three.js
- 语法解析：ANTLR4
- 构建工具：Webpack
- 开发语言：TypeScript

## 快速开始 🛠️

### 环境要求
- Node.js 16+
- npm 7+

### 安装依赖

bash
npm install electron antlr4ts three webpack webpack-cli
###

## 开发指南 👨💻
1. 安装依赖后先运行生成解析器命令
2. 主进程和渲染进程代码分开开发
3. 使用 `npm run build` 打包生产版本