import React from 'react';
import bbpslogo from "../../../icons/logos/BA.png"
interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentConfirmationModal: React.FC<TransactionModalProps> = ({ isOpen, onClose }) => {
  console.log(isOpen)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-500000 backdrop-blur-xs h-100vh overflow-y-hidden">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative ">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 flex-col">
        
          <div className='flex justify-between w-full items-end'>
          <h2 className="text-lg font-bold text-green-600">Transaction Successfully</h2>
          <div>

          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <img src={bbpslogo} alt='bbps' className='w-25 h-15'/>
          </div>
          </div>
        
        </div>

        {/* Transaction Details */}
        <div className="text-gray-700 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <span className="font-semibold">Transaction Date and Time:</span>
            <span>22-Aug-2024 14:15:47</span>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-2">
            <span className="font-semibold">BBPS Transaction ID:</span>
            <span>CC014235BAE00060188</span>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-2">
            <span className="font-semibold">Customer Name:</span>
            <span>Ashish</span>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-2">
            <span className="font-semibold">Biller ID:</span>
            <span>17</span>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-2">
            <span className="font-semibold">Biller name:</span>
            <span>electricity</span>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-2">
            <span className="font-semibold">Bill Date:</span>
            <span>2016-07-01</span>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-2">
            <span className="font-semibold">Due Date:</span>
            <span>2016-07-30</span>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-2">
            <span className="font-semibold">Customer Convenience Fee:</span>
            <span>0</span>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-2">
            <span className="font-semibold">Mobile/ Customer Id:</span>
            <span>7742544602</span>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-2">
            <span className="font-semibold">Operator Name:</span>
            <span>AJMER VIDYUT VITRAN NIGAM LTD.</span>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-2">
            <span className="font-semibold">TOTAL AMOUNT:</span>
            <span>1000</span>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-2">
            <span className="font-semibold">Status:</span>
            <span>Success</span>
          </div>
        </div>
        {/* View Invoice Button */}
        <button className="w-full mt-6 p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
          VIEW INVOICE
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmationModal;