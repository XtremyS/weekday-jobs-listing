import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
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
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          name="jobRole"
          value={filters.jobRole}
          onChange={handleChange}
          label="Job Role"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          name="minExperience"
          value={filters.minExperience}
          onChange={handleChange}
          label="Min Experience"
          variant="outlined"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          name="location"
          value={filters.location}
          onChange={handleChange}
          label="Location"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Tech Stack</InputLabel>
          <Select
            name="techStack"
            value={filters.techStack}
            onChange={handleChange}
            label="Tech Stack"
          >
            <MenuItem value="JavaScript">JavaScript</MenuItem>
            <MenuItem value="Python">Python</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Remote/On Site</InputLabel>
          <Select
            name="location"
            value={filters.location}
            onChange={handleChange}
            label="Remote/On-Site"
          >
            <MenuItem value="remote">Remote</MenuItem>
            <MenuItem value="onsite">On Site</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          name="minBasePay"
          value={filters.minBasePay}
          onChange={handleChange}
          label="Min Base Pay"
          variant="outlined"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          fullWidth
        />
      </Grid>
    </Grid>
  );
}

export default Filter;
