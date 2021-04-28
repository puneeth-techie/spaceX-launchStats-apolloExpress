import React from "react";
import Loader from "react-loader-spinner";

const LoaderUI = () => {
  return (
    <div
      className="container"
      style={{
        position: "fixed",
        top: "50%",
        left: "85%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default LoaderUI;
