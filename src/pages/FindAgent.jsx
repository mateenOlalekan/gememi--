import React, { useState } from 'react';
import { Search, MapPin, Star, Phone, Mail, ArrowRight, Check } from 'lucide-react';

const FindAgent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const Agents = [
    {
      id: 1,
      name: 'John Smith',
      title: 'Senior Land Specialist',
      location: 'Austin, TX',
      rating: 4.9,
      reviews: 124,
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      specialties: ['Farm Land', 'Residential Land', 'Ranch Land'],
      phone: '(512) 555-1234',
      email: 'john.smith@landee.com'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      title: 'Land Investment Advisor',
      location: 'Denver, CO',
      rating: 4.8,
      reviews: 98,
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      specialties: ['Investment Properties', 'Recreational Land', 'Waterfront'],
      phone: '(303) 555-5678',
      email: 'sarah.johnson@landee.com'
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      title: 'Rural Property Expert',
      location: 'San Antonio, TX',
      rating: 4.7,
      reviews: 87,
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      specialties: ['Hunting Land', 'Farm Land', 'Ranch Land'],
      phone: '(210) 555-9012',
      email: 'michael.rodriguez@landee.com'
    },
    {
      id: 4,
      name: 'Emily Wilson',
      title: 'Waterfront Specialist',
      location: 'Tampa, FL',
      rating: 4.9,
      reviews: 112,
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
      specialties: ['Waterfront', 'Recreational Land', 'Residential Land'],
      phone: '(813) 555-3456',
      email: 'emily.wilson@landee.com'
    },
    {
      id: 5,
      name: 'David Thompson',
      title: 'Commercial Land Expert',
      location: 'Nashville, TN',
      rating: 4.6,
      reviews: 76,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      specialties: ['Commercial Land', 'Investment Properties', 'Development Land'],
      phone: '(615) 555-7890',
      email: 'david.thompson@landee.com'
    },
    {
      id: 6,
      name: 'Jennifer Martinez',
      title: 'Ranch & Farm Specialist',
      location: 'Bozeman, MT',
      rating: 4.8,
      reviews: 92,
      image:
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      specialties: ['Ranch Land', 'Farm Land', 'Hunting Land'],
      phone: '(406) 555-2345',
      email: 'jennifer.martinez@landee.com'
    }
  ];

  const filteredAgents = searchQuery
    ? Agents.filter(agent =>
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.specialties.some(specialty =>
          specialty.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : Agents;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find a Land Agent
            </h1>
            <p className="text-white max-w-md mb-6">
              Connect with experienced land specialists who can help you find the perfect property or sell your land for the best price.
            </p>
            
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search by name, location, or specialty..."
                className="w-full px-4 py-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search size={20} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Listings */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Our Land Specialists</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map(agent => (
            <div key={agent.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-20 h-20 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{agent.name}</h3>
                    <p className="text-gray-600 text-sm">{agent.title}</p>
                    <div className="flex items-center mt-1">
                      <MapPin size={14} className="text-gray-500 mr-1" />
                      <span className="text-gray-500 text-sm">{agent.location}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <Star size={14} className="text-yellow-500 mr-1" />
                      <span className="text-gray-700 text-sm">{agent.rating} ({agent.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty, index) => (
                      <span key={index} className="bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-700">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center mb-2">
                    <Phone size={16} className="text-green-600 mr-2" />
                    <span className="text-gray-700 text-sm">{agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="text-green-600 mr-2" />
                    <span className="text-gray-700 text-sm">{agent.email}</span>
                  </div>
                </div>
                
                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
                  Contact Agent
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Become an Agent */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Join Our Network of Land Specialists</h2>
                <p className="text-gray-600 mb-6">
                  Are you a land agent looking to expand your reach? Join our network of land specialists and connect with serious buyers and sellers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                      <Check size={14} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">Access to thousands of qualified leads</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                      <Check size={14} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">Powerful marketing tools and resources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                      <Check size={14} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">Professional profile and listing management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                      <Check size={14} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">Dedicated support team</span>
                  </li>
                </ul>
                <button className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors">
                  Apply Now
                </button>
              </div>
              
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Land agent with client" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindAgent;
