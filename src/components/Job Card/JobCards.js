import React from "react";
import "./jobCard.css";
import BoltIcon from "@mui/icons-material/Bolt";
import WineBarIcon from "@mui/icons-material/WineBar";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function JobCard({ job }) {
  return (
    <div className="main-container">
      <div className="sub-container">
        <p className="post-date">
          <WineBarIcon style={{ color: "#b78c68" }} />
          Posted 6 days ago
        </p>
        <div className="company-info">
          <div>
            <img src={job.logoUrl} alt=""></img>
          </div>
          <div className="job-des">
            <h3 className="company-name">{job.companyName}</h3>
            <p className="job-role">
              {job.jobRole ? job.jobRole : "Not Available"}
            </p>
            <p className="location">
              {job.location ? job.location : "Not Available"}
            </p>
          </div>
        </div>
        <p className="salary-currancy-code">
          Estimated Salary: {job.salaryCurrencyCode === "USD" ? "$" : "₹"}
          {job.minJdSalary ? job.minJdSalary : "Not Specified"} -{" "}
          {job.salaryCurrencyCode === "USD" ? "$" : "₹"}
          {job.maxJdSalary ? job.maxJdSalary : "Not Specified"} LPA
          <CheckBoxIcon style={{ color: "#01bd00" }} />
        </p>
        <p className="about-company">About Company:</p>
        <p className="about-us">About us</p>
        <p className="description">
          {job.jobDetailsFromCompany
            ? job.jobDetailsFromCompany
            : "Not Specified"}
        </p>
        <p className="min-exp">Minimum Experience</p>
        <p className="experience">
          {job.minExp ? `${job.minExp} Years` : "Not Specified"}
        </p>

        <button className="apply-btn">
          <BoltIcon style={{ color: "#f3cc49" }} />
          Easy Apply
        </button>
        <br />
        <button className="refferal-btn">Unlock Referral ask</button>
      </div>
    </div>
  );
}

export default JobCard;
