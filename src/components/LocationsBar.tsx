
import React from 'react';
import { Phone, Clock } from 'lucide-react';

const LocationsBar = () => {
  const locations = [
    { name: 'Orlando', phone: '(407) 555-0123' },
    { name: 'Davenport', phone: '(863) 555-0456' },
    { name: 'Saint Cloud', phone: '(407) 555-0789' }
  ];

  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-[#731615] text-[#ECC971] py-1.5 px-2 sm:py-2 sm:px-4 sm:fixed">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center sm:justify-between text-xs sm:text-sm gap-1 sm:gap-2">
        {/* Locations: always horizontal, compact gap */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-1 w-full sm:w-auto">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center space-x-1 whitespace-nowrap">
              <Phone className="w-3 h-3" />
              <span className="font-medium">{location.name}:</span>
              <a 
                href={`tel:${location.phone}`} 
                className="hover:text-white transition-colors"
              >
                {location.phone}
              </a>
            </div>
          ))}
        </div>
        {/* Hours: below on mobile, right on desktop */}
        <div className="flex items-center space-x-1 w-full sm:w-auto justify-center sm:justify-end mt-1 sm:mt-0">
          <Clock className="w-3 h-3" />
          <span>Lun-Sab: 7am-8pm | Dom: 8am-3pm</span>
        </div>
      </div>
    </div>
  );
};

export default LocationsBar;
