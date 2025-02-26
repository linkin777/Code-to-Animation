import * as THREE from 'three'

export class SceneManager {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer

  constructor(canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, 
      canvas.width / canvas.height, 0.1, 1000)
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    
    this.initLights()
    this.initCamera()
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
    const geometry = new THREE.BoxGeometry(2, 1, 0.2)
    const material = new THREE.MeshPhongMaterial({ color: 0x2194ce })
    const cube = new THREE.Mesh(geometry, material)
    cube.position.copy(position)
    this.scene.add(cube)
  }

  public animate() {
    requestAnimationFrame(this.animate.bind(this))
    this.renderer.render(this.scene, this.camera)
  }
} 