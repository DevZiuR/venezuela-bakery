
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone } from 'lucide-react';

const LocationCards = () => {
  const locations = [
    {
      name: 'Orlando',
      address: '1234 Colonial Dr, Orlando, FL 32804',
      phone: '(407) 555-0123',
      mapUrl: 'https://maps.google.com/maps?q=Orlando+Venezuela+Bakery'
    },
    {
      name: 'Davenport',
      address: '5678 US Highway 27, Davenport, FL 33837',
      phone: '(863) 555-0456',
      mapUrl: 'https://maps.google.com/maps?q=Davenport+Venezuela+Bakery'
    },
    {
      name: 'Saint Cloud',
      address: '9012 13th St, Saint Cloud, FL 34769',
      phone: '(407) 555-0789',
      mapUrl: 'https://maps.google.com/maps?q=Saint+Cloud+Venezuela+Bakery'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#731615] mb-12">
          Nuestras Ubicaciones
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="bg-[#2C384F] text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <MapPin className="w-8 h-8 text-[#ECC971] mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-[#ECC971] mb-2">
                    {location.name}
                  </h3>
                </div>
                
                <p className="text-white mb-4 leading-relaxed">
                  {location.address}
                </p>
                
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Phone className="w-4 h-4 text-[#ECC971]" />
                  <a 
                    href={`tel:${location.phone}`}
                    className="text-[#ECC971] hover:text-white transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>
                
                <Button 
                  asChild
                  className="bg-[#ECC971] text-[#2C384F] hover:bg-white hover:text-[#2C384F] transition-all duration-300 w-full"
                >
                  <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                    Ver en Mapa
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationCards;
