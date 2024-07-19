import React, { useState, useEffect } from 'react';
import '../StopwatchComponents/Stopwatch.css';

const StopwatchComponent = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    const getSeconds = `0${seconds}`.slice(-2);
    const getMinutes = `0${minutes}`.slice(-2);
    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  return (
    <div className="stopwatch">
        <h1>Stopwatch</h1>
      <div className="frame">
        <h1 >Timer</h1>
        <div className="time">{formatTime(time)}</div>
        <div className="buttons">
          <button className="start-btn" onClick={startStopwatch}>Start</button>
          <button className="stop-btn" onClick={stopStopwatch}>Stop</button>
          <button className="reset-btn" onClick={resetStopwatch}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default StopwatchComponent;