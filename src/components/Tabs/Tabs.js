import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { selectedTab } from "../../actions/selectedTab.js";
import { Link } from "react-router-dom";

const TabComp = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.tab);
  const handleChange = (event, newValue) => {
    dispatch(selectedTab(newValue));
  };

  return (
    <>
      <Paper square>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="PROFILe" to="/" component={Link} />
          <Tab label="compare" to="/compare" component={Link} />
          <Tab label="CF friends" to="/friends" component={Link} />
          <Tab label="Upcoming Contests" to="upcoming" component={Link} />
        </Tabs>
      </Paper>
    </>
  );
};

export default TabComp;
