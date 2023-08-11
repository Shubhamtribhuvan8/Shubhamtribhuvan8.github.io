import React from 'react';
import GitHubCalendar from 'react-github-calendar';
// import "./Statics.css";
import Tilt from 'react-parallax-tilt'
import './GitHubCalendarHeatmap.css';
const GitHubCalendarHeatmap = () => {
  return (
    <div>
    <h1 className="project-heading" style={{ paddingBottom: "20px",textAlign:"center",margin:"0" }}>
    Days I <strong className="purple">Code</strong>
  </h1>
    <Tilt>
    <div class="react-activity-calendar">
      <div className="heatmap-container">
        <GitHubCalendar username="Shubhamtribhuvan8" />
      </div>
    </div>
    </Tilt>
    </div>
  );
}

export default GitHubCalendarHeatmap;
