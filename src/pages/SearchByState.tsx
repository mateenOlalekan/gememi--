import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchByState = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  
  const states = [
    { name: 'Alabama', abbr: 'AL', count: 245 },
    { name: 'Alaska', abbr: 'AK', count: 89 },
    { name: 'Arizona', abbr: 'AZ', count: 367 },
    { name: 'Arkansas', abbr: 'AR', count: 198 },
    { name: 'California', abbr: 'CA', count: 512 },
    { name: 'Colorado', abbr: 'CO', count: 423 },
    { name: 'Connecticut', abbr: 'CT', count: 87 },
    { name: 'Delaware', abbr: 'DE', count: 45 },
    { name: 'Florida', abbr: 'FL', count: 678 },
    { name: 'Georgia', abbr: 'GA', count: 389 },
    { name: 'Hawaii', abbr: 'HI', count: 56 },
    { name: 'Idaho', abbr: 'ID', count: 234 },
    { name: 'Illinois', abbr: 'IL', count: 312 },
    { name: 'Indiana', abbr: 'IN', count: 267 },
    { name: 'Iowa', abbr: 'IA', count: 189 },
    { name: 'Kansas', abbr: 'KS', count: 213 },
    { name: 'Kentucky', abbr: 'KY', count: 245 },
    { name: 'Louisiana', abbr: 'LA', count: 278 },
    { name: 'Maine', abbr: 'ME', count: 156 },
    { name: 'Maryland', abbr: 'MD', count: 134 },
    { name: 'Massachusetts', abbr: 'MA', count: 98 },
    { name: 'Michigan', abbr: 'MI', count: 345 },
    { name: 'Minnesota', abbr: 'MN', count: 289 },
    { name: 'Mississippi', abbr: 'MS', count: 234 },
    { name: 'Missouri', abbr: 'MO', count: 267 },
    { name: 'Montana', abbr: 'MT', count: 312 },
    { name: 'Nebraska', abbr: 'NE', count: 178 },
    { name: 'Nevada', abbr: 'NV', count: 156 },
    { name: 'New Hampshire', abbr: 'NH', count: 89 },
    { name: 'New Jersey', abbr: 'NJ', count: 112 },
    { name: 'New Mexico', abbr: 'NM', count: 234 },
    { name: 'New York', abbr: 'NY', count: 267 },
    { name: 'North Carolina', abbr: 'NC', count: 389 },
    { name: 'North Dakota', abbr: 'ND', count: 134 },
    { name: 'Ohio', abbr: 'OH', count: 312 },
    { name: 'Oklahoma', abbr: 'OK', count: 245 },
    { name: 'Oregon', abbr: 'OR', count: 278 },
    { name: 'Pennsylvania', abbr: 'PA', count: 312 },
    { name: 'Rhode Island', abbr: 'RI', count: 45 },
    { name: 'South Carolina', abbr: 'SC', count: 267 },
    { name: 'South Dakota', abbr: 'SD', count: 123 },
    { name: 'Tennessee', abbr: 'TN', count: 345 },
    { name: 'Texas', abbr: 'TX', count: 789 },
    { name: 'Utah', abbr: 'UT', count: 189 },
    { name: 'Vermont', abbr: 'VT', count: 78 },
    { name: 'Virginia', abbr: 'VA', count: 267 },
    { name: 'Washington', abbr: 'WA', count: 312 },
    { name: 'West Virginia', abbr: 'WV', count: 156 },
    { name: 'Wisconsin', abbr: 'WI', count: 289 },
    { name: 'Wyoming', abbr: 'WY', count: 145 }
  ];

  const popularStates = ['Texas', 'Florida', 'California', 'Colorado', 'Montana', 'Michigan'];
  
  const handleStateClick = (stateName: string) => {
    setSelectedState(stateName);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="h-[400px] bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1508433957232-3107f5fd5995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')" 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Search Land By State
            </h1>
            <p className="text-white max-w-md mb-6">
              Browse our extensive collection of land listings across all 50 states. Find the perfect property in your desired location.
            </p>
            
            <div className="relative max-w-md">
              <input 
                type="text" 
                placeholder="Search by state name..." 
                className="w-full px-4 py-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search size={20} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular States */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Popular States</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularStates.map((state, index) => {
            const stateData = states.find(s => s.name === state);
            return (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleStateClick(state)}
              >
                <h3 className="font-bold">{state}</h3>
                <p className="text-sm text-gray-500">{stateData?.count || 0} listings</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* All States */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8">All States</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {states.map((state, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  selectedState === state.name 
                    ? 'bg-green-600 text-white' 
                    : 'bg-white hover:bg-green-50'
                }`}
                onClick={() => handleStateClick(state.name)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{state.name}</h3>
                    <p className={`text-sm ${selectedState === state.name ? 'text-green-100' : 'text-gray-500'}`}>
                      {state.count} listings
                    </p>
                  </div>
                  <div className={`text-lg font-bold ${selectedState === state.name ? 'text-white' : 'text-gray-400'}`}>
                    {state.abbr}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected State Info */}
      {selectedState && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{selectedState} Land For Sale</h2>
            <p className="text-gray-600 mb-6">
              Browse our selection of premium land listings in {selectedState}. From farm land to residential plots, we have options to suit every need and budget.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">Farm Land</div>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">Residential Land</div>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">Hunting Land</div>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">Waterfront</div>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">Recreational</div>
            </div>
            
            <button className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors flex items-center">
              <MapPin size={18} className="mr-2" />
              View All {selectedState} Listings
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchByState;