import { useState,useEffect } from "react";

function Task01() {
  const [color, setColor] = useState("red");
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });
  
  return (
    <>
      <h2>Change the color based on selection</h2>
      <select
        defaultValue={"red"}
        onChange={(e) => setColor(e.target.value)}
        name="color"
        id=""
      >
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
      </select>
      <p>Color : {color}</p>
      <div
        style={{
          width: "150px",
          color: color,
          backgroundColor: "aqua",
          padding: "10px",
        }}
      >
        <span>{time}</span>
      </div>
    </>
  );
}

export default Task01;
