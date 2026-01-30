import React from "react";

const withColor = (WrappedComponent) => {
  const ColorComponent = (props) => {
    return (
      <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return ColorComponent;
};

export default withColor;
