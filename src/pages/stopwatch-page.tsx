import React, { useState } from "react";
import { Stopwatch } from "../components/stopwatch";
import { StopwatchButton } from "../components/stopwatch-button";

export const StopwatchPage = () => {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="stopwatch-page">
      <h1>Stopwatch</h1>

      <div className="stopwatch-container">
        <Stopwatch isRunning={isRunning} />

        <StopwatchButton isRunning={isRunning} setIsRunning={setIsRunning} />
      </div>
    </div>
  );
};
