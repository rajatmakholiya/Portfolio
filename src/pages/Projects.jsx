import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import Papa from "papaparse";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectsSheetURL = process.env.REACT_APP_PROJECTS_SHEET_URL;

    if (projectsSheetURL && projectsSheetURL.trim() !== "") {
      Papa.parse(projectsSheetURL, {
        download: true,
        header: true,
        complete: (results) => {
          const filteredData = results.data.filter(
            (item) => item.project && item.project.trim() !== ""
          );
          setProjects(filteredData);
        },
        error: () => {}
      });
    }
  }, []);

  return (
    <>
      <Typography
        variant="h4"
        fontFamily={"inherit"}
        fontWeight={600}
        textAlign="center"
        marginTop={3}
      >
        Projects
      </Typography>

      <Typography
        variant="subtitle1"
        fontFamily={"inherit"}
        fontWeight={600}
        textAlign="center"
        marginTop={3}
      >
        I enjoy making things. Here are a selection of projects that I have
        worked on recently.
      </Typography>
      <div className="mx-5 mt-5 flex gap-7 justify-center flex-wrap">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            project={proj.project}
            tech={proj.tech}
            date={proj.date}
            info={proj.info}
            link={proj.link}
            codelink={proj.codeLink}
            image={proj.image}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;