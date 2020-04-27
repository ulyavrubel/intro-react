import React from "react";
import { Link } from "@reach/router";

const NotFound = () => {
  return (
    <h1>
      There was an error with this listing. <Link to="/">Click here</Link> to
      back to the home page.
    </h1>
  );
};

export default NotFound;
