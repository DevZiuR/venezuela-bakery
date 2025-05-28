
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <div 
      className="relative h-screen bg-cover bg-center bg-no-repeat pt-12"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://i.ibb.co/8Ly3P9NC/unnamed.webp')`
      }}
    >
      <div className="container mx-auto px-4 h-full flex flex-col">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center pt-6">
          {/* Logo */}
          <div>
            <img 
              src="https://i.imgur.com/jFRa8Jw.jpeg" 
              alt="Venezuela Bakery Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          
          {/* Phone Button */}
          <Button 
            className="bg-[#ECC971] text-[#731615] hover:bg-[#731615] hover:text-[#ECC971] transition-all duration-300 px-6 py-3 text-lg rounded-lg font-semibold flex items-center gap-2"
            onClick={() => window.open('tel:(407) 555-0123')}
          >
            <Phone className="w-5 h-5" />
            (407) 555-0123
          </Button>
        </div>
        
        {/* Hero Content - Centered */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#ECC971] mb-6 uppercase font-cormorant" 
              style={{ 
                textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                wordSpacing: '0.3em',
                letterSpacing: '0.05em'
              }}>
            {`Sabores que unen 🇻🇪🇺🇸`}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl font-poppins font-light">
            Un pedacito de Venezuela en Orlando
          </p>
          
          <Button 
            className="bg-[#731615] text-[#ECC971] hover:bg-[#770A0F] transition-all duration-300 px-12 py-4 text-xl rounded-lg font-semibold font-jost border-2 border-[#ECC971] hover:border-[#731615]"
          >
            Ver Nuestro Menú
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
