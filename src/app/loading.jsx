import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default loading;
