cmake_minimum_required(VERSION 3.20)
project(Code3DVisualizer LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# 查找 Qt 6
find_package(Qt6 REQUIRED COMPONENTS Core Gui Widgets OpenGL)

# 查找 LLVM 和 Clang
find_package(LLVM REQUIRED CONFIG)
find_package(Clang REQUIRED CONFIG)

# 包含 LLVM 和 Clang 的头文件
include_directories(${LLVM_INCLUDE_DIRS})
include_directories(${CLANG_INCLUDE_DIRS})

# 添加可执行文件
add_executable(Code3DVisualizer
    src/core/CodeParser/ASTVisitor.h
    src/core/CodeParser/HeaderMapper.cpp
    src/core/Runtime/InstrumentationPass.cpp
    src/core/Runtime/StateTracker.h
    src/core/Visualization/SceneGraph.h
    src/core/Visualization/Animator.cpp
    src/ui/MainWindow.cpp
    src/ui/GLWidget.h
    src/ui/ControlsPanel.cpp
)

# 链接 Qt 库
target_link_libraries(Code3DVisualizer
    Qt6::Core
    Qt6::Gui
    Qt6::Widgets
    Qt6::OpenGL
)

# 链接 LLVM 和 Clang 库
target_link_libraries(Code3DVisualizer
    ${LLVM_LIBRARIES}
    ${CLANG_LIBRARIES}
)

# 添加 OpenGL 库
if(WIN32)
    target_link_libraries(Code3DVisualizer opengl32)
elseif(UNIX AND NOT APPLE)
    target_link_libraries(Code3DVisualizer GL GLU GLEW)
elseif(APPLE)
    target_link_libraries(Code3DVisualizer "-framework OpenGL")
endif()