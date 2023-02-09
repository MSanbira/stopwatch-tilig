import React from "react";

export const StopwatchButton = (props: StopwatchButtonProps) => {
  const { isRunning, setIsRunning } = props;

  return (
    <button
      className={`stopwatch-btn ${isRunning ? "is-running" : ""}`}
      onClick={() => setIsRunning(!isRunning)}
    >
      {isRunning ? "stop" : "start"}
    </button>
  );
};

interface StopwatchButtonProps {
    isRunning: boolean;
    setIsRunning: (isRunning: boolean) => void;
}
