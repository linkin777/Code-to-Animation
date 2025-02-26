import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { CPP14Lexer } from './generated/CPP14Lexer'
import { CPP14Parser } from './generated/CPP14Parser'
import { CPP14ParserVisitor } from './generated/CPP14ParserVisitor'

export class CppAnalyzer {
  private parser: CPP14Parser

  constructor(code: string) {
    const inputStream = CharStreams.fromString(code)
    const lexer = new CPP14Lexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    this.parser = new CPP14Parser(tokenStream)
  }

  public analyzeStructure() {
    const tree = this.parser.translationUnit()
    
    // 定义数据结构存储分析结果
    const analysisResult = {
      functions: [] as Array<{name: string, returnType: string, params: string[]}>,
      classes: [] as Array<{name: string, methods: string[]}>,
      variables: [] as Array<{name: string, type: string}>
    }

    const visitor = new class implements CPP14ParserVisitor<void> {
      constructor(private result: typeof analysisResult) {}

      visit = (ctx: import("antlr4ts").ParserRuleContext): void => ctx.accept(this)
      visitChildren = (ctx: import("antlr4ts").ParserRuleContext) => 
        ctx.children?.forEach((child: import("antlr4ts/tree").ParseTree) => child.accept(this))
      visitTerminal = () => {}
      visitErrorNode = () => {}

      // 函数定义捕获
      visitFunctionDefinition(ctx: import("./generated/CPP14Parser").FunctionDefinitionContext) {
        const declarator = ctx.declarator()?.text || 'anonymous'
        const returnType = ctx.declSpecifierSeq()?.text || 'void'
        this.result.functions.push({
          name: declarator.split('(')[0].trim(),
          returnType,
          params: ctx.declarator()?.parametersAndQualifiers()?.parameterDeclarationClause()?.text.split(',').map((p: string) => p.trim()) || []
        })
        this.visitChildren(ctx)
      }

      // 类定义捕获
      visitClassSpecifier(ctx: import("./generated/CPP14Parser").ClassSpecifierContext) {
        const className = ctx.classHead()?.text?.match(/class\s+(\w+)/)?.[1] || 'unknown'
        this.result.classes.push({
          name: className,
          methods: ctx.memberSpecification()?.text.split(';').map(m => m.trim()) || []
        })
        this.visitChildren(ctx)
      }

      // 变量声明捕获
      visitDeclaration(ctx: import("./generated/CPP14Parser").DeclarationContext) {
        const decl = ctx.blockDeclaration()?.simpleDeclaration()
        if (decl) {
          const type = decl.declSpecifierSeq()?.text || 'auto'
          const vars = decl.initDeclaratorList()?.text.split(',').map(v => v.trim()) || []
          vars.forEach(varName => {
            this.result.variables.push({
              name: varName.replace(/=.*/, '').trim(),
              type
            })
          })
        }
        this.visitChildren(ctx)
      }
    }(analysisResult)

    visitor.visit(tree)
    return analysisResult
  }
} 