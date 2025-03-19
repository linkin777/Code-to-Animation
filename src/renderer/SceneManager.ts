import * as THREE from 'three';
// 引入 ipcRenderer
import { ipcRenderer } from 'electron';

export class SceneManager {
  private static executionCounter = 0;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private animationId: number | null = null;

  constructor(canvas: HTMLCanvasElement) {
    const currentOrder = ++SceneManager.executionCounter;
    console.log(`Enter constructor - Order:${currentOrder}`);
    ipcRenderer.send('renderer-log', {
      type: 'SceneManager',
      order: currentOrder,
      action: 'constructor',
      dimensions: `${canvas.width}x${canvas.height}`
    });
    console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);
    console.log(`Enter constructor - Order:${currentOrder}`);
    // 使用引入的 ipcRenderer
    ipcRenderer.send('renderer-log', {
      type: 'SceneManager',
      order: currentOrder,
      action: 'constructor',
      dimensions: `${canvas.width}x${canvas.height}`
    });
    console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.initLights();
    this.initCamera();
    console.log(`Exit constructor - Order:${currentOrder}`);
    // 使用引入的 ipcRenderer
    ipcRenderer.send('renderer-log', {
      type: 'SceneManager',
      order: currentOrder,
      action: 'constructor-exit'
    });
  }

  public animate() {
    const currentOrder = ++SceneManager.executionCounter;
    console.log(`Enter animate - Order:${currentOrder}`);
    console.log('Animation frame triggered');
    console.log(`Enter animate - Order:${currentOrder}`);
    console.log('Animation frame triggered');
    this.renderer.render(this.scene, this.camera);
    this.animationId = window.requestAnimationFrame(() => this.animate());
    console.log(`Exit animate - Order:${currentOrder}`);
  }

  public stopAnimation() {
    if (this.animationId) {
      window.cancelAnimationFrame(this.animationId);
    }
  }

  private initLights() {
    const ambient = new THREE.AmbientLight(0x404040)
    const directional = new THREE.DirectionalLight(0xffffff, 1)
    directional.position.set(5, 5, 5)
    this.scene.add(ambient, directional)
  }

  private initCamera() {
    this.camera.position.z = 15
    this.camera.lookAt(0, 0, 0)
  }

  public createCodeBlock(position: THREE.Vector3, text: string) {
    const currentOrder = ++SceneManager.executionCounter;
    console.log(`Enter createCodeBlock - Order:${currentOrder}`);
    console.log(`Creating code block at (${position.x},${position.y},${position.z})`);
    const geometry = new THREE.BoxGeometry(2, 1, 0.2);
    const material = new THREE.MeshPhongMaterial({ color: 0x2194ce });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.copy(position);
    this.scene.add(cube);
    console.log(`Exit createCodeBlock - Order:${currentOrder}`);
  }

  public createFunctionAssignment(position: THREE.Vector3) {
    console.log(`Creating function assignment at (${position.x},${position.y},${position.z})`);
    const geometry = new THREE.ConeGeometry(0.5, 2, 8);
    const material = new THREE.MeshPhongMaterial({ color: 0xff9900 });
    const arrow = new THREE.Mesh(geometry, material);
    arrow.rotation.x = Math.PI / 2;
    arrow.position.copy(position);
    this.scene.add(arrow);
  }

  public createStruct(position: THREE.Vector3, depth: number) {
    const color = new THREE.Color().setHSL(0.6, 1, 0.5 - depth * 0.1);
    const geometry = new THREE.CylinderGeometry(1, 1, 0.5, 6);
    const material = new THREE.MeshPhongMaterial({ color });
    const struct = new THREE.Mesh(geometry, material);
    struct.position.copy(position);
    this.scene.add(struct);
  }

  public calculatePosition(depth: number): THREE.Vector3 {
    return new THREE.Vector3(depth * 3, -depth * 2, 0);
  }
}