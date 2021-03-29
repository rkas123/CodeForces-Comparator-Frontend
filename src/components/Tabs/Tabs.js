import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { selectedTab } from "../../actions/selectedTab.js";
import { ThemeProvider } from "@material-ui/core/styles";
import darkTheme from "../../themes/darkTheme.js";
import lightTheme from "../../themes/lightTheme.js";
import { Link } from "react-router-dom";

const TabComp = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme);
  const value = useSelector((state) => state.tab);
  const handleChange = (event, newValue) => {
    dispatch(selectedTab(newValue));
  };

  return (
    <>
      <ThemeProvider theme={darkMode === 1 ? darkTheme : lightTheme}>
        <Paper square>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="PROFILe" to="/" component={Link} />
            <Tab label="compare" to="/compare" component={Link} />
            <Tab label="CF friends" to="/friends" component={Link} />
            <Tab label="Upcoming Contests" to="upcoming" component={Link} />
          </Tabs>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default TabComp;
