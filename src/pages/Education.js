import React from "react";
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";

function Education() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            RKR Gnanodhaya Matric Higher Secondary School
          </h3>
          <p> SSLC </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ponnu Matric Higher Secondary School
          </h3>
          <p> HSC </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sri Krishna College of Engineering and Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Bachelor's Degree
          </h4>
          <p>Electronics and Communication Engineering</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Education;