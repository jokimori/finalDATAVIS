"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";

const images = [
  { normal: "T2004.png", hover: "th2004.png" },
  { normal: "T2005.PNG", hover: "th2005.png" },
  { normal: "T2006.PNG", hover: "th2006.png" },
  { normal: "T2007.PNG", hover: "th2007.png" },
  { normal: "T2008.PNG", hover: "th2008.png" },
  { normal: "T2009.PNG", hover: "th2009.png" },
  { normal: "T2010.PNG", hover: "th2010.png" },
  { normal: "T2011.PNG", hover: "th2011.png" },
  { normal: "T2012.PNG", hover: "th2012.png" },
  { normal: "T2013.PNG", hover: "th2013.png" },
  { normal: "T2014.PNG", hover: "th2014.png" },
  { normal: "T2015.PNG", hover: "th2015.png" },
  { normal: "T2016.PNG", hover: "th2016.png" },
  { normal: "T2017.PNG", hover: "th2017.png" },
  { normal: "T2018.PNG", hover: "th2018.png" },
  { normal: "T2019.PNG", hover: "th2019.png" },
  { normal: "T2020.PNG", hover: "th2020.png" },
  { normal: "T2021.PNG", hover: "th2021.png" },
  { normal: "T2022.PNG", hover: "th2022.png" },
  { normal: "T2023.PNG", hover: "th2023.png" },
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

      
    <div className="relative flex flex-col min-h-screen bg-[#FAF3E0] text-black p-10">
      <div className="w-full mx-auto relative">
        {/* Contenedor principal de texto */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          {/* Texto a la izquierda */}
          <div className="w-full md:w-3/5 pr-0 md:pr-6">
            <h1 className="text-5xl font-bold mb-4 mt-16 text-[#62AAD0]">Las masas.</h1>
            <p className="text-lg mb-4 relative">
              ¿De qué hablamos cuando hablamos de masas?
              Una de las definiciones de "masa" según la Real Academia Española es la siguiente:
              "Muchedumbre o conjunto numeroso de personas". Cuando hablamos de las masas en el cine,
              nos referimos a un grupo grande de gente que consume la misma película. Es por esto,
              que para hablar de masas tenemos que ver cuál fue la película más{" "}
              <span
                className="underline text-[#7BACD2] relative cursor-pointer"
                onMouseEnter={() => setIsPopupVisible(true)}
                onMouseLeave={() => setIsPopupVisible(false)}
              >
                taquillera
                {isPopupVisible && (
                  <div
                    className="absolute bottom-full left-0 bg-[#F9F2DF] text-black p-4 shadow-lg rounded w-96 z-10"
                    style={{
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      transform: "translateY(-10px)",
                    }}
                  >
                    <p className="text-sm">
                      Una película taquillera es aquella que atrae a muchas
                      personas a los cines y genera un enorme número de ventas
                      de entradas. Para definir qué películas representan "los
                      gustos de las masas", nos fijamos cuáles fueron las
                      películas más taquilleras de cada año en los últimos 20
                      años y cuánto recaudó cada una. Si pasas el mouse por
                      arriba, podés ver qué película es y a qué género
                      pertenece.
                    </p>
                  </div>
                )}
              </span>{" "}
              de cada año en los últimos diez años.
            </p>
          </div>
        </div>

        {/* Contenedor del gráfico de Flourish */}
        <div className="flex justify-center items-center mt-8">
          <div
            className="w-full md:w-3/4 h-[500px]"
            style={{ mixBlendMode: "multiply" }}
          >
            <div
              className="flourish-embed flourish-chart"
              data-src="visualisation/19281503"
            >
              <noscript>
                <img
                  src="https://public.flourish.studio/visualisation/19281503/thumbnail"
                  width="100%"
                  alt="chart visualization"
                />
              </noscript>
            </div>
          </div>
        </div>

        {/* Carrusel de imágenes */}
        <div className="relative mt-48">
          <div className="flex items-center">
            {/* Botón izquierdo */}
            <button
              className="absolute left-0 z-10 bg-[#62AAD0] text-white p-3 rounded-full shadow-lg hover:bg-[#5092b3]"
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
              className="absolute right-0 z-10 bg-[#62AAD0] text-white p-3 rounded-full shadow-lg hover:bg-[#5092b3]"
              onClick={scrollRight}
            >
              ▶
            </button>
          </div>
        </div>

{/* Gráfico y texto */}
<div className="flex flex-col md:flex-row items-center mt-24 gap-6 justify-center">
          {/* Gráfico */}
          <div className="w-[500px]">
            <div
              className="flourish-embed flourish-chart mix-blend-multiply"
              data-src="visualisation/20500119"
            >
              <noscript>
                <img
                  src="https://public.flourish.studio/visualisation/20500119/thumbnail"
                  width="100%"
                  alt="Gráfico de Flourish"
                />
              </noscript>
            </div>
          </div>

          {/* Texto descriptivo */}
          <div className="w-full md:w-1/4 text-lg">
            <p>
              Estas películas en su mayoría son secuelas o cuentan con personajes
              ya conocidos por nosotros, como lo son Barbie, Batman y Spiderman.
            </p>
          </div>
          <div className="md:w-1/5 flex justify-left items-start">
            <img
              src="/ilovspiderman.png"
              alt="Oscars"
              style={{ height: "200px", width: "auto" }}
              className="object-contain"
            />
          </div>
        </div>

       

  {/* Gráfico de Flourish */}
  <div className="flex flex-col md:flex-row items-center mt-8 gap-6 justify-center">
          <div className="w-[500px]">
            <div
              className="flourish-embed flourish-chart mix-blend-multiply"
              data-src="visualisation/20499927"
            >
              <noscript>
                <img
                  src="https://public.flourish.studio/visualisation/20499927/thumbnail"
                  width="100%"
                  alt="chart visualization"
                />
              </noscript>
            </div>
          </div>
          <div className="w-full md:w-1/4 text-lg">
          <p>
           También, predominan géneros que se caracterizan por ser entretenidos y no tratar temas tan serios.
           </p>
          </div>
          <div className="md:w-1/5 flex justify-left items-start">
            <img
              src="/accion.png"
              alt="Oscars"
              style={{ height: "250px", width: "auto" }}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex justify-left items-center bg-[#FAF3E0] text-black py-8">
  {/* Imagen a la izquierda */}
  <div className="flex justify-left hidden md:flex md:w-1/4 justify-start items-center">
    <img
      src="/pochocleros!.png"
      alt="Amigos Masas"
      style={{ marginLeft: "200px", marginRight: "500px"}}
      className="w-auto h-auto"
    />
  </div>

  {/* Texto */}
  <div className="w-full md:w-1/4 text-lg ml-6 md:ml-72">
    <p>
      En base a esto, podemos llegar a dos conclusiones:
      <br />
      A la mayoría le gusta ver cosas que ya conoce.
      <br />
      A la mayoría le gusta ver películas para divertirse y pasar el rato.
    </p>
  </div>
</div>

          
        </div>
        
        

        {/* Script de Flourish */}
        <Script
          src="https://public.flourish.studio/resources/embed.js"
          strategy="lazyOnload"
        />


        {/* Botón de continuar */}
        <Link href="/apasionados" className="block mt-8">
          <button className="w-full h-16 bg-[#A8C4D9] hover:bg-[#90AFC0] transition-colors duration-300 text-[#2F5D8A] font-bold text-3xl rounded-lg">
            Continuar.
          </button>
        </Link>
      </div>
      </div>
    
  );
};

export default MovieQuestionComponent;
