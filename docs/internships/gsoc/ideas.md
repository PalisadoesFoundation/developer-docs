---
id: gsoc-ideas
title: GSoC Ideas
sidebar_position: 2
---

:::note Change Policy

These ideas are subject to change at any time prior to us submitting our GSoC Organization application. Ideas may be added, removed or updated up to this time.

1. If we are accepted, there may be additions and minor modifications.
1. Mentor assignments may be adjusted throughout the evaluation period
   :::

## Introduction

Welcome to our GSoC ideas page!

:::tip Tip

These are the minimum requirements. We encourage you to expand on them.

:::

### Repository Languages and Skills

Here is a list of basic skills that will be required for each repository.

1. **Talawa:** Flutter / Dart, GraphQL
   1. Work will be applied to the `develop-postgres` GitHub branch
1. **Talawa-API:** Typescript, GraphQL, PostgreSQL with the Drizzle ORM
   1. Work will be applied to the `develop-postgres` GitHub branch
1. **Talawa-Admin Portal:** TypeScript
   1. Work will be applied to the `develop-postgres` GitHub branch

There are others, but these are the primary ones that will guide your contributions.

### Impact Definition

We have categorized the various ideas according to the degree of impact they will have to the project. Use these definitions to understand how each idea will affect our overall project goals.

1. **Low-hanging fruit:** These projects require minimal familiarity with the codebase and basic technical knowledge. They are relatively short, with clear goals.
1. **Risky/Exploratory:** These projects push the scope boundaries of our development efforts. They might require expertise in an area not covered by our current development team. They might take advantage of a new technology. There is a reasonable chance that the project might be less successful, but the potential rewards make it worth the attempt.
1. **Fun/Peripheral:** These projects might not be related to the current core development focus, but create new innovations and new perspective for our project.
1. **Core development:** These projects derive from the ongoing work from the core of our development team. The list of features and bugs is never-ending, and help is always welcome.
1. **Infrastructure/Automation:** These projects are the code that our organization uses to get our development work done; for example, projects that improve the automation of releases, regression tests and automated builds. This is a category in which a contributor can be really helpful, doing work that the development team has been putting off while they focus on core development.

### Difficulty

Most of our project ideas require knowledge of two or more programming languages. Meaningful PRs that prove your understanding of the repos will always be beneficial. We have created testing issues specifically for this purpose.

1. **Hard:** Requires dominion of the language used by the repo most affected by the project. A good working knowledge of the languages used by other affected repositories will be needed.
1. **Medium:** A good working knowledge of the languages used by affected repositories will be needed.
1. **Easy:** A beginner's level knowledge of the languages is sufficient.

## Projects - Road Map

This is a list of our projects related to our product road map.

### Talawa Communication Enhancements

1. **Description:** Talawa's communication functionality needs to be expanded for both the mobile and web applications.
   1. **Enhanced Features:**
      1. **Chat** The current chat feature lacks expected features. We require the following functionalities which need to be added:
         1. Search
         2. Delete chat message
         3. Pinning chat messages
         4. Leave group chats
         5. Allow users to share multiple images & videos
         6. Send voice messages
         7. React to messages
         8. Implement encryption
         9. Report & block users/messages
         10. Purge older chat messages
      1. **Notifications:** The current Talawa notification system needs to be enhanced with the following functionalities:
         1. Self hosted notifications as they currently rely on third party integrations.
         2. Identify actions in the app that trigger notifications.
         3. Ensure dynamic content (e.g., \{username\}, \{postTitle\}) is included in notifications.
         4. Highlight critical notifications with urgency (e.g., red icons for high-priority alerts).
         5. Provide short, actionable notification content with clear links.
         6. Design a scalable architecture to support notifications across mobile and web platforms.
         7. Provide options for users to Mark as Read, Clear Notifications (individual/all), and View History.
         8. Work with the admin interface to define and update notification templates as needed.
   2. **Other Related Communication Features:** We know you can think of other chat related features that would be useful. Please add them to your proposal.
2. **Expected Outcomes:** In addition to the outcomes described above, the following must also apply:
   1. All tests must pass and be valid.
   2. The overall test code coverage of the repo and individual code files must in all cases be greater than 95%.
