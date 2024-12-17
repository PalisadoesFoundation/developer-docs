import React from "react";
import Section from "./SectionTask";

const ProjectsPage = () => {
  return (
    <div>
      <Section
        title="Our Projects"
        description="Explore our open-source projects and make a real-world impact."
        buttonText="View Projects"
        buttonLink="/docs/category/git-guide"
      />
    </div>
  );
};

export default ProjectsPage;
