import React, { useState } from "react";
import Profile from "../Profile/Profile.js";
import { Redirect } from "react-router-dom";

const Home = () => {
  const userData = useState(JSON.parse(localStorage.getItem("profile")));

  if (userData[0] !== null) {
    return <Profile />;
  } else {
    return <Redirect to="/signin" />;
  }
};

export default Home;
