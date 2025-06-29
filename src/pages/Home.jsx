import React from "react";
import Abstract from "../components/Abstract";
import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";  

import SchoolIcon from "@mui/icons-material/School";
import DownloadIcon from "@mui/icons-material/Download";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1fPuyjRIJd88s5_ekKE3c4VMAhLSheTJa";
    link.download = "HiredResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Abstract />
      <div className="mx-5 my-10 px-20 ">
        <Stack>
          <Typography variant="h5" fontWeight={700} paddingY={2} textAlign={"center"}>
            A Little About Me
          </Typography>
          <Typography variant="subtitle2" textAlign={"justify"}>
            I’m a <b>Full Stack Developer</b> focused on building clean,
            scalable, and impactful web applications. With over two years of
            hands-on experience, I specialize in creating responsive and
            high-performance frontends using React and Next.js, backed by robust
            backend. In addition to frontend and backend development, I bring
            strong fundamentals in DevOps and cloud infrastructure. I'm
            comfortable setting up CI/CD pipelines, working with Docker, and
            deploying scalable apps on platforms like AWS and Vercel. This
            allows me to deliver end-to-end solutions that are not only
            functional, but also reliable and cloud-ready.
            <br />
            <br />
            Whether it’s optimizing UX or deploying full-stack systems.I love
            turning complex challenges into intuitive digital experiences. Take
            a look at my work and let’s build something impactful together!
          </Typography>
          <Button
            startIcon={<DownloadIcon />}
            variant="contained"
            onClick={handleDownload}
            sx={{
              borderRadius: "7px",
              width: "180px",
              height: "40px",
              marginY: "20px",
              bgcolor: "#1a1a1a",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              "&:hover": {
                backgroundColor: "#222",
              },
            }}
          >
            <Typography
              variant="subtitle2"
              textTransform={"none"}
              noWrap
              fontWeight={500}
            >
              Download Resume
            </Typography>
          </Button>

          <Grid container direction={"row"} justifyContent={"space-between"}>
            <Grid container item size={6}>
              <Grid item size={12}>
                <Typography variant="h6" fontWeight={600}>
                  Interests
                </Typography>
              </Grid>
              <Grid item>
                <Stack spacing={1}>
                  <Typography>• Web Development</Typography>
                  {/* <Typography>• Artificial Intelligence</Typography> */}
                  <Typography>• Cloud Computing</Typography>
                  <Typography>• Blockchain and Defi</Typography>
                  <Typography>• DevOps and CloudOps</Typography>
                </Stack>
              </Grid>
            </Grid>
            <Grid container item size={6} spacing={1}>
              <Grid item size={12}>
                <Typography variant="h6" fontWeight={600}>
                  Education
                </Typography>
              </Grid>
              <Grid item size={12}>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <SchoolIcon />
                  <Stack>
                    <Typography>HSC</Typography>
                    <Typography>Gen. BC Joshi Army Public School</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item size={12}>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <SchoolIcon />
                  <Stack>
                    <Typography>BCA</Typography>
                    <Typography>Osmania University</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item size={12}>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <SchoolIcon />
                  <Stack>
                    <Typography>MCA Cloud Engineering</Typography>
                    <Typography>Savitribai Phule Pune University</Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </div>
    </div>
  );
};
export default Home;
