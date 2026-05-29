# Wireframes: Schoolkit

## Overview & User Story Mapping

**Design Approach:** The design focuses on intuitive navigation and accessibility, ensuring teachers can quickly access tools and information for lesson delivery and classroom management.

**User Story → Screen Mapping:**
- US-1: AI-Powered Chatbot → [Support Screen]
- US-2: Lesson Adaptation Tool → [Lesson Plan Screen]
- US-3: Attendance Tracking → [Attendance Screen]
- US-4: Automated Dashboards → [Dashboard Screen]

## Screen Flow Diagram

Show the high-level navigation flow between screens:
```
[Login] → [Dashboard] → [Lesson Plan]
   ↓         ↓             ↓
[Home]   [Support]     [Attendance]
```

## ASCII Wireframes

### 1. Landing/Home Screen
**User Stories Enabled:** [US-1, US-2]

```
┌──────────────────────────────────────────────────────────────┐
│  [Schoolkit Logo]  <Home> <Features> <Pricing>  [Sign In]    │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│            Empowering Teachers in Computer Science           │
│                Innovative tools for your classroom           │
│                                                              │
│                      [Get Started Free →]                   │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│  Feature 1         Feature 2         Feature 3               │
│  Icon/Image        Icon/Image        Icon/Image              │
│  Description       Description       Description             │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  Footer: <About> | <Contact> | <Terms> | <Privacy>          │
└──────────────────────────────────────────────────────────────┘

        ↓ User clicks [Get Started Free]

```

### 2. Authentication Screen (Enables US-X)

```
┌──────────────────────────────────────┐
│           [Schoolkit Logo]           │
│                                      │
│        Sign Up / Log In              │
│                                      │
│  {Email................}             │
│  {Password.............}             │
│  [ ] Remember me                     │
│                                      │
│  [Log In / Sign Up →]                │
│                                      │
│  ─────────── OR ───────────          │
│                                      │
│  [Continue with Google]              │
│  [Continue with GitHub]              │
│                                      │
│  <Forgot password?>                  │
│  <Need an account? Sign up>          │
│                                      │
└──────────────────────────────────────┘

        ↓ After successful auth

```

### 3. Main Dashboard (Enables US-3, US-4)

```
┌───────────────────────────────────────────────────────────────┐
│  [Schoolkit Logo]  <Dashboard> <Classes> <Settings>  [User ▼] │
├───────────────┬───────────────────────────────────────────────┤
│               │                                               │
│  [Sidebar]    │  Dashboard Overview                           │
│               │                                               │
│ <Classes>     │  ┌──────────────┐  ┌──────────────┐          │
│ <Lesson Plans>│  │ Attendance   │  │ Performance  │          │
│ <Support>     │  │ Summary      │  │ Overview     │          │
│               │  │   Value      │  │   Value      │          │
│               │  └──────────────┘  └──────────────┘          │
│               │                                               │
│               │  Recent Activities                           │
│               │  ┌────────────────────────────────────┐      │
│               │  │ Activity 1           [Details]     │      │
│               │  │ Activity 2           [Details]     │      │
│               │  │ Activity 3           [Details]     │      │
│               │  └────────────────────────────────────┘      │
│               │                                               │
│               │  [View Detailed Reports →]                   │
│               │                                               │
└───────────────┴───────────────────────────────────────────────┘

        ↓ User clicks [View Detailed Reports]

```

### 4. Lesson Plan Screen (Enables US-2)

```
┌───────────────────────────────────────────────────────────────┐
│  [Schoolkit Logo]  <Dashboard> <Classes> <Settings>  [User ▼] │
├───────────────┬───────────────────────────────────────────────┤
│               │                                               │
│  [Sidebar]    │  Lesson Plans                                 │
│               │                                               │
│ <Classes>     │  ┌────────────────────────────────────┐      │
│ <Dashboard>   │  │ {Lesson Title.................}    │      │
│ <Support>     │  │ {Content.......................}   │      │
│               │  │ (Adaptation Options ▼)            │      │
│               │  │                                   │      │
│               │  │ [Save Lesson Plan]  [Cancel]      │      │
│               │  └────────────────────────────────────┘      │
│               │                                               │
│               │  [Create New Lesson Plan →]                  │
│               │                                               │
└───────────────┴───────────────────────────────────────────────┘

        ↓ User can save or create a new plan

```

