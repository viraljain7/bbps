import React from 'react';
import bbps from "../../../icons/logos/BA.png"


const InvoicePage: React.FC = () => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center p-2">
      <div className="bg-white rounded-lg shadow-lg w-full  p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-xl font-bold text-purple-600">PP ss</h1>
            <p className="text-gray-600">22 Aug 2024 14:15:47 PM</p>
          </div>
          <div className="text-right">
          <img src={bbps} alt='bbps' className='w-40 h-25 ml-auto mb-4'/>

            <h2 className="text-lg font-semibold text-gray-800">Google</h2>
            <p className="text-gray-600">1600 Amphitheatre Parkway, Alwar, Rajasthan - 94043</p>
            <p className="text-gray-600">drj@gmail.com</p>
            <p className="text-gray-600 font-semibold">RT001696</p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-sm">
                <th className="p-2 border">Status</th>
                <th className="p-2 border">BBPS Transaction ID</th>
                <th className="p-2 border">Customer Name</th>
                <th className="p-2 border">Biller ID</th>
                <th className="p-2 border">Bill Date</th>
                <th className="p-2 border">Due Date</th>
                <th className="p-2 border">Customer Convenience Fee</th>
                <th className="p-2 border">Mobile/ Customer Id</th>
                <th className="p-2 border">Operator Name</th>
                <th className="p-2 border">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-600 text-sm">
                <td className="p-2 border">Success</td>
                <td className="p-2 border">CC014235BAE00060188</td>
                <td className="p-2 border">Ashish</td>
                <td className="p-2 border">17</td>
                <td className="p-2 border">2016-07-01</td>
                <td className="p-2 border">2016-07-30</td>
                <td className="p-2 border">0</td>
                <td className="p-2 border">7742544602</td>
                <td className="p-2 border">AJMER VIDYUT VITRAN NIGAM LTD.</td>
                <td className="p-2 border">₹1000.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end mt-4">
          <div className="text-gray-700 text-sm">
            <p><span className="font-semibold">Total Amount:</span> ₹1000.00</p>
            <p><span className="font-semibold">Total CCF:</span> ₹0.00</p>
            <p><span className="font-semibold">Grand Total:</span> ₹1000.00</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-gray-600 text-sm">
          <p className="font-semibold">Thank you for transacting at PP ss!</p>
          <p>This is a system generated receipt hence does not require any signature</p>
          <p>Queries? Write <a href="mailto:HELP@TAPI.CO.IN" className="text-blue-600">HELP@TAPI.CO.IN</a></p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 mt-4">
          <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Go Back
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2z" />
            </svg>
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;