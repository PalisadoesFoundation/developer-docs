---
id: introduction
title: Introduction
sidebar_position: 1
---

Thank you for your interest in contributing to Talawa Admin. Regardless of the size of the contribution you make, all contributions are welcome and are appreciated.

If you are new to contributing to open source, please read the Open Source Guides on [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/).

## Code of Conduct

A safe environment is required for everyone to contribute. Read our [Code of Conduct Guide](CODE_OF_CONDUCT.md) to understand what this means. Let us know immediately if you have unacceptable experiences in this area.

No one should fear voicing their opinion. Respones must be respectful.

## Videos

- Visit our [YouTube Channel playlists](https://www.youtube.com/@PalisadoesOrganization/playlists) for more insights
- The "[Getting Started - Developers](https://www.youtube.com/watch?v=YpBUoHxEeyg&list=PLv50qHwThlJUIzscg9a80a9-HmAlmUdCF&index=1)" videos are extremely helpful for new open source contributors.

## Our Community

There are many ways to participate in our community.

### Our Community Forum

- Join our [community forum](https://community.talawa.io) and introduce yourself. See details on how to join below in the Community section.
- There are many persons on the various forums who are willing to assist you in getting started.

### Mailing List

We also have a technical email list run by [freelists.org](https://www.freelists.org/). Search for "palisadoes" and join. Members on this list are also periodically added to our marketing email list that focuses on less technical aspects of our work.

## Ways to Contribute

If you are ready to start contributing code right away, get ready!

### Who Can Contribute

Unfortunately, because of recent abuse, we will only be assigning issues or merging PRs for persons who have:

1. More than 18 months of GitHub history
2. Consistent code updates throughout their GitHub life, especially the most recent 12 months.

**Note:** There are caveats:

1. If you do not meet these criteria but have:
   1. Successfully merged PRs in other open source repositories, then let us know so that we can reconsider your request.
   2. Compelling arguments to show that you should considered, then let us know so that we can reconsider your request.
2. If we cannot validate these criteria, you won’t be assigned.

As expected, we need contributors who are interested in coding with a proven track record.

### Unwelcome Repository Contributions

We do not welcome the following activities:

1. Using automation to blindly submit and update pull requests.
2. SPAMing our volunteers to be assigned issues to the exclusion of others.
3. Frequent abandoning of issues after being assigned.
4. Frequent closing of pull requests with ratios of merged to closed PRs approaching 10:1
5. Repeatedly ignoring PR requested changes from reviewers and automated systems.
   1. This incluces resolving requested changes without modifying code.
6. Repeatedly ignoring answering any questions from reviewers.
7. Using AI to generate generic plans of action without an in-depth knowledge of the code base. This is not helpful for us.
8. Deleting all comments in the submitted edited files.
9. Repeatedly submitting irrelevant files for PR review after being made aware of the practice.
10. Repeatedly dismissing or resolving reviewer suggestions without modifying code.

Persons who violate our expectations listed above will referred to our [Code of Conduct process](CODE_OF_CONDUCT.md).

**Note**

1. We are not against the use of AI as a productivity tool. We use it in many areas of our PR review process.
1. We are against the use of it to create unnecessary overhead on our volunteers and systems, plus broken inefficient code.

### Tackling Issues

Each of our online GitHub repositories has a tab labeled `issues` which describe the bugs and features we are working on.

1. Each repository has issues labeled `good first issues`, try tackling these first. They contain challenges with a limited scope for beginners.
   1. Add this text to the GitHub issue search bar: `is:issue state:open label:"good first issue"`
2. There are issues labeled `test` for creating tests for our code base. We need to increase reliablility. Try those issues, or create your own for files that don't already have tests. This is another good strategy for beginners.
   1. Add this text to the GitHub issue search bar `is:issue state:open label:test`
3. There are dormant issues labeled `no-issue-activity`. These are issues on which nobody has worked for some time and are another place to start.
   1. Add this text to the GitHub issue search bar `is:issue state:open label:no-issue-activity`
4. You can find unassigned issues by adding this text to the GitHub issue search bar `is:issue state:open no:assignee`

Pleases read our [Issue Guidelines](ISSUE_GUIDELINES.md) file for more details.

### Issue Assignment

1. We enforce a limit of 2 open issue assignments per person across the entire organization to ensure fair distribution of work.
1. New contributors are limited to 1 open issue assignment.

#### Self-Assignment Commands

- `/assign` - Assign an issue to yourself (if under the limit and not already assigned)
- `/unassign` - Unassign yourself from an issue

### Submitting Code That Fixes Issues

The steps are easy. Here are some general guidelines.

1. We only accept code updates from persons assigned issues. Pleases read our [Issue Guidelines](ISSUE_GUIDELINES.md) file for more details.
2. Code can be submitted for review using pull requests (PRs). Please read our [Pull Request Guidelines](PR_GUIDELINES.md) for more information.

Follow these steps when proposing a change to a repository:

1. Get assigned to the issue to fix the bug or feature.
2. Fork the repository and branch off the `develop` branch. Most of our bugs and features are applied to this branch.
3. Your newly forked repository can be cloned locally using `git clone <YOUR FORKED REPO URL>`.
4. Make the Palisadoes Foundation's repo your `git upstream` for your local repo.
5. **Important:** Create a local branch with a different name than `develop` or `main`
6. Make the desired changes to the project.
7. Run the app and test your changes.
8. If you've added code, then test suites must be added.
9. Commit your code to your local branch.
   1. **Note:** Many of our repositories automatically generate documentation with each commit in an `auto-docs` directory. This can often cause merge conflicts.
   2. You can resolve this using the following commands

      ```bash
      # Reset your local auto-docs to match origin/<UPSTREAM BRANCH NAME>
      $ git checkout origin/<UPSTREAM BRANCH NAME> -- PATH/TO/auto-docs

      # Make sure Git doesn’t flip line endings (Windows users only)
      $ git config core.autocrlf false

      # Reinstall dependencies and regenerate docs cleanly:
      npm ci
      npm run generate-docs
      ```

   3. You'll now be able to run a clean commit.

10. Merge your code with the latest upstream
11. Rectify any potential conflcits
12. Create a pull request following our [Pull Request Guidelines](PR_GUIDELINES.md)

### Using Git

If you are not familiar with using `git`, please check our tutorials here:

- https://developer.palisadoes.org/docs

### Branching Strategy

We had employ the following branching strategy to simplify the development process and to ensure that only stable code is pushed to the `main` branch:

1. `develop`: For unstable code and bug fixing. All issues and bugs are applied to this branch with few exceptions.
1. `main`: Where the stable production ready code lies. This is our default branch.

### Conflict Resolution

When multiple developers are working on issues there is bound to be a conflict of interest (not to be confused with git conflicts) among issues, PRs or even ideas. Usually these conflicts are resolved in a **First Come First Serve** basis however there are certain exceptions to it.

1. In the cases where you feel your potential issues could be an extension or in conflict with other PRs it is important to ask the author of the PR in our community forums or in their PRs or issues themselves why he/she did not written code for something that would require minimal effort on their part.
1. Based on basic courtesy, it is good practice to let the person who created a function apply and test that function when needed.
1. Last but not the least, communication is important make sure to talk to other contributors, in these cases, in the community forum or in a issue/PR thread.
1. As a last resort the Admins would be responsible for deciding how to resolve this conflict.

## Internships

If you are participating in any of the various internship programs we are members of, then please read the [introduction guides on our documentation website](https://docs.talawa.io/docs/).
