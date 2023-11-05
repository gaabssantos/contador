// CSS
import "./RegressiveCounter.css";

// Imports
import { CountdownContext } from "../context/CountdownContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";

const RegressiveCounter = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");

  const { informations, setInformations } = useContext(CountdownContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const countdownObj = {
      title,
      date,
      image,
      color,
    };

    setInformations(countdownObj);

    if (title && date && color) {
      navigate("/countdown");
      localStorage.setItem("countdown", JSON.stringify(countdownObj));
      localStorage.getItem("countdown");
    }
  };

  return (
    <div className="regressive-container">
      <h1>Monte a sua contagem regressiva</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>
            Título:
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Digite o título do evento"
            />
          </label>
        </div>
        <div className="form-control">
          <label>
            Data do evento:
            <input
              type="date"
              onChange={(e) => setDate(new Date(e.target.value))}
            />
          </label>
        </div>
        <div className="form-control">
          <label>
            Imagem:
            <input
              type="text"
              placeholder="Insira a URL da imagem"
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
        </div>
        <div className="form-control">
          <label>
            Cor do tema:
            <input type="color" onChange={(e) => setColor(e.target.value)} />
          </label>
        </div>
        <div className="form-control">
          <button>Criar</button>
        </div>
      </form>
    </div>
  );
};

export default RegressiveCounter;
