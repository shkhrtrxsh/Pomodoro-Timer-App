import React, { useState } from 'react';
let interval;
function Pomodoro() {
  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
    let remainingTime = time;
    interval = setInterval(() => {
      remainingTime--;
      if(remainingTime<0){
        clearInterval(interval);
        setIsRunning(false);
      }
      setTime(remainingTime);
    }, 1000); 
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(interval);
  };

  const resetTimer = () => {
    setTime(1500);
    setIsRunning(false);
    clearInterval(interval);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div class="flex flex-col items-center justify-center h-screen bg-red-500">
      <div class="pb-20">
        <p class="text-center text-2xl text-red-900 font-bold">POMODORO TIMER by shikhar.<br/>Time to focus!</p>
      </div>
      <div class="bg-red-400 rounded-lg p-6">
        <p class="text-5xl text-white text-center font-bold">{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</p>
      
      <div className="mt-4">
        {!isRunning ? (
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600" onClick={startTimer}>Start</button>
        ) : (
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600" onClick={stopTimer}>Stop</button>
        )}
        <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 ml-4" onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;

