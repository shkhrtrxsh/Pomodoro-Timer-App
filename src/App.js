import React, { useState } from 'react';
import "./App.css";
let interval;
function Pomodoro() {
  const [task, setTask] = useState('');
  const [time, setTime] = useState(1500000);
  const [isRunning, setIsRunning] = useState(false);
  const [duration, setDuration] = useState(25);
  const [counter, setCounter] =useState(0);
  const minutes =Math.floor(time / 1000 / 60);
  const seconds = time % 60;
  console.log(minutes);
  const handleDurationChange = (event) => {
    setDuration(event.target.value);
    setTime(event.target.value * 60 * 1000);
  };
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
    setTime(duration * 60 * 1000);
    setIsRunning(false);
    clearInterval(interval);
  };
  
   
   
    const handleTaskInput = (event) => {
      setTask(event.target.value);
    };
    function handleCheckboxClick(event){
    console.log(event.target);
    }
  
    const handleAddTask = () => {
      var temp=document.querySelector(".inject").innerHTML;
      document.querySelector(".inject").innerHTML = temp + "<br/>" + "<div class='p-5'><input class='gg' type='checkbox' onclick='handleCheckboxClick(this)' /><input type='text' value='${task}'></input></div>";
      setCounter(counter+1);
      setTask('');
    };
  return (
    <div className=" hi pt-20 flex flex-col items-center justify-center h-screen bg-red-500">
      <div className="pt-30">
        <p className="text-center text-2xl text-red-900 font-bold">POMODORO TIMER</p>
        <p className="text-center text-2xl text-green-500 font-bold pt-5">Time to focus!</p>
      </div>
    <div className="flex flex-col text-center p-5">
    <label className="text-xl font-bold text-white" htmlFor="duration">Duration (minutes) </label>
      <input
        type="number"
        id="duration"
        min="0"
        value={duration}
        step="1"
        onChange={handleDurationChange}
      />
    </div>
      <div className="mb-5 bg-red-400 rounded-lg p-6">
        <p className="text-5xl text-white text-center font-bold">{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</p>
      
      <div className="mt-4">
        {!isRunning ? (
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600" onClick={startTimer}>Start</button>
        ) : (
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600" onClick={stopTimer}>Stop</button>
        )}
        <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 ml-4" onClick={resetTimer}>Reset</button>
        </div>
      </div>
      <div className='inject p-5'>

      </div>
      <div className="p-3 addtolist flex items-center bg-gray-300 rounded-lg shadow-lg">
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Add task name..."
        value={task}
        onChange={handleTaskInput}
      />
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddTask}
      >
        +
      </button>
    </div>
      <div className=" bg-red-500">
      <p>shkhrtrxsh.</p>
      </div>
    </div>
  );
        }
        export default Pomodoro;
