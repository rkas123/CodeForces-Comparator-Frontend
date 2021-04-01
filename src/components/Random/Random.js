import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  FormHelperText,
  Button,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
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
      <>
        <FormControl>
          <InputLabel>Number of Inputs</InputLabel>
          <Select value={inputs} onChange={handleChange}>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
            <MenuItem value={6}>Six</MenuItem>
          </Select>
          <FormHelperText>Select the number of users</FormHelperText>
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
        </FormControl>

        <Button
          onClick={() => {
            // console.log(platform, inputs);
            return handleClick();
          }}
          variant="outlined"
        >
          Submit
        </Button>
      </>
    );
  } else {
    return <GetInput platform={platform} inputs={inputs} />;
  }
};

export default Random;
