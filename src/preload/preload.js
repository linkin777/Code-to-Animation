const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  parseCode: (content) => ipcRenderer.invoke('code:parse', content)
}) 