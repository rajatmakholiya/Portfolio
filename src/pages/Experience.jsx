import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";
import { Button } from "antd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Experience = () => {
  return (
    <>
      <Typography
        variant="h5"
        fontFamily={"cursive"}
        fontWeight={600}
        textAlign="center"
        marginTop={3}
      >
        Professional Experience
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="subtitle1"
            color="text.secondary"
            fontWeight={500}
          >
            Jun 2021 - Jan 2022 (8 months)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              variant="h6"
              component="span"
              onClick={() =>
                window.open("https://cometservices.org/", "_blank")
              }
              style={{ cursor: "pointer" }}
            >
              eComet Foundation - Web Developer (Intern)
            </Typography>
            <Typography>
              {" "}
              As a{" "}
              <b>
                <i>Web Developer </i>
              </b>
              helped Develop An ed-tech organization website which is completely
              mobile responsive, user friendly and shares the most relevant and
              precised information about the organisation.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="subtitle1"
            color="text.secondary"
            fontWeight={500}
          >
            Oct 2022 - May 2024 (19 months)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              variant="h6"
              component="span"
              onClick={() => window.open("https://www.goapptiv.com/", "_blank")}
              style={{ cursor: "pointer" }}
            >
              Goapptiv Pvt. Ltd. - Front End Developer (Intern)
            </Typography>
            <Typography>
              Interned as a{" "}
              <b>
                <i>Front End Developer</i>
              </b>{" "}
              where I revamped legacy systems, improved page load speed, and
              delivered multiple high-impact modules. I also woked on and
              created an oncology care app, enhancing patient monitoring and
              admin workflows. Additionally, I mentored two interns, helping
              them ramp up and contribute to live projects quickly.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="subtitle1"
            color="text.secondary"
            fontWeight={500}
          ></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <MoreHorizIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default Experience;
