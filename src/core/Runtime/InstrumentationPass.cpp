#include "InstrumentationPass.h"
#include "llvm/IR/Function.h"
#include "llvm/IR/Instructions.h"
#include "llvm/IR/IRBuilder.h"

using namespace llvm;

PreservedAnalyses InstrumentationPass::run(Function &F, FunctionAnalysisManager &AM) {
    // TODO: 实现LLVM插桩
    return PreservedAnalyses::all();
}