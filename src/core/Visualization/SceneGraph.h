#ifndef SCENEGRAPH_H
#define SCENEGRAPH_H

#include <QOpenGLWidget>
#include <QOpenGLFunctions_4_3_Core>

class SceneGraph : protected QOpenGLFunctions_4_3_Core {
public:
    SceneGraph();
    void render();

private:
    void initializeGL();
    void resizeGL(int w, int h);
    void paintGL();
};

#endif // SCENEGRAPH_H