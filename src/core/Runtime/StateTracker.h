#ifndef STATETRACKER_H
#define STATETRACKER_H

#include <unordered_map>
#include <vector>

class StateTracker {
public:
    void captureEvent(const std::string &eventType, void *memoryAddress);

private:
    std::unordered_map<void *, std::vector<std::string>> memoryEvents;
};

#endif // STATETRACKER_H