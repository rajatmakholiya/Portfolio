import { Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../assets/Profile.jpg";
import Grid from '@mui/material/Grid';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function AbstractBio() {

  return (
    <Grid container spacing={2}  alignItems={"center"}>
      <Grid size={2}></Grid>
      <Grid size={2}>
        <Stack
          justifyContent={"center"}
          marginInline={"auto"}
          alignItems={"center"}
          spacing={1}
        >
          <img src={Image} alt="Profile Pic" className="max-w-36 max-h-[80vh]" />
          <Typography variant="h5" fontWeight={500}>
            Rajat Makholiya
          </Typography>
          <Typography variant="subtitle1" fontWeight={500}>
            Web Developer
          </Typography>
          <Stack direction={"row"} spacing={2} alignItems={"center"}
          >
            <EmailOutlinedIcon onClick={() => window.open("mailto:rajatmakholiya07@gmail.com")} cursor="pointer" />
            <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/rajat-makholiya-1b92a1222/")} cursor="pointer"/>
            <GitHubIcon onClick={() => window.open("https://github.com/rajatmakholiya")} cursor="pointer"/>
          </Stack>
        </Stack>
      </Grid>
      <Grid size={7}>
        <Stack textAlign={"center"}>
          <Typography variant="h1" fontWeight={700} fontFamily={"Poppins"}>
           Hi! I am <Typography variant="h1" component={"span"} fontWeight={700} fontFamily={"cursive"} color="#d9d9c0">Rajat</Typography>
          </Typography>
          <Typography variant="h2" fontWeight={700} fontFamily={"Poppins"}>
           A Developer And Software Engineer
          </Typography>
         <Typography variant="subtitle2" fontWeight={500} fontFamily={"Poppins"} marginTop={3}>
          I'm passionate about crafting experiences and exploring new horizons.
         </Typography>
        
        </Stack>
      </Grid>
      <Grid size={1}></Grid>
    </Grid>
  );
}
