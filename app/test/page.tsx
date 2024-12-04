// app/test/page.tsx

"use client";


import { useState } from 'react';
import Link from "next/link";

const questions = [
  {
    question: "1/10: ¿Qué valorás más en una película?",
    answers: [
      { text: "Que me entretenga y distraiga un rato", colors: [{ color: "blue", percentage: 10}] },
      { text: "Que me haga reflexionar", colors: [{ color: "red", percentage: 10}] },
      { text: "Guión", colors: [{ color: "yellow", percentage: 10}] },
      { text: "Planos y estética", colors: [{ color: "yellow", percentage: 10}] },
      { text: "Desarrollo de personajes", colors: [{ color: "red", percentage: 10}] },
      { text: "Sentido del humor", colors: [{ color: "red", percentage: 5}, { color: "blue", percentage: 5}] },
      { text: "Actuaciones", colors: [{ color: "yellow", percentage: 10}] },
      { text: "Banda sonora", colors: [{ color: "yellow", percentage: 10}] },
      { text: "Innovación y originalidad", colors: [{ color: "red", percentage: 10}] },
    ],
  },
  {
    question: "2/10: Antes de decidir si ver o no una película, ¿en qué te fijás?",
    
    answers: [
      { text: "El cast (los actores)", colors: [{ color: "red", percentage: 5}, { color: "blue", percentage: 5}] },
      { text: "De qué se trata", colors: [{ color: "yellow", percentage: 5}, { color: "red", percentage: 5}] },
      { text: "Cuál es su director", colors: [{ color: "yellow", percentage: 5}, { color: "red", percentage: 5}] },
      { text: "Las valoraciones que tiene", colors: [{ color: "blue", percentage: 5}, { color: "red", percentage: 5}] },
      { text: "Su popularidad", colors: [{ color: "blue", percentage: 10}] },
      { text: "No lo suelo pensar mucho", colors: [{ color: "blue", percentage: 10}] },
    ],
  },

  {
    question: "3/10: ¿Cuál es tu género favorito de película?",
    answers: [
      { text: "Drama", colors: [{ color: "red", percentage: 5}, { color: "yellow", percentage: 5}] },
      { text: "Comedia", colors: [{ color: "blue", percentage: 10}] },
      { text: "Ciencia Ficción", colors: [{ color: "blue", percentage: 5}, { color: "red", percentage: 5}] },
      { text: "Acción", colors: [{ color: "blue", percentage: 5}, { color: "red", percentage: 5}] },
      { text: "Aventura", colors: [{ color: "blue", percentage: 10}] },
      { text: "Terror", colors: [{ color: "red", percentage: 10}] },
      { text: "Fantasía", colors: [{ color: "blue", percentage: 5}, { color: "yellow", percentage: 5} ] },
      { text: "Animación", colors: [{ color: "blue", percentage: 5}, { color: "red", percentage: 5} ] },
      { text: "Romance", colors: [{ color: "red", percentage: 10} ] },
      { text: "Suspenso", colors: [{ color: "red", percentage: 10} ] },
      { text: "Histórico", colors: [{ color: "yellow", percentage: 10} ] },
      { text: "Crimen", colors: [{ color: "yellow", percentage: 10} ] },

    ],
  },
  
  {
    question: "4/10: ¿Cuál de estas películas te gustó más?",
    note: "Si viste sólo una de las opciones, asumí que te gustó esa más que las otras",
    answers: [
      { text: "Fantastic Mr. Fox", colors: [{ color: "red", percentage: 10}] },
      { text: "La era del Hielo 3: El origen de los dinosaurios", colors: [{ color: "blue", percentage: 10}] },
      { text: "El curioso caso de Benjamin Button", colors: [{ color: "blue", percentage: 10}] },
      { text: "No vi ninguna", colors: [{ color: "red", percentage: 10}] },
    ],
  },

  {
    question: "5/10: ¿Cuál de estas películas te gustó más?",
    note: "Si viste sólo una de las opciones, asumí que te gustó esa más que las otras",
    answers: [
      { text: "Las ventajas de ser invisible", colors: [{ color: "red", percentage: 10}] },
      { text: "Medianoche en París", colors: [{ color: "yellow", percentage: 10}] },
      { text: "Los Juegos del Hambre", colors: [{ color: "blue", percentage: 10}] },
      { text: "No vi ninguna", colors: [{ color: "red", percentage: 10}] },
    ],
  },
  {
    question: "6/10: ¿En qué plataforma solés ver tus películas?",
    answers: [
      { text: "Netflix", colors: [{ color: "blue", percentage: 10}] },
      { text: "Amazon Prime", colors: [{ color: "yellow", percentage: 5}, { color: "red", percentage: 5 }] },
      { text: "(HBO) MAX", colors:  [{ color: "blue", percentage: 5}, { color: "red", percentage: 5}] },
      { text: "Stremio (jiji)", colors: [{ color: "red", percentage: 10}] },
      { text: "Otra", colors: [{ color: "yellow", percentage: 10}] },
    ],
  },
  {
    question: "7/10: ¿Fuiste a ver películas a cines alternativos por motus propio alguna vez?",
    answers: [
      { text: "Quentin Tarantino", colors: [{ color: "red", percentage: 5}, { color: "red", percentage: 5}] },
      { text: "Adam Sandler", colors: [{ color: "blue", percentage: 10} ] },
      { text: "Greta Gerwig", colors:  [{ color: "red", percentage: 5}, { color: "blue", percentage: 5} ]},
      { text: "Hayao Miyazaki", colors: [{ color: "red", percentage: 10}] },
      { text: "John Ford", colors: [{ color: "yellow", percentage: 10}] },
      { text: "Steven Spielberg", colors: [{ color: "yellow", percentage: 10}] },
      { text: "Frank Capra", colors: [{ color: "yellow", percentage: 10}] },
      { text: "Anthony Russo", colors: [{ color: "yellow", percentage: 10}] },
      { text: "Eeehhh?? Ni idea...", colors: [{ color: "yellow", percentage: 10}] },
      
    ],
  },
  {
    question: "8/10: ¿Fuiste a ver películas a cines alternativos por motus propio alguna vez?",
    answers: [
      { text: "Sí, varias veces", colors: [{ color: "yellow", percentage: 5}, { color: "red", percentage: 5}] },
      { text: "Sí, menos de tres veces", colors: [{ color: "red", percentage: 10} ] },
      { text: "No, pero me gustaría ir", colors:  [{ color: "red", percentage: 5}, { color: "blue", percentage: 5} ]},
      { text: "No y no me interesa", colors: [{ color: "blue", percentage: 10}] },
      { text: "¿Cine qué?", colors: [{ color: "yellow", percentage: 10}] },
    ],
  },

  {
    question: "9/10: ¿Cuál es tu actriz/actor favoritx de esta lista?",
    answers: [
      { text: "Timothee Chalamet", colors: [{ color: "yellow", percentage: 10}] },
      { text: "Leonardo Di Caprio", colors: [{ color: "red", percentage: 5}, { color: "yellow", percentage: 5} ] },
      { text: "Adam Sandler", colors:  [{ color: "blue", percentage: 10}]},
      { text: "Robert Downey Jr.", colors: [{ color: "blue", percentage: 10}]},
      { text: "Florence Pugh", colors: [{ color: "red", percentage: 10}] },
      { text: "Al Pacino", colors: [{ color: "yellow", percentage: 10}] },
      { text: "Jennifer Aniston", colors: [{ color: "blue", percentage: 10}] },
      { text: "Natalie Portman", colors: [{ color: "red", percentage: 10}] },
      { text: "Emma Stone", colors: [{ color: "red", percentage: 5}, { color: "yellow", percentage: 5}] },
      { text: "Sandra Hüller", colors: [{ color: "yellow", percentage: 10 }] },
      { text: "Clint Eastwood", colors: [{ color: "yellow", percentage: 10}] },
    ],
  },

  {
    question: "10/10: ¿Qué tan importante es el cine en tu vida?",
    answers: [
      { text: "Sumamente importante: me gustaría trabajar/trabajo en el mundo del cine", colors: [{ color: "yellow", percentage: 10}] },
      { text: "Muy, veo películas muy seguido y el cine ocupa un rol importante en mi día a día", colors: [{ color: "red", percentage: 10}] },
      { text: "Algo importante, me gusta ver películas y creo que influyen en mi personalidad de alguna manera", colors:  [{ color: "blue", percentage: 5}, { color: "red", percentage: 5}]},
      { text: "No muy importante, veo películas de vez en cuando para entrenerme", colors: [{ color: "blue", percentage: 10}] }, 
    ],
  },
];

