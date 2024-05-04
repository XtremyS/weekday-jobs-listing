import React, { useEffect, useState } from "react";
import JobCard from "./Job Card/JobCards";
import { fetchJobsAPI } from "../api";
import { Grid } from "@mui/material";

function JobList({ loading, error, filters }) {
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    setAllJobs([]);
    setOffset(0);
    setHasMore(true);
    fetchJobs(0);
  }, []);

  const fetchJobs = async (offset) => {
    try {
      const data = await fetchJobsAPI(offset);
      setAllJobs((prevJobs) => [...prevJobs, ...data.jobs]);
      setHasMore(data.hasMore);
    } catch (error) {
      console.error(error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !loading &&
      !loadingMore &&
      hasMore
    ) {
      setLoadingMore(true);
      fetchJobs(offset + 10).finally(() => {
        setLoadingMore(false);
      });
      setOffset((prevOffset) => prevOffset + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, loadingMore, hasMore]);

  const filteredJobs = allJobs?.filter((job) => {
    return Object.keys(filters).every((filterKey) => {
      const jobValue = job[filterKey];
      const filterValue = filters[filterKey];

      if (filterValue === "") {
        return true;
      }

      const hasNullOrUndefined = Object.values(job).some(
        (value) => value === null || value === undefined
      );
      if (hasNullOrUndefined) {
        return false;
      }

      if (typeof jobValue === "number" && typeof filterValue === "number") {
        return jobValue === filterValue;
      }

      if (Array.isArray(jobValue)) {
        return jobValue.includes(filterValue);
      }

      return jobValue
        ?.toString()
        ?.toLowerCase()
        ?.includes(filterValue.toLowerCase());
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
            <img
              className="something_went_wrong_img"
              src="/somethingWentWrong.png"
              alt="something went wrong"
            />
          </div>
          <p className="no_job_found_text">Something Went Wrong!</p>
        </div>
      ) : (
        <>
          {filteredJobs?.length === 0 ? (
            <div className="something_went_wrong_div">
              <div>
                <img
                  className="something_went_wrong_img"
                  src="/somethingWentWrong.png"
                  alt="something went wrong"
                />
              </div>
              <p className="no_job_found_text">No Jobs Found!</p>
            </div>
          ) : (
            <div className="main_container_card_section">
              <Grid container spacing={2}>
                {filteredJobs?.map((job, index) => (
                  <Grid key={index} item xs={12} sm={6} md={3}>
                    <JobCard job={job} />
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
          {loadingMore && (
            <div className="loading_spinner_div">
              <img src="/loadingSpinner.gif" alt="loading spinner" />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default JobList;
