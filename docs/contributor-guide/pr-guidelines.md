---
id: contributing
title: Contributing
sidebar_position: 20
---

We welcome and encourage contributions of all kinds, from all levels, such as:

1. Issue reports on bugs or feature requests
2. Discussions
3. Documentation improvements
4. Code, both PR and (especially) PR Review.

In addition to submitting new PRs, we have a healthy tradition of community members reviewing each other’s PRs. Doing so is a great way to help the community as well as get more familiar with Rust and the relevant codebases.

If you are new to contributing to open source, please read the Open Source Guides on [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/).

## Finding and Creating Issues to Work On

You can find all you need to know about issues in our [Issue Guide](./issue-guidelines.md)

## Pull Request Overview

You can add your code to our projects using pull requests (PRs). We welcome them from anyone in the community.

Review bandwidth is currently our most limited resource, and we highly encourage reviews by the broader community. If you are waiting for your PR to be reviewed, consider helping review other PRs that are waiting. Such review both helps the reviewer to learn the codebase and become more expert, as well as helps identify issues in the PR (such as lack of test coverage), that can be addressed and make future reviews faster and more efficient.

The lifecycle of a PR is:

1. Get [assigned the issue](./issue-guidelines.md) related to the PR.

1. Create a PR targeting the `develop` branch.

1. For new contributors a committer must first trigger the CI tasks.

1. Your PR will be reviewed. Please respond to all feedback on the PR: you don’t have to change the code, but you should acknowledge the feedback. PRs waiting for the feedback for more than a few days will be marked as draft.

1. Once the PR is approved, one of the committers will merge your PR, typically within 24 hours.

Note that the above time frames are estimates. Due to limited committer bandwidth, it may take longer to merge your PR. Please wait patiently. If it has been several days you can friendly ping the committer who approved your PR to help remind them to merge it.

### Branching Strategy

We employ the following branching strategy to simplify the development process and to ensure that only stable code is pushed to the `main` branch:

1. `develop`: For unstable code and bug fixing. All issues and bugs are applied to this branch with few exceptions.
1. `main`: Where the stable production ready code lies. This is our default branch.

This approach has made the management of our code base much easier.

## Creating Pull Requests

When possible, we recommend splitting your contributions into multiple smaller focused PRs rather than large PRs (500+ lines) because:

1. The PR is more likely to be reviewed quickly – our reviewers struggle to find the contiguous time needed to review large PRs.

1. The PR discussions tend to be more focused and less likely to get lost among several different threads.

1. It is often easier to accept and act on feedback when it comes early on in a small change, before a particular approach has been polished too much.

If you are concerned that a larger design will be lost in a string of small PRs, creating a large draft PR that shows how they all work together can help.

Note all commits in a PR are squashed when merged to the main branch so there is one commit per PR after merge.

## Pull Request Best Practices

In order to give everyone a chance to submit a pull request and contribute to our repositories please be aware of the guidelines we abide by:

1. Only submit PRs against our `develop` branch.
   - The default is `main`, so you will have to modify this before submitting your PR for review. PRs made against `main` will be closed.

2. Do not start working on any open issue and raise a PR unless the issue is assigned to you. PRs that don't meet these guidelines will be closed.

3. All pull requests must have test units.
   - Valid tests must cover at least 95% of the submitted code and 100% is preferred. If, for some reason, it is not possible to add tests, please let us know and explain why. In that case, you'll need to tell us what steps you followed to manually test your changes.

4. [Use this method to automatically close the issue when the PR is completed.](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)

5. All the pull requests must have code that is properly linted and formatted, so that uniformity across the repository can be ensured.

6. We do not accept "work in progress" draft Pull Requests. ONLY completed and working pull requests and with respective test units will be accepted. They will be closed if submitted. We focus on work that is ready for immediate review.

7. Removing assigned reviewers from your Pull Request will cause it to be closed. The quality of our code is very important to us. Therefore we make experienced maintainers of our code base review your code. Removing these assigned persons is not in the best interest of this goal.

8. Upon successful push to the fork, check if all tests are passing; if not, fix the issues and then create a pull request.

9. If the pull request's code quality is not up to par, or it would break the app, it will more likely be closed. So please be careful when creating a PR.

10. Please follow the PR template provided. Ensure the PR title clearly describes the problem it is solving. In the description, include the relevant issue number, snapshots, and videos after changes are added.

11. If you are borrowing a code, please disclose it. It is fine and sometimes even recommended to borrow code, but we need to know about it to assess your work. If we find out that your pull request contains a lot of code copied from elsewhere, we will close the pull request.

12. Please do not @mention contributors and mentors. Sometimes it takes time before we can review your pull request or answer your questions, but we'll get to it sooner or later. @mentioning someone just adds to the pile of notifications we get and it won't make us look at your issue faster.

13. Do not force push. If you make changes to your pull request, please simply add a new commit, as that makes it easy for us to review your new changes. If you force push, we'll have to review everything from the beginning.

14. PR should be small, easy to review and should follow standard coding styles.

15. If PR has conflicts because of recently added changes to the same file, resolve issues, test new changes, and submit PR again for review.

16. PRs should be atomic. That is, they should address one item (issue or feature)

17. After submitting PR, if you are not replying within 48 hours, then in that case, we may need to assign the issue to other contributors based on the priority of the issue.

## Pull Requests - Step by Step

The steps are easy. Follow these steps when proposing a change to a repository:

1. If you are not familiar with using `git`, please check our [git tutorials](../git-guide/introduction/quickstart.md).

2. Get assigned to the issue to fix the bug or feature.

3. Fork the repository and branch off the `develop` branch. Most of our bugs and features are applied to this branch.

4. Your newly forked repository can be cloned locally using `git clone <YOUR FORKED REPO URL>`.

5. Make the Palisadoes Foundation's repo your `git upstream` for your local repo.

6. **Important:** Create a local branch with a different name than `develop` or `main`

7. Make the desired changes to the project.

8. Run the app and test your changes.

9. If you've added code, then test suites must be added.

10. Commit your code to your local branch.
11. **Note:** Many of our repositories automatically generate documentation with each commit in an `auto-docs` directory. This can often cause merge conflicts.

12. You can resolve this using the following commands

    ```bash
    # Reset your local auto-docs to match origin/<UPSTREAM BRANCH NAME>
    $ git checkout origin/<UPSTREAM BRANCH NAME> -- PATH/TO/auto-docs

    # Make sure Git doesn’t flip line endings (Windows users only)
    $ git config core.autocrlf false

    # Reinstall dependencies and regenerate docs cleanly:
    pnpm ci
    pnpm run generate-docs
    ```

13. You'll now be able to run a clean commit.

14. Merge your code with the latest upstream

15. Rectify any potential conflcits

16. Create a pull request
    - We only accept code updates from persons assigned issues. Pleases read our [Issue Guidelines](./issue-guidelines.md) file for more details.

Get started!

## Conflict Resolution

When multiple developers are working on issues there is bound to be a conflict of interest (not to be confused with git conflicts) among issues, PRs or even ideas. Usually these conflicts are resolved in a **First Come First Serve** basis however there are certain exceptions to it.

1. In the cases where you feel your potential issues could be an extension or in conflict with other PRs it is important to ask the author of the PR in our community forums or in their PRs or issues themselves why he/she did not written code for something that would require minimal effort on their part.

1. Based on basic courtesy, it is good practice to let the person who created a function apply and test that function when needed.

1. Last but not the least, communication is important make sure to talk to other contributors, in these cases, in the community forum or in a issue/PR thread.

1. As a last resort the Admins would be responsible for deciding how to resolve this conflict.
