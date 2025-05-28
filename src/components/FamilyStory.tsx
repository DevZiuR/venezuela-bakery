
import React from 'react';

const FamilyStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#731615]">
              Somos Familia, Somos Venezuela
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Somos un pequeño rincón de Venezuela en el corazón de Orlando, donde cada producto está hecho con amor y dedicación. Nuestra familia ha mantenido vivas las tradiciones culinarias venezolanas, ofreciendo sabores auténticos que conectan a nuestra comunidad con el hogar.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Desde nuestros famosos cachitos hasta el tradicional pan de jamón navideño, cada receta lleva el sello de nuestra herencia familiar y el cariño de tres generaciones de panaderos venezolanos.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Ven y comparte con nosotros la calidez de Venezuela en cada bocado. Aquí no solo encontrarás comida, encontrarás familia.
            </p>
          </div>
          
          {/* Family Image */}
          <div className="flex justify-center">
            <img
              src="https://i.postimg.cc/y6D6WJp4/482028829-17916122007063794-2486592194407951098-n.jpg"
              alt="Familia Venezuela Bakery"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyStory;
