
import React from 'react';
import { Instagram, Facebook, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#770A0F] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 font-cormorant text-[#ECC971]">
            VENEZUELA BAKERY
          </h2>
          <div className="w-24 h-0.5 bg-[#ECC971] mx-auto mb-8"></div>
          
          {/* Address */}
          <div className="flex items-center justify-center mb-4 text-lg">
            <MapPin className="w-5 h-5 mr-2 text-[#ECC971]" />
            <span className="font-jost">Orlando, Davenport, Saint Cloud</span>
          </div>
          
          {/* Hours */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 mr-2 text-[#ECC971]" />
              <span className="font-cormorant text-xl">Horarios</span>
            </div>
            <div className="space-y-1 font-jost">
              <p className="text-[#ECC971]">Lunes - Sábado: 7:00 AM - 8:00 PM</p>
              <p className="text-[#ECC971]">Domingo: 8:00 AM - 3:00 PM</p>
              <p className="text-sm text-gray-300 mt-2">Happy Hour: Todos los días 2:00 PM - 6:00 PM</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://facebook.com/venezuelabakery" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#ECC971] text-[#770A0F] rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/venezuelabakery" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#ECC971] text-[#770A0F] rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-8 text-sm font-jost">
          <a href="#" className="hover:text-[#ECC971] transition-colors underline">Inicio</a>
          <a href="#" className="hover:text-[#ECC971] transition-colors underline">Nuestro Menú</a>
          <a href="#" className="hover:text-[#ECC971] transition-colors underline">Reservación</a>
          <a href="#" className="hover:text-[#ECC971] transition-colors underline">Ubicaciones</a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-300 font-jost">
            Venezuela Bakery © 2025 | Hecho con amor ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
