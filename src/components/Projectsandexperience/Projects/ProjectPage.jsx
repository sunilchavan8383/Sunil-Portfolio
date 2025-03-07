import React from "react";
import "./ProjectPage.css";
import { Link, Outlet } from "react-router-dom";


function ProjectPage() {
  return (
    <div className="ProjectPage">
       <Outlet/>
    </div>

  );
}

export default ProjectPage;
