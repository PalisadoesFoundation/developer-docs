---
id: 2025-satyam
title: 2025 - Satyam Jha
sidebar_position: 1
---

### About me

- I’m **Satyam Jha**, a pre-final year student at **IIT (BHU) Varanasi**, and an open-source contributor passionate about mobile app development and modern technologies.  
My expertise lies in **Flutter**, **Dart**, **GraphQL**, and **state management** using BloC, Provider, Riverpod & GetX.  

- I’ve been contributing to **The Palisadoes Foundation** since late 2024, focusing on improving the **Talawa** mobile app — a community engagement platform.  

- I’m passionate about building scalable, real-time systems and love solving architectural challenges that improve stability and user experience.

---

### Project overview

**Project Title:** Making the Mobile App Robust and Restoring Original Features

This project focused on reviving and modernizing core features of the **Talawa mobile app**, especially those that became non-functional after the backend migration from **MongoDB to PostgreSQL**.  
The primary goals were:
- Restoring the **chat system** (both direct and group chats) with full real-time functionality.  
- Restoring the **donation feature** (handled inherently within plugin integration).  
- Enhancing app robustness, performance, and code maintainability through model updates, GraphQL migration, and consistent architecture alignment.

---

### Project recap

Over the course of the internship, I:

- Designed and implemented a **real-time chat system** with both **direct** and **group messaging**.  
- Added support for **chat creation, messaging, pagination**, and **real-time GraphQL subscriptions**.  
- Migrated old **MongoDB-style** queries and models to **PostgreSQL GraphQL schema**.  
- Refactored the **service, model, and view layers** to match the new backend.  
- Assisted in testing and debugging donation-related functionality integrated through the **Talawa Plugin project (by Jai)**.  
- Coordinated closely with the backend team to align data structure and feature parity between **Talawa Mobile** and **Talawa API**.  
- Contributed major PRs of around **15,000–20,000 lines each**, covering complete feature modules.  

The chat system implementation was divided into multiple phases — direct messaging and group chats — both completed ahead of schedule. The system now supports **real-time WebSocket communication**, **group administration**, **member management**, and **message pagination**.  
Throughout the process, I focused on maintaining the existing **MVVM structure** of Talawa, ensuring scalability and avoiding unnecessary architectural changes.  

---

### Completed work

####  **Talawa Mobile**
- [#2843](https://github.com/PalisadoesFoundation/talawa/pull/2843): feat — Migrate chat system to PostgreSQL GraphQL schema (Chat Feature – Phase 1).  
- [#2859](https://github.com/PalisadoesFoundation/talawa/pull/2859): feat — Complete direct chat system with real-time messaging and enhanced UI (Phases 2–4).  
- [#2879](https://github.com/PalisadoesFoundation/talawa/pull/2879): feat — Complete group chat system with real-time messaging and role-based member management.  
- [#2977](https://github.com/PalisadoesFoundation/talawa/pull/2977): fix — Update chat functionality for new API structure with ChatMember support.


####  **Talawa API**
- [#3511](https://github.com/PalisadoesFoundation/talawa-api/pull/3511): feat — Add `chatsByUser` query to retrieve all chats of a specific user.  
- [#3525](https://github.com/PalisadoesFoundation/talawa-api/pull/3525): feat — Enable chat CRUD for organization members and improve timestamp access.


---

### Current state

All core deliverables have been completed:
- **Direct and Group Chats** are fully functional, tested, and stable.  
- **Real-time messaging** works across organizations with efficient pagination and caching.  
- **Role-based member management** (admins, members) is integrated seamlessly.  
- **Donation feature** was inherently covered under the plugin project, tested successfully with Jai.  

---

### What remains

- Advanced chat functionalities like:
  - **Message deletion**
  - **Edit chat messages**
  - **Sending attachments (images, documents)**  
- **Offline message queue support** (for retrying unsent messages) — a complex feature that requires additional architectural setup.

All other deliverables are **completed successfully** and merged upstream.

---

### Challenges and lessons learned

The chat system was built using **Flutter** within the existing **MVVM architecture**, ensuring clean separation between logic and UI. It utilised:

- **GraphQL** for backend integration with the new PostgreSQL schema.  
- **WebSocket subscriptions** for real-time updates.  
- **Hive** for local caching and partial offline functionality.  
- **Stream-based services** to maintain live chat updates efficiently.  

**Key challenges faced:**
- Implementing **GraphQL subscriptions** with robust reconnection handling.  
- Managing **WebSocket–HTTP synchronization** and **TLS handshake issues**.  
- Designing a **scalable group chat system** with admin-based permissions.  
- Maintaining UI responsiveness with large chat lists and paginated messages.  

These required deep debugging and close collaboration with the backend team, which strengthened my understanding of **real-time systems**, **data flow synchronisation**, and **Flutter–GraphQL integration**.

**Key lessons learned:**
- Strong understanding of **GraphQL schema design**, query optimization, and subscription handling.  
- Improved ability to debug **cross-platform real-time systems** and complex API integrations.  
- Learned best practices in **collaborative open-source development**, including large PR management, review iteration, and CI testing.  
- Understood the value of **clean code**, architectural consistency, and long-term maintainability in open-source projects.

---

### Conclusion

This internship has been a rewarding experience that strengthened my technical, collaborative, and problem-solving skills.  
I had the opportunity to work on one of the most complex and impactful features of the Talawa app — the **real-time chat system** — and see it come to life from design to deployment.

I’m thankful to **Mr. Peter Harrison**, **Mr. Md. Noman Khan**, and the **Palisadoes Foundation** team for their continuous mentorship and feedback throughout the program.  
I look forward to continuing my contributions and supporting future Talawa development efforts.