const colorCodes = {
  red: { hex: "CE4C4C", rgb: [206, 76, 76], description: "Cinéfilx" },
  blue: { hex: "76B2DB", rgb: [118, 178, 219], description: "Masas" },
  yellow: { hex: "E9BD6D", rgb: [233, 189, 109], description: "Academia" },
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [colorPercentages, setColorPercentages] = useState({
    red: 0,
    blue: 0,
    yellow: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const [applyFilter, setApplyFilter] = useState(false);

  const handleAnswer = (colors: { color: keyof typeof colorCodes; percentage: number }[]) => {
    setColorPercentages((prev) => {
      const updatedPercentages = { ...prev };
      colors.forEach(({ color, percentage }) => {
        updatedPercentages[color] += percentage;
      });
      return updatedPercentages;
    });

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setColorPercentages({ red: 0, blue: 0, yellow: 0 });
    setShowResult(false);
    setApplyFilter(false);
  };

  const calculateColor = () => {
    const totalPercent =
      colorPercentages.red + colorPercentages.blue + colorPercentages.yellow;
    const mixedColor = [0, 1, 2].map((i) =>
      Math.round(
        (colorCodes.red.rgb[i] * colorPercentages.red +
          colorCodes.blue.rgb[i] * colorPercentages.blue +
          colorCodes.yellow.rgb[i] * colorPercentages.yellow) /
          totalPercent
      )
    );
    return {
      rgb: `rgb(${mixedColor.join(", ")})`,
      hex: `#${mixedColor.map((c) => c.toString(16).padStart(2, "0")).join("")}`,
    };
  };

  const finalColor = calculateColor();

  return (
    <div className="relative flex flex-col min-h-screen bg-[#FAF3E0] text-black">
      {/* Header con botones */}
      <div className="flex justify-between items-center bg-white shadow-md fixed w-full top-0 z-10 p-4">
        <Link href="/" legacyBehavior>
          <a className="text-lg font-bold text-[#0a2c7b] hover:underline ml-5">Inicio</a>
        </Link>
        <Link href="/masas" legacyBehavior>
          <a className="text-lg font-bold text-[#0a2c7b] hover:underline">Masas</a>
        </Link>
        <Link href="/apasionados" legacyBehavior>
          <a className="text-lg font-bold text-[#0a2c7b] hover:underline">Apasionados</a>
        </Link>
        <Link href="/academia" legacyBehavior>
          <a className="text-lg font-bold text-[#0a2c7b] hover:underline">Academia</a>
        </Link>
        <Link href="/final" legacyBehavior>
          <a className="text-lg font-bold text-[#0a2c7b] hover:underline">Conclusión</a>
        </Link>
        <Link href="/test" legacyBehavior>
          <a className="text-lg font-bold text-[#0a2c7b] hover:underline mr-5">Quiz</a>
        </Link>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center flex-grow mt-24 p-4">
        <div
          className="shadow-lg rounded-lg w-full"
          style={{
            maxWidth: "800px",
            backgroundColor: "#F9F2DF",
          }}
        >
          {showResult ? (
            <div className="flex relative" style={{ height: "500px" }}>
              {/* Left Section */}
              <div className="flex flex-col items-center w-1/4 p-4">
                <img
                  src="/ejemploo.png"
                  alt="Resultado"
                  style={{ width: "250px", height: "230px" }}
                  className="rounded-lg shadow-md"
                />
                <button
                  onClick={() => setApplyFilter(!applyFilter)}
                  className="py-2 mt-4 rounded-lg shadow"
                  style={{
                    width: "150px", // Botón angosto
                    backgroundColor: "#E3D4AA",
                    color: "#000000",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#D5BD7C")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#E3D4AA")}
                >
                  {applyFilter ? "Quitar Filtro" : "Agregar Filtro"}
                </button>
              </div>

              {/* Divider */}
              <div
                style={{
                  width: "1px",
                  background: "repeating-linear-gradient(to bottom, #ccc, #ccc 5px, transparent 5px, transparent 10px)",
                }}
              ></div>

              {/* Right Section */}
              <div className="flex flex-col w-3/4 p-6">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#0A2C7B" }}>
                  Mi color del cine
                </h2>
                <p className="text-lg mb-4">
                  Este color representa la mezcla de todos los tipos de gusto que tengo.
                  Juntos, forman la manera que tengo de disfrutar el cine.
                </p>
                <div
                  className="w-full h-16 rounded-lg shadow-lg mb-2"
                  style={{
                    backgroundColor: finalColor.rgb,
                  }}
                ></div>
                <p className="text-lg font-semibold mb-4">Código de color: {finalColor.hex}</p>
                <div className="flex justify-around">
                  <div className="text-center">
                    <span style={{ color: `#${colorCodes.red.hex}` }} className="font-bold">
                      {colorPercentages.red}%
                    </span>
                    <p>{colorCodes.red.description}</p>
                  </div>
                  <div className="text-center">
                    <span style={{ color: `#${colorCodes.blue.hex}` }} className="font-bold">
                      {colorPercentages.blue}%
                    </span>
                    <p>{colorCodes.blue.description}</p>
                  </div>
                  <div className="text-center">
                    <span style={{ color: `#${colorCodes.yellow.hex}` }} className="font-bold">
                      {colorPercentages.yellow}%
                    </span>
                    <p>{colorCodes.yellow.description}</p>
                  </div>
                </div>
              </div>

              {/* Botón para reiniciar */}
              <button
                onClick={resetQuiz}
                className="absolute bottom-4 right-4 py-2 px-4 rounded-lg shadow"
                style={{
                  backgroundColor: "#E3D4AA",
                  color: "#000",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#D5BD7C")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#E3D4AA")}
              >
                Volver a hacer el quiz
              </button>
            </div>
          ) : (
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4" style={{ color: "#000000" }}>
                {questions[currentQuestion].question}
              </h2>
              <div className="flex flex-col gap-3">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer.colors)}
                    className="py-2 px-4 rounded-lg shadow w-full"
                    style={{
                      backgroundColor: "#E3D4AA",
                      color: "#000000",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#D5BD7C")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#E3D4AA")}
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}