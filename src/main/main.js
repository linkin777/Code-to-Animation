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

  process.env.NODE_ENV === 'development' 
    ? mainWindow.loadURL('http://localhost:3000')
    : mainWindow.loadFile('dist/renderer/index.html')
}

app.whenReady().then(createWindow) 