import { Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import projects from "../assets/data/projects.json"

const Projects = () => {
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
        worked on over the years.
      </Typography>
      <div className="mx-5 mt-5 flex gap-4 justify-center flex-wrap">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            project={proj.project}
            tech={proj.tech}
            date={proj.date}
            info={proj.info}
            link={proj.link}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
