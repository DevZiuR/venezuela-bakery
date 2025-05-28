
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Juan Rodriguez',
      rating: 5,
      text: 'El mejor pan venezolano en Orlando! Los cachitos me recuerdan a mi infancia en Caracas. Excelente calidad y sabor auténtico.',
      date: 'Hace 2 semanas'
    },
    {
      name: 'Martin Gonzalez', 
      rating: 5,
      text: 'Increíble la variedad de productos venezolanos. El quesillo está espectacular y la atención al cliente es excepcional.',
      date: 'Hace 1 mes'
    },
    {
      name: 'Jossy Hernandez',
      rating: 5,
      text: 'Un pedacito de Venezuela en Orlando. Los golfeados y las empanadas son exactamente como los de mi abuela. Muy recomendado!',
      date: 'Hace 3 semanas'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#731615] text-sm font-semibold tracking-wider uppercase mb-4 font-jost">
            TESTIMONIALES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C384F] mb-6 font-poppins">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-jost">
            Más de 400 familias han encontrado el sabor de casa en nuestros productos. 
            Cada reseña nos motiva a seguir compartiendo la tradición venezolana.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`bg-white shadow-lg border-0 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${
                index === currentTestimonial ? 'ring-2 ring-[#ECC971]' : ''
              }`}
            >
              <CardContent className="p-8">
                {/* Quote Mark */}
                <div className="text-6xl text-[#ECC971] font-bold leading-none mb-4">"</div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 font-jost leading-relaxed text-lg">
                  {testimonial.text}
                </p>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#ECC971] text-xl">★</span>
                  ))}
                </div>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-bold text-[#731615] text-lg font-cormorant">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm font-jost">
                    {testimonial.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation and Rating Summary */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Rating Summary */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-[#731615] font-cormorant">4.5</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < 4 ? 'text-[#ECC971] text-xl' : 'text-gray-300 text-xl'}>★</span>
                ))}
              </div>
            </div>
            <span className="text-gray-800 font-poppins">+400 Reseñas en Google</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={prevTestimonial}
              className="bg-white border border-[#731615] text-[#731615] hover:bg-[#731615] hover:text-white w-12 h-12 rounded-full p-0 transition-all duration-300"
              size="icon"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#731615]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              onClick={nextTestimonial}
              className="bg-white border border-[#731615] text-[#731615] hover:bg-[#731615] hover:text-white w-12 h-12 rounded-full p-0 transition-all duration-300"
              size="icon"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-[#ECC971] bg-[#731615] text-white hover:bg-white hover:text-black px-8 py-3 text-[#ECC971]  font-poppins transition-all duration-300 font-semibold"
          >
            Ver más reseñas en Google
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
