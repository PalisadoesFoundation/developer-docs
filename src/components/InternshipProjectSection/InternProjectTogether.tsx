import React from "react";
import ProjectsPage from "./ProjectsSection";
import InternshipsPage from "./InternshipsSection";
import styles from "./styles.module.css";

const InternProjectTogether = () => {
  return (
    <div>
      <hr />
      <h1 className={styles.title}>Explore </h1>
      <div className={styles.internshipProjectSection}>
        <ProjectsPage />
        <InternshipsPage />
      </div>
    </div>
  );
};

export default InternProjectTogether;
