import  { useState } from 'react';
import { MapPin, Bed, Bath, Maximize, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShowcaseProperties = ({ activeTab, setActiveTab }) => {
  const properties = [
    {
      id: 1,
      price: "$599,000",
      acres: "100 Acres",
      location: "Knoxville, TN",
      county: "Knox County",
      state: "Tennessee",
      beds: 3,
      baths: 2,
      sqft: 2500,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      type: "farm",
      featured: true
    },
    {
      id: 2,
      price: "$649,000",
      acres: "102 Acres",
      location: "Knoxville, TN",
      county: "Knox County",
      state: "Tennessee",
      beds: 4,
      baths: 3,
      sqft: 3000,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      type: "waterfront",
      new: true
    },
    {
      id: 3,
      price: "$529,000",
      acres: "1,094 Acres",
      location: "Knoxville, TN",
      county: "Knox County",
      state: "Tennessee",
      beds: 4,
      baths: 3,
      sqft: 2700,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      type: "residential",
      featured: true,
      new: true
    },
    {
      id: 4,
      price: "$53,000",
      acres: "33 Acres",
      location: "Tyler, TX",
      county: "Smith County",
      state: "Texas",
      beds: 0,
      baths: 0,
      sqft: 0,
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      type: "farm",
      featured: true
    },
    {
      id: 5,
      price: "$79,597",
      acres: "5.2 Acres",
      location: "Baton Rouge, LA",
      county: "East Baton Rouge Parish",
      state: "Louisiana",
      beds: 0,
      baths: 0,
      sqft: 0,
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      type: "farm",
      new: true
    },
    {
      id: 6,
      price: "$125,000",
      acres: "5 Acres",
      location: "Dallas, TX",
      county: "Dallas County",
      state: "Texas",
      beds: 0,
      baths: 0,
      sqft: 0,
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      type: "hunting",
      featured: true
    }
  ];

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'farm', label: 'Farm Land' },
    { id: 'residential', label: 'Residential Land' },
    { id: 'waterfront', label: 'Waterfront House' },
    { id: 'hunting', label: 'Hunting Land' },
    { id: 'recreational', label: 'Recreational' }
  ];

  const filteredProperties =
    activeTab === 'all'
      ? properties
      : properties.filter((property) => property.type === activeTab);

  const [savedProperties, setSavedProperties] = useState([]);

  const toggleSave = (id) => {
    if (savedProperties.includes(id)) {
      setSavedProperties(savedProperties.filter((propId) => propId !== id));
    } else {
      setSavedProperties([...savedProperties, id]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Showcase Properties</h2>
        <a href="#" className="text-green-600 hover:underline text-sm font-medium">
          View All
        </a>
      </div>

      <div className="flex overflow-x-auto space-x-2 mb-8 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div key={property.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={property.image}
                alt={`Property in ${property.location}`}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 flex space-x-2">
                {property.featured && (
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                    Featured
                  </span>
                )}
                {property.new && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    New
                  </span>
                )}
              </div>
              <button
                className="absolute top-4 right-4 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100"
                onClick={() => toggleSave(property.id)}
              >
                <Heart
                  size={16}
                  className={
                    savedProperties.includes(property.id)
                      ? 'text-red-500 fill-red-500'
                      : 'text-gray-500'
                  }
                />
              </button>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-bold text-xl">
                    {property.price} • {property.acres}
                  </p>
                  <p className="text-gray-600 text-sm flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {property.location}, {property.state}, {property.county}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                {property.beds > 0 && (
                  <div className="flex items-center text-gray-600 text-sm">
                    <Bed size={16} className="mr-1" />
                    <span>{property.beds} Beds</span>
                  </div>
                )}

                {property.baths > 0 && (
                  <div className="flex items-center text-gray-600 text-sm">
                    <Bath size={16} className="mr-1" />
                    <span>{property.baths} Baths</span>
                  </div>
                )}

                {property.sqft > 0 && (
                  <div className="flex items-center text-gray-600 text-sm">
                    <Maximize size={16} className="mr-1" />
                    <span>{property.sqft} sqft</span>
                  </div>
                )}
              </div>

              <div className="mt-4 flex justify-between">
                <Link
                  to={`/property/${property.id}`}
                  className="text-green-600 text-sm font-medium hover:underline"
                >
                  View Details
                </Link>
                <button
                  className="text-gray-500 text-sm font-medium hover:underline"
                  onClick={() => toggleSave(property.id)}
                >
                  {savedProperties.includes(property.id) ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseProperties;
