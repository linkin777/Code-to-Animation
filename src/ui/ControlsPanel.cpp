#include "ControlsPanel.h"
#include "ui_ControlsPanel.h"

ControlsPanel::ControlsPanel(QWidget *parent)
    : QWidget(parent), ui(new Ui::ControlsPanel) {
    ui->setupUi(this);
}

ControlsPanel::~ControlsPanel() {
    delete ui;
}