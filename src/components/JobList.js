import React from "react";
import JobCard from "./JobCards";

function JobList({ jobs, loading, error, filters }) {
  const filteredJobs = jobs?.filter((job) => {
    // Implement filtering logic based on the provided filters
    return Object.keys(filters).every((filterKey) => {
      // Check if the filter value is empty or if the job matches the filter
      // Handle null or undefined values for job[filterKey]
      return (
        filters[filterKey] === "" ||
        (job[filterKey] && job[filterKey].includes(filters[filterKey]))
      );
    });
  });

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator
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
            <>
              {filteredJobs?.map((job) => (
                <JobCard key={job.jdUid} job={job} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default JobList;
