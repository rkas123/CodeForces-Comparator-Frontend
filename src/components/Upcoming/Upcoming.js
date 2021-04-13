import "date-fns";
import React, { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  CircularProgress,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { fetchList } from "../../api/index.js";
import List from "./List.js";

const platforms = [
  { id: 1, name: "CodeForces" },
  { id: 2, name: "CodeChef" },
  { id: 3, name: "UVA" },
  { id: 12, name: "TopCoder" },
  { id: 25, name: "USACO" },
  { id: 26, name: "SPOJ" },
  { id: 29, name: "Facebook" },
  { id: 35, name: "Google" },
  { id: 63, name: "HackerRank" },
  { id: 65, name: "Project Euler" },
  { id: 67, name: "Yandex" },
  { id: 73, name: "HackerEarth" },
  { id: 90, name: "csacademy" },
  { id: 93, name: "AtCoder" },
  { id: 102, name: "LeetCode" },
  { id: 117, name: "Binary Search" },
  { id: 120, name: "Quora" },
];

const currDate = new Date();
const defaultTime = new Date(currDate.getTime() + 1728000000);
//total 16 chosen
const defaultFilter = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const Upcoming = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedDate, setSelectedDate] = useState(defaultTime);
  const [selectedPlatforms, setSelectedPlatforms] = useState(defaultFilter);
  const [dataFetch, setDataFetch] = useState(true);
  const [list, setList] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleFilterClose();
  };
  const handleChange = (index) => {
    setSelectedPlatforms((prevState) => {
      let temp = [...prevState];
      temp[index] = (temp[index] + 1) % 2;
      return temp;
    });
  };
  const handleFilterOpen = () => {
    setOpenFilter(true);
  };
  const handleFilterClose = () => {
    setOpenFilter(false);
  };
  const fetchData = async () => {
    try {
      const data = await fetchList();
      // console.log(data.data.data);
      setList(data.data.data);
      setDataFetch(false);
    } catch (error) {
      console.log(error);
    }
  };
  let comp = {};
  if (dataFetch === true) {
    console.log("data fetch");
    fetchData();
    comp = <CircularProgress />;
  } else {
    comp = <List Filter={selectedPlatforms} data={list} date={selectedDate} />;
  }
  return (
    <>
      <div>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton onClick={handleFilterOpen}>
            <MenuIcon />
          </IconButton>
          <Typography>Filters</Typography>
        </Toolbar>
        <Drawer variant="persistent" anchor="top" open={openFilter}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                onClick={() => handleFilterClose()}
                style={{
                  width: "50px",
                  height: "50px",
                  position: "absolute",
                  left: "10px",
                }}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Enter Date"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
          </div>
          <Grid container spacing={2} justify="space-around">
            {platforms.map((element, index) => {
              return (
                <Grid item xs={6} sm={3} ls={2} key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedPlatforms[index] === 1 ? true : false}
                        onChange={() => handleChange(index)}
                        name={`${index}`}
                        color="primary"
                      />
                    }
                    label={element.name}
                  />
                </Grid>
              );
            })}
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          ></div>
        </Drawer>
      </div>
      {comp}
    </>
  );
};

export default Upcoming;

// https://clist.by/api/v1/contest/?username=rkas&api_key=2af8de4db93746d3d1ef7b60440c57b77943427b&resource_id=1&start__lt=2021-04-10T12:00:00&order_by=start
