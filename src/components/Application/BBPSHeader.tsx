import React from 'react';
import BBPS from "../../icons/logos/bharat-connect.png"

// Define props interface for TypeScript
interface BBPSHeaderProps {
  title: string;
}

const BBPSHeader: React.FC<BBPSHeaderProps> = ({ title }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
      <h1 className="text-lg font-semibold text-blue-900">{title}</h1>
      <div className="flex items-center">
        <img src={BBPS} alt='bbps' className='w-20 h-6 lg:w-40 lg:h-8'/>
      </div>
    </header>
  );
};

export default BBPSHeader;