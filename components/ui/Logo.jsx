import React from 'react';
import { Briefcase } from 'lucide-react';

const Logo = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Briefcase className="w-6 h-6 mr-2" />
      <span className="font-bold italic text-xl">Logo</span>
    </div>
  );
};

export default Logo;