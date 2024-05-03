import React from "react";
import JobCard from "./Job Card/JobCards";
import { Grid } from "@mui/material";

function JobList({ jobs, loading, error, filters }) {
  const filteredJobs = jobs?.filter((job) => {
    return Object.keys(filters).every((filterKey) => {
      return (
        filters[filterKey] === "" ||
        (job[filterKey] && job[filterKey].includes(filters[filterKey]))
      );
    });
  });

  console.log(filteredJobs);

  return (
    <div>
      {loading ? (
        <div className="loading_spinner_div">
          <img src="/loadingSpinner.gif" alt="loading spinner" />
        </div>
      ) : error ? (
        <div className="something_went_wrong_div">
          <div>
            <img src="/somethingWentWrong.png" alt="something went wrong" />
          </div>
          <p className="no_job_found_text">Something Went Wrong!</p>
        </div>
      ) : (
        <>
          {filteredJobs.length === 0 ? (
            <div className="something_went_wrong_div">
              <div>
                <img src="/somethingWentWrong.png" alt="something went wrong" />
              </div>
              <p className="no_job_found_text">No Jobs Found!</p>
            </div>
          ) : (
            <Grid container spacing={2}>
              {filteredJobs?.map((job) => (
                <Grid key={job.jdUid} item xs={12} sm={6} md={3}>
                  <JobCard job={job} />
                </Grid>
              ))}
            </Grid>
          )}
        </>
      )}
    </div>
  );
}

export default JobList;
