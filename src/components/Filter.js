import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

function Filter({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: newValue,
    }));
  };

  return (
    <div>
      <TextField
        name="jobRole"
        value={filters.jobRole}
        onChange={handleChange}
        label="Job Role"
        variant="outlined"
      />
      <TextField
        name="minExperience"
        value={filters.minExperience}
        onChange={handleChange}
        label="Min Experience"
        variant="outlined"
        type="number"
        InputProps={{ inputProps: { min: 0 } }}
      />
      <TextField
        name="location"
        value={filters.location}
        onChange={handleChange}
        label="Location"
        variant="outlined"
      />
      <FormControl variant="outlined">
        <InputLabel>Tech Stack</InputLabel>
        <Select
          name="techStack"
          value={filters.techStack}
          onChange={handleChange}
          label="Tech Stack"
        >
          <MenuItem value="JavaScript">JavaScript</MenuItem>
          <MenuItem value="Python">Python</MenuItem>
          {/* Add more tech stack options here */}
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel>Remote/On Site</InputLabel>
        <Select
          name="location"
          value={filters.location}
          onChange={handleChange}
          label="Remote/On-Site"
        >
          <MenuItem value="remote">Remote</MenuItem>
          <MenuItem value="onsite">On Site</MenuItem>
          {/* Add more tech stack options here */}
        </Select>
      </FormControl>

      <TextField
        name="minBasePay"
        value={filters.minBasePay}
        onChange={handleChange}
        label="Min Base Pay"
        variant="outlined"
        type="number"
        InputProps={{ inputProps: { min: 0 } }}
      />
    </div>
  );
}

export default Filter;
