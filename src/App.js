import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./actions";
import JobList from "./components/JobList";
import Filter from "./components/Filter";

function App() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    minExp: "",
    maxExp: "",
    jobRole: "",
    location: "",
    maxJdSalary: "",
    minJdSalary: "",
    salaryCurrencyCode: "",
    remoteOnSite: "",
    techStack: "",
    role: "",
    minBasePay: "",
  });

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const jobs = useSelector((state) => state.jobs);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  return (
    <div className="App">
      <Filter filters={filters} setFilters={setFilters} />
      <JobList jobs={jobs} filters={filters} loading={loading} error={error} />
    </div>
  );
}

export default App;