### 5. Attendance Screen (Enables US-3)

```
┌───────────────────────────────────────────────────────────────┐
│  [Schoolkit Logo]  <Dashboard> <Classes> <Settings>  [User ▼] │
├───────────────┬───────────────────────────────────────────────┤
│               │                                               │
│  [Sidebar]    │  Attendance Tracker                           │
│               │                                               │
│ <Dashboard>   │  Select Class: (Dropdown ▼)                   │
│ <Lesson Plans>│                                               │
│ <Support>     │  Date: [Select Date ▼]                        │
│               │                                               │
│               │  ┌────────────────────────────────────┐      │
│               │  │ Student Name  | Status (P/A)       │      │
│               │  │ ------------- | -----------        │      │
│               │  │ {Student 1}   | [ Present ▼ ]      │      │
│               │  │ {Student 2}   | [ Absent ▼ ]       │      │
│               │  │ {Student 3}   | [ Present ▼ ]      │      │
│               │  └────────────────────────────────────┘      │
│               │                                               │
│               │  [Submit Attendance]                         │
│               │                                               │
└───────────────┴───────────────────────────────────────────────┘

        ↓ User submits attendance records

```

### 6. Support Screen (Enables US-1)

```
┌───────────────────────────────────────────────────────────────┐
│  [Schoolkit Logo]  <Dashboard> <Classes> <Settings>  [User ▼] │
├───────────────┬───────────────────────────────────────────────┤
│               │                                               │
│  [Sidebar]    │  AI-Powered Support                           │
│               │                                               │
│ <Dashboard>   │  Chatbot Interface                            │
│ <Lesson Plans>│                                               │
│ <Attendance>  │  {Ask your question here..................}   │
│               │                                               │
│               │  ┌────────────────────────────────────┐      │
│               │  │ Bot: How can I assist you today?   │      │
│               │  │ You: How to adapt lessons?         │      │
│               │  │ Bot: Here are some tips...         │      │
│               │  └────────────────────────────────────┘      │
│               │                                               │
│               │  [Send Message]                               │
│               │                                               │
└───────────────┴───────────────────────────────────────────────┘

        ↓ User interacts with AI chatbot for support

```

## Mobile Responsive Variations

### Landing Page (Mobile)

```
┌─────────────────────┐
│  [☰]   Logo  [User] │
├─────────────────────┤
│                     │
│  Empowering Teachers│
│     Innovative Tools│
│                     │
│  [Get Started]      │
│  <Learn More>       │
│                     │
│  ┌───────────────┐  │
│  │   Feature 1   │  │
│  │   Icon + Text │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │   Feature 2   │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │   Feature 3   │  │
│  └───────────────┘  │
│                     │
└─────────────────────┘
```

## Interactive States

### Button States
```
[Normal Button]  [Hover: underline]  [Disabled: gray]  [Loading: spinner]
```

### Form Validation
```
{Valid Input✓}   {Invalid Input✗ Error message}
```

## Design System Quick Reference

- **Primary Action:** [Button] style
- **Secondary Action:** <Link> style
- **Input Fields:** {Field Name..........} style
- **Dropdowns:** (Select Option ▼) style
- **Navigation:** Top bar or sidebar with <Links>
- **Cards:** Boxes with ┌─┐└┘ characters

---

**REMEMBER:** Generate VISUAL ASCII wireframes with boxes and layout diagrams, NOT textual descriptions. Every screen must be drawn using ASCII art. Use the founder's design inspiration if mentioned to inform the visual layout and components.