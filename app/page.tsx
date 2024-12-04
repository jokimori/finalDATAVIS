import React from 'react';
import Link from 'next/link';

const IntroPage = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#FAF3E0] text-black">
      {/* Header con botones */}
      <div className="flex justify-between items-center px-10 py-4 bg-white shadow-md fixed w-full top-0 z-10">
        <Link href="/" legacyBehavior>
          <a className="text-lg font-bold text-[#0a2c7b] hover:underline">Inicio</a>
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
          <a className="text-lg font-bold text-[#0a2c7b] hover:underline">Quiz</a>
        </Link>
      </div>

      {/* Título grande alineado a la izquierda superior */}
      <div className="absolute top-20 left-8">
        <h1 className="text-8xl font-bold text-[#0a2c7b]">Para gustos,</h1>
        <h1 className="text-8xl font-bold text-[#0a2c7b]">colores</h1>
      </div>

      {/* Video grande con efecto multiply */}
      <div className="flex justify-center items-center mt-24 w-full">
        <video
          src="/animacion.mp4"
          className="w-full max-w-screen-xl h-auto object-contain mix-blend-multiply"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Texto descriptivo en el medio */}
      <div className="flex flex-col items-center text-center mt-12 px-6">
        <p className="text-lg max-w-3xl mb-6">
          En el cine, existen una infinidad de películas, cada una con sus particularidades y elementos que la hacen ser lo que es, lo que genera que existan distintos tipos de consumo del mismo.  
          Hay tres que predominan: el de las masas, el de los apasionados y el de los calificados.
        </p>
        <p className="text-lg max-w-3xl mb-12">
          A continuación, realizaremos un análisis de cada tipo de consumo: ¿qué los hace ser lo que son? ¿en qué se diferencian y en qué se parecen? Y al final, vos mismx podrás ver cuál perfil se ajusta más al tuyo.
        </p>

        <div className="flex justify-center items-center my-6 mb-16">
          <img
            src="/amigoss.png"
            alt="Personas juntas"
            className="w-[500px] h-auto"
          />
        </div>
        {/* Botón azul en el centro */}
        <Link href="/masas" legacyBehavior>
          <a className="flex items-center px-8 py-4 bg-[#0a2c7b] hover:bg-[#041A4F] text-white text-xl font-bold rounded-lg transition duration-300 mb-16">
            <span>Avanzar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default IntroPage;
