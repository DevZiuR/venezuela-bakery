
import React from 'react';

const FoodGallery = () => {
  const images = [
    {
      src: 'https://i.ibb.co/tMpHp0mH/unnamed-1.webp',
      alt: 'Deliciosos productos venezolanos'
    },
    {
      src: 'https://i.postimg.cc/2ySzxyrv/2023-10-02.webp',
      alt: 'Pan artesanal venezolano'
    },
    {
      src: 'https://i.postimg.cc/bNdyDZ6f/unnamed.webp',
      alt: 'Postres tradicionales'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#731615] mb-12 font-poppins">
          Nuestras Delicias
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg h-80"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#731615] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#731615] to-transparent">
                  <h3 className="text-[#ECC971] text-xl font-bold font-cormorant">
                    {image.alt}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodGallery;
