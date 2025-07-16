import { Stack, Typography, Button, Grid } from "@mui/material";
import Image from "../assets/Profile.jpg";
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
    <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center" justifyContent="center">
      {/* Profile Picture and Links */}
      <Grid item xs={12} md={4} lg={3}>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={1.5}
          sx={{ color: "white" }}
        >
          <img
            src={Image}
            alt="Profile Pic"
            className="max-w-36 rounded-full border-2 border-white/50"
          />
          <Typography variant="h5" fontWeight={500}>
            Rajat Makholiya
          </Typography>
          <Typography variant="subtitle1" fontWeight={400} sx={{ opacity: 0.9 }}>
            Web Developer
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <EmailOutlinedIcon
              onClick={() => window.open("mailto:rajatmakholiya07@gmail.com")}
              cursor="pointer"
              sx={{ "&:hover": { color: "#d9d9c0" } }}
            />
            <LinkedInIcon
              onClick={() =>
                window.open("https://www.linkedin.com/in/rajat-makholiya-1b92a1222/")
              }
              cursor="pointer"
              sx={{ "&:hover": { color: "#d9d9c0" } }}
            />
            <GitHubIcon
              onClick={() => window.open("https://github.com/rajatmakholiya")}
              cursor="pointer"
              sx={{ "&:hover": { color: "#d9d9c0" } }}
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
              color: "whitesmoke",
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
              textTransform="none"
              noWrap
              fontWeight={600}
            >
              Download CV
            </Typography>
          </Button>
        </Stack>
      </Grid>

      {/* Bio Text */}
      <Grid item xs={12} md={8} lg={7}>
        <Stack textAlign="center" sx={{ color: "white" }}>
          <Typography
            fontWeight={700}
            fontFamily="Poppins"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' } // Responsive font size
            }}
          >
            Hi! I am{" "}
            <Typography
              component="span"
              fontWeight={700}
              fontFamily="cursive"
              color="#d9d9c0"
              sx={{
                fontSize: 'inherit' // Inherits responsive font size
              }}
            >
              Rajat
            </Typography>
          </Typography>
          <Typography
            fontWeight={700}
            fontFamily="Poppins"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' } // Responsive font size
            }}
          >
            A Developer And Software Engineer
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={400}
            fontFamily="Poppins"
            marginTop={3}
            sx={{ opacity: 0.9, fontSize: { xs: '0.875rem', md: '1rem' } }}
          >
            I'm passionate about crafting experiences and exploring new
            horizons.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}