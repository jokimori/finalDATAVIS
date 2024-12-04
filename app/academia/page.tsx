"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";

const images = [
  { normal: "A2004.png", hover: "AH2004.png" },
  { normal: "A2005.pnG", hover: "AH2005.png" },
  { normal: "A2006.pnG", hover: "AH2006.png" },
  { normal: "A2007.pnG", hover: "AH2007.png" },
  { normal: "A2008.pnG", hover: "AH2008.png" },
  { normal: "A2009.pnG", hover: "AH2009.png" },
  { normal: "A2010.pnG", hover: "AH2010.png" },
  { normal: "A2011.pnG", hover: "AH2011.png" },
  { normal: "A2012.pnG", hover: "AH2012.png" },
  { normal: "A2013.pnG", hover: "AH2013.png" },
  { normal: "A2014.pnG", hover: "AH2014.png" },
  { normal: "A2015.pnG", hover: "AH2015.png" },
  { normal: "A2016.pnG", hover: "AH2016.png" },
  { normal: "A2017.pnG", hover: "AH2017.png" },
  { normal: "A2018.pnG", hover: "AH2018.png" },
  { normal: "A2019.pnG", hover: "AH2019.png" },
  { normal: "A2020.pnG", hover: "AH2020.png" },
  { normal: "A2021.pnG", hover: "AH2021.png" },
  { normal: "A2022.pnG", hover: "AH2022.png" },
  { normal: "A2023.pnG", hover: "AH2023.png" },
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

      <div className="relative flex flex-col min-h-screen bg-[#FAF3E0] text-black p-10 pt-20">
        <div className="w-full mx-auto relative">
          {/* Contenedor principal de texto e imágenes */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 relative">
            <div className="w-full md:w-3/5 pr-0 md:pr-6">
              <h1 className="text-5xl font-bold mb-4 text-[#EBAE34]">La Academia.</h1>
              <p className="text-lg mb-4">
              La Academia de Artes y Ciencias Cinematográficas es un grupo de más de 10,000 personas que
              trabajan en el cine (actores, directores, técnicos, etc.). Ellos se encargan de organizar
              los Premios Oscars, entre otras cosas. Para ser miembro de la Academia, debes ser invitado
              por tus logros en el cine. Está conformada por las personas que "más saben de cine" o que
              tuvieron un impacto importante en la industria. Ellos son los que votan y deciden quienes
              ganan cada premio.

              </p>
              <p className="text-lg mb-4">
              El premio Óscar, es una distinción anual concedida por los participantes de La Academia en
              reconocimiento a la excelencia y activismo social de los profesionales de la industria
              cinematográfica que incluye actores, directores y escritores, ampliamente considerada el
              máximo honor en el cine. El siguiente gráfico representa cuánto recaudó cada película
              ganadora al Óscar "Película del año" a partir del año 2004 hasta el 2023.

              </p>
            </div>

            <div className="md:w-2/5 flex justify-center items-start">
              <img
                src="/oscarsmiski.png"
                alt="Oscars"
                style={{ height: "450px", width: "auto" }}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex justify-center items-center mt-8">
            <div
              className="w-full md:w-3/4 h-[500px]"
              style={{ mixBlendMode: "multiply" }}
            >
              <div
                className="flourish-embed flourish-chart"
                data-src="visualisation/19281600"
              >
                <noscript>
                  <img
                    src="https://public.flourish.studio/visualisation/19281600/thumbnail"
                    width="100%"
                    alt="chart visualization"
                  />
                </noscript>
              </div>
            </div>
          </div>

          <div className="relative mt-48">
            <div className="flex items-center">
              <button
                className="absolute left-0 z-10 bg-[#EBAE34] text-white p-3 rounded-full shadow-lg hover:bg-[#5092b3]"
                onClick={scrollLeft}
              >
                ◀
              </button>
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
              <button
                className="absolute right-0 z-10 bg-[#EBAE34] text-white p-3 rounded-full shadow-lg hover:bg-[#5092b3]"
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
              data-src="visualisation/20499954"
            >
              <noscript>
                <img
                  src="https://public.flourish.studio/visualisation/20499954/thumbnail"
                  width="100%"
                  alt="Gráfico de Flourish"
                />
              </noscript>
            </div>
          </div>

          {/* Texto descriptivo */}
          <div className="w-full md:w-1/4 text-lg justify-center">
            <p>
            Al igual que con los cinéfilos, el género predominante es el de Drama, 
            y aparecen géneros que no habíamos visto antes, como lo son Crimen, 
            Drama Histórico, Bélico y Comedia Dramática.
            </p>
          </div>
        </div>


          <div className="flex flex-col md:flex-row items-center mt-24 gap-6">
            <div className="flex-shrink-0" style={{ marginLeft: "460px", marginRight: "100px" }}>
              <img
                src="/academico.png"
                alt="Seriedad"
                style={{ height: "300px", width: "auto" }}
                className="object-contain"
              />
            </div>

            <div className="w-full md:w-1/4 text-lg">
              <p>
              Al igual que los cinéfilos, La Academia también ve al cine como una forma
              de arte y quiere darle reconocimiento como tal.

              </p>
              <p className="mt-4">
              Teniendo en cuenta las ganadoras a Película del año y los géneros a los que pertenecen las películas,
             se puede decir que La Academia valora que se traten temas serios y complejos, similar a los cinéfilos,
              pero agregándole incluso un grado mayor de seriedad.

              </p>
            </div>
          </div>

          <Script src="https://public.flourish.studio/resources/embed.js" strategy="lazyOnload" />

          <Link href="/final" className="block mt-8">
            <button className="w-full h-16 bg-[#FFDC99] hover:bg-[#FFCD6B] transition-colors duration-300 text-[#EBAD34] font-bold text-3xl rounded-lg">
              Continuar.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieQuestionComponent;