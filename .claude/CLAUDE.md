# Schoolkit

We are building the SchoolKit Teacher Platform, a web and mobile platform that enables public school teachers to independently deliver high-quality Computer Science and AI education within the formal classroom.

The platform provides teachers with structured lesson plans, classroom materials, and a “learning centre” with additional training modules, alongside an AI-powered assistant that helps them adapt lessons, answer questions, and troubleshoot in real time. Teachers can access content before and during class, including slides and teaching resources.

It also includes tools for attendance tracking, student assessments, and automated dashboards, giving both teachers and CodeBrave visibility into implementation and learning outcomes.

The goal is to codify the support currently provided manually by CodeBrave into a scalable, teacher-facing system that maintains quality while reducing reliance on ongoing external coaching.

## Quick Reference

### Bash Commands
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run linter
npm run test         # Run tests

# Database (if applicable)
npm run db:generate  # Generate database migrations
npm run db:migrate   # Run migrations
npm run db:push      # Push schema changes
```

### Project Structure
```
confabulator/        # Project documentation (IMPORTANT - read these first)
├── PRD.md           # Product requirements and features
├── project-vision.md # Vision and problem statement
├── implementation-plan.md # Technical architecture and roadmap
├── wireframes.md    # UI/UX wireframes and screen flows
├── business-model-canvas.md # Business model
└── PR-FAQ.md        # Press release and FAQ
src/                 # Source code
├── app/             # Next.js app router (if applicable)
├── components/      # UI components
├── lib/             # Utility functions and services
└── types/           # TypeScript types
```

## Project Context

### Target Customer
Our primary users are public school teachers in Lebanon working in under-resourced schools serving disadvantaged and refugee communities. They typically teach multiple subjects, have limited prior training in Computer Science, and operate in high-pressure environments with large class sizes and limited infrastructure.

They are motivated to deliver engaging, future-relevant learning but have limited time for lesson preparation and little access to ongoing support. All users have completed CodeBrave training and are responsible for delivering weekly Computer Science lessons to students aged 9–15 within the formal school timetable.

### Value Proposition
Teachers will choose the SchoolKit Teacher Platform because it gives them real-time, practical support to deliver Computer Science lessons confidently without relying on external help. Unlike static lesson plans or ad hoc support via messaging, the platform provides instant answers, lesson adaptation, and structured guidance directly within their workflow.

It combines teaching resources, AI-assisted support, and monitoring tools in one place, reducing both preparation time and classroom uncertainty. For CodeBrave, it enables consistent quality across schools while reducing the need for ongoing coaching. This makes it a more scalable and reliable alternative to the current high-touch support model.

### Platform
both

## Tech Stack

TypeScript, JavaScript, Next.js, React, Shadcn, Tailwind, shadcn/ui, Radix UI, React Hook Form, Zod, Drizzle, Nextauth, Clerk, Vercel, DrizzleORM, Stripe, NextAuth.js, Postgresql

## Key Documentation

**CRITICAL**: Before starting any work, familiarize yourself with the Confabulator documentation in `confabulator/`:

| Document | Purpose | When to Reference |
|----------|---------|-------------------|
| `PRD.md` | Feature specs, user stories, acceptance criteria | Before implementing any feature |
| `project-vision.md` | Problem statement, target users, goals | For strategic decisions |
| `implementation-plan.md` | Architecture, tech stack, data model, API routes | Technical implementation |
| `wireframes.md` | UI layouts, screen flows, component placement | Building UI components |
| `business-model-canvas.md` | Revenue, costs, partnerships | Business logic decisions |

## Development Guidelines

### Code Style
- Use TypeScript for all code; prefer interfaces over types
- Use functional and declarative programming patterns
- Use descriptive variable names with auxiliary verbs (isLoading, hasAccess, canSubmit)
- Use lowercase-with-dashes for directories (components/user-profile)
- Favor named exports for components and utilities

### Before Implementing Features
1. Read the relevant user story in `confabulator/implementation-plan.md`
2. Check acceptance criteria in `confabulator/PRD.md`
3. Reference wireframes in `confabulator/wireframes.md` for UI guidance
4. Follow the data model and API routes in the implementation plan

### Error Handling
- Implement comprehensive error handling at all levels
- Use try-catch blocks for async operations
- Provide user-friendly error messages
- Log errors appropriately for debugging

## Ralph Wiggum Build System

This project uses the Ralph Wiggum autonomous build loop for processing GitHub issues.

### Commands

| Command | Purpose |
|---------|---------|
| `/ralphify <issue>` | Generate Ralph files for a single issue |
| `/ralph-cleanup` | Archive completed session and close issue |
| `/ralph-orchestrate` | Process multiple issues automatically |

### Issue Convention for Orchestration

For issues to work with `/ralph-orchestrate`:

1. **Label**: Add `ralph:ready` label to issues ready for processing
2. **Dependencies**: Declare explicitly in issue body:
   ```
   depends-on: #42
   ```
3. **Content**: Include clear acceptance criteria or checklist items

### Orchestration Labels

| Label | Purpose |
|-------|---------|
| `ralph:ready` | Ready for orchestration |
| `ralph:queued` | In the orchestration queue |
| `ralph:in-progress` | Currently being processed |
| `ralph:complete` | Successfully processed (PR created) |
| `ralph:failed` | Processing failed, needs intervention |

### Workflow

1. Label issues with `ralph:ready`
2. Run `/ralph-orchestrate` (or `--dry-run` to preview)
3. Run the generated script: `./.ralph/ralph-orchestrate.sh`
4. Script creates feature branches and PRs for each issue (with fresh Claude sessions)
5. Review and merge PRs

**Note:** The orchestrator uses a two-phase approach to avoid context degradation:
- Phase 1: `/ralph-orchestrate` triages issues and generates an execution script
- Phase 2: The bash script invokes fresh Claude sessions per issue

## Current Focus

The MVP focuses on these core capabilities:

- AI-powered chatbot to answer teacher questions and provide real-time support
- Lesson adaptation tool to adjust existing CodeBrave lesson plans to different classroom contexts
- Access to structured lesson plans, slides, and teaching materials

See `confabulator/implementation-plan.md` for the complete development roadmap.

## Repository

https://github.com/Im-Sadfeh/schoolkit-teacher-platform

---

*Generated by [Confabulator](https://vibecodelisboa.com/confabulator)*
