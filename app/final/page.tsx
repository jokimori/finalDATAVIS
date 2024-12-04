import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

const MovieQuestionComponent = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#FAF3E0] text-black">
      {/* Header con botones */}
      <div className="flex justify-between items-center bg-white shadow-md fixed w-full top-0 z-10 p-4">
        <Link href="/" legacyBehavior>
          <a className="text-lg font-bold text-[#0a2c7b] hover:underline ml-5">
            Inicio
          </a>
        </Link>
        <Link href="/masas" legacyBehavior>
          <a className="text-lg font-bold text-[#0a2c7b] hover:underline">Masas</a>
        </Link>
        <Link href="/apasionados" legacyBehavior>
          <a className="text-lg font-bold text-[#0a2c7b] hover:underline">
            Apasionados
          </a>
        </Link>
        <Link href="/academia" legacyBehavior>
          <a className="text-lg font-bold text-[#0a2c7b] hover:underline">
            Academia
          </a>
        </Link>
        <Link href="/final" legacyBehavior>
          <a className="text-lg font-bold text-[#0a2c7b] hover:underline">
            Conclusión
          </a>
        </Link>
        <Link href="/test" legacyBehavior>
          <a className="text-lg font-bold text-[#0a2c7b] hover:underline mr-5">
            Quiz
          </a>
        </Link>
      </div>

      {/* Contenido principal */}
      <div className="relative flex flex-col min-h-screen bg-[#FAF3E0] text-black p-10 pt-20">
        <div className="w-full max-w-7xl mx-auto relative">
          {/* Contenedor principal de texto */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 relative">
            {/* Texto a la izquierda */}
            <div className="w-full md:w-3/5 pr-0 md:pr-6">
              <h1 className="text-5xl font-bold mb-4 text-[#0a2c7b]">Conclusión.</h1>
              <p className="text-lg mb-4">
                Si bien los tres tipos de consumo son muy distintos entre sí, 
                sus puntuaciones en IMDB son bastante similares, como puede apreciarse en el siguiente gráfico. 
                Por lo que podría decirse que, en sus respectivos ámbitos, estas películas suelen gustar por igual.
              </p>
            </div>
          </div>

          {/* Imagen centrada */}
          <div className="flex justify-center items-center my-8">
            <img
              src="/puntajes.png" // Cambia por el path correcto de tu imagen
              alt="puntajes"
              style={{ height: "500px", width: "auto" }}
            />
          </div>

          <div className="w-full md:w-3/5 pr-0 md:pr-6">
            <p className="text-lg mb-4">
              Por eso, podemos decir que no hay gustos mejores ni peores, sino simplemente distintos. Ahora toca que descubras, ¿qué tipo de gusto tenés vos? Si hicieses una película, ¿a quién apuntaría?
            </p>
          </div>
        </div>

        {/* Script de Flourish */}
        <Script src="https://public.flourish.studio/resources/embed.js" strategy="lazyOnload" />

        {/* Botón de quiz */}
        <Link href="/test" className="block mt-8">
          <button className="w-full h-16 bg-[#8099D2] hover:bg-[#5671AD] transition-colors duration-300 text-[#0a2c7b] font-bold text-3xl rounded-lg">
            Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieQuestionComponent