import React from 'react';
import { MapPin, Search } from 'lucide-react';

const ExploreLand = () => {
  const landCategories = [
    { name: 'Farm Land', count: '15,000+', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80' },
    { name: 'Residential Land', count: '8,000+', image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80' },
    { name: 'Hunting Land', count: '12,000+', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80' },
    { name: 'Waterfront Land', count: '4,000+', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    { name: 'Recreational Land', count: '2,000+', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1575&q=80' },
    { name: 'Ranch Land', count: '3,500+', image: 'https://images.unsplash.com/photo-1511123553886-d8769371b0c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="h-[400px] bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')" 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Land
            </h1>
            <p className="text-white max-w-md mb-6">
              Discover the perfect piece of land for your needs. Browse our extensive collection of land listings across various categories.
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <div className="flex items-center">
                <MapPin size={18} className="text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Anywhere, USA" 
                  className="w-full focus:outline-none text-sm"
                />
              </div>
            </div>
            
            <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:px-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Property type</label>
              <select className="w-full focus:outline-none text-sm bg-transparent">
                <option>All Property Types</option>
                <option>Farm Land</option>
                <option>Residential Land</option>
                <option>Hunting Land</option>
                <option>Waterfront Land</option>
                <option>Recreational Land</option>
                <option>Ranch Land</option>
              </select>
            </div>
            
            <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:px-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Min - Max Price</label>
              <select className="w-full focus:outline-none text-sm bg-transparent">
                <option>Any Price</option>
                <option>$50,000 - $500,000</option>
                <option>$500,000 - $1,000,000</option>
                <option>$1,000,000 - $5,000,000</option>
                <option>$5,000,000+</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-green-700 transition-colors">
                <Search size={18} className="mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Land Categories */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Explore Land Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landCategories.map((category, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden group">
              <div 
                className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                style={{ backgroundImage: `url('${category.image}')` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="font-bold text-lg">{category.name}</h3>
                  <p className="text-sm">{category.count} Listings</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                    View Listings
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Regions */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8">Featured Regions</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Texas', 'Florida', 'California', 'Colorado', 'Montana', 'Michigan', 'New York', 'Oregon'].map((state, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium">{state}</h3>
                <p className="text-sm text-gray-500">View properties</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Land Buying Guide */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Land Buying Guide</h2>
          <p className="text-gray-600 mb-6">
            Purchasing land is a significant investment. Our comprehensive guide will help you navigate the process with confidence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Research</h3>
              <p className="text-gray-600 text-sm">
                Learn about zoning laws, property taxes, and land use restrictions before making a purchase.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Financing</h3>
              <p className="text-gray-600 text-sm">
                Explore different financing options for land purchases, including land loans and seller financing.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Due Diligence</h3>
              <p className="text-gray-600 text-sm">
                Conduct thorough inspections, surveys, and environmental assessments before finalizing your purchase.
              </p>
            </div>
          </div>
          
          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors">
            Download Full Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreLand;