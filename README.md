# Code-to-Animation 🚀

## 项目简介

将C++代码实时转换为3D动画的可视化工具，帮助初学者直观理解程序结构

![项目截图](./screenshot.png)

## 核心功能

- ✨ 实时语法解析：基于ANTLR4的C++14语法分析
- 🎮 3D可视化：使用Three.js实现代码结构动态展示
- 🔄 实时反馈：编辑即时的3D视图同步更新
- 🖥️ 跨平台：Electron构建的桌面应用程序

## 技术架构

```
┌───────────────────────┐
│     C++14代码         │
├──────────┬────────────┤
│ ANTLR4解析 │ Three.js  │
└──────────┴────────────┘
┌───────────────────────┐
│      Electron         │
├──────────┬────────────┤
│ Three.js │ ANTLR4解析 │
└──────────┴────────────┘
```

## 快速入门

### 环境准备

- Node.js 16+
- npm 7+

### 安装步骤

```bash
# 安装依赖
npm install electron antlr4ts three webpack webpack-cli

# 生成解析器代码（重要！）
npm run generate:parser
```

## 使用指南

1. **开发模式**
```bash
npm run dev
```
2. **生产构建**
```bash
npm run build
```
3. **测试解析器**
```bash
npm test
```

## 贡献指南

欢迎提交PR，请确保：
- 修改解析器需同步更新.g4语法文件
- 3D可视化修改需通过场景测试
- 保持TypeScript类型严格模式
```