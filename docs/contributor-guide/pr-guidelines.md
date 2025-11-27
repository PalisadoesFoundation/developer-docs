# Palisadoes Pull Request Guidelines

In order to give everyone a chance to submit a pull request and contribute to our repositories please be aware of the guidelines we abide by:

1. Only submit PRs against our `develop` branch. The default is `main`, so you will have to modify this before submitting your PR for review. PRs made against `main` will be closed.
2. Do not start working on any open issue and raise a PR unless the issue is assigned to you. PRs that don't meet these guidelines will be closed.
3. All pull requests must have test units. 
   1. Valid tests must cover at least 95% of the submitted code and 100% is preferred. If, for some reason, it is not possible to add tests, please let us know and explain why. In that case, you'll need to tell us what steps you followed to manually test your changes.
4. [Use this method to automatically close the issue when the PR is completed.](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)
5. All the pull requests must have code that is properly linted and formatted, so that uniformity across the repository can be ensured.
  1. The PR_GUIDELINES.md file in the root directory of each repository will explain how to do this for its code base.
6. We do not accept "work in progress" draft Pull Requests. ONLY completed and working pull requests and with respective test units will be accepted. They will be closed if submitted. We focus on work that is ready for immediate review.
7. Removing assigned reviewers from your Pull Request will cause it to be closed. The quality of our code is very important to us. Therefore we make experienced maintainers of our code base review your code. Removing these assigned persons is not in the best interest of this goal.
8. Upon successful push to the fork, check if all tests are passing; if not, fix the issues and then create a pull request.
9.  If the pull request's code quality is not up to par, or it would break the app, it will more likely be closed. So please be careful when creating a PR.
10. Please follow the PR template provided. Ensure the PR title clearly describes the problem it is solving. In the description, include the relevant issue number, snapshots, and videos after changes are added.
11. If you are borrowing a code, please disclose it. It is fine and sometimes even recommended to borrow code, but we need to know about it to assess your work. If we find out that your pull request contains a lot of code copied from elsewhere, we will close the pull request.
12. Please do not @mention contributors and mentors. Sometimes it takes time before we can review your pull request or answer your questions, but we'll get to it sooner or later. @mentioning someone just adds to the pile of notifications we get and it won't make us look at your issue faster.
13. Do not force push. If you make changes to your pull request, please simply add a new commit, as that makes it easy for us to review your new changes. If you force push, we'll have to review everything from the beginning.
14. PR should be small, easy to review and should follow standard coding styles.
15. If PR has conflicts because of recently added changes to the same file, resolve issues, test new changes, and submit PR again for review.
16. PRs should be atomic. That is, they should address one item (issue or feature)
17. After submitting PR, if you are not replying within 48 hours, then in that case, we may need to assign the issue to other contributors based on the priority of the issue.
