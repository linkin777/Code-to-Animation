import { CPP14Lexer } from '../parser/generated/CPP14Lexer';
import { CPP14Parser } from '../parser/generated/CPP14Parser';
import { CommonTokenStream } from 'antlr4ts';
import { CharStreams } from 'antlr4ts/CharStreams';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ParserRuleContext } from 'antlr4ts';
// 引入 ipcRenderer
import { ipcRenderer } from 'electron';

export class CppAnalyzer {
  private static executionCounter = 0;

  constructor(private code: string) {
    if (!code || typeof code !== 'string') {
      throw new Error('Invalid code content')
    }
    
    const currentOrder = ++CppAnalyzer.executionCounter;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[CppAnalyzer] Constructor #${currentOrder}`);
      ipcRenderer.send('preload-log', {
        type: 'CppAnalyzer',
        order: currentOrder,
        action: 'constructor'
      });
    }
  }

  private currentDepth = 0;

  analyzeStructure() {
    const currentOrder = ++CppAnalyzer.executionCounter;
    console.log(`Enter analyzeStructure - Order:${currentOrder}`);
    this.currentDepth = 0;
    // 移除不存在的属性
    const result = {
      assignments: this.detectAssignments(),
      depthMap: this.buildDepthMap()
    };
    console.log(`Exit analyzeStructure - Order:${currentOrder}`);
    return result;
  }

  private detectAssignments() {
    const currentOrder = ++CppAnalyzer.executionCounter;
    console.log(`Enter detectAssignments - Order:${currentOrder}`);
    // 移除未使用的变量
    const assignments = [];
    // 识别直接赋值、函数返回赋值等类型（保留注释）
    
    const inputStream = CharStreams.fromString(this.code);
    const lexer = new CPP14Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CPP14Parser(tokenStream);
    
    // 修正方法名不一致问题
    if ('compilationUnit' in parser) {
      const parseTree = parser.compilationUnit();
      return {
        tree: parseTree.toStringTree(),
        ast: parseTree,
        tokens: tokenStream.getTokens().map(t => ({
          type: t.type,
          text: t.text,
          line: t.line
        }))
      };
    } else {
      if (process.env.NODE_ENV === 'development') {
      console.warn(`[CppAnalyzer] Missing compilationUnit #${currentOrder}`);
    }
      return {
        tree: null,
        tokens: tokenStream.getTokens().map(t => t.toString())
      };
    }
}

  private buildDepthMap() {
    const currentOrder = ++CppAnalyzer.executionCounter;
    console.log(`Enter buildDepthMap - Order:${currentOrder}`);
    const depthMap = new Map();
    // 使用parser生成的语法树进行遍历
    const inputStream = CharStreams.fromString(this.code);
    const lexer = new CPP14Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CPP14Parser(tokenStream);
    const ast = parser.compilationUnit(); // 改回标准方法名
    
    // 修正为使用 TreeWalker
    const parserRules = parser.ruleNames;
    // Bug修复：移除不存在的属性，直接创建ParseTreeWalker实例
    const walker = new ParseTreeWalker();
    walker.walk({
      enterEveryRule: (ctx: ParserRuleContext): void => {
        const nodeType = parserRules[ctx.ruleIndex];
        if (nodeType === 'functionDefinition') {
          this.currentDepth = 0;
        }
        if (['iterationStatement', 'selectionStatement'].includes(nodeType)) {
          this.currentDepth++;
        }
        depthMap.set(ctx.start.line, this.currentDepth);
      },
      exitEveryRule: (ctx: ParserRuleContext): void => {
        const nodeType = parserRules[ctx.ruleIndex];
        if (['iterationStatement', 'selectionStatement'].includes(nodeType)) {
          this.currentDepth = Math.max(0, this.currentDepth - 1);
        }
      }
    }, ast);
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[CppAnalyzer] DepthMap #${currentOrder}`);
    }
    return depthMap;
  }

  private executionTimeline: Array<{step: number, type: string, data: any}> = [];

  private createParser() {
    const inputStream = CharStreams.fromString(this.code);
    const lexer = new CPP14Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    return new CPP14Parser(tokenStream);
  }

  buildExecutionTimeline() {
    const currentOrder = ++CppAnalyzer.executionCounter;
    console.log(`Enter buildExecutionTimeline - Order:${currentOrder}`);
    const parser = this.createParser();
    const parseTree = parser.compilationUnit(); // 同步修改此处
    const parserRules = parser.ruleNames;

    // Bug修复：移除不存在的属性，直接创建ParseTreeWalker实例
    const walker = new ParseTreeWalker();
    walker.walk({
      enterEveryRule: (ctx: ParserRuleContext): void => {
        const ruleName = parserRules[ctx.ruleIndex];
        if(['expressionStatement', 'selectionStatement', 'iterationStatement'].includes(ruleName)) {
          this.executionTimeline.push({
            step: this.executionTimeline.length,
            type: ruleName,
            data: ctx.text
          });
        }
      }
    }, parseTree);

    console.log(`Exit buildExecutionTimeline - Order:${currentOrder}`);
    return this.executionTimeline;
  }

  getAnimationSteps() {
    const currentOrder = ++CppAnalyzer.executionCounter;
    console.log(`Enter getAnimationSteps - Order:${currentOrder}`);
    console.log(`Exit getAnimationSteps - Order:${currentOrder}`);
    return this.executionTimeline.map(event => ({
      time: event.step * 1000,
      action: event.type,
      target: event.data
    }));
  }
}