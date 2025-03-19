// Generated from src/parser/CPP14Parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CPP14ParserVisitor } from "./CPP14ParserVisitor";


export class CPP14Parser extends Parser {
	public static readonly CLASS = 1;
	public static readonly VOID = 2;
	public static readonly IF = 3;
	public static readonly ELSE = 4;
	public static readonly WHILE = 5;
	public static readonly FOR = 6;
	public static readonly OR = 7;
	public static readonly AND = 8;
	public static readonly ID = 9;
	public static readonly INT = 10;
	public static readonly WS = 11;
	public static readonly PLUS = 12;
	public static readonly MINUS = 13;
	public static readonly MUL = 14;
	public static readonly DIV = 15;
	public static readonly ASSIGN = 16;
	public static readonly LBRACKET = 17;
	public static readonly RBRACKET = 18;
	public static readonly COMMA = 19;
	public static readonly EQUAL = 20;
	public static readonly NOT_EQUAL = 21;
	public static readonly LT = 22;
	public static readonly GT = 23;
	public static readonly LE = 24;
	public static readonly GE = 25;
	public static readonly PLUSPLUS = 26;
	public static readonly MINUSMINUS = 27;
	public static readonly PLUS_ASSIGN = 28;
	public static readonly MINUS_ASSIGN = 29;
	public static readonly LPAREN = 30;
	public static readonly RPAREN = 31;
	public static readonly LBRACE = 32;
	public static readonly RBRACE = 33;
	public static readonly SEMI = 34;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_declaration = 1;
	public static readonly RULE_functionDefinition = 2;
	public static readonly RULE_variableDeclaration = 3;
	public static readonly RULE_classDefinition = 4;
	public static readonly RULE_classMember = 5;
	public static readonly RULE_functionDeclaration = 6;
	public static readonly RULE_typeSpecifier = 7;
	public static readonly RULE_declarator = 8;
	public static readonly RULE_parameterList = 9;
	public static readonly RULE_parameter = 10;
	public static readonly RULE_compoundStatement = 11;
	public static readonly RULE_statement = 12;
	public static readonly RULE_expressionStatement = 13;
	public static readonly RULE_selectionStatement = 14;
	public static readonly RULE_iterationStatement = 15;
	public static readonly RULE_expression = 16;
	public static readonly RULE_assignmentExpression = 17;
	public static readonly RULE_logicalOrExpression = 18;
	public static readonly RULE_logicalAndExpression = 19;
	public static readonly RULE_equalityExpression = 20;
	public static readonly RULE_relationalExpression = 21;
	public static readonly RULE_additiveExpression = 22;
	public static readonly RULE_multiplicativeExpression = 23;
	public static readonly RULE_unaryExpression = 24;
	public static readonly RULE_postfixExpression = 25;
	public static readonly RULE_primaryExpression = 26;
	public static readonly RULE_argumentList = 27;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "declaration", "functionDefinition", "variableDeclaration", 
		"classDefinition", "classMember", "functionDeclaration", "typeSpecifier", 
		"declarator", "parameterList", "parameter", "compoundStatement", "statement", 
		"expressionStatement", "selectionStatement", "iterationStatement", "expression", 
		"assignmentExpression", "logicalOrExpression", "logicalAndExpression", 
		"equalityExpression", "relationalExpression", "additiveExpression", "multiplicativeExpression", 
		"unaryExpression", "postfixExpression", "primaryExpression", "argumentList",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'class'", "'void'", "'if'", "'else'", "'while'", "'for'", 
		"'||'", "'&&'", undefined, undefined, undefined, "'+'", "'-'", "'*'", 
		"'/'", "'='", "'['", "']'", "','", "'=='", "'!='", "'<'", "'>'", "'<='", 
		"'>='", "'++'", "'--'", "'+='", "'-='", "'('", "')'", "'{'", "'}'", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CLASS", "VOID", "IF", "ELSE", "WHILE", "FOR", "OR", "AND", 
		"ID", "INT", "WS", "PLUS", "MINUS", "MUL", "DIV", "ASSIGN", "LBRACKET", 
		"RBRACKET", "COMMA", "EQUAL", "NOT_EQUAL", "LT", "GT", "LE", "GE", "PLUSPLUS", 
		"MINUSMINUS", "PLUS_ASSIGN", "MINUS_ASSIGN", "LPAREN", "RPAREN", "LBRACE", 
		"RBRACE", "SEMI",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CPP14Parser._LITERAL_NAMES, CPP14Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CPP14Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CPP14Parser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CPP14Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CPP14Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CPP14Parser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CPP14Parser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.CLASS) | (1 << CPP14Parser.VOID) | (1 << CPP14Parser.INT))) !== 0) || _la === CPP14Parser.SEMI) {
				{
				{
				this.state = 56;
				this.declaration();
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 62;
			this.match(CPP14Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CPP14Parser.RULE_declaration);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 64;
				this.functionDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 65;
				this.variableDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 66;
				this.classDefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 67;
				this.match(CPP14Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CPP14Parser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.typeSpecifier();
			this.state = 71;
			this.match(CPP14Parser.ID);
			this.state = 72;
			this.match(CPP14Parser.LPAREN);
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.CLASS) | (1 << CPP14Parser.VOID) | (1 << CPP14Parser.INT))) !== 0)) {
				{
				this.state = 73;
				this.parameterList();
				}
			}

			this.state = 76;
			this.match(CPP14Parser.RPAREN);
			this.state = 77;
			this.compoundStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CPP14Parser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.typeSpecifier();
			this.state = 80;
			this.declarator(0);
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.ASSIGN) {
				{
				this.state = 81;
				this.match(CPP14Parser.ASSIGN);
				this.state = 82;
				this.expression();
				}
			}

			this.state = 85;
			this.match(CPP14Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDefinition(): ClassDefinitionContext {
		let _localctx: ClassDefinitionContext = new ClassDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CPP14Parser.RULE_classDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(CPP14Parser.CLASS);
			this.state = 88;
			this.match(CPP14Parser.ID);
			this.state = 89;
			this.match(CPP14Parser.LBRACE);
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.CLASS) | (1 << CPP14Parser.VOID) | (1 << CPP14Parser.INT))) !== 0)) {
				{
				{
				this.state = 90;
				this.classMember();
				this.state = 91;
				this.match(CPP14Parser.SEMI);
				}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 98;
			this.match(CPP14Parser.RBRACE);
			this.state = 99;
			this.match(CPP14Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMember(): ClassMemberContext {
		let _localctx: ClassMemberContext = new ClassMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CPP14Parser.RULE_classMember);
		try {
			this.state = 103;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 101;
				this.variableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 102;
				this.functionDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CPP14Parser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.typeSpecifier();
			this.state = 106;
			this.match(CPP14Parser.ID);
			this.state = 107;
			this.match(CPP14Parser.LPAREN);
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.CLASS) | (1 << CPP14Parser.VOID) | (1 << CPP14Parser.INT))) !== 0)) {
				{
				this.state = 108;
				this.parameterList();
				}
			}

			this.state = 111;
			this.match(CPP14Parser.RPAREN);
			this.state = 112;
			this.match(CPP14Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifier(): TypeSpecifierContext {
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CPP14Parser.RULE_typeSpecifier);
		try {
			this.state = 118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.INT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 114;
				this.match(CPP14Parser.INT);
				}
				break;
			case CPP14Parser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 115;
				this.match(CPP14Parser.VOID);
				}
				break;
			case CPP14Parser.CLASS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 116;
				this.match(CPP14Parser.CLASS);
				this.state = 117;
				this.match(CPP14Parser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public declarator(): DeclaratorContext;
	public declarator(_p: number): DeclaratorContext;
	// @RuleVersion(0)
	public declarator(_p?: number): DeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, _parentState);
		let _prevctx: DeclaratorContext = _localctx;
		let _startState: number = 16;
		this.enterRecursionRule(_localctx, 16, CPP14Parser.RULE_declarator, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 121;
			this.match(CPP14Parser.ID);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 129;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new DeclaratorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_declarator);
					this.state = 123;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 124;
					this.match(CPP14Parser.LBRACKET);
					this.state = 125;
					this.match(CPP14Parser.INT);
					this.state = 126;
					this.match(CPP14Parser.RBRACKET);
					}
					}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CPP14Parser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.parameter();
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.COMMA) {
				{
				{
				this.state = 133;
				this.match(CPP14Parser.COMMA);
				this.state = 134;
				this.parameter();
				}
				}
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CPP14Parser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.typeSpecifier();
			this.state = 141;
			this.declarator(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CPP14Parser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(CPP14Parser.LBRACE);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (CPP14Parser.IF - 3)) | (1 << (CPP14Parser.WHILE - 3)) | (1 << (CPP14Parser.FOR - 3)) | (1 << (CPP14Parser.ID - 3)) | (1 << (CPP14Parser.INT - 3)) | (1 << (CPP14Parser.PLUS - 3)) | (1 << (CPP14Parser.MINUS - 3)) | (1 << (CPP14Parser.PLUSPLUS - 3)) | (1 << (CPP14Parser.MINUSMINUS - 3)) | (1 << (CPP14Parser.LPAREN - 3)) | (1 << (CPP14Parser.LBRACE - 3)) | (1 << (CPP14Parser.SEMI - 3)))) !== 0)) {
				{
				{
				this.state = 144;
				this.statement();
				}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 150;
			this.match(CPP14Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CPP14Parser.RULE_statement);
		try {
			this.state = 156;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.ID:
			case CPP14Parser.INT:
			case CPP14Parser.PLUS:
			case CPP14Parser.MINUS:
			case CPP14Parser.PLUSPLUS:
			case CPP14Parser.MINUSMINUS:
			case CPP14Parser.LPAREN:
			case CPP14Parser.SEMI:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 152;
				this.expressionStatement();
				}
				break;
			case CPP14Parser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 153;
				this.compoundStatement();
				}
				break;
			case CPP14Parser.IF:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 154;
				this.selectionStatement();
				}
				break;
			case CPP14Parser.WHILE:
			case CPP14Parser.FOR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 155;
				this.iterationStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CPP14Parser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.ID) | (1 << CPP14Parser.INT) | (1 << CPP14Parser.PLUS) | (1 << CPP14Parser.MINUS) | (1 << CPP14Parser.PLUSPLUS) | (1 << CPP14Parser.MINUSMINUS) | (1 << CPP14Parser.LPAREN))) !== 0)) {
				{
				this.state = 158;
				this.expression();
				}
			}

			this.state = 161;
			this.match(CPP14Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectionStatement(): SelectionStatementContext {
		let _localctx: SelectionStatementContext = new SelectionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CPP14Parser.RULE_selectionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(CPP14Parser.IF);
			this.state = 164;
			this.match(CPP14Parser.LPAREN);
			this.state = 165;
			this.expression();
			this.state = 166;
			this.match(CPP14Parser.RPAREN);
			this.state = 167;
			this.statement();
			this.state = 170;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 168;
				this.match(CPP14Parser.ELSE);
				this.state = 169;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CPP14Parser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 193;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 172;
				this.match(CPP14Parser.WHILE);
				this.state = 173;
				this.match(CPP14Parser.LPAREN);
				this.state = 174;
				this.expression();
				this.state = 175;
				this.match(CPP14Parser.RPAREN);
				this.state = 176;
				this.statement();
				}
				break;
			case CPP14Parser.FOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 178;
				this.match(CPP14Parser.FOR);
				this.state = 179;
				this.match(CPP14Parser.LPAREN);
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.ID) | (1 << CPP14Parser.INT) | (1 << CPP14Parser.PLUS) | (1 << CPP14Parser.MINUS) | (1 << CPP14Parser.PLUSPLUS) | (1 << CPP14Parser.MINUSMINUS) | (1 << CPP14Parser.LPAREN))) !== 0)) {
					{
					this.state = 180;
					this.expression();
					}
				}

				this.state = 183;
				this.match(CPP14Parser.SEMI);
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.ID) | (1 << CPP14Parser.INT) | (1 << CPP14Parser.PLUS) | (1 << CPP14Parser.MINUS) | (1 << CPP14Parser.PLUSPLUS) | (1 << CPP14Parser.MINUSMINUS) | (1 << CPP14Parser.LPAREN))) !== 0)) {
					{
					this.state = 184;
					this.expression();
					}
				}

				this.state = 187;
				this.match(CPP14Parser.SEMI);
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.ID) | (1 << CPP14Parser.INT) | (1 << CPP14Parser.PLUS) | (1 << CPP14Parser.MINUS) | (1 << CPP14Parser.PLUSPLUS) | (1 << CPP14Parser.MINUSMINUS) | (1 << CPP14Parser.LPAREN))) !== 0)) {
					{
					this.state = 188;
					this.expression();
					}
				}

				this.state = 191;
				this.match(CPP14Parser.RPAREN);
				this.state = 192;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CPP14Parser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.assignmentExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CPP14Parser.RULE_assignmentExpression);
		let _la: number;
		try {
			this.state = 202;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 197;
				this.logicalOrExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 198;
				this.unaryExpression();
				this.state = 199;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.ASSIGN) | (1 << CPP14Parser.PLUS_ASSIGN) | (1 << CPP14Parser.MINUS_ASSIGN))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 200;
				this.assignmentExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public logicalOrExpression(): LogicalOrExpressionContext;
	public logicalOrExpression(_p: number): LogicalOrExpressionContext;
	// @RuleVersion(0)
	public logicalOrExpression(_p?: number): LogicalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalOrExpressionContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, CPP14Parser.RULE_logicalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 205;
			this.logicalAndExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 212;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_logicalOrExpression);
					this.state = 207;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 208;
					this.match(CPP14Parser.OR);
					this.state = 209;
					this.logicalAndExpression(0);
					}
					}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public logicalAndExpression(): LogicalAndExpressionContext;
	public logicalAndExpression(_p: number): LogicalAndExpressionContext;
	// @RuleVersion(0)
	public logicalAndExpression(_p?: number): LogicalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalAndExpressionContext = _localctx;
		let _startState: number = 38;
		this.enterRecursionRule(_localctx, 38, CPP14Parser.RULE_logicalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 216;
			this.equalityExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 223;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalAndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_logicalAndExpression);
					this.state = 218;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 219;
					this.match(CPP14Parser.AND);
					this.state = 220;
					this.equalityExpression(0);
					}
					}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public equalityExpression(): EqualityExpressionContext;
	public equalityExpression(_p: number): EqualityExpressionContext;
	// @RuleVersion(0)
	public equalityExpression(_p?: number): EqualityExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, _parentState);
		let _prevctx: EqualityExpressionContext = _localctx;
		let _startState: number = 40;
		this.enterRecursionRule(_localctx, 40, CPP14Parser.RULE_equalityExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 227;
			this.relationalExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 237;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 235;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
					case 1:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_equalityExpression);
						this.state = 229;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 230;
						this.match(CPP14Parser.EQUAL);
						this.state = 231;
						this.relationalExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_equalityExpression);
						this.state = 232;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 233;
						this.match(CPP14Parser.NOT_EQUAL);
						this.state = 234;
						this.relationalExpression(0);
						}
						break;
					}
					}
				}
				this.state = 239;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public relationalExpression(): RelationalExpressionContext;
	public relationalExpression(_p: number): RelationalExpressionContext;
	// @RuleVersion(0)
	public relationalExpression(_p?: number): RelationalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, _parentState);
		let _prevctx: RelationalExpressionContext = _localctx;
		let _startState: number = 42;
		this.enterRecursionRule(_localctx, 42, CPP14Parser.RULE_relationalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 241;
			this.additiveExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 257;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 255;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
					case 1:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalExpression);
						this.state = 243;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 244;
						this.match(CPP14Parser.LT);
						this.state = 245;
						this.additiveExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalExpression);
						this.state = 246;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 247;
						this.match(CPP14Parser.GT);
						this.state = 248;
						this.additiveExpression(0);
						}
						break;

					case 3:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalExpression);
						this.state = 249;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 250;
						this.match(CPP14Parser.LE);
						this.state = 251;
						this.additiveExpression(0);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalExpression);
						this.state = 252;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 253;
						this.match(CPP14Parser.GE);
						this.state = 254;
						this.additiveExpression(0);
						}
						break;
					}
					}
				}
				this.state = 259;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	// @RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = _localctx;
		let _startState: number = 44;
		this.enterRecursionRule(_localctx, 44, CPP14Parser.RULE_additiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 261;
			this.multiplicativeExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 271;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 269;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_additiveExpression);
						this.state = 263;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 264;
						this.match(CPP14Parser.PLUS);
						this.state = 265;
						this.multiplicativeExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_additiveExpression);
						this.state = 266;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 267;
						this.match(CPP14Parser.MINUS);
						this.state = 268;
						this.multiplicativeExpression(0);
						}
						break;
					}
					}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	// @RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = _localctx;
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, CPP14Parser.RULE_multiplicativeExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 275;
			this.unaryExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 285;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 283;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_multiplicativeExpression);
						this.state = 277;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 278;
						this.match(CPP14Parser.MUL);
						this.state = 279;
						this.unaryExpression();
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_multiplicativeExpression);
						this.state = 280;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 281;
						this.match(CPP14Parser.DIV);
						this.state = 282;
						this.unaryExpression();
						}
						break;
					}
					}
				}
				this.state = 287;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CPP14Parser.RULE_unaryExpression);
		try {
			this.state = 297;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.ID:
			case CPP14Parser.INT:
			case CPP14Parser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 288;
				this.postfixExpression(0);
				}
				break;
			case CPP14Parser.PLUSPLUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 289;
				this.match(CPP14Parser.PLUSPLUS);
				this.state = 290;
				this.unaryExpression();
				}
				break;
			case CPP14Parser.MINUSMINUS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 291;
				this.match(CPP14Parser.MINUSMINUS);
				this.state = 292;
				this.unaryExpression();
				}
				break;
			case CPP14Parser.PLUS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 293;
				this.match(CPP14Parser.PLUS);
				this.state = 294;
				this.unaryExpression();
				}
				break;
			case CPP14Parser.MINUS:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 295;
				this.match(CPP14Parser.MINUS);
				this.state = 296;
				this.unaryExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public postfixExpression(): PostfixExpressionContext;
	public postfixExpression(_p: number): PostfixExpressionContext;
	// @RuleVersion(0)
	public postfixExpression(_p?: number): PostfixExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, _parentState);
		let _prevctx: PostfixExpressionContext = _localctx;
		let _startState: number = 50;
		this.enterRecursionRule(_localctx, 50, CPP14Parser.RULE_postfixExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 300;
			this.primaryExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 319;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 317;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
					case 1:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixExpression);
						this.state = 302;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 303;
						this.match(CPP14Parser.LBRACKET);
						this.state = 304;
						this.expression();
						this.state = 305;
						this.match(CPP14Parser.RBRACKET);
						}
						break;

					case 2:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixExpression);
						this.state = 307;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 308;
						this.match(CPP14Parser.LPAREN);
						this.state = 310;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.ID) | (1 << CPP14Parser.INT) | (1 << CPP14Parser.PLUS) | (1 << CPP14Parser.MINUS) | (1 << CPP14Parser.PLUSPLUS) | (1 << CPP14Parser.MINUSMINUS) | (1 << CPP14Parser.LPAREN))) !== 0)) {
							{
							this.state = 309;
							this.argumentList();
							}
						}

						this.state = 312;
						this.match(CPP14Parser.RPAREN);
						}
						break;

					case 3:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixExpression);
						this.state = 313;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 314;
						this.match(CPP14Parser.PLUSPLUS);
						}
						break;

					case 4:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixExpression);
						this.state = 315;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 316;
						this.match(CPP14Parser.MINUSMINUS);
						}
						break;
					}
					}
				}
				this.state = 321;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CPP14Parser.RULE_primaryExpression);
		try {
			this.state = 328;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 322;
				this.match(CPP14Parser.ID);
				}
				break;
			case CPP14Parser.INT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 323;
				this.match(CPP14Parser.INT);
				}
				break;
			case CPP14Parser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 324;
				this.match(CPP14Parser.LPAREN);
				this.state = 325;
				this.expression();
				this.state = 326;
				this.match(CPP14Parser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CPP14Parser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.assignmentExpression();
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.COMMA) {
				{
				{
				this.state = 331;
				this.match(CPP14Parser.COMMA);
				this.state = 332;
				this.assignmentExpression();
				}
				}
				this.state = 337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 8:
			return this.declarator_sempred(_localctx as DeclaratorContext, predIndex);

		case 18:
			return this.logicalOrExpression_sempred(_localctx as LogicalOrExpressionContext, predIndex);

		case 19:
			return this.logicalAndExpression_sempred(_localctx as LogicalAndExpressionContext, predIndex);

		case 20:
			return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex);

		case 21:
			return this.relationalExpression_sempred(_localctx as RelationalExpressionContext, predIndex);

		case 22:
			return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex);

		case 23:
			return this.multiplicativeExpression_sempred(_localctx as MultiplicativeExpressionContext, predIndex);

		case 25:
			return this.postfixExpression_sempred(_localctx as PostfixExpressionContext, predIndex);
		}
		return true;
	}
	private declarator_sempred(_localctx: DeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalOrExpression_sempred(_localctx: LogicalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalAndExpression_sempred(_localctx: LogicalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(_localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);

		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(_localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 4);

		case 6:
			return this.precpred(this._ctx, 3);

		case 7:
			return this.precpred(this._ctx, 2);

		case 8:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(_localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 2);

		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeExpression_sempred(_localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private postfixExpression_sempred(_localctx: PostfixExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 4);

		case 14:
			return this.precpred(this._ctx, 3);

		case 15:
			return this.precpred(this._ctx, 2);

		case 16:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03$\u0155\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x03\x02\x07\x02<\n\x02\f\x02\x0E\x02?\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03G\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x05\x04M\n\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05V\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x07\x06`\n\x06\f\x06\x0E\x06c\v\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x05\x07j\n\x07\x03\b\x03\b\x03\b\x03\b\x05\bp\n\b" +
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x05\ty\n\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x07\n\x82\n\n\f\n\x0E\n\x85\v\n\x03\v\x03\v" +
		"\x03\v\x07\v\x8A\n\v\f\v\x0E\v\x8D\v\v\x03\f\x03\f\x03\f\x03\r\x03\r\x07" +
		"\r\x94\n\r\f\r\x0E\r\x97\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\x9F\n\x0E\x03\x0F\x05\x0F\xA2\n\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xAD\n\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\xB8\n\x11\x03\x11\x03\x11\x05\x11\xBC\n\x11\x03\x11\x03\x11\x05\x11\xC0" +
		"\n\x11\x03\x11\x03\x11\x05\x11\xC4\n\x11\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\xCD\n\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x07\x14\xD5\n\x14\f\x14\x0E\x14\xD8\v\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\xE0\n\x15\f\x15\x0E\x15" +
		"\xE3\v\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x07\x16\xEE\n\x16\f\x16\x0E\x16\xF1\v\x16\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0102\n\x17\f\x17\x0E\x17\u0105" +
		"\v\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x07\x18\u0110\n\x18\f\x18\x0E\x18\u0113\v\x18\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u011E" +
		"\n\x19\f\x19\x0E\x19\u0121\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u012C\n\x1A\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05" +
		"\x1B\u0139\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0140" +
		"\n\x1B\f\x1B\x0E\x1B\u0143\v\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x05\x1C\u014B\n\x1C\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0150\n\x1D" +
		"\f\x1D\x0E\x1D\u0153\v\x1D\x03\x1D\x02\x02\n\x12&(*,.04\x1E\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02\x02\x03\x04\x02\x12\x12\x1E\x1F\x02\u0168" +
		"\x02=\x03\x02\x02\x02\x04F\x03\x02\x02\x02\x06H\x03\x02\x02\x02\bQ\x03" +
		"\x02\x02\x02\nY\x03\x02\x02\x02\fi\x03\x02\x02\x02\x0Ek\x03\x02\x02\x02" +
		"\x10x\x03\x02\x02\x02\x12z\x03\x02\x02\x02\x14\x86\x03\x02\x02\x02\x16" +
		"\x8E\x03\x02\x02\x02\x18\x91\x03\x02\x02\x02\x1A\x9E\x03\x02\x02\x02\x1C" +
		"\xA1\x03\x02\x02\x02\x1E\xA5\x03\x02\x02\x02 \xC3\x03\x02\x02\x02\"\xC5" +
		"\x03\x02\x02\x02$\xCC\x03\x02\x02\x02&\xCE\x03\x02\x02\x02(\xD9\x03\x02" +
		"\x02\x02*\xE4\x03\x02\x02\x02,\xF2\x03\x02\x02\x02.\u0106\x03\x02\x02" +
		"\x020\u0114\x03\x02\x02\x022\u012B\x03\x02\x02\x024\u012D\x03\x02\x02" +
		"\x026\u014A\x03\x02\x02\x028\u014C\x03\x02\x02\x02:<\x05\x04\x03\x02;" +
		":\x03\x02\x02\x02<?\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02" +
		">@\x03\x02\x02\x02?=\x03\x02\x02\x02@A\x07\x02\x02\x03A\x03\x03\x02\x02" +
		"\x02BG\x05\x06\x04\x02CG\x05\b\x05\x02DG\x05\n\x06\x02EG\x07$\x02\x02" +
		"FB\x03\x02\x02\x02FC\x03\x02\x02\x02FD\x03\x02\x02\x02FE\x03\x02\x02\x02" +
		"G\x05\x03\x02\x02\x02HI\x05\x10\t\x02IJ\x07\v\x02\x02JL\x07 \x02\x02K" +
		"M\x05\x14\v\x02LK\x03\x02\x02\x02LM\x03\x02\x02\x02MN\x03\x02\x02\x02" +
		"NO\x07!\x02\x02OP\x05\x18\r\x02P\x07\x03\x02\x02\x02QR\x05\x10\t\x02R" +
		"U\x05\x12\n\x02ST\x07\x12\x02\x02TV\x05\"\x12\x02US\x03\x02\x02\x02UV" +
		"\x03\x02\x02\x02VW\x03\x02\x02\x02WX\x07$\x02\x02X\t\x03\x02\x02\x02Y" +
		"Z\x07\x03\x02\x02Z[\x07\v\x02\x02[a\x07\"\x02\x02\\]\x05\f\x07\x02]^\x07" +
		"$\x02\x02^`\x03\x02\x02\x02_\\\x03\x02\x02\x02`c\x03\x02\x02\x02a_\x03" +
		"\x02\x02\x02ab\x03\x02\x02\x02bd\x03\x02\x02\x02ca\x03\x02\x02\x02de\x07" +
		"#\x02\x02ef\x07$\x02\x02f\v\x03\x02\x02\x02gj\x05\b\x05\x02hj\x05\x0E" +
		"\b\x02ig\x03\x02\x02\x02ih\x03\x02\x02\x02j\r\x03\x02\x02\x02kl\x05\x10" +
		"\t\x02lm\x07\v\x02\x02mo\x07 \x02\x02np\x05\x14\v\x02on\x03\x02\x02\x02" +
		"op\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x07!\x02\x02rs\x07$\x02\x02s\x0F" +
		"\x03\x02\x02\x02ty\x07\f\x02\x02uy\x07\x04\x02\x02vw\x07\x03\x02\x02w" +
		"y\x07\v\x02\x02xt\x03\x02\x02\x02xu\x03\x02\x02\x02xv\x03\x02\x02\x02" +
		"y\x11\x03\x02\x02\x02z{\b\n\x01\x02{|\x07\v\x02\x02|\x83\x03\x02\x02\x02" +
		"}~\f\x03\x02\x02~\x7F\x07\x13\x02\x02\x7F\x80\x07\f\x02\x02\x80\x82\x07" +
		"\x14\x02\x02\x81}\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03" +
		"\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x13\x03\x02\x02\x02\x85\x83\x03" +
		"\x02\x02\x02\x86\x8B\x05\x16\f\x02\x87\x88\x07\x15\x02\x02\x88\x8A\x05" +
		"\x16\f\x02\x89\x87\x03\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89\x03" +
		"\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x15\x03\x02\x02\x02\x8D\x8B\x03" +
		"\x02\x02\x02\x8E\x8F\x05\x10\t\x02\x8F\x90\x05\x12\n\x02\x90\x17\x03\x02" +
		"\x02\x02\x91\x95\x07\"\x02\x02\x92\x94\x05\x1A\x0E\x02\x93\x92\x03\x02" +
		"\x02\x02\x94\x97\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02" +
		"\x02\x02\x96\x98\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x98\x99\x07#" +
		"\x02\x02\x99\x19\x03\x02\x02\x02\x9A\x9F\x05\x1C\x0F\x02\x9B\x9F\x05\x18" +
		"\r\x02\x9C\x9F\x05\x1E\x10\x02\x9D\x9F\x05 \x11\x02\x9E\x9A\x03\x02\x02" +
		"\x02\x9E\x9B\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9D\x03\x02\x02" +
		"\x02\x9F\x1B\x03\x02\x02\x02\xA0\xA2\x05\"\x12\x02\xA1\xA0\x03\x02\x02" +
		"\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x07$\x02" +
		"\x02\xA4\x1D\x03\x02\x02\x02\xA5\xA6\x07\x05\x02\x02\xA6\xA7\x07 \x02" +
		"\x02\xA7\xA8\x05\"\x12\x02\xA8\xA9\x07!\x02\x02\xA9\xAC\x05\x1A\x0E\x02" +
		"\xAA\xAB\x07\x06\x02\x02\xAB\xAD\x05\x1A\x0E\x02\xAC\xAA\x03\x02\x02\x02" +
		"\xAC\xAD\x03\x02\x02\x02\xAD\x1F\x03\x02\x02\x02\xAE\xAF\x07\x07\x02\x02" +
		"\xAF\xB0\x07 \x02\x02\xB0\xB1\x05\"\x12\x02\xB1\xB2\x07!\x02\x02\xB2\xB3" +
		"\x05\x1A\x0E\x02\xB3\xC4\x03\x02\x02\x02\xB4\xB5\x07\b\x02\x02\xB5\xB7" +
		"\x07 \x02\x02\xB6\xB8\x05\"\x12\x02\xB7\xB6\x03\x02\x02\x02\xB7\xB8\x03" +
		"\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBB\x07$\x02\x02\xBA\xBC\x05" +
		"\"\x12\x02\xBB\xBA\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x03" +
		"\x02\x02\x02\xBD\xBF\x07$\x02\x02\xBE\xC0\x05\"\x12\x02\xBF\xBE\x03\x02" +
		"\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x07!" +
		"\x02\x02\xC2\xC4\x05\x1A\x0E\x02\xC3\xAE\x03\x02\x02\x02\xC3\xB4\x03\x02" +
		"\x02\x02\xC4!\x03\x02\x02\x02\xC5\xC6\x05$\x13\x02\xC6#\x03\x02\x02\x02" +
		"\xC7\xCD\x05&\x14\x02\xC8\xC9\x052\x1A\x02\xC9\xCA\t\x02\x02\x02\xCA\xCB" +
		"\x05$\x13\x02\xCB\xCD\x03\x02\x02\x02\xCC\xC7\x03\x02\x02\x02\xCC\xC8" +
		"\x03\x02\x02\x02\xCD%\x03\x02\x02\x02\xCE\xCF\b\x14\x01\x02\xCF\xD0\x05" +
		"(\x15\x02\xD0\xD6\x03\x02\x02\x02\xD1\xD2\f\x03\x02\x02\xD2\xD3\x07\t" +
		"\x02\x02\xD3\xD5\x05(\x15\x02\xD4\xD1\x03\x02\x02\x02\xD5\xD8\x03\x02" +
		"\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\'\x03\x02" +
		"\x02\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDA\b\x15\x01\x02\xDA\xDB\x05*\x16" +
		"\x02\xDB\xE1\x03\x02\x02\x02\xDC\xDD\f\x03\x02\x02\xDD\xDE\x07\n\x02\x02" +
		"\xDE\xE0\x05*\x16\x02\xDF\xDC\x03\x02\x02\x02\xE0\xE3\x03\x02\x02\x02" +
		"\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2)\x03\x02\x02\x02" +
		"\xE3\xE1\x03\x02\x02\x02\xE4\xE5\b\x16\x01\x02\xE5\xE6\x05,\x17\x02\xE6" +
		"\xEF\x03\x02\x02\x02\xE7\xE8\f\x04\x02\x02\xE8\xE9\x07\x16\x02\x02\xE9" +
		"\xEE\x05,\x17\x02\xEA\xEB\f\x03\x02\x02\xEB\xEC\x07\x17\x02\x02\xEC\xEE" +
		"\x05,\x17\x02\xED\xE7\x03\x02\x02\x02\xED\xEA\x03\x02\x02\x02\xEE\xF1" +
		"\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0+" +
		"\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF3\b\x17\x01\x02\xF3\xF4" +
		"\x05.\x18\x02\xF4\u0103\x03\x02\x02\x02\xF5\xF6\f\x06\x02\x02\xF6\xF7" +
		"\x07\x18\x02\x02\xF7\u0102\x05.\x18\x02\xF8\xF9\f\x05\x02\x02\xF9\xFA" +
		"\x07\x19\x02\x02\xFA\u0102\x05.\x18\x02\xFB\xFC\f\x04\x02\x02\xFC\xFD" +
		"\x07\x1A\x02\x02\xFD\u0102\x05.\x18\x02\xFE\xFF\f\x03\x02\x02\xFF\u0100" +
		"\x07\x1B\x02\x02\u0100\u0102\x05.\x18\x02\u0101\xF5\x03\x02\x02\x02\u0101" +
		"\xF8\x03\x02\x02\x02\u0101\xFB\x03\x02\x02\x02\u0101\xFE\x03\x02\x02\x02" +
		"\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03" +
		"\x02\x02\x02\u0104-\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106" +
		"\u0107\b\x18\x01\x02\u0107\u0108\x050\x19\x02\u0108\u0111\x03\x02\x02" +
		"\x02\u0109\u010A\f\x04\x02\x02\u010A\u010B\x07\x0E\x02\x02\u010B\u0110" +
		"\x050\x19\x02\u010C\u010D\f\x03\x02\x02\u010D\u010E\x07\x0F\x02\x02\u010E" +
		"\u0110\x050\x19\x02\u010F\u0109\x03\x02\x02\x02\u010F\u010C\x03\x02\x02" +
		"\x02\u0110\u0113\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112" +
		"\x03\x02\x02\x02\u0112/\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114" +
		"\u0115\b\x19\x01\x02\u0115\u0116\x052\x1A\x02\u0116\u011F\x03\x02\x02" +
		"\x02\u0117\u0118\f\x04\x02\x02\u0118\u0119\x07\x10\x02\x02\u0119\u011E" +
		"\x052\x1A\x02\u011A\u011B\f\x03\x02\x02\u011B\u011C\x07\x11\x02\x02\u011C" +
		"\u011E\x052\x1A\x02\u011D\u0117\x03\x02\x02\x02\u011D\u011A\x03\x02\x02" +
		"\x02\u011E\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u0120" +
		"\x03\x02\x02\x02\u01201\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0122" +
		"\u012C\x054\x1B\x02\u0123\u0124\x07\x1C\x02\x02\u0124\u012C\x052\x1A\x02" +
		"\u0125\u0126\x07\x1D\x02\x02\u0126\u012C\x052\x1A\x02\u0127\u0128\x07" +
		"\x0E\x02\x02\u0128\u012C\x052\x1A\x02\u0129\u012A\x07\x0F\x02\x02\u012A" +
		"\u012C\x052\x1A\x02\u012B\u0122\x03\x02\x02\x02\u012B\u0123\x03\x02\x02" +
		"\x02\u012B\u0125\x03\x02\x02\x02\u012B\u0127\x03\x02\x02\x02\u012B\u0129" +
		"\x03\x02\x02\x02\u012C3\x03\x02\x02\x02\u012D\u012E\b\x1B\x01\x02\u012E" +
		"\u012F\x056\x1C\x02\u012F\u0141\x03\x02\x02\x02\u0130\u0131\f\x06\x02" +
		"\x02\u0131\u0132\x07\x13\x02\x02\u0132\u0133\x05\"\x12\x02\u0133\u0134" +
		"\x07\x14\x02\x02\u0134\u0140\x03\x02\x02\x02\u0135\u0136\f\x05\x02\x02" +
		"\u0136\u0138\x07 \x02\x02\u0137\u0139\x058\x1D\x02\u0138\u0137\x03\x02" +
		"\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A" +
		"\u0140\x07!\x02\x02\u013B\u013C\f\x04\x02\x02\u013C\u0140\x07\x1C\x02" +
		"\x02\u013D\u013E\f\x03\x02\x02\u013E\u0140\x07\x1D\x02\x02\u013F\u0130" +
		"\x03\x02\x02\x02\u013F\u0135\x03\x02\x02\x02\u013F\u013B\x03\x02\x02\x02" +
		"\u013F\u013D\x03\x02\x02\x02\u0140\u0143\x03\x02\x02\x02\u0141\u013F\x03" +
		"\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u01425\x03\x02\x02\x02\u0143" +
		"\u0141\x03\x02\x02\x02\u0144\u014B\x07\v\x02\x02\u0145\u014B\x07\f\x02" +
		"\x02\u0146\u0147\x07 \x02\x02\u0147\u0148\x05\"\x12\x02\u0148\u0149\x07" +
		"!\x02\x02\u0149\u014B\x03\x02\x02\x02\u014A\u0144\x03\x02\x02\x02\u014A" +
		"\u0145\x03\x02\x02\x02\u014A\u0146\x03\x02\x02\x02\u014B7\x03\x02\x02" +
		"\x02\u014C\u0151\x05$\x13\x02\u014D\u014E\x07\x15\x02\x02\u014E\u0150" +
		"\x05$\x13\x02\u014F\u014D\x03\x02\x02\x02\u0150\u0153\x03\x02\x02\x02" +
		"\u0151\u014F\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u01529\x03\x02" +
		"\x02\x02\u0153\u0151\x03\x02\x02\x02%=FLUaiox\x83\x8B\x95\x9E\xA1\xAC" +
		"\xB7\xBB\xBF\xC3\xCC\xD6\xE1\xED\xEF\u0101\u0103\u010F\u0111\u011D\u011F" +
		"\u012B\u0138\u013F\u0141\u014A\u0151";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CPP14Parser.__ATN) {
			CPP14Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CPP14Parser._serializedATN));
		}

		return CPP14Parser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CPP14Parser.EOF, 0); }
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_compilationUnit; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public classDefinition(): ClassDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ClassDefinitionContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declaration; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public ID(): TerminalNode { return this.getToken(CPP14Parser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CPP14Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CPP14Parser.RPAREN, 0); }
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_functionDefinition; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public SEMI(): TerminalNode { return this.getToken(CPP14Parser.SEMI, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_variableDeclaration; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDefinitionContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(CPP14Parser.CLASS, 0); }
	public ID(): TerminalNode { return this.getToken(CPP14Parser.ID, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CPP14Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CPP14Parser.RBRACE, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.SEMI);
		} else {
			return this.getToken(CPP14Parser.SEMI, i);
		}
	}
	public classMember(): ClassMemberContext[];
	public classMember(i: number): ClassMemberContext;
	public classMember(i?: number): ClassMemberContext | ClassMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassMemberContext);
		} else {
			return this.getRuleContext(i, ClassMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classDefinition; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitClassDefinition) {
			return visitor.visitClassDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassMemberContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classMember; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitClassMember) {
			return visitor.visitClassMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public ID(): TerminalNode { return this.getToken(CPP14Parser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CPP14Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CPP14Parser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(CPP14Parser.SEMI, 0); }
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_functionDeclaration; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecifierContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.INT, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.VOID, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.CLASS, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typeSpecifier; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitTypeSpecifier) {
			return visitor.visitTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaratorContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ID, 0); }
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LBRACKET, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.INT, 0); }
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declarator; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitDeclarator) {
			return visitor.visitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.COMMA);
		} else {
			return this.getToken(CPP14Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_parameterList; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_parameter; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(CPP14Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CPP14Parser.RBRACE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_compoundStatement; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitCompoundStatement) {
			return visitor.visitCompoundStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public selectionStatement(): SelectionStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectionStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_statement; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(CPP14Parser.SEMI, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_expressionStatement; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectionStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(CPP14Parser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CPP14Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CPP14Parser.RPAREN, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_selectionStatement; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitSelectionStatement) {
			return visitor.visitSelectionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CPP14Parser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CPP14Parser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public FOR(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.FOR, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.SEMI);
		} else {
			return this.getToken(CPP14Parser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_iterationStatement; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitIterationStatement) {
			return visitor.visitIterationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_expression; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	public logicalOrExpression(): LogicalOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalOrExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ASSIGN, 0); }
	public PLUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PLUS_ASSIGN, 0); }
	public MINUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MINUS_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_assignmentExpression; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	public logicalAndExpression(): LogicalAndExpressionContext {
		return this.getRuleContext(0, LogicalAndExpressionContext);
	}
	public logicalOrExpression(): LogicalOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalOrExpressionContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_logicalOrExpression; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext {
		return this.getRuleContext(0, EqualityExpressionContext);
	}
	public logicalAndExpression(): LogicalAndExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalAndExpressionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_logicalAndExpression; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext {
		return this.getRuleContext(0, RelationalExpressionContext);
	}
	public equalityExpression(): EqualityExpressionContext | undefined {
		return this.tryGetRuleContext(0, EqualityExpressionContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.EQUAL, 0); }
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.NOT_EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_equalityExpression; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	public relationalExpression(): RelationalExpressionContext | undefined {
		return this.tryGetRuleContext(0, RelationalExpressionContext);
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.GT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.GE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_relationalExpression; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getRuleContext(0, MultiplicativeExpressionContext);
	}
	public additiveExpression(): AdditiveExpressionContext | undefined {
		return this.tryGetRuleContext(0, AdditiveExpressionContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_additiveExpression; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeExpressionContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.DIV, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_multiplicativeExpression; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public PLUSPLUS(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PLUSPLUS, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public MINUSMINUS(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MINUSMINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_unaryExpression; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LBRACKET, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RBRACKET, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RPAREN, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public PLUSPLUS(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PLUSPLUS, 0); }
	public MINUSMINUS(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MINUSMINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_postfixExpression; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ID, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.INT, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_primaryExpression; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext[];
	public assignmentExpression(i: number): AssignmentExpressionContext;
	public assignmentExpression(i?: number): AssignmentExpressionContext | AssignmentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentExpressionContext);
		} else {
			return this.getRuleContext(i, AssignmentExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.COMMA);
		} else {
			return this.getToken(CPP14Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_argumentList; }
	// @Override
	public accept<Result>(visitor: CPP14ParserVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


