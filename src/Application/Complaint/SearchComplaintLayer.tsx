import { useState } from "react";

const ComplaintRegistration = () => {
  const [complaintType, setComplaintType] = useState<string>("Transaction");
  const [transactionId, setTransactionId] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      complaintType,
      transactionId,
      mobileNumber,
      fromDate,
      toDate,
    });
  };

  

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* <h1 className="text-2xl font-bold mb-6 text-gray-800">Complaint Registration</h1> */}

      <div className="grid grid-cols-2 gap-4">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Register Complaint
          </h2>

          <div className="mb-4 ">
            <label className="block text-gray-700 mb-2">Complaint Type</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="transaction"
                name="complaintType"
                value="Transaction"
                checked={complaintType === "Transaction"}
                onChange={() => setComplaintType("Transaction")}
                className="mr-2"
              />
              <label htmlFor="transaction" className="text-gray-700">
                Transaction
              </label>
            </div>
          </div>

          {complaintType === "Transaction" && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Transaction Reference ID <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="Transaction Reference ID"
                />
              </div>
            </div>
          )}

          <div className="flex items-center mb-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required={complaintType !== "Transaction"}
              placeholder="Mobile Number"
            />
          </div>

          <div className="grid  gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Select From Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={complaintType !== "Transaction"}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Select To Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={complaintType !== "Transaction"}
              />
            </div>
          </div>

        
         

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
      <ComplaintResult/>

          </form>
    
      </div>
    </div>
  );
};

export default ComplaintRegistration;


const ComplaintResult: React.FC=()=>{
  return   <div className="space-y-3 p-4 border border-gray-200 rounded-md bg-gray-50 my-4">
  <h3 className="text-lg font-semibold text-gray-700">Transaction Details</h3>
  <div className="text-sm text-gray-600 grid gap-y-2">
    {/* Each row is a grid with 2 columns */}
    <div className="grid grid-cols-2">
      <span className="font-medium">Agent ID:</span>
      <span>YSO1AB21000000123458</span>
    </div>

    <div className="grid grid-cols-2">
      <span className="font-medium">Amount:</span>
      <span>80000</span>
    </div>
    <div className="grid grid-cols-2">
      <span className="font-medium">Biller Name:</span>
      <span>TSTU00000NAT07</span>
    </div>
    <div className="grid grid-cols-2">
      <span className="font-medium">Transaction Date	:</span>
      <span>2016-10-17T18:06:40.554+05:30
      </span>
    </div>
    <div className="grid grid-cols-2">
      <span className="font-medium">Transaction Ref ID	:</span>
      <span>ID0100080018</span>
    </div>
    <div className="grid grid-cols-2">
      <span className="font-medium">Transaction Status	:</span>
      <span>SUCCESS</span>
    </div>

  
  </div>
</div>
}
