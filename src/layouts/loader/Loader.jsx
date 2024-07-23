import React from "react";
import "./loader.scss";
import { Spinner } from "reactstrap";

const Loader = () => (
  <div className="fallback-spinner">
    <div className="loading">
    <Spinner color="primary" style={{ height: '3rem',width: '3rem'}} type="grow">
  </Spinner>
    </div>
  </div>
);
export default Loader;