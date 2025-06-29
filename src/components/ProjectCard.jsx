import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const ProjectCard = ({ project, tech, date, info, link }) => {
  return (
    <Card sx={{
    maxWidth: 345,
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
  }}
>
      <CardMedia
        sx={{ height: 140 }}
        image=""
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
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
        paddingX={2}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: "text.secondary", marginLeft: 1 }}
        >
          {date}
        </Typography>
        <CardActions>
          <Button
            size="small"
            onClick={() => window.open("https://cometservices.org/", "_blank")}
            style={{ cursor: "pointer" }}
          >
            Visit
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
};
export default ProjectCard;