3. **Repos to update:** Talawa-API, Talawa-Admin, Talawa
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** None
6. **Project Size:** 350 hours (Large)
7. **Possible Mentors:** [Meetul Rathore](https://community.talawa.io/members/meetulr.9/)
8. **Difficulty:** Hard
9. **Impact Definition:** "Core development"

### Universal QR Attendance & Check-In System

1. **Description** Develop a secure, mobile-first check-in system. Administrators will generate event-specific QR codes via the web portal, and members will use the Talawa mobile app to "scan in," automatically updating the organization's attendance database.
   1. **Enhanced Features:** The current Talawa events management system needs to be enhanced with the following functionalities:
      1. **Gap Analysis:** Currently, Talawa lacks an automated way to track event attendance. Admins must manually verify members, which is inefficient for large gatherings or recurring meetings.
      2. **User Persona:**
         1. Administrators and Members managing events.
         2. Members attending them.
      3. **The Impact:** This feature transforms the event experience by allowing "frictionless entry." It provides administrators with instant, accurate data on community engagement levels while giving members a modern, digital "ticket" experience within their app.
   2. **Other Features:** We know you can think of other chat related features that would be useful. Please add them to your proposal.
2. **Technical Tasks:**
   1. **Repository Tasks:** These general tasks will be required:
      1. **Backend:** Create a check-in validation service and secure token generation (JWT) in `talawa-api`.
      2. **Mobile:** Implement a QR scanner view using native device capabilities and a "My Passes" section in the user profile.
      3. **Web:** Build a real-time attendance monitor and QR generator in the `talawa-admin` event dashboard.
   2. **Key Dependencies:** Mobile Camera Permissions; API Event Schema extension; Secure Token Logic.
3. **Expected Outcomes:** In addition to the outcomes described above, the following must also apply:
   1. All tests must pass and be valid.
   2. The overall test code coverage of the repo and individual code files must in all cases be greater than 95%.
4. **Repos to update:** Talawa-API, Talawa-Admin, Talawa
5. **Skills Required:** Code stacks related to repos above. See introduction section.
6. **Depends on Project:** None
7. **Project Size:** 175 Hours (Medium)
8. **Possible Mentors:** Dominic Mills
9. **Difficulty:** Medium
10. **Impact Definition:** "Core development"

### Booking and Donations

1. **Description** Enhance several key Talawa features.
   1. **Booking** Design a centralized booking system where administrators list "Resources" (facilities or equipment). Members can then check availability via a calendar and request a time slot.
      1. **Enhanced Features:** The current Talawa events management system needs to be enhanced with the following functionalities:
         1. **Gap Analysis:** Many communities share physical assets (vans, projectors, clubrooms). Talawa lacks a scheduling layer to manage these, leading to scheduling conflicts and underutilized resources.
         2. **User Persona:** **Members** requesting resources and Admins overseeing assets.
         3. **The Impact:** This maximizes the "sharing economy" within a community. It makes shared assets more accessible and organized, reducing the need for external spreadsheets or paper sign-up sheets.
         4. **Technical Tasks:**
         5. **Logic:** Build a calendar-based availability engine in the API using PostgreSQL date/time functions to prevent double-booking.
         6. **Mobile:** Create a "Resource Catalog" where members can view details and submit booking requests.
         7. **Admin:** Develop an approval workflow in the admin portal for resource managers.
      1. **Repository Tasks:** These general tasks will be required:
         1. **Key Dependencies:** Time-slot conflict resolution logic; Calendar UI components (Mobile & Web).
      1. **Donations** Build a robust financial engine that supports both one-time donations and recurring membership dues. This project focuses on a modular approach, ensuring the core remains "light" while using the plugin system for payment processing.
         1. **Enhanced Features:** The current Talawa financial system integration needs to be enhanced with the following functionalities:
            1. **Gap Analysis:** Talawa's roots in community based organization management lacked a generalized, secular financial module. There is currently no way for a club to collect membership dues or a charity to run a specific fundraising campaign.
            2. **User Persona:**
               1. Treasurers/Admins.
               2. Supporting Members.
            3. **The Impact:** By centralizing finances, organizations can maintain transparency and sustainability. Members can support their community directly through their mobile devices, increasing the likelihood of contributions through convenience.
         2. **Other Features:** We know you can think of other chat related features that would be useful. Please add them to your proposal.
      1. **Technical Tasks:**
         1. **Repository Tasks:** These general tasks will be required:
            1. **Integration:** Implement a secure payment gateway (Stripe/Others) via the `talawa-plugin` architecture.
            2. **Database:** Design **PostgreSQL** schemas for tracking transaction history, gift aid (where applicable), and recurring payment tokens.
            3. **UX:** Create a "Give/Pay Dues" interface in the mobile app with status tracking.
         2. **Key Dependencies:** PCI-compliant gateway (Stripe/Others); Secure environment variable management; Webhooks for real-time confirmation.
2. **Expected Outcomes:** In addition to the outcomes described above, the following must also apply:
   1. All tests must pass and be valid.
   2. The overall test code coverage of the repo and individual code files must in all cases be greater than 95%.
3. **Repos to update:** Talawa-API, Talawa-Admin, Talawa
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** None
6. **Project Size:** 350 Hours (Large)
7. **Possible Mentors:** [Md. Noman Khan](https://community.talawa.io/members/nomankhan.34/)
8. **Difficulty:** Medium
9. **Impact Definition:** "Core development"

## Projects - Custom

Custom ideas add to the existing repos in ways we would not have foreseen. They must:

1. Use existing Palisadoes Foundation Talawa\* code repositories
2. Add complementary features to one or more existing Palisadoes Foundation Talawa\* code repositories

Custom ideas are not for new Palisadoes Foundation Talawa\* code repositories.

:::note

Artificial Intelligence (AI)

If you plan to use AI in your Custom proposal, we prefer the use of free open source models, preferrably small enough to run on an entry level non-GPU server.

:::

### Custom (Small)

**Note:** It's important that you append a brief 3-4 word description to the name of your Custom idea. This will make it uniquely identifiable. It could assist us in selecting one or more Custom ideas. For example if your Custom idea is to `improve the deployment of foo`, you could name your project `Custom (Small) - Foo Bar`. The title must have the string `Custom (Small)` in it.

1. **Description:** Do the ideas need something more? What completely new thoughts could be applied to the existing ideas? If you have answers to these questions then this section is for you.
2. **Expected Outcomes:** Your proposal must meet the guidelines below. It must:
   1. Not depend on other participants. There should be minimal impact by other participants disappearing or doing a very bad or very good job.
   1. Add completely new features not previously stated in ideas.
   1. Create features that users will want or facilitate new features that will be the groundwork for features that they would want.
   1. Be suitable for use by most non-profit organization.
      1. We are not interested in membership subscriptions and any related financial management at this time.
   1. Justify 90 hours of work.
3. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6. **Project Size:** 90 hours (Small)
7. **Possible Mentors:** TBD
8. **Difficulty:** Disha Talreja
9. **Impact Definition:** Risky/Exploratory

### Custom (Medium)

**Note:** It's important that you append a brief 3-4 word description to the name of your Custom idea. This will make it uniquely identifiable. It could assist us in selecting one or more Custom ideas. For example if your Custom idea is to `improve the deployment of foo`, you could name your project `Custom (Medium) - Foo Bar`. The title must have the string `Custom (Medium)` in it.

1. **Description:** Do the ideas need something more? What completely new thoughts could be applied to the existing ideas? If you have answers to these questions then this section is for you.
2. **Expected Outcomes:** Your proposal must meet the guidelines below. It must:
   1. Not depend on other participants. There should be minimal impact by other participants disappearing or doing a very bad or very good job.
   1. Add completely new features not previously stated in ideas.
   1. Create features that users will want or facilitate new features that will be the groundwork for features that they would want.
   1. Be suitable for use by most non-profit organization.
      1. We are not interested in membership subscriptions and any related financial management at this time.
   1. Justify 175 Hours (Medium) of work.
3. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6. **Project Size:** 175 Hours (Medium)
7. **Possible Mentors:** [Kevonia Tomlinson](https://community.talawa.io/members/kevoniat.387/)
8. **Difficulty:** Medium
9. **Impact Definition:** Risky/Exploratory

### Custom (Large)

**Note:** It's important that you append a brief 3-4 word description to the name of your Custom idea. This will make it uniquely identifiable. It could assist us in selecting one or more Custom ideas. For example if your Custom idea is to `improve the deployment of foo`, you could name your project `Custom (Large) - Foo Bar`. The title must have the string `Custom (Large)` in it.

1. **Description:** Do the ideas need something more? What completely new thoughts could be applied to the existing ideas? If you have answers to these questions then this section is for you.
2. **Expected Outcomes:** Your proposal must meet the guidelines below. It must:
   1. Not depend on other participants. There should be minimal impact by other participants disappearing or doing a very bad or very good job.
   1. Add completely new features not previously stated in ideas.
   1. Create features that users will want or facilitate new features that will be the groundwork for features that they would want.
   1. Be suitable for use by most non-profit organization.
      1. We are not interested in membership subscriptions and any related financial management at this time.
   1. Justify 175 Hours (Large) of work.
3. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6. **Project Size:** 175 Hours (Large)
7. **Possible Mentors:** [Md. Noman Khan](https://community.talawa.io/members/nomankhan.34/)
8. **Difficulty:** Large
9. **Impact Definition:** Risky/Exploratory
