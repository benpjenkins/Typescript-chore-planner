import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <p>
        Welcome to ChoreUs, the chore planning app for you and your household.
        Hit the button below to get started!
      </p>
      <div>
        <Link to="/start">Start</Link>
      </div>
    </div>
  );
};

export default Landing;
