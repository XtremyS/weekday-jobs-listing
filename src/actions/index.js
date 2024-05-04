import { fetchJobsAPI } from "../api";

export const fetchJobs = () => async (dispatch) => {
  dispatch({ type: "FETCH_JOBS_REQUEST" });
  try {
    const jobs = await fetchJobsAPI();
    dispatch({ type: "FETCH_JOBS_SUCCESS", payload: jobs.jdList });
  } catch (error) {
    dispatch({ type: "FETCH_JOBS_FAILURE", payload: error });
  }
};
