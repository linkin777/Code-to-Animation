const { contextBridge, ipcRenderer } = require('electron')
const DOMPurify = require('dompurify')
const { JSDOM } = require('jsdom')

const window = new JSDOM('').window
const purify = DOMPurify(window)

/**
 * 安全接口暴露规范
 * @typedef {Object} APISchema
 * @property {(filter?:{extensions:string[]})=>Promise<string>} openFile - 安全文件选择
 * @property {(content:string)=>Promise<AnalyzeResult>} parseCode - 代码解析
 */

contextBridge.exposeInMainWorld('api', {
  openFile: (filter = { extensions: ['txt', 'cpp'] }) => {
    if (!Array.isArray(filter.extensions)) {
      throw new Error('Invalid extensions format')
    }
    return ipcRenderer.invoke('dialog:openFile', filter)
  },
  
  parseCode: (content) => {
    const sanitized = purify.sanitize(content, {
      ALLOWED_TAGS: [],
      RETURN_TRIMED: true
    })
    return ipcRenderer.invoke('code:parse', sanitized)
  }
})