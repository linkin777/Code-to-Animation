parser grammar CPP14Parser;

options {
    tokenVocab = CPP14Lexer;
}

compilationUnit: declaration* EOF;

declaration: 
    functionDefinition
    | variableDeclaration
    | classDefinition
    | SEMI;

functionDefinition:
    typeSpecifier ID LPAREN parameterList? RPAREN compoundStatement;

variableDeclaration:
    typeSpecifier declarator (ASSIGN expression)? SEMI;

classDefinition:
    CLASS ID LBRACE (classMember SEMI)* RBRACE SEMI;

classMember:
    variableDeclaration
    | functionDeclaration;

functionDeclaration:
    typeSpecifier ID LPAREN parameterList? RPAREN SEMI;

typeSpecifier:
    INT
    | VOID
    | CLASS ID;

declarator:
    ID
    | declarator LBRACKET INT RBRACKET;

parameterList:
    parameter (COMMA parameter)*;

parameter:
    typeSpecifier declarator;

compoundStatement:
    LBRACE statement* RBRACE;

statement:
    expressionStatement
    | compoundStatement
    | selectionStatement
    | iterationStatement;

expressionStatement:
    expression? SEMI;

selectionStatement:
    IF LPAREN expression RPAREN statement (ELSE statement)?;

iterationStatement:
    WHILE LPAREN expression RPAREN statement
    | FOR LPAREN expression? SEMI expression? SEMI expression? RPAREN statement;

expression:
    assignmentExpression;

assignmentExpression:
    logicalOrExpression
    | unaryExpression (ASSIGN|PLUS_ASSIGN|MINUS_ASSIGN) assignmentExpression;

logicalOrExpression:
    logicalAndExpression
    | logicalOrExpression OR logicalAndExpression;

logicalAndExpression:
    equalityExpression
    | logicalAndExpression AND equalityExpression;

equalityExpression:
    relationalExpression
    | equalityExpression EQUAL relationalExpression
    | equalityExpression NOT_EQUAL relationalExpression;

relationalExpression:
    additiveExpression
    | relationalExpression LT additiveExpression
    | relationalExpression GT additiveExpression
    | relationalExpression LE additiveExpression
    | relationalExpression GE additiveExpression;

additiveExpression:
    multiplicativeExpression
    | additiveExpression PLUS multiplicativeExpression
    | additiveExpression MINUS multiplicativeExpression;

multiplicativeExpression:
    unaryExpression
    | multiplicativeExpression MUL unaryExpression
    | multiplicativeExpression DIV unaryExpression;

unaryExpression:
    postfixExpression
    | PLUSPLUS unaryExpression
    | MINUSMINUS unaryExpression
    | PLUS unaryExpression
    | MINUS unaryExpression;

postfixExpression:
    primaryExpression
    | postfixExpression LBRACKET expression RBRACKET
    | postfixExpression LPAREN argumentList? RPAREN
    | postfixExpression PLUSPLUS
    | postfixExpression MINUSMINUS;

primaryExpression:
    ID
    | INT
    | LPAREN expression RPAREN;

argumentList:
    assignmentExpression (COMMA assignmentExpression)*;