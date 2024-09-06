import React from "react";

const LoadingSpinner = () => {
  const spinnerStyle = {
    border: "0.5rem solid #f3f3f3", // Light gray background
    borderTop: "0.5rem solid #3498db", // Blue color for the spinning effect
    borderRadius: "50%",
    width: "3rem", // Normal size
    height: "3rem", // Normal size
    animation: "spin 1s linear infinite",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height for centering
  };

  return (
    <div style={containerStyle}>
      <div style={spinnerStyle} role="status">
        <span style={{ visibility: "hidden" }}>Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
