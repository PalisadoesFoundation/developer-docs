import React from "react";
import styles from "./styles.module.css";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

const Section = ({ title, description, buttonText, buttonLink }) => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to={buttonLink}>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section;
