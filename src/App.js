import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./actions";
import JobList from "./components/JobList";
import Filter from "./components/Filters/Filter";

function App() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    minExp: "",
    jobRole: "",
    companyName: "",
    location: "",
    minJdSalary: "",
    remoteOnSite: "",
    techStack: "",
    role: "",
    minBasePay: "",
  });

  useEffect(() => {
    dispatch(fetchJobs(0));
  }, [dispatch]);

  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  return (
    <div className="App">
      <Filter filters={filters} setFilters={setFilters} />
      <JobList filters={filters} loading={loading} error={error} />
    </div>
  );
}

export default App;
