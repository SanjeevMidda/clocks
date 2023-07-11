import React, { useState } from "react";

const Clock = ({ deg, letter }) => {
  let styles = {
    transform: `rotate(${deg}deg)`,
  };

  return (
    <div>
      <h3>{letter}</h3>
      <div className="clock">
        <div className="line" style={styles}></div>
      </div>
    </div>
  );
};

export default Clock;
