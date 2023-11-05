import { useContext, useEffect, useState } from "react";
import CountdownScreen from "../components/CountdownScreen";
import { CountdownContext } from "../context/CountdownContext";
import useCountdown from "../hooks/useCountdown";

const Countdown = () => {
  const { informations, setInformations } = useContext(CountdownContext);

  const informationJson = JSON.parse(localStorage.getItem("countdown"));

  const [day, hour, minute, second] = useCountdown(informationJson.date);

  useEffect(() => {
    if (informationJson.image !== "")
      document.body.style.backgroundImage = `url(${informationJson.image})`;
  }, []);

  return (
    <div>
      <CountdownScreen
        title={informationJson.title}
        day={day}
        hours={hour}
        minutes={minute}
        seconds={second}
        colorTheme={informationJson.color}
      />
    </div>
  );
};

export default Countdown;
