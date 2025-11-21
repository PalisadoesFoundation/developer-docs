---
id: get-the-code
title: Get The Code
sidebar_position: 3
---

Each of our projects use a **forked-repo** and **merge-oriented** workflow. This means all contributors create a fork of the repository they want to contribute to and then submit pull requests to the upstream repository to have their contributions reviewed and accepted. We also recommend you work on feature branches.

## Step 1: Create Your Fork

Forking is the process of creating a copy of our repository in your personal GitHub account. This only needs to be done once for each repository you want to work on.

**Note:** When forking our repositories, make sure you copy all branches, not just the default branch which is usually `main`.

[Follow these steps to fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the appropriate [Palisadoes Foundation GitHub project repositiory](https://github.com/PalisadoesFoundation).


## Step 2: Clone Your Fork

Cloning is the process of creating a copy of a repository on your local machine. We'll show you how to clone your fork to your local machine.

In this case will use the [Talawa-Docs repository](https://github.com/PalisadoesFoundation/talawa-docs) as our example:

```
git clone https://github.com/YOUR_USERNAME/talawa-docs.git
Cloning into 'talawa'
remote: Counting objects: 86768, done.
remote: Compressing objects: 100% (15/15), done.
remote: Total 86768 (delta 5), reused 1 (delta 1), pack-reused 86752
Receiving objects: 100% (86768/86768), 112.96 MiB | 523.00 KiB/s, done.
Resolving deltas: 100% (61106/61106), done.
Checking connectivity... done.
```

:::note
If you receive an error while cloning, you may not have added your ssh key to GitHub.
:::

## Step 3: Connect Your Local Repo to Ours

An upstream repository is the one you originally forked. You will need to connect to it so that you can easily download our latest updates when required.

1. This tutorial shows how to [configure an upstream remote repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork) for your fork of the repository.
1. Configuring and upstream repository allows you to [sync changes](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) from the main project back into your fork through the repository on your local machine.

Here are the steps:

1. Verify the currently configured remote repository:

   ```
   $ git remote -v
   origin  https://github.com/YOUR_USERNAME/talawa-docs.git (fetch)
   origin  https://github.com/YOUR_USERNAME/talawa-docs.git (push)
   ```

1. Add the Upstream using the `git remote add upstream` command:

   ```
   $ git remote add upstream https://github.com/PalisadoesFoundation/talawa-docs.git
   ```

1. Confirm that the new remote repository, upstream, has been configured:

   ```
   $ git remote -v
   origin  https://github.com/YOUR_USERNAME/talawa-docs.git (fetch)
   origin  https://github.com/YOUR_USERNAME/talawa-docs.git (push)
   upstream https://github.com/PalisadoesFoundation/talawa-docs.git (fetch)
   upstream https://github.com/PalisadoesFoundation/talawa-docs.git (push)
   ```

Now your forked repository is ready for your contributions on your local machine!
