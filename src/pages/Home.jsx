import React from "react";
import Abstract from "../components/Abstract";
import { Stack, Typography } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import { Opacity } from "@mui/icons-material";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Abstract />
      <div className="mx-5 my-10 px-20 ">
        <Stack>
          <Typography
            variant="h5"
            fontWeight={700}
            paddingY={2}
            textAlign={"center"}
          >
            A Little About Me
          </Typography>
          <Typography variant="subtitle1" textAlign={"justify"}>
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
          <br />
          {/* <hr /> */}
          <Stack
            container
            direction={"row"}
            justifyContent={"space-between"}
            marginTop={3}
          >
            <Stack spacing={1}>
              <Typography variant="h6" fontWeight={700}>
                Pationate About
              </Typography>
              <Stack spacing={1}>
                <Typography
                  variant="body1"
                  paddingLeft={2}
                  color="textDisabled"
                  fontWeight={500}
                >
                  Artificial Intelligence
                </Typography>
                <Typography
                  variant="body1"
                  paddingLeft={2}
                  color="textDisabled"
                  fontWeight={500}
                >
                  Blockchain and DeFi
                </Typography>
                <Typography
                  variant="body1"
                  paddingLeft={2}
                  color="textDisabled"
                  fontWeight={500}
                >
                  DevOps and Cloud
                </Typography>
              </Stack>
            </Stack>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={700}>
                Education
              </Typography>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <SchoolIcon />
                <Stack>
                  <Typography
                    variant="body1"
                    color="textDisabled"
                    fontWeight={500}
                  >
                    Bachelor of Computer Application
                  </Typography>
                  <Typography variant="body2" color="textDisabled">
                    Osmania University, Hyderabad
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <SchoolIcon />
                <Stack>
                  <Typography
                    variant="body1"
                    color="textDisabled"
                    fontWeight={500}
                  >
                    Master in Computer Application
                  </Typography>
                  <Typography variant="body2" color="textDisabled">
                    Savitribai Phule Pune University, Pune
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <br />
          <hr style={{ opacity: 0.4 }} />
          <Stack
            spacing={2}
            direction={"row"}
            justifyContent={"space-between"}
            marginTop={5}
            alignItems={"center"}
          >
            <Stack
              border="1px solid grey"
              borderRadius={3}
              padding={2}
              width={250}
            >
              <Typography variant="subtitle1" fontWeight={700}>
                {" "}
                20+{" "}
              </Typography>
              <Typography variant="body2" color="textDisabled">
                Projects Completed{" "}
              </Typography>
            </Stack>
            <Stack
              border="1px solid grey"
              borderRadius={3}
              padding={2}
              width={250}
            >
              <Typography variant="subtitle1" fontWeight={700}>
                {" "}
                5+{" "}
              </Typography>
              <Typography variant="body2" color="textDisabled">
                {" "}
                Years of Coding Experience{" "}
              </Typography>
            </Stack>
            <Stack
              border="1px solid grey"
              borderRadius={3}
              padding={2}
              width={250}
            >
              <Typography variant="subtitle1" fontWeight={700}>
                {" "}
                3{" "}
              </Typography>
              <Typography variant="body2" color="textDisabled">
                {" "}
                Years of Industry Experience{" "}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};
export default Home;
