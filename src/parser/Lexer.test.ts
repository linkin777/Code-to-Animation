import { CPP14Lexer } from './generated/CPP14Lexer';
import { CharStreams } from 'antlr4ts';

describe('CPP14Lexer', () => {
  test('should recognize basic keywords', () => {
    const input = `class MyClass {
      void method() {
        int x = 5;
      }
    };`;
    const lexer = new CPP14Lexer(CharStreams.fromString(input));
    const tokens = lexer.getAllTokens();
    
    // 验证关键token类型
    expect(tokens.map(t => t.type)).toEqual([
      CPP14Lexer.CLASS,
      CPP14Lexer.ID,
      CPP14Lexer.LBRACE,
      CPP14Lexer.VOID,
      CPP14Lexer.ID,
      CPP14Lexer.LPAREN,
      CPP14Lexer.RPAREN,
      CPP14Lexer.LBRACE,
      CPP14Lexer.INT,
      CPP14Lexer.ID,
      CPP14Lexer.ASSIGN,
      CPP14Lexer.INT,
      CPP14Lexer.SEMI,
      CPP14Lexer.RBRACE,
      CPP14Lexer.SEMI,
      CPP14Lexer.RBRACE
    ]);
  });

  test('should handle operators', () => {
    const input = 'x += 5; ++y;';
    const lexer = new CPP14Lexer(CharStreams.fromString(input));
    const tokens = lexer.getAllTokens();
    
    expect(tokens.map(t => t.type)).toContain(CPP14Lexer.PLUS_ASSIGN);
    expect(tokens.map(t => t.type)).toContain(CPP14Lexer.PLUSPLUS);
  });
});