const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const CppAnalyzer = require('../preload/CppAnalyzer');
const fs = require('fs');
const chokidar = require('chokidar');
import * as crypto from 'crypto';

// 统一配置项
const AST_DUMP_DIR = path.join(__dirname, '../../ast-dumps');

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, '../preload/preload.js')
    }
  });

  // 统一加载逻辑
  mainWindow.loadFile(path.join(__dirname, process.env.NODE_ENV === 'development' 
    ? '../../dist/renderer/index.html' 
    : '../../../dist/renderer/index.html'));

  // 开发环境专属逻辑
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
    
    // 单例监听器
    const watcher = chokidar.watch(path.join(__dirname, '../../dist/renderer'), {
      // Bug 修复：修正正则表达式以正确匹配斜杠和反斜杠
      ignored: /(^|[/\\])\./,
      persistent: true
    });
    watcher.on('change', () => mainWindow.reload());
  }

  mainWindow.on('closed', () => app.quit());

  // IPC处理器
  // Bug 修复：为参数添加类型注解
  ipcMain.handle('code:parse', async (_: any, code: string) => {
    try {
      const analyzer = new CppAnalyzer(code);
      const startTime = Date.now();
      const result = analyzer.analyzeStructure();

      // AST持久化
      fs.mkdirSync(AST_DUMP_DIR, { recursive: true });
      fs.writeFileSync(
        path.join(AST_DUMP_DIR, `ast_${Date.now()}.json`),
        JSON.stringify({
          timestamp: new Date().toISOString(),
          codeHash: crypto.createHash('md5').update(code).digest('hex'),
          ast: JSON.stringify(result.ast, (_, v) => typeof v === 'object' ? v : v + ''),
          depthMap: Array.from(result.depthMap.entries())
        }, null, 2)
      );

      console.log('[Performance] 解析完成:', {
        duration: `${Date.now() - startTime}ms`,
        astNodes: result.ast?.body?.length || 0,
        depthMapSize: result.depthMap.size
      });
      return result;
    } catch (e: unknown) {
      // Bug 修复：明确指定 e 的类型为 unknown
      console.error('[Error] 代码解析失败:', (e as Error).stack || e);
      throw new Error('代码解析失败: ' + (e as Error).message);
    }
  });
});