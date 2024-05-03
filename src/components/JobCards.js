import React from "react";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.jobRole ? job.jobRole : "Not Available"}</h3>
      <p>{job.salaryCurrencyCode ? job.salaryCurrencyCode : "Not Available"}</p>
      <p>{job.location ? job.location : "Not Available"}</p>
      <p>
        {job.jobDetailsFromCompany
          ? job.jobDetailsFromCompany
          : "Not Available"}
      </p>
      <p>{job.minExp ? job.minExp : "Not Available"}</p>
      <button>Apply</button>
    </div>
  );
}

export default JobCard;
