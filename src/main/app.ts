const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const CppAnalyzer = require('../preload/CppAnalyzer');

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, '../preload/preload.js')
    }
  })
  
  // 添加服务检测逻辑
  const tryLoad = async () => {
    try {
      await fetch('http://localhost:3000')
      mainWindow.loadURL('http://localhost:3000')
    } catch (err) {
      setTimeout(tryLoad, 1000)
    }
  }
  tryLoad()

  // 开发模式加载webpack-dev-server
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile('dist/renderer/index.html')
  }
  // 添加IPC处理
  ipcMain.handle('code:parse', (_: any, code: string) => {
    const analyzer = new CppAnalyzer(code)
    return analyzer.analyzeStructure()
  })
}) 