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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {error ? (
        <p>Something Went Wrong</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {filteredJobs.length === 0 ? (
            <p>No Jobs Found</p>
          ) : (
            <Grid container spacing={2}>
              {filteredJobs?.map((job) => (
                <Grid key={job.jdUid} item xs={12} sm={6} md={4}>
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
