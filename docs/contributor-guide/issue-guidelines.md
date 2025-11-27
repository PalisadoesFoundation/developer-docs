---
id: issues
title: Issue Management
sidebar_position: 30
---

We are a volunteer led coding community.

1. Please do not derail or troll issues.
2. Keep the discussion on topic and respect the opinions of others.

We are all trying to make the code better.

## Creating New Issues

If you have discovered a bug or want to add a feature, then follow these steps to create issues for them using these steps:

**Note:** You don't have to ask for permission to create issues.

1. Visit the relevant GitHub repository for our code.

2. Click on the [`issues`] tab.`

3. Your issue may have already been created. Search for duplicate open issues before submitting yours.

4. Verify whether the issue has been fixed by trying to reproduce it using the latest `main` or `develop` branch in the repository.

5. On the issues page, click on the [`New Issue`] button.

6. Use the templates to create a standardized report of what needs to be done and why.

We welcome contributors who find new ways to make the code better.

### Feature Request Issues

Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the mentors of the merits of this feature. Please provide as much detail and context as possible.

## Existing Issues

Use the Github search bar on the repository's issue page to find similar bugs or feature requests that you'd like resolved.

You can:

1. Subscribe to them to get the latest updates.

1. Comment on them to provide and receive feedback.

## For Code Contributors

### Picking an issue to work on

There's a lot to learn while making your first pull request, so start small!
Many first contributions have fewer than 10 lines of changes (not counting
changes to tests).

We recommend the following process for finding an issue to work on:

1. Find an issue that is either unassigned or looks to be abandoned.
2. Read the description of the issue and make sure you understand it.
3. If it seems promising, poke around the product until you know how the piece being described fits into the bigger picture. If after some exploration the description seems confusing or ambiguous, post a question on the GitHub issue, as others may benefit from the clarification as well.
4. When you find an issue you like, try to get assigned (**See Below**) and start working on it. See if you can find the part of the code you'll need to modify (`git grep` is your friend!) and get some idea of how you'll approach the problem.
5. If you feel lost, that's OK! Go through these steps again with another issue. There's plenty to work on, and the exploration you do will help you learn more about the projects.

An assigned issue can be considered abandoned if:

1. There is no recent contributor activity.
1. There are no open PRs, or an open PR needs work in order to be ready for review. For example, a PR may need to be updated to address reviewer feedback or to pass tests.

Note that you are _not_ claiming an issue while you are iterating through steps 1-4. _Before you claim an issue_, you should be confident that you will be able to tackle it effectively.

### Issue Searches

If you want to volunteer time to contribute code and don't know how to get started, then follow these steps:

1. Each repository has issues labeled `good first issues`, try tackling these first. They contain challenges with a limited scope for beginners. Add this text to the GitHub issue search bar:

   ```
   is:issue state:open label:"good first issue"
   ```

2. There are issues labeled `test` for creating tests for our code base. We need to increase reliablility. Try those issues, or create your own for files that don't already have tests. This is another good strategy for beginners. Add this text to the GitHub issue search bar:

   ```
   is:issue state:open label:test
   ```

3. There are dormant issues labeled `no-issue-activity`. These are issues on which nobody has worked for some time and are another place to start. Add this text to the GitHub issue search bar:

   ```
   is:issue state:open label:no-issue-activity
   ```

4. You can find unassigned issues by adding this text to the GitHub issue search bar:
   ```
   is:issue state:open no:assignee
   ```

Working on these types of existing issues is a good way of getting started with the community.

### Issue Assignment (Claiming)

We have a limit of 2 open issue assignments per person across the entire organization to ensure fair distribution of work.

### Auto-Assignment

Add this text in the comments section of an issue to manage issue assignment.

1. Our team often discovers issues that require work. Use this string to assign yourself to one of these:

   ```
   /assign
   ```

   **Note**: This feature:
   1. Will only work with persons who have previously successfully merged code.

   2. Will not work for issues created by others and you will need to manually request assignment.

2. You can unassign yourself from any issue using this string:
   ```
   /unassign
   ```

### Manual Assignments

Unfortunately, because of recent [AI abuse](./ai.md), we will only be assigning issues for persons who have:

1. More than 18 months of GitHub history
2. Consistent code updates throughout their GitHub life, especially the most recent 12 months.

**Note:** There are caveats:

1. If you do not meet these criteria but have:
   1. Successfully merged PRs in other open source repositories, then let us know so that we can reconsider your request.
   2. Compelling arguments to show that you should considered, then let us know so that we can reconsider your request.
2. If we cannot validate these criteria, you won’t be assigned.

As expected, we need contributors who are interested in coding with a proven track record.

Also, please don't SPAM our volunteers to be assigned issues to the exclusion of others.
