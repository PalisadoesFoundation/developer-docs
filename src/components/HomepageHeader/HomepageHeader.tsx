import React from "react";
import styles from "./styles.module.css";
import Heading from "@theme/Heading";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.container}>
        <Heading
          as="h1"
          className={clsx(styles.typingEffect, styles.hero__title)}
        >
          {siteConfig.title}
        </Heading>
        <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
