# Code-to-Animation 逻辑引导文档

## 模块化流程总览
```
[Electron初始化] -> [代码解析模块] -> [动画逻辑构建] -> [渲染进程控制] -> [可视化输出]
```

## 1. Electron应用初始化
```
main.js 
-> 创建BrowserWindow(预加载preload.js)
-> 加载renderer/index.html
```

## 2. C++代码解析流程 (preload/CppAnalyzer.ts)
```
构造函数(代码文本) 
-> analyzeStructure() 
    -> detectAssignments() [语法树构建] 
    -> buildDepthMap() [控制流深度分析]
-> buildExecutionTimeline() [生成执行序列]
```

### 函数调用链细节（7个核心步骤）
| 顺序 | 函数名                | 输入参数              | 输出结果                |
|------|-----------------------|-----------------------|-------------------------|
| 1    | constructor           | code: string          | 初始化词法分析器        |
| 2    | createParser          | -                     | 生成ANTLR解析器实例     |
| 3    | detectAssignments     | -                     | 语法树+token流          |
| 4    | walkParseTree         | ParseTreeWalker       | 生成AST抽象语法树       |
| 5    | calculateNodeDepth    | ParserRuleContext      | 控制流深度值            |
| 6    | mapExecutionFlow      | executionTimeline[]    | 带时间戳的执行路径      |
| 7    | generateAnimationSteps| timeline              | 动画时间轴JSON          |


## 3. 动画逻辑构建 (renderer/SceneManager.ts)
| 函数 | 输入 | 输出 | 通信通道 |
|------|------|------|---------|
| initScene() | 执行序列JSON | Three.js场景对象 | 无 |
| renderStep() | 时间戳(ms) | 帧状态数据 | animation-frame |

### 三维坐标系转换参数
```
1. calculatePosition(depth:number):
   - 输入：逻辑深度值 
   - 转换公式：x = depth*3, y = -depth*2
   - 输出：THREE.Vector3对象

2. createCodeBlock(position:Vector3):
   - 接受逻辑坐标 → 转换为世界坐标系
   - 应用矩阵变换：position.applyMatrix4(camera.matrixWorldInverse)

3. createStruct(position:Vector3, depth:number):
   - 深度值影响颜色HSL中的亮度分量：0.5 - depth*0.1
```

## 4. 进程间通信架构
```
渲染进程 
-> ipcRenderer.send('parse-request') 
-> 主进程 
-> preload进程执行CppAnalyzer 
-> ipcRenderer.on('parse-response') 
-> 更新SceneManager
```

### 5个关键事件处理函数
| 事件名称         | 触发时机                | 处理函数                     | 参数                                   | 返回值                      | 调用路径                      |
|------------------|-------------------------|------------------------------|----------------------------------------|----------------------------|-----------------------------|
| parse-request    | 用户上传代码文件时      | mainProcess.handleParseRequest | { codeContent: string }               | { status: 'pending' }       | 渲染进程 → 主进程            |
| analyzer-ready    | 语法树构建完成时        | preloadProcess.sendAnalysisResult | { ast: object, timeline: array }      | { sceneData: object }       | 预加载进程 → 渲染进程         |
| renderer-log      | 场景对象创建时          | rendererLogHandler           | { type: string, order: number }        | 无                         | 渲染进程 → 主进程(开发模式)  |
| animation-update  | 每帧渲染前              | updateAnimationState         | { frame: number, objects: array }      | { continue: boolean }       | 渲染进程内部通信              |
| error-occurred    | 解析过程出现异常时      | fallbackHandler              | { error: string, line: number }       | { fallbackData: object }   | 全链路异常捕获                |

## 5. 异常处理路径
⚠️ 当代码解析失败时：
```
fallbackRender() 
-> 显示语法高亮代码 
-> 生成控制流示意图(PDF)
```

> 文档说明：本架构通过预加载脚本实现C++语法解析与动画逻辑分离，最终通过Three.js在独立渲染线程输出可视化结果