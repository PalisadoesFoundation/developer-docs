import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    "introduction/introduction",
    {
      type: "category",
      label: "Git Guide",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "git-guide/quickstart",
        "git-guide/setup-git",
        "git-guide/get-talawa-code",
        "git-guide/pullrequest",
        "git-guide/collaborate",
        {
          type: "category",
          label: "Working copies",
          link: {
            type: "doc",
            id: "git-guide/Workingcopies/workingcopies",
          },
          collapsed: true,
          items: [
            "git-guide/Workingcopies/workflows",
            "git-guide/Workingcopies/usefulgitcommands",
          ],
        },

        {
          type: "category",
          label: "Using Git as you work",
          link: {
            type: "doc",
            id: "git-guide/gitworkflow",
          },
          collapsed: true,
          items: [
            "git-guide/Git working/Fork",
            "git-guide/Git working/Feature-branch",
            {
              type: "category",
              label: "Stage changes",
              link: {
                type: "doc",
                id: "git-guide/Git working/Stage changes/stage-changes",
              },
              collapsed: true,
              items: [
                "git-guide/Git working/Stage changes/status",
                "git-guide/Git working/Stage changes/stage-additions",
                "git-guide/Git working/Stage changes/stage-deletions",
              ],
            },
            "git-guide/Git working/commit-changes",
            "git-guide/Git working/push-commits",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Internships",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "internships/internship-ideas",
        "internships/internship-application-template",
        "internships/internship-selection-criteria",
        "internships/conflicts-of-interest",
        {
          type: "category",
          label: "GSoC",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "internships/gsoc/gsoc-introduction",
            "internships/gsoc/gsoc-ideas",
            "internships/gsoc/gsoc-application-process",
          ],
        },

        {
          type: "category",
          label: "GSoD",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "internships/gsod/gsod-ideas",
            "internships/gsod/gsod-ideas-2022",
          ],
        },

        {
          type: "category",
          label: "Calico",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "internships/calico/calico-introduction",
            "internships/calico/calico-ideas",
            "internships/calico/calico-application-process",
          ],
        },

        {
          type: "category",
          label: "Palisadoes",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: ["internships/palisadoes/palisadoes-introduction"],
        },
      ],
    },
  ],
};

export default sidebars;
