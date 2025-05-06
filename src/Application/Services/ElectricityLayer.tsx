import React from 'react';
import BBPSHeader from "../../components/Application/BBPSHeader";

import ElectricityPaymentLayer from './helper/ElectricityPaymentLayer';
import ElectricityOrderLayer from './helper/ElectricityOrderLayer';





const ElectricityLayer: React.FC = () => {

  return (
    <div className="min-h-screen max-w-6xl mx-auto p-4">
      <BBPSHeader title="Electricity Bill Payment" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 ">
        {/* Form Section - 4/12 width */}
      <ElectricityPaymentLayer/>

        {/* Latest Orders Table - 8/12 width */}
      <ElectricityOrderLayer/>
      </div>
    </div>
  );
};

export default ElectricityLayer;