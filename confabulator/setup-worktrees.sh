#!/bin/bash
#
# Git Worktree Setup Script
# Project: Schoolkit
# Repository: https://github.com/Im-Sadfeh/schoolkit-teacher-platform
# Generated: 2026-04-09T12:29:51.351Z
#
# This script creates separate git worktrees for each task and epic,
# enabling parallel development without branch conflicts.
#

set -e  # Exit on error

echo "🌳 Setting up git worktrees for parallel development..."
echo ""

# ================================================
# EPICS
# ================================================

# Epic #1: Real-Time AI Support
# ✅ No dependencies - can start immediately
echo "Creating worktree for Epic #1..."
git worktree add ../epic-1-worktree -b epic/1-real-time-ai-support 2>/dev/null || echo "  Worktree already exists"

# Epic #4: Lesson Management
# ✅ No dependencies - can start immediately
echo "Creating worktree for Epic #4..."
git worktree add ../epic-4-worktree -b epic/4-lesson-management 2>/dev/null || echo "  Worktree already exists"

# Epic #7: Student Attendance Tracking
# ✅ No dependencies - can start immediately
echo "Creating worktree for Epic #7..."
git worktree add ../epic-7-worktree -b epic/7-student-attendance-tracking 2>/dev/null || echo "  Worktree already exists"

# Epic #10: Automated Dashboards
# ✅ No dependencies - can start immediately
echo "Creating worktree for Epic #10..."
git worktree add ../epic-10-worktree -b epic/10-automated-dashboards 2>/dev/null || echo "  Worktree already exists"

# Epic #13: Technical Foundation
# ⚠️  Dependencies: #2, #3
echo "Creating worktree for Epic #13..."
git worktree add ../epic-13-worktree -b epic/13-technical-foundation 2>/dev/null || echo "  Worktree already exists"

# ================================================
# TASKS
# ================================================

# Task #2: Develop AI Chatbot Interface
# ⚠️  Dependencies: #3
echo "Creating worktree for Task #2..."
git worktree add ../task-2-worktree -b task/2-develop-ai-chatbot-interface 2>/dev/null || echo "  Worktree already exists"

# Task #3: Integrate AI Response Logic
echo "Creating worktree for Task #3..."
git worktree add ../task-3-worktree -b task/3-integrate-ai-response-logic 2>/dev/null || echo "  Worktree already exists"

# Task #5: Develop Lesson Plan Creation Form
# ⚠️  Dependencies: #3
echo "Creating worktree for Task #5..."
git worktree add ../task-5-worktree -b task/5-develop-lesson-plan-creation-form 2>/dev/null || echo "  Worktree already exists"

# Task #6: Implement Lesson Adaptation Logic
echo "Creating worktree for Task #6..."
git worktree add ../task-6-worktree -b task/6-implement-lesson-adaptation-logic 2>/dev/null || echo "  Worktree already exists"

# Task #8: Implement Attendance Input Interface
# ⚠️  Dependencies: #3
echo "Creating worktree for Task #8..."
git worktree add ../task-8-worktree -b task/8-implement-attendance-input-interface 2>/dev/null || echo "  Worktree already exists"

# Task #9: Generate Attendance Reports
echo "Creating worktree for Task #9..."
git worktree add ../task-9-worktree -b task/9-generate-attendance-reports 2>/dev/null || echo "  Worktree already exists"

# Task #11: Design Dashboard UI
# ⚠️  Dependencies: #3
echo "Creating worktree for Task #11..."
git worktree add ../task-11-worktree -b task/11-design-dashboard-ui 2>/dev/null || echo "  Worktree already exists"

# Task #12: Implement Data Visualization
# ⚠️  Dependencies: #3
echo "Creating worktree for Task #12..."
git worktree add ../task-12-worktree -b task/12-implement-data-visualization 2>/dev/null || echo "  Worktree already exists"

echo ""
echo "✅ Worktree setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. View all worktrees: git worktree list"
echo "2. Check dependencies: ./confabulator/worktree-status.sh"
echo "3. Start working: cd <worktree-directory>"
echo ""
echo "🔀 Recommended merge order (dependencies first):"
echo "  1. #1 - Real-Time AI Support"
echo "  2. #4 - Lesson Management"
echo "  3. #5 - Develop Lesson Plan Creation Form"
echo "  4. #6 - Implement Lesson Adaptation Logic"
echo "  5. #7 - Student Attendance Tracking"
echo "  6. #8 - Implement Attendance Input Interface"
echo "  7. #9 - Generate Attendance Reports"
echo "  8. #10 - Automated Dashboards"
echo "  9. #11 - Design Dashboard UI"
echo "  10. #12 - Implement Data Visualization"
echo "  ... and 1 more"
echo ""
echo "To cleanup all worktrees: ./confabulator/cleanup-worktrees.sh"
