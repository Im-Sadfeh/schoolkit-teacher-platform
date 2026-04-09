# Dependency Graph

```mermaid
graph TD

  1[[#1: Real-Time AI Support]]
  2[#2: Develop AI Chatbot Interface]
  3[#3: Integrate AI Response Logic]
  4[[#4: Lesson Management]]
  5[#5: Develop Lesson Plan Creation Form]
  6[#6: Implement Lesson Adaptation Logic]
  7[[#7: Student Attendance Tracking]]
  8[#8: Implement Attendance Input Interface]
  9[#9: Generate Attendance Reports]
  10[[#10: Automated Dashboards]]
  11[#11: Design Dashboard UI]
  12[#12: Implement Data Visualization]
  13[[#13: Technical Foundation]]

  3 -->|API before UI| 2
  3 -->|API before UI| 5
  3 -->|API before UI| 8
  3 -->|API before UI| 11
  3 -->|API before UI| 12
  2 -->|Setup before features| 13
  3 -->|Setup before features| 13

  classDef epicStyle fill:#e1f5ff,stroke:#01579b,stroke-width:2px
  classDef taskStyle fill:#fff3e0,stroke:#e65100,stroke-width:1px
  class 1,4,7,10,13 epicStyle
  class 2,3,5,6,8,9,11,12 taskStyle
```

## Legend
- **Double box**: Epic
- **Single box**: Task
- **Arrow direction**: Dependency flow (A → B means B depends on A)

## About This Diagram

This diagram shows the dependencies between epics and tasks in your project. Use it to understand the order in which work should be completed and merged.

- **Epics** (double boxes) represent major features or components
- **Tasks** (single boxes) are specific implementation work items
- **Arrows** show dependencies (A → B means B depends on A completing first)

For parallel development using git worktrees, run:
```bash
./confabulator/setup-worktrees.sh
```
