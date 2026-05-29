#!/bin/bash
#
# Git Worktree Status Script
# Project: Schoolkit
# Generated: 2026-04-09T12:29:51.352Z
#
# Shows the status of all worktrees and their dependencies.
#

echo "📊 Worktree Status - Schoolkit"
echo "="
echo ""

echo "📂 Active Worktrees:"
git worktree list
echo ""

echo "🔗 Dependency Summary:"
echo ""
echo "Epics:"
echo "  ✅ #1 - Real-Time AI Support (no dependencies)"
echo "  ✅ #4 - Lesson Management (no dependencies)"
echo "  ✅ #7 - Student Attendance Tracking (no dependencies)"
echo "  ✅ #10 - Automated Dashboards (no dependencies)"
echo "  ⚠️  #13 - Technical Foundation (depends on: #2, #3)"
echo ""
echo "Tasks:"
echo "  ⚠️  #2 - Develop AI Chatbot Interface (depends on: #3)"
echo "  ✅ #3 - Integrate AI Response Logic (no dependencies)"
echo "  ⚠️  #5 - Develop Lesson Plan Creation Form (depends on: #3)"
echo "  ✅ #6 - Implement Lesson Adaptation Logic (no dependencies)"
echo "  ⚠️  #8 - Implement Attendance Input Interface (depends on: #3)"
echo "  ✅ #9 - Generate Attendance Reports (no dependencies)"
echo "  ⚠️  #11 - Design Dashboard UI (depends on: #3)"
echo "  ⚠️  #12 - Implement Data Visualization (depends on: #3)"
echo ""
echo "🔀 Recommended Merge Order:"
echo "  1. 📦 #1 - Real-Time AI Support"
echo "  2. 📦 #4 - Lesson Management"
echo "  3. 📝 #5 - Develop Lesson Plan Creation Form"
echo "  4. 📝 #6 - Implement Lesson Adaptation Logic"
echo "  5. 📦 #7 - Student Attendance Tracking"
echo "  6. 📝 #8 - Implement Attendance Input Interface"
echo "  7. 📝 #9 - Generate Attendance Reports"
echo "  8. 📦 #10 - Automated Dashboards"
echo "  9. 📝 #11 - Design Dashboard UI"
echo "  10. 📝 #12 - Implement Data Visualization"
echo "  11. 📦 #13 - Technical Foundation"
echo ""
echo "💡 Tips:"
echo "  - Work on tasks with no dependencies first"
echo "  - Merge branches in the order shown above"
echo "  - Check GitHub issues for detailed requirements"
echo ""