import React from "react";
import styles from "./styles.module.css";
import Heading from "@theme/Heading";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { MdKeyboardArrowRight } from "react-icons/md";

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Heading as="h1" className={clsx(styles.hero__title)}>
            Welcome to {siteConfig.title}'s
          </Heading>
          <p className={styles.hero__subtitle}>Developer Documentation</p>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs">
            Learn More{" "}
            <span className={styles.homeArrow}>
              <MdKeyboardArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
