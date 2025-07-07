import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectCard = ({ project, tech, date, info, link, codelink, image}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="Real Estate Marketplace"
      />
      <CardContent sx={{ padding: 2 }}>
        <Typography variant="h5" component="div">
          {project}
        </Typography>
        <Typography gutterBottom variant="subtitle2" color="text.secondary">
          {tech}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {info}
        </Typography>
      </CardContent>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        paddingX={2}
        paddingBottom={2}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: "text.secondary", marginLeft: 1 }}
        >
          {date}
        </Typography>
        <Stack direction="row" alignItems="center" gap={2}>
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
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
