import React, { useState } from 'react';

function ElectricityPaymentLayer() {

        // Array of electricity service providers
const electricityProviders: string[] = [
    "Adani Electricity Mumbai Limited",
    "BSES Rajdhani Power Limited (BRPL)",
    "BSES Yamuna Power Limited (BYPL)",
    "Tata Power Delhi Distribution Limited (TPDDL)",
    "Maharashtra State Electricity Distribution Co. Ltd. (MSEDCL)",
    "Torrent Power Limited",
    "Uttar Pradesh Power Corporation Limited (UPPCL)",
    "Kolkata Electric Supply Corporation (CESC)",
    "Southern Power Distribution Company of Telangana (TSSPDCL)",
    "Northern Power Distribution Company of Telangana (TSNPDCL)",
    "Madhya Pradesh Poorv Kshetra Vidyut Vitaran Company Ltd. (MPPKVVCL)",
    "Madhya Pradesh Paschim Kshetra Vidyut Vitaran Company Ltd. (MPPKVVCL)",
    "Gujarat Urja Vikas Nigam Limited (GUVNL)",
    "Kerala State Electricity Board (KSEB)",
    "Tamil Nadu Generation and Distribution Corporation (TANGEDCO)",
    "Punjab State Power Corporation Limited (PSPCL)",
    "Haryana Vidyut Prasaran Nigam Limited (HVPNL)",
    "Rajasthan Vidyut Prasaran Nigam Limited (RVPNL)",
    "Assam Power Distribution Company Limited (APDCL)",
    "Bihar State Power Holding Company Limited (BSPHCL)",
  ];
    
      const [selectedProvider, setSelectedProvider] = useState<string>('');
      const [formData, setFormData] = useState({
        a: '',
        ab: '',
        abc: '',
        abcd: '',
        abcde: '',
      });
    
      // Determine if inputs and button should be enabled (provider is selected)
      const isInputsEnabled = selectedProvider !== '';
    
      // Handle input changes
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      // Handle next button click
      const handleNextClick = () => {
        if (isInputsEnabled) {
          console.log('Next button clicked with data:', {
            provider: selectedProvider,
            ...formData,
          });
        }
      };
  return (
    <div className="md:col-span-4 space-y-4">
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Provider</label>
        <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm truncate"
        value={selectedProvider}
        onChange={(e) => setSelectedProvider(e.target.value)}
       
        >
          <option value="">Select...</option>
          {electricityProviders.map((provider, index) => (
            <option key={index} value={provider} className="text-sm truncate">
              {provider}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Customer Mobile <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Customer Mobile"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
        {isInputsEnabled && 
         <div className="space-y-3">
        {['a', 'a b', 'a b c', 'a b c d', 'a b c d e'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleInputChange}
              disabled={!isInputsEnabled}
              placeholder={field}
              required
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                !isInputsEnabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''
              }`}
            />
          </div>
        ))}
        <button
          onClick={handleNextClick}
          disabled={!isInputsEnabled}
          className={`w-full py-2 rounded-md text-sm font-medium transition-colors ${
            isInputsEnabled
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>          }
    </div>
  )
}

export default ElectricityPaymentLayer
