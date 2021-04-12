import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Button,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from "@material-ui/core";
import GetInput from "./GetInput.js";

const Random = () => {
  const [inputs, setInputs] = useState("");
  const [showInputs, setShowInputs] = useState(false);
  const [platform, setPlatfrom] = useState("codeforces");
  const handleChange = (event) => {
    setInputs(event.target.value);
  };

  const handleClick = () => {
    setShowInputs(true);
  };

  const handlePlatform = (event) => {
    setPlatfrom(event.target.value);
  };

  if (!showInputs) {
    return (
      <div style={{ margin: "16px" }}>
        <Grid container align="center" justify="center" spacing={4}>
          <Grid item xs={12}>
            <div>
              <InputLabel>Number of Users</InputLabel>
              <Select value={inputs} onChange={handleChange}>
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
                <MenuItem value={4}>Four</MenuItem>
                <MenuItem value={5}>Five</MenuItem>
                <MenuItem value={6}>Six</MenuItem>
              </Select>
            </div>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select Platform</FormLabel>
              <RadioGroup
                name="platform"
                value={platform}
                onChange={(event) => handlePlatform(event)}
              >
                <FormControlLabel
                  value="codeforces"
                  control={<Radio />}
                  label="CodeForces"
                />
                <FormControlLabel
                  value="codechef"
                  control={<Radio />}
                  label="CodeChef"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Button
            onClick={() => {
              // console.log(platform, inputs);
              return handleClick();
            }}
            variant="outlined"
          >
            Submit
          </Button>
        </Grid>
      </div>
    );
  } else {
    return <GetInput platform={platform} inputs={inputs} />;
  }
};

export default Random;
