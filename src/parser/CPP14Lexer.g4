lexer grammar CPP14Lexer;

@header {
// 定义词法分析器头文件
}

// 关键字
CLASS: 'class';
VOID: 'void';
IF: 'if';
ELSE: 'else';
WHILE: 'while';
FOR: 'for';
OR: '||';
AND: '&&';

// 基础词法规则
ID: [a-zA-Z_][a-zA-Z0-9_]*;
INT: [0-9]+;
WS: [ \t\r\n]+ -> skip;

// 运算符
PLUS: '+';
MINUS: '-';
MUL: '*';
DIV: '/';

// 新增token定义
ASSIGN: '=';
LBRACKET: '[';
RBRACKET: ']';
COMMA: ',';
// 删除以下重复定义：
// IF: 'if';
// ELSE: 'else';
// WHILE: 'while';
// FOR: 'for';
// OR: '||';
// AND: '&&';
EQUAL: '==';
NOT_EQUAL: '!=';
LT: '<';
GT: '>';
LE: '<=';
GE: '>=';
PLUSPLUS: '++';
MINUSMINUS: '--';
PLUS_ASSIGN: '+=';
MINUS_ASSIGN: '-=';

// 分隔符
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
SEMI: ';';