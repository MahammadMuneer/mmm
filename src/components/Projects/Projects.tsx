import React from "react";
import styles from "./Projects.module.scss";
import ScrollToTop from "../ScrollToTop";
import SectionTitle from "../SectionTitle";
import GridLayout from "../GridLayout";
import ProjectCard from "../ProjectCard";

const Projects = ({ scrollRef }: any) => {
  const projectsArray = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1584931423298-c576fda54bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      siteUrl: "",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1628935687655-8530bb7211bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80",
      siteUrl: "",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/7873573/pexels-photo-7873573.jpeg",
      siteUrl: "",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1592839961530-17838c766df1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      siteUrl: "",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1598301257942-e6bde1d2149b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
      siteUrl: "",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1552068751-34cb5cf055b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      siteUrl: "https://mmmservices.vercel.app/",
    },
  ];

  return (
    <div className={styles.Projects} ref={scrollRef}>
      <SectionTitle title="Projects" />
      <GridLayout>
        {projectsArray.map((project) => {
          return (
            <ProjectCard
              imageUrl={project.imageUrl}
              siteUrl={project.siteUrl}
            />
          );
        })}
      </GridLayout>
      <ScrollToTop />
    </div>
  );
};

export default Projects;
