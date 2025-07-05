import { Stack, Typography, Button } from "@mui/material";
import Image from "../assets/Profile.jpg";
import Grid from "@mui/material/Grid";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";

export default function AbstractBio() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1fPuyjRIJd88s5_ekKE3c4VMAhLSheTJa";
    link.download = "Rajat.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Grid container spacing={2} alignItems={"center"}>
      <Grid size={2}></Grid>
      <Grid size={2}>
        <Stack
          justifyContent={"center"}
          marginInline={"auto"}
          alignItems={"center"}
          spacing={1}
        >
          <img
            src={Image}
            alt="Profile Pic"
            className="max-w-36 max-h-[80vh]"
          />
          <Typography variant="h5" fontWeight={500}>
            Rajat Makholiya
          </Typography>
          <Typography variant="subtitle1" fontWeight={500}>
            Web Developer
          </Typography>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <EmailOutlinedIcon
              onClick={() => window.open("mailto:rajatmakholiya07@gmail.com")}
              cursor="pointer"
            />
            <LinkedInIcon
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/rajat-makholiya-1b92a1222/"
                )
              }
              cursor="pointer"
            />
            <GitHubIcon
              onClick={() => window.open("https://github.com/rajatmakholiya")}
              cursor="pointer"
            />
          </Stack>

          <Button
            startIcon={<DownloadIcon />}
            variant="contained"
            onClick={handleDownload}
            sx={{
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              color:"whitesmoke",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.2)",
                borderColor: "rgba(255, 255, 255, 0.5)",
              },
            }}
          >
            <Typography
              variant="subtitle2"
              textTransform={"none"}
              noWrap
              fontWeight={600}
            >
              Download CV
            </Typography>
          </Button>
        </Stack>
      </Grid>
      <Grid size={7}>
        <Stack textAlign={"center"}>
          <Typography variant="h1" fontWeight={700} fontFamily={"Poppins"}>
            Hi! I am{" "}
            <Typography
              variant="h1"
              component={"span"}
              fontWeight={700}
              fontFamily={"cursive"}
              color="#d9d9c0"
            >
              Rajat
            </Typography>
          </Typography>
          <Typography variant="h2" fontWeight={700} fontFamily={"Poppins"}>
            A Developer And Software Engineer
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={500}
            fontFamily={"Poppins"}
            marginTop={3}
          >
            I'm passionate about crafting experiences and exploring new
            horizons.
          </Typography>
        </Stack>
      </Grid>
      <Grid size={1}></Grid>
    </Grid>
  );
}
