import { mobileApp } from "@/assets/images";

export const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-8 bg-black text-white min-h-screen">
      <div className="md:w-1/2 mb-8 md:mb-20 flex flex-col justify-center max-w-xl">
        <h1 className="text-4xl font-bold mb-12 text-center md:text-left">Sobre Nosotros</h1>
        <ul className="list-disc space-y-5 pl-8 md:pl-20">
          <li>Ofrecemos una amplia selección de películas</li>
          <li>Contamos con las últimas novedades</li>
          <li>Brindamos una experiencia diferente al usuario</li>
          <li>Tenemos una de las comunidades mas grandes de Argentina</li>
          <li>Podes usar nuestra version mobile para ver tus peliculas favoritas</li>
        </ul>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img 
          src={mobileApp} 
          alt="Imagen sobre nosotros" 
          className="max-w-md w-full h-auto -mt-8 md:-mt-16"
        />
      </div>
    </div>
  )
};
