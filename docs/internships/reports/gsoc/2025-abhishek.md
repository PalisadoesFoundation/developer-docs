---
id: 2025-abhishek
title: GSoC 2025 - Abhishek Raj
sidebar_position: 202507
---

**Project:** Enhanced SwitchMap-NG Scalability
**Contributor:** [Abhishek Raj](https://github.com/abbi4code)
**Mentors:** [Aashima Wadhwa](https://github.com/aashimawadhwa), [Dominic Mills](https://github.com/DMills27)
**Organization:** [The Palisadoes Foundation](https://github.com/PalisadoesFoundation/)
**Duration:** June–October 2025

### About me

I’m **Abhishek Raj**, a **final-year student at NIT Durgapur** with a strong interest in backend engineering and distributed systems.
I started my open-source journey with the Palisadoes Foundation in December 2024, where I made my first contributions and grew into the workflow.

### Project Goals

When I began this project, Switchmap-NG faced several critical challenges:

1. **Legacy Synchronous Architecture**: The SNMP polling system relied on the deprecated EasySNMP library and synchronous operations, causing performance bottlenecks
2. **Multiprocessing Overhead**: Device polling used heavyweight multiprocessing instead of modern async patterns
3. **Limited Test Coverage**: The project currently sits at around 50% test coverage, meaning half the codebase lacks automated tests. This makes it challenging to catch bugs early and safely implement changes.
4. **Difficult Setup Process**: New contributors struggled with complex manual setup procedures
5. **Missing Features**: No system resource monitoring or extended interface statistics

### Project recap

My GSoC project focused on modernizing Switchmap-NG through four key initiatives:

**1. Legacy Synchronous Architecture**:

- Current SNMP polling system relied on the deprecated EasySNMP library and synchronous operations, causing performance bottlenecks.
- Replacing `EasySNMP` with `PySNMP`'s async API for non-blocking operations, enabling efficient polling of thousands of devices.

**2. Removed resource intensive multiprocessing**:

- Replaced the legacy **CPU-bound** multiprocessing design with a fully asynchronous polling architecture using Python’s asyncio.
- Implemented semaphore-based device polling control
- Removed legacy code and consolidated async implementations

**3. Feature Enhancements**

- Added **multi-vendor** system monitoring (CPU/memory for Cisco and Juniper)
- Extended **interface statistics** with comprehensive packet/byte counters
- Implemented GraphQL hostname-based device lookup

**4. Developer Experience**

- Created **automated setup scripts** for complete deployment
- Written and expanded test coverage with async tests from 50% to 85%.
- **Improved documentation** and contributor onboarding

### Completed Work

1.  [[GSoC]: Migrate SNMP Poller from easysnmp to async pysnmp](https://github.com/PalisadoesFoundation/switchmap-ng/pull/328)

- Complete migration of SNMP polling infrastructure from synchronous EasySNMP to **asynchronous PySnmp**. This foundational change enabled all subsequent **performance improvements**.
- MIB queries and collectors converted to async with controlled concurrency, lazy data loading, safer merging, improved error/log handling, and **better** SNMPv1/v2/v3 timeout/fallback behavior.
- **Resolved** polling freeze when encountering invalid OID prefixes during SNMP walks and fixed leading dot OID parsing.

2. [[GSoC]: Replace bottleneck multiprocessing with async for device polling & fix failing tests in CI ](https://github.com/PalisadoesFoundation/switchmap-ng/pull/334)

- Converted `poll.py` to use asyncio with semaphore-based concurrency control
- Implemented async HTTP POST using aiohttp for data submission
- Fixed MAC address double-encoding issues with new `mac_utils.py` module
- Updated OUI **database operations** with proper bulk insert/update logic
- Fix the CI by add new async test suite for the async poller covering concurrency, CLI, skip handling, SNMP init failures, and successful polls and converted all previous tests from sync to async.
- **Clean up** old lagacy modules.

3. [[GSoC]: Add multi-vendor system monitoring and enhanced interface statistics](https://github.com/PalisadoesFoundation/switchmap-ng/pull/344)

- Added **CiscoProcessQuery** and **JuniperProcessQuery** modules and exports with get_query()/init_query() factories; each provides async system() plus CPU/memory helper methods, performs concurrent walks, aggregates results, returns partial results on errors, and registered them in SNMP QUERIES.
- Added async methods **ifInUcastPkts**, **ifOutUcastPkts**, **ifInErrors**, **ifInDiscards** returning per-ifIndex maps (or OID when oidonly) and included them in the layer1 limited_query set.
- Added SystemStat SQLAlchemy model and GraphQL node (cpu_5min, mem_used, mem_free) linked to Device; extended L1Interface model and GraphQL attributes with per-interface counters (ifin_ucast_pkts, ifout_ucast_pkts, ifin_errors, ifin_discards).
- Added SystemStat ingest flow and Status tracking; added Topology.systemstat() to collect Cisco/Juniper metrics and persist via new table APIs; **enhanced L1Interface ingest** to capture new counters and normalize/validate MACs/IP resolution.

4. [[GSoC]: Add GraphQL resolver for device lookup and extend interface fields](https://github.com/PalisadoesFoundation/switchmap-ng/pull/347)

- Reworked insert_row/update_row to build insert/update dicts incrementally and encode oui/organization bytes only when non-null.
- Added resolve_device_by_hostname(obj, info, hostname=None) (returns None for falsy hostnames, UTF‑8 encodes hostname, queries Device where enabled==1 ordered by ts_created desc). Exposed deviceByHostname(hostname: String) on Query and wired the resolver.
- Added L1Interface fields: ifin_octets, ifout_octets, ifin_nucast_pkts, ifout_nucast_pkts, ifout_errors, ifout_discards. Updated RL1Interface row mapping to include new fields.
- Populates new L1 interface fields when constructing IL1Interface rows during device ingest/update.
- Updated fixtures, seeded data, and expectations to include new per-interface fields. Adjusted IL1Interface constructions and L1Interface tuple size expectations.

5. [[GSoC]: Increased SNMP poller test coverage with comprehensive async tests ](https://github.com/PalisadoesFoundation/switchmap-ng/pull/350)

- **Increased test coverage** across multiple SNMP modules
- Restrict \_oid_valid_format to reject OIDs where any octet (after the initial empty segment) has leading or trailing whitespace (function returns False for such octets), preserving integer parsing otherwise.

6. [[GSoC]: add automated setup script for complete Switchmap deployment](https://github.com/PalisadoesFoundation/switchmap-ng/pull/360)

- Added a complete set of **management scripts** (setup.sh, start.sh, stop.sh, restart.sh, status.sh, logs.sh, cleanup.sh) that automate the entire Switchmap-NG lifecycle from initial setup to daily operations.
- **One-Command Setup** Implemented with setup.sh with Docker MySQL as well (\*opt local mysql usage also supports) support that handles the entire installation process - from prerequisite checks to database initialization, dependency installation, and service startup - reducing setup time from manual hours to a single command.
- Added service Lifecycle Scripts and New lifecycle scripts to start/stop/restart services and frontend, manage PIDs, validate health and ports, check MySQL accessibility, and display colored status summaries and quick commands. Logs & Cleanup scripts/logs.sh, scripts/cleanup.sh logs.sh tails service-specific or aggregated logs; cleanup.sh provides interactive, flag-driven cleanup for var, venv, etc/config.yaml, frontend node_modules, and Docker containers/volumes with confirmation prompts and status messages.
- Converted many SNMP tests modules to async (IsolatedAsyncioTestCase) expanded mocks and assertions to exercise SNMP GET/swalk/walk, VLAN/MAC/context handling, error/edge cases, and added Juniper process tests.

### Current State

**Async SNMP Infrastructure**

- Fully migrated to PySnmp with async/await
- Concurrent device polling with configurable limits
- Robust error handling and retry logic
- Comprehensive logging and monitoring

**Multi-Vendor Support**

- Generic RFC-standard MIBs (IF, BRIDGE, LLDP, Q-BRIDGE, ENTITY, etc.)
- Cisco-specific MIBs (CDP, VTP, STACK, PROCESS, etc.)
- Juniper-specific MIBs (VLAN, PROCESS)
- Extensible architecture for additional vendors

**System Monitoring & Interface Statistics**

- CPU utilization tracking (5-minute average)
- Memory usage monitoring (used/free)
- Comprehensive packet counters (unicast, non-unicast)
- Byte counters (inbound, outbound) & Error and discard tracking

**Developer Experience**

- One-command automated setup
- Comprehensive documentation
- Service management scripts
- Real-time log monitoring
- 85% test coverage

### Performance Metrics

- **Polling Speed**: 2-3x (more at scale) faster than depreciated easySNMP polling.
- **No multiprocessing Overhead**: More efficient resource utilization, and the ability to scale to large networks with current async architecture.
- **Concurrent Devices**: Configurable (default: 10 concurrent)
- **SNMP Queries**: Fully parallelized within each device
- **API Response Time**: under 100ms for typical queries
- **Setup Time**: 3-5 minutes (down from 2-3 hours)

### What Remains

While the project has achieved its primary goals and delivered a production-ready async monitoring system, there are still exciting opportunities for future enhancements that will extend Switchmap-NG's capabilities:

**Distributed Architecture with Store-and-Forward**:

- The current architecture works well for centralized deployments, but could be enhanced for distributed scenarios where pollers may have intermittent connectivity to the central API server.
- Test coverage has been significantly improved from around 50% to 85%. However, achieving full coverage remains challenging since some core SNMP polling components involve complex asynchronous flows and low-level network interactions. Ongoing work focuses on building reliable test harnesses and mocks for these components to reach the 100% goal.

### Challenges and Lessons Learned

1. **Handling Real-World SNMP Data**

- SNMP responses were often malformed or encoded inconsistently across libraries. For instance, whitespace within OIDs or double-encoded MAC addresses caused silent failures and data mismatches. These edge cases revealed the importance of strict input validation and careful data decoding when migrating from EasySNMP to PySNMP.
  **Lesson:** Never assume external data is clean. Validate everything at the boundaries, it’s far easier to fail early than debug downstream corruption.

2. **From Multiprocessing to Async Concurrency**
   The legacy multiprocessing model didn’t translate directly to async patterns. Replacing process pools with semaphores and refactoring shared state into async-safe structures took significant design effort. Adopting async context managers and using aiohttp for non-blocking HTTP calls ultimately simplified resource management.
   **Lesson:** Asyncio and multiprocessing solve different problems understanding when and how to use each is crucial for scalability and stability.

3. **Complexity of Async Testing**

- Testing asynchronous code was far more challenging than expected. The initial test suite, built for synchronous behavior, didn’t work well with async patterns. I had to think in different way for mocking async methods, and design new test flows to validate concurrency and async-safe resource handling.
  **Lesson:** Async systems demand a new mindset for testing. Once the right patterns are in place, async tests can be just as reliable and even faster to execute.

### Conclusion

- This project has been an incredible learning experience that strengthened both my technical and software engineering skills. I get to know deep understanding of asynchronous programming, SNMP-based network monitoring, and large-scale system design while learning to balance refactoring with feature delivery and maintain code quality through strong testing and documentation practices.

### Acknowledgements

- I'm incredibly grateful to my mentors **Aashima Wadhwa**, **Dominic Mills**, and **Peter Harrison** for their guidance and support throughout this project. Their feedback and code reviews were invaluable in shaping my work and pushing me to grow as a developer.
- A huge shoutout to my fellow mentee **Abhi** as well for sharing ideas & feedback with each other and tackling challenges together made this journey so much more enjoyable and rewarding.
