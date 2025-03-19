// 创建基础入口文件
console.log('Renderer process started') 
import * as THREE from 'three';
import { ipcRenderer } from 'electron';
import { SceneManager } from './SceneManager';

class AnimationScheduler {
  private static executionCounter = 0;

  public static logStep(methodName: string) {
    const currentOrder = ++AnimationScheduler.executionCounter;
    console.log(`[${methodName}] Order:${currentOrder}`);
  }
}



// 初始化3D场景
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 添加立方体测试物体
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// 动画循环
function animate() {
  AnimationScheduler.logStep('animate');
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// 获取DOM元素
const renderBtn = document.getElementById('render-btn')! as HTMLButtonElement;
const codeEditor = document.getElementById('code-editor')! as HTMLTextAreaElement;

// 初始化场景参数
let sceneParams: any;

// 按钮点击事件
renderBtn.addEventListener('click', async () => {
  try {
    const code = codeEditor.value;
    const astData = await window.api.parseCode(code);
    console.log('解析结果:', astData);
    
    // 预留场景初始化接口
    sceneParams = processAstToSceneParams(astData);
    initializeScene(sceneParams);
  } catch (error) {
    console.error('代码解析失败:', error);
  }
});

// 场景初始化函数
function initializeScene(params: any) {
  while(scene.children.length > 0) {
    scene.remove(scene.children[0]);
  }

// 假设 SceneManager 是一个自定义类，需要确保它被正确导入
// 根据上下文，SceneManager 的构造函数需要一个 HTMLCanvasElement 类型的参数
// 这里使用 renderer 的 canvas 元素作为参数
const sceneManager = new SceneManager(renderer.domElement);
let isAnimating = false;

// 添加动画控制事件监听
document.getElementById('animation-control')?.addEventListener('click', () => {
  console.log('动画控制按钮点击事件触发', sceneManager instanceof SceneManager);
  ipcRenderer.send('debug-event', {type: 'button-click', timestamp: Date.now()});
  if (!isAnimating) {
    sceneManager.animate();
    (document.getElementById('animation-control') as HTMLButtonElement).textContent = '停止动画';
  } else {
    sceneManager.stopAnimation();
    (document.getElementById('animation-control') as HTMLButtonElement).textContent = '启动动画';
  }
  isAnimating = !isAnimating;
});
  
  // 创建代码层级结构
  params.depthMap.forEach((depth: number, line: number) => {
    // 由于 calculatePosition 是私有属性，无法直接访问，这里假设 SceneManager 有一个公共方法可以获取位置
    const pos = sceneManager.calculatePosition(depth); // 使用正确的公共方法
    sceneManager.createCodeBlock(pos, `Line ${line}`);
  });

  // 创建赋值元素
  params.assignments.forEach((assignment: any) => {
    const pos = sceneManager.calculatePosition(assignment.depth);
    assignment.type === 'functionCall' 
      ? sceneManager.createFunctionAssignment(pos)
      : sceneManager.createCodeBlock(pos, assignment.value);
  });

  // 动画控制逻辑移至按钮事件
}

function processAstToSceneParams(astData: any) {
  console.log('原始AST数据:', JSON.stringify(astData, null, 2));
  const sceneParams = {
    depthMap: new Map<number, number>(),
    assignments: [] as Array<{type: string, depth: number, value: string}>
  };

  // 解析AST树结构
  astData.tree.split('\n').forEach((nodeLine: string) => {
    if (nodeLine.includes('functionDeclarator')) {
      const matchResult = nodeLine.match(/line:(\d+)/);
      if (matchResult) {
        sceneParams.depthMap.set(parseInt(matchResult[1]), 0);
      }
    }
    else if (nodeLine.match(/for|while|if/)) {
      const matchResult = nodeLine.match(/line:(\d+)/);
      if (matchResult) {
        const line = parseInt(matchResult[1]);
        sceneParams.depthMap.set(line, (sceneParams.depthMap.get(line-1) || 0) + 1);
      }
    }
  });

  // 解析赋值表达式
  astData.tokens.forEach((token: string) => {
    if (token.includes('=')) {
      const matchResult = token.match(/@([0-9]+),[0-9]+:/);
      const depth = matchResult ? parseInt(matchResult[1]) : 0;
      sceneParams.assignments.push({
        type: token.includes('(') ? 'functionCall' : 'assignment',
        depth: sceneParams.depthMap.get(depth) || 0,
        value: token.split('=')[1].trim()
      });
    }
  });
  return sceneParams;
}