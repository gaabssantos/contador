import React, { useEffect } from "react";
import "./CountdownScreen.css";

const CountdownScreen = ({
  title,
  day,
  hours,
  minutes,
  seconds,
  image,
  colorTheme,
}) => {
  useEffect(() => {
    document.body.style.backgroundImage = image && `url(${image})`;
  }, []);

  return (
    <div className="countdown-container">
      <h1 style={{ color: colorTheme }}>{title}</h1>
      <div className="countdown">
        <div className="time">
          <div id="day">
            <div style={{backgroundColor: colorTheme}} className="time-square">{day}</div>
            <span style={{color: colorTheme}}>Dias</span>
          </div>
          <div id="hours">
            <div style={{backgroundColor: colorTheme}} className="time-square">{hours}</div>
            <span style={{color: colorTheme}}>Horas</span>
          </div>
          <div id="minute">
            <div style={{backgroundColor: colorTheme}} className="time-square">{minutes}</div>
            <span style={{color: colorTheme}}>Minutos</span>
          </div>
          <div id="seconds">
            <div style={{backgroundColor: colorTheme}} className="time-square">{seconds}</div>
            <span style={{color: colorTheme}}>Segundos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownScreen;
