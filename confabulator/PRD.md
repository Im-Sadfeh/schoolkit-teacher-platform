# Product Requirements Document

## Document Information
- **Product Name:** Schoolkit
- **Version:** 1.0
- **Last Updated:** 2026-04-09
- **Status:** Draft

## Product Overview
The SchoolKit Teacher Platform is a dual-interface web and mobile application designed to empower public school teachers in Lebanon to independently deliver high-quality Computer Science and AI education. This platform addresses the challenges faced by time-constrained teachers by providing a comprehensive suite of digital tools, including structured lesson plans, classroom materials, and a real-time AI-powered assistant. Through these features, SchoolKit reduces teachers' reliance on CodeBrave’s manual support, enabling scalable and consistent educational delivery across schools.

The platform design and core features are based on CodeBrave’s existing programme delivery model and operational experience, and are currently being developed into a functional MVP.

By targeting public school teachers serving disadvantaged and refugee communities, SchoolKit seeks to strengthen teachers' confidence and autonomy, ultimately improving student learning outcomes. The platform's integration of dashboards and monitoring tools further ensures that both teachers and CodeBrave staff have visibility into classroom implementation and learning metrics, supporting data-driven decision-making and continuous improvement.

## Objectives & Success Metrics
### Primary Objectives
1. Enable teachers to independently deliver Computer Science lessons with confidence and reduced reliance on external support.
2. Scale the CodeBrave School Upskilling Programme to support more schools without increasing staff costs.
3. Improve student learning outcomes and engagement in Computer Science education.
4. Reduce per-school support time required from CodeBrave staff, enabling each programme manager to support more schools.

### Key Performance Indicators (KPIs)
- **Teacher Usage and Engagement:** Achieve consistent weekly usage among trained teachers (target ≥70%).
- **Reduction in Coaching Hours:** Decrease coaching hours per school by 50%.
- **Increase in Schools Supported:** Double the number of schools supported per manager from 10 to 20.
- **Student Assessment Outcomes:** Improve average student assessment scores by 20%.
- **Teacher Satisfaction:** Achieve a teacher satisfaction score of 85% or higher.

### Success Criteria for MVP Launch
- Deployment of SchoolKit in an initial cohort of schools with active usage by trained teachers.
- Demonstrated reduction in teacher reliance on CodeBrave staff for lesson delivery.
- Positive feedback from teachers regarding ease of use and effectiveness.

## User Personas
### Persona 1: Sarah Haddad
- **Demographics and Background:** 35-year-old female, public school teacher in Beirut, teaching multiple subjects including Computer Science.
- **Goals and Motivations:** Deliver engaging and effective Computer Science lessons; improve student performance; gain confidence in teaching new subjects.
- **Pain Points and Frustrations:** Limited time for lesson preparation; lack of real-time support; manual tracking of attendance and assessments.
- **Success Scenario with the Product:** Sarah uses SchoolKit to access structured lesson plans and real-time AI support, allowing her to confidently deliver lessons and manage her classroom efficiently.

## Core Features
### Feature 1: AI-Powered Chatbot
- **Description:** Provides real-time support for lesson adaptation, answers questions, and assists with troubleshooting based on existing programme materials. Reduce manual data entry by integrating existing tools (e.g. Google Forms) into a unified system for attendance, assessment, and monitoring.
- **User Story:** "As a teacher, I want to receive instant support and guidance so that I can deliver lessons effectively without delays."
- **Acceptance Criteria:** 
  1. Chatbot responds to queries within 3 seconds.
  2. Provides accurate lesson adaptation suggestions.
  3. Offers troubleshooting steps for common classroom issues.
- **Priority:** P0

### Feature 2: Lesson Adaptation Tool
- **Description:** Allows teachers to modify existing lesson plans to fit different classroom contexts.
- **User Story:** "As a teacher, I want to adapt lesson plans to my class size and resources so that I can teach effectively."
- **Acceptance Criteria:** 
  1. Teachers can customize lesson plans within 5 clicks.
  2. Adaptations are saved and retrievable for future use.
  3. Interface is intuitive and requires no more than 10 minutes to complete an adaptation.
- **Priority:** P0

### Feature 3: Attendance Tracking
- **Description:** Enables teachers to track student attendance and automatically sync assessment data from Google Forms used for student evaluations.
- **User Story:** "As a teacher, I want attendance and assessment data to be captured easily and automatically so that I can maintain accurate records without additional admin work."
- **Acceptance Criteria:** 
  1. Attendance can be marked in under 1 minute per class.
  2. Supports both manual entry and file uploads for attendance.
  3. Student assessment data is automatically synced from Google Forms.
  4. Assessment results are linked to individual students and classes.
  5. Data feeds directly into dashboards without manual processing.
- **Priority:** P0

### Feature 4: Automated Dashboards
- **Description:** Displays attendance, student progress, and learning outcomes for teachers and CodeBrave staff.
- **User Story:** "As a teacher, I want to see student progress and outcomes so that I can adjust my teaching strategies."
- **Acceptance Criteria:** 
  1. Dashboards update automatically with each data entry.
  2. Data is visualized in an easy-to-understand format.
  3. Allows filtering by class, date, and student.
- **Priority:** P1

### Feature 5: Learning Centre
- **Description:** Provides additional training modules, refresher content, and structured resources for teachers to strengthen subject knowledge and delivery.
- **User Story:** "As a teacher, I want access to additional learning resources so that I can continue improving my teaching over time."
- **Priority:** P1

## User Flows
### Primary User Journey: Lesson Delivery
1. **Entry Point:** Teacher logs into the SchoolKit platform.
2. **Step 1:** Navigates to "Today's Lesson" section.
3. **Step 2:** Reviews and adapts lesson plan using the Lesson Adaptation Tool.
4. **Step 3:** Delivers lesson using structured plans and real-time AI support.
5. **Step 4:** Marks attendance and  student assessments.
6. **Exit Point:** Reviews automated dashboard for lesson outcomes and prepares for next class.

## Technical Considerations
- **Platform Requirements:** Web application for preparation and data review; mobile app optimized for in-class use.
- **Integration Needs:** Integration with existing school databases for student information. Integration with Google Forms (or equivalent tools) to automatically capture and structure assessment data.
- **Scalability Considerations:** Design for scalable cloud infrastructure to support increasing number of schools.
- **Performance Requirements:** Fast loading times and real-time data updates to ensure seamless classroom usage.

## Success Criteria
### MVP Completion Criteria
- All core features are implemented and tested.
- User feedback collected and iterated upon.
- System is stable and performs reliably under expected load.

### Launch Readiness Checklist
- User onboarding and training materials are prepared.
- Technical support infrastructure is in place.
- Initial cohort of schools is ready for deployment.

### Key Metrics to Track Post-Launch
- User engagement and feature usage statistics.
- System performance and uptime.
- Feedback from teachers on usability and effectiveness.

## Out of Scope (for MVP)
- Advanced AI features beyond basic chatbot functionalities.
- Language support beyond English and Arabic.
- Integration with third-party educational content providers.

---

This PRD is designed to guide the development team in creating a robust, scalable, and user-friendly platform that meets the needs of public school teachers in Lebanon. It draws upon the founder's vision and insights to ensure clarity and alignment with the project's goals.
