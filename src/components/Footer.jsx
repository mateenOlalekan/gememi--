import { MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import {useState} from "react";
import Logo from './Logo';

const Footer = () => {
  const footerLinks = {
    'LISTINGS BY STATE': [
      { name: 'Texas Land For Sale', path: '/search-by-state/texas' },
      { name: 'Florida Land For Sale', path: '/search-by-state/florida' },
      { name: 'California Land For Sale', path: '/search-by-state/california' },
      { name: 'Michigan Land For Sale', path: '/search-by-state/michigan' },
      { name: 'Wisconsin Land For Sale', path: '/search-by-state/wisconsin' },
      { name: 'Alabama Land For Sale', path: '/search-by-state/alabama' }
    ],
    'RESOURCES': [
      { name: 'Add a Listing', path: '/add-listing' },
      { name: 'Land Blog', path: '/blog' },
      { name: 'Land Glossary', path: '/glossary' },
      { name: 'Land Loans', path: '/loans' },
      { name: 'Land Buyer Guide', path: '/buyer-guide' },
      { name: 'Land Seller Guide', path: '/seller-guide' }
    ],
    'ABOUT US': [
      { name: 'About', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Careers', path: '/careers' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Use', path: '/terms' },
      { name: 'Sitemap', path: '/sitemap' }
    ]
  };

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Join Us in Exploring<br />Land Together</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter</p>
            <form onSubmit={handleSubmit} className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-sm mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <Logo />
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;