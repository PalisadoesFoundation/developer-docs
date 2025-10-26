---
id: 2025-vanshika
title: 2025 - Vanshika Sabharwal
sidebar_position: 2
---

### About me

I’m Vanshika Sabharwal, a 3rd-year B.Tech student and open-source contributor.  
I’ve been actively contributing to The Palisadoes Foundation projects and have previously participated in programs like GSSoC and SSOC.  
I’m passionate about frontend & backend development, Docker, DevOps, and building stable, scalable systems.  


### Project overview

**Project Title:** API Improvement and Stability of the Backend to Handle Heavy Traffic (Permanent CORS Fix)  

This project focused on enhancing the reliability and robustness by:
- Permanently resolving CORS issues across both admin and API endpoints.  
- Improving stability under heavy load through better Docker practices, and API testing.  
- Documenting and maintaining all security and deployment enhancements for future contributors.


### Project recap

Over the summer, I:  
- Implemented a permanent solution for **CORS** errors locally and on deployed site.  
- Added a **Docker port check command** to prevent port conflicts before deployments.   
- Updated the **Posts page** to get back the features on both Admin and User Portal.
- Redesigning the **Posts page** for both Admin and User Portal. 
- Deployed **Talawa Admin** (test.talawa.io) and **Talawa API** (api-test.talawa.io) with Peter.  


### Completed work

Key PRs and contributions:

- **Talawa API**
  - [#3500](https://github.com/PalisadoesFoundation/talawa-api/pull/3500): Fixed CORS Configuration for Frontend-Backend Communication
  - [#3508](https://github.com/PalisadoesFoundation/talawa-api/pull/3508): Port check command for Docker.
  - [#3560](https://github.com/PalisadoesFoundation/talawa-api/pull/3560): Updated pull-request.yml to include postgres readiness check
  - [#3589](https://github.com/PalisadoesFoundation/talawa-api/pull/3589): Updated Doc for Port Check Script

- **Talawa Admin**
  - [#4040](https://github.com/PalisadoesFoundation/talawa-admin/pull/4040): Restoring posts page features on User Portal.
  - [#4058](https://github.com/PalisadoesFoundation/talawa-admin/pull/4058): Restoring posts page features on Admin Portal
  - [#4217](https://github.com/PalisadoesFoundation/talawa-admin/pull/4217): Redesigning the User and Admin Portal for better UI/UX

- **Talawa Docs**
  - [#1016](https://github.com/PalisadoesFoundation/talawa-docs/pull/1016): UI improvements and design restructuring.
  - Other PRs: [#2892](https://github.com/PalisadoesFoundation/talawa-admin/pull/4449), [#51](https://github.com/PalisadoesFoundation/talawa-plugin/pull/51), [#3625](https://github.com/PalisadoesFoundation/talawa-api/pull/3625)



### Current state

- **CORS** issues between admin and API are resolved through configuration.
- Dockerized deployment flow now includes a **port check** to avoid conflicts.  
- Talawa Admin and User Portal has **Posts page** recovered totally.
- Documentation for CORS, Docker, and deployment is complete and live in **Talawa Docs**.  
- **Talawa Admin** and **Talawa API** are successfully deployed and stable.


### What remains

- Continuous improvement in Docker and security testing.  
- Monitoring performance under heavier production-like traffic.  

### Challenges and lessons learned

**Challenges:**  
- Debugging CORS issues across multiple domains and frameworks.  
- Writting Unit tests for frontend and backend code. 
- Maintaining CI/CD consistency across multiple services.  

**Lessons Learned:**  
- Importance of domain configuration and best practices.  
- Writting unit tests is all about how deeply you understand the code.  
- Value of clear documentation for future contributors.  


### Conclusion

This internship has been an incredible learning experience, helping me grow in real-world backend engineering, deployment, and DevOps.  
I’m grateful to **Mr. Peter Harrison** and the Palisadoes Foundation for their mentorship and guidance.  

I look forward to continuing my open-source journey and contributing to future projects with the same enthusiasm.  
