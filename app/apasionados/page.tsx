"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";

const images = [
  { normal: "C2004.png", hover: "CH2004.png" },
  { normal: "C2005.PNG", hover: "CH2005.png" },
  { normal: "C2006.PNG", hover: "CH2006.png" },
  { normal: "C2007.PNG", hover: "CH2007.png" },
  { normal: "C2008.PNG", hover: "CH2008.png" },
  { normal: "C2009.PNG", hover: "CH2009.png" },
  { normal: "C2010.PNG", hover: "CH2010.png" },
  { normal: "C2011.PNG", hover: "CH2011.png" },
  { normal: "C2012.PNG", hover: "CH2012.png" },
  { normal: "C2013.PNG", hover: "CH2013.png" },
  { normal: "C2014.PNG", hover: "CH2014.png" },
  { normal: "C2015.PNG", hover: "CH2015.png" },
  { normal: "C2016.PNG", hover: "CH2016.png" },
  { normal: "C2017.PNG", hover: "CH2017.png" },
  { normal: "C2018.PNG", hover: "CH2018.png" },
  { normal: "C2019.PNG", hover: "CH2019.png" },
  { normal: "C2020.PNG", hover: "CH2020.png" },
  { normal: "C2021.PNG", hover: "CH2021.png" },
  { normal: "C2022.PNG", hover: "CH2022.png" },
  { normal: "C2023.PNG", hover: "CH2023.png" },
];

const MovieQuestionComponent = () => {
  const [isHoveredIndex, setIsHoveredIndex] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const scrollLeft = () => {
    const carousel = document.getElementById("image-carousel");
    carousel.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    const carousel = document.getElementById("image-carousel");
    carousel.scrollBy({ left: 200, behavior: "smooth" });
  };

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
      <div className="mt-20 p-10">
        <div className="w-full max-w-6xl mx-auto relative">
          {/* Contenedor principal de texto e imágenes */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 relative">
            {/* Texto a la izquierda */}
            <div className="w-full md:w-3/5 pr-0 md:pr-6">
              <h1 className="text-5xl font-bold mb-4 text-[#CE4D4D]">Los apasionados.</h1>
              <p className="text-lg mb-4">
                Los cinéfilos son, por definición, personas apasionadas por el cine. 
                Para conseguir una base de datos que representar a las personas con estas 
                características, acudimos a Letterboxd: una plataforma para los amantes del cine donde pueden calificar, 
                reseñar y organizar películas en listas. En el siguiente gráfico, se muestran las películas más vistas en 
                letterboxd y cuánto recaudaron.
              </p>
            </div>
          </div>

          {/* Contenedor del gráfico de Flourish */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-full md:w-3/4 h-[500px]" style={{ mixBlendMode: "multiply" }}>
              <div
                className="flourish-embed flourish-chart"
                data-src="visualisation/19444595"
              >
                <noscript>
                  <img
                    src="https://public.flourish.studio/visualisation/19444595/thumbnail"
                    width="100%"
                    alt="chart visualization"
                  />
                </noscript>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-32">
          <div className="flex items-center">
            {/* Botón izquierdo */}
            <button
              className="absolute left-0 z-10 bg-[#CE4D4D] text-white p-3 rounded-full shadow-lg hover:bg-[#5092b3]"
              onClick={scrollLeft}
            >
              ◀
            </button>
            {/* Contenedor de imágenes */}
            <div
              id="image-carousel"
              className="flex overflow-x-scroll gap-4 scrollbar-hide px-8 h-60"
              style={{ scrollBehavior: "smooth" }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[200px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  onMouseEnter={() => setIsHoveredIndex(index)}
                  onMouseLeave={() => setIsHoveredIndex(null)}
                >
                  <img
                    src={`/${
                      isHoveredIndex === index ? image.hover : image.normal
                    }`}
                    alt={`Imagen ${index + 1}`}
                    className="w-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            {/* Botón derecho */}
            <button
              className="absolute right-0 z-10 bg-[#CE4D4D] text-white p-3 rounded-full shadow-lg hover:bg-[#5092b3]"
              onClick={scrollRight}
            >
              ▶
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-24 gap-6 justify-center">
          {/* Gráfico */}
          <div className="w-[500px]">
            <div
              className="flourish-embed flourish-chart mix-blend-multiply"
              data-src="visualisation/20499866"
            >
              <noscript>
                <img
                  src="https://public.flourish.studio/visualisation/20499866/thumbnail"
                  width="100%"
                  alt="Gráfico de Flourish"
                />
              </noscript>
            </div>
          </div>

          {/* Texto descriptivo */}
          <div className="w-full md:w-1/4 text-lg justify-center">
            <p>
              En este caso, el género predominante es el de Drama, y 
              además aparecen géneros que no habíamos visto antes, 
              como lo son Romance, Horror y Suspenso.
            </p>
          </div>
          <div className="md:w-1/5 flex justify-left items-start">
            <img
              src="/drama.png"
              alt="Oscars"
              style={{ height: "200px", width: "auto" }}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex justify-center items-center bg-[#FAF3E0] text-black py-8">
          <div className="flex justify-start items-center gap-5">
            <img
              src="/venelcinecomoarte.png"
              alt="cinefilos hablando"
              style={{ height: "300px", width: "auto", marginLeft: "-10px", marginRight: "30px" }}
              className="w-auto h-auto"
            />
          </div>
          <div className="w-full md:w-1/4 text-lg">
            <p>
              Viendo esto, se podría decir que los cinéfilos ven películas para sentir, o,
              en su defecto, ver representados sentimientos más complejos.
            </p>
            <p className="mt-4">
              Esto va de la mano con que ven al cine como una forma de arte y, por ende, quieren apreciarlo como tal.
            </p>
          </div>
        </div>

        {/* Script de Flourish */}
        <Script src="https://public.flourish.studio/resources/embed.js" strategy="lazyOnload" />

        {/* Botón de continuar */}
        <Link href="/academia" className="block mt-8">
          <button className="w-full h-16 bg-[#EB8F8F] hover:bg-[#D96969] transition-colors duration-300 text-[#CE4D4D] font-bold text-3xl rounded-lg">
            Continuar.
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieQuestionComponent;