import React from 'react';
import { ArrowRight } from 'lucide-react';

const Propertytypes = () => {
  const propertyTypes = [
    {
      id: 1,
      title: 'Farm Land For Sale',
      description: '15,000+ Premium Farms For Sale',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
    },
    {
      id: 2,
      title: 'Residential Land For Sale',
      description: '8,000+ Residential Homes For Sale',
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80'
    },
    {
      id: 3,
      title: 'Hunting Land For Sale',
      description: '12,000 Premium Pieces For Sale',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
    },
    {
      id: 4,
      title: 'Waterfront For Sale',
      description: '4,000 Waterfront Houses For Sale',
      image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 5,
      title: 'Recreational Land For Sale',
      description: '2,000 Recreational Land For Sale',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1575&q=80'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <h2 className="text-2xl font-bold mb-2">Popular Property Types</h2>
      <p className="text-gray-600 mb-8">
        We feature selling landholdings direct to you, connecting worldwide investors, tailored marketing, and creating unique high-end land listings.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {propertyTypes.map((property, index) => (
          <div 
            key={property.id} 
            className={`relative rounded-lg overflow-hidden ${index >= 3 ? 'hidden lg:block' : ''}`}
          >
            <div 
              className="h-64 bg-cover bg-center" 
              style={{ backgroundImage: `url('${property.image}')` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-bold text-lg">{property.title}</h3>
                <p className="text-sm">{property.description}</p>
              </div>
              <div className="absolute top-4 right-4">
                <button className="bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors">
                  <ArrowRight size={16} className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Propertytypes;