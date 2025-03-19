const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, '../preload/preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  })
  // 统一使用本地文件加载方式
  const loadPath = process.env.NODE_ENV === 'development'
    ? path.join(__dirname, '../../dist/renderer/index.html')
    : 'dist/renderer/index.html';
  
  mainWindow.loadFile(loadPath);
}

app.whenReady().then(createWindow)