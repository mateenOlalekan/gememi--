import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="bg-green-600 p-1 rounded">
        <MapPin size={20} className="text-white" />
      </div>
      <span className="ml-2 font-bold text-lg uppercase tracking-wide">Landee</span>
    </Link>
  );
};

export default Logo;