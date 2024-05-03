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
      <Grid item xs={12} md={6} lg={3}>
        <TextField
          name="companyName"
          value={filters.companyName}
          onChange={handleChange}
          label="Company Name"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <TextField
          name="jobRole"
          value={filters.jobRole}
          onChange={handleChange}
          label="Job Role"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <TextField
          name="minExp"
          value={filters.minExp}
          onChange={handleChange}
          label="Min Experience"
          variant="outlined"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <TextField
          name="maxExp"
          value={filters.maxExp}
          onChange={handleChange}
          label="Max Experience"
          variant="outlined"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <TextField
          name="location"
          value={filters.location}
          onChange={handleChange}
          label="Location"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Tech Stack</InputLabel>
          <Select
            name="techStack"
            value={filters.techStack}
            onChange={handleChange}
            label="Tech Stack"
          >
            <MenuItem value="javascirpt">JavaScript</MenuItem>
            <MenuItem value="python">Python</MenuItem>
            <MenuItem value="react">React JS</MenuItem>
            <MenuItem value="nextjs">Next JS</MenuItem>
            <MenuItem value="html">HTML</MenuItem>
            <MenuItem value="css">CSS</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
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
      <Grid item xs={12} md={6} lg={3}>
        <TextField
          name="minJdSalary"
          value={filters.minJdSalary}
          onChange={handleChange}
          label="Min Base Pay"
          variant="outlined"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <TextField
          name="maxJdSalary"
          value={filters.maxJdSalary}
          onChange={handleChange}
          label="Max Base Pay"
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
