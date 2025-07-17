import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { useState, useEffect, useRef } from "react";

const ProjectCard = ({ project, tech, date, info, link, codelink, image }) => {
  const [expanded, setExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (info.length > 100) {
      setShowMore(true);
    }
  }, [info]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cardRef]);

  return (
    <Card
      ref={cardRef}
      sx={{
        maxWidth: 320,
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title="Real Estate Marketplace"
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {project}
        </Typography>
        <Typography gutterBottom variant="subtitle2" color="text.secondary">
          {tech}
        </Typography>
        <Typography
          variant="body2"
          fontSize={"small"}
          sx={{ color: "text.secondary" }}
        >
          {expanded ? info : `${info.substring(0, 100)}`}
          {showMore && !expanded && (
            <span
              onClick={() => setExpanded(true)}
              style={{ cursor: "pointer", marginLeft: "4px" }}
            >.... more
            </span>
          )}
          {expanded && (
            <span
              onClick={() => setExpanded(false)}
              style={{ cursor: "pointer", marginLeft: "4px" }}
            >
              less
            </span>
          )}
        </Typography>
      </CardContent>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ marginTop: "auto", paddingX: 2, paddingBottom: 2 }}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: "text.secondary"}}
        >
          {date}
        </Typography>
        <Stack direction="row" alignItems="center" gap={2}>
          {codelink && (
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                cursor: "pointer",
                color: "text.secondary",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "text.primary",
                },
              }}
              onClick={() => window.open(codelink, "_blank")}
            >
              <GitHubIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography variant="subtitle2">Code</Typography>
            </Stack>
          )}
          {link && (
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                cursor: "pointer",
                color: "text.secondary",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "text.primary",
                },
              }}
              onClick={() => window.open(link, "_blank")}
            >
              <LaunchIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography variant="subtitle2">Visit</Typography>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProjectCard;