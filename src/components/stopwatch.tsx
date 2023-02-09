import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

let timerInterval: NodeJS.Timer | undefined;
let RunningTime = 0;

export const Stopwatch = (props: StopwatchProps) => {
  const { isRunning } = props;

  const [time, setTime] = useState(0);

  const addCentisecond = () => {
    RunningTime += 10;
    setTime(RunningTime);
  };

  useEffect(() => {
    if (isRunning) {
      timerInterval = setInterval(addCentisecond, 10);
    } else {
      clearInterval(timerInterval);
      RunningTime = 0;
    }
  }, [isRunning]);

  const centiseconds = (time / 10) % 100;

  return (
    <div className="stopwatch">
      {dayjs.duration(time, "milliseconds").format("mm:ss")}:
      {centiseconds >= 10 ? centiseconds : `0${centiseconds}`}
    </div>
  );
};

interface StopwatchProps {
  isRunning: boolean;
}
