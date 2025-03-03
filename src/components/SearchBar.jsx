
import { Search, MapPin } from 'lucide-react';

const SearchBar = () => {
  return (
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
              <option>Residential Land</option>
              <option>Farm Land</option>
              <option>Hunting Land</option>
              <option>Waterfront Land</option>
              <option>Recreational Land</option>
            </select>
          </div>
          
          <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:px-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Min - Max Price</label>
            <select className="w-full focus:outline-none text-sm bg-transparent">
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
  );
};

export default SearchBar;