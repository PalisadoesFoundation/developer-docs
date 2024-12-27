import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Palisadoes Foundation",
  tagline: "Start your open source journey here",
  favicon: "img/talawa-logo-200x200.png",

  url: "https://developer.palisadoes.org",
  baseUrl: "/",
  deploymentBranch: "gh-pages",

  organizationName: "PalisadoesFoundation", // GitHub org
  projectName: "developer-docs", // repo name

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    search: {
      enabled: true,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Palisadoes Developers",
      hideOnScroll: true,
      logo: { alt: "My Site Logo", src: "img/talawa-logo-200x200.png" },
      items: [
        { to: "/docs", label: "Docs", position: "left" },
        {
          href: "https://github.com/PalisadoesFoundation",
          html: '<i class="fab fa-github"></i> <span id="github-stars"></span>',
          position: "right",
          "aria-label": "GitHub Stars",
          className: "custom-icon-link",
        },
        {
          href: "https://www.linkedin.com/company/palisadoes/posts/?feedView=all",
          html: '<i class="fab fa-linkedin"></i>',
          position: "right",
          "aria-label": "LinkedIn",
          className: "custom-icon-link",
        },
        { type: "search", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: " Slack",
              to: "https://github.com/PalisadoesFoundation",
              className: "footer__icon footer__slack",
            },
            {
              label: " News",
              to: "https://www.palisadoes.org/news/",
              className: "footer__icon footer__news",
            },
            {
              label: " Contact Us",
              to: "https://www.palisadoes.org/contact/",
              className: "footer__icon footer__contact",
            },
          ],
        },
        {
          title: "Social Media",
          items: [
            {
              label: " Twitter",
              to: "https://twitter.com/palisadoesorg?lang=en",
              className: "footer__icon footer__twitter",
            },
            {
              label: " Facebook",
              to: "https://www.facebook.com/palisadoesproject/",
              className: "footer__icon footer__facebook",
            },
            {
              label: " Instagram",
              to: "https://www.instagram.com/palisadoes/?hl=en",
              className: "footer__icon footer__instagram",
            },
          ],
        },
        {
          title: "Development",
          items: [
            {
              label: " GitHub",
              to: "https://github.com/PalisadoesFoundation",
              className: "footer__icon footer__github",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Palisadoes Foundation, LLC. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
