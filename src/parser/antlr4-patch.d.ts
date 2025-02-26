declare module 'antlr4ts' {
  interface Parser {
    state: number
    _input: any
    _ctx: any
    _errHandler: any
    matchedEOF: boolean
    
    match(tokenType: number): void
    enterOuterAlt(localCtx: any, altNum: number): void
    enterRule(parser: any, state: number, ruleIndex: number): void
    consume(): any
  }

  interface Recognizer {
    sempred(localCtx: any, ruleIndex: number, actionIndex: number): boolean
  }
} 