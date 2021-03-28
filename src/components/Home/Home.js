import React, { useState } from "react";
import SignUp from "../SignUp/SignUp.js";
import SignIn from "../SignIn/SignIn.js";

const Home = () => {
  const [sign, setSign] = useState(0);
  const toggle = () => {
    setSign((prevState) => (prevState + 1) % 2);
  };
  return (
    <>
      {sign === 0 ? (
        <SignUp handleChange={toggle} />
      ) : (
        <SignIn handleChange={toggle} />
      )}
    </>
  );
};

export default Home;
