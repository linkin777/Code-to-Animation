#ifndef ASTVISITOR_H
#define ASTVISITOR_H

#include "clang/AST/ASTConsumer.h"
#include "clang/AST/RecursiveASTVisitor.h"
#include "clang/Frontend/CompilerInstance.h"

class ASTVisitor : public clang::RecursiveASTVisitor<ASTVisitor> {
public:
    explicit ASTVisitor(clang::ASTContext *Context) : Context(Context) {}

    bool VisitFunctionDecl(clang::FunctionDecl *FD);
    bool VisitVarDecl(clang::VarDecl *VD);
    bool VisitCXXRecordDecl(clang::CXXRecordDecl *RD);

private:
    clang::ASTContext *Context;
};

#endif // ASTVISITOR_H