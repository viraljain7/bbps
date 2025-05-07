import React, { useState, useEffect } from "react";
import PaymentConfirmationModal from "../Component/PaymentConfirmationModal";

// Define interface for bill info
interface BillInfo {
  billNumber: number;
  billDate: string;
  dueDate: string;
  amountDue: number;
  customerName: string;
  period: string;
}

// Mock function to simulate fetching bill info
const fetchBillInfo = (provider: string, mobile: string): BillInfo => {
  return {
    billNumber: 12301,
    billDate: "01-May-2025",
    dueDate: "15-May-2025",
    amountDue: 100000,
    customerName: "BBPS",
    period: "june",
  };
};

// Array of electricity service providers
const electricityProviders: string[] = [
  "AJMER VIDYUT VITRAN NIGAM LIMITED",
  "ADANI ELECTRICITY MUMBAI LIMITED",
  "BSES RAJDHANI POWER LIMITED (BRPL)",
  "BSES YAMUNA POWER LIMITED (BYPL)",
  "TATA POWER DELHI DISTRIBUTION LIMITED (TPDDL)",
  "MAHARASHTRA STATE ELECTRICITY DISTRIBUTION CO. LTD. (MSEDCL)",
  "TORRENT POWER LIMITED",
  "UTTAR PRADESH POWER CORPORATION LIMITED (UPPCL)",
  "KOLKATA ELECTRIC SUPPLY CORPORATION (CESC)",
  "SOUTHERN POWER DISTRIBUTION COMPANY OF TELANGANA (TSSPDCL)",
  "NORTHERN POWER DISTRIBUTION COMPANY OF TELANGANA (TSNPDCL)",
  "MADHYA PRADESH POORV KSHETRA VIDYUT VITARAN COMPANY LTD. (MPPKVVCL)",
  "MADHYA PRADESH PASCHIM KSHETRA VIDYUT VITARAN COMPANY LTD. (MPPKVVCL)",
  "GUJARAT URJA VIKAS NIGAM LIMITED (GUVNL)",
  "KERALA STATE ELECTRICITY BOARD (KSEB)",
  "TAMIL NADU GENERATION AND DISTRIBUTION CORPORATION (TANGEDCO)",
  "PUNJAB STATE POWER CORPORATION LIMITED (PSPCL)",
  "HARYANA VIDYUT PRASARAN NIGAM LIMITED (HVPNL)",
  "RAJASTHAN VIDYUT PRASARAN NIGAM LIMITED (RVPNL)",
  "ASSAM POWER DISTRIBUTION COMPANY LIMITED (APDCL)",
  "BIHAR STATE POWER HOLDING COMPANY LIMITED (BSPHCL)",
];

const ElectricityPaymentLayer: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [formData, setFormData] = useState({
    a: "",
    ab: "",
    abc: "",
    abcd: "",
    abcde: "",
  });
  const [billInfo, setBillInfo] = useState<BillInfo | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [showPaymentSection, setShowPaymentSection] = useState<boolean>(false);
  const [showABC, setShowABC] = useState<boolean>(true);

  // Determine if inputs should be enabled (provider is selected)
  const isInputsEnabled = selectedProvider !== "";

  // Validate mobile number (10 digits)
  const isMobileValid = mobile.trim() !== "" && /^\d{10}$/.test(mobile);

  // Determine if bill info and payment section should be enabled
  const isBillInfoEnabled =
    isInputsEnabled && isMobileValid && billInfo !== null;

  // Validate amount (positive and not exceeding bill amount)
  const parsedAmount = parseFloat(amount);
  const isAmountValid =
    amount !== "" &&
    parsedAmount > 0 &&
    (billInfo ? parsedAmount <= billInfo.amountDue : true);

  // Reset payment section when provider or mobile changes
  useEffect(() => {
    setBillInfo(null);
    setShowPaymentSection(false);
    setShowABC(true);
    setAmount("");
    setIsPaymentModalOpen(false);
  }, [selectedProvider, mobile]);

  // Handle input changes for form data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle next button click
  const handleNextClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      isInputsEnabled &&
      isMobileValid &&
      Object.values(formData).every((value) => value.trim() !== "")
    ) {
      const bill = fetchBillInfo(selectedProvider, mobile);
      setBillInfo(bill);
      setShowPaymentSection(true);
      setShowABC(false);
    }
  };

  // Handle back button click
  const handleBackClick = () => {
    setShowPaymentSection(false);
    setShowABC(true);
    setBillInfo(null);
    setAmount("");
  };

  // Handle confirm button click
  const handleConfirmClick = () => {
    if (isBillInfoEnabled && isAmountValid) {
      setIsPaymentModalOpen(true);
    }
  };

  // Handle modal proceed
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <div className="md:col-span-4 space-y-4">
      <form onSubmit={handleNextClick}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Provider <span className="text-red-500">*</span>
          </label>
          <select
            value={selectedProvider}
            onChange={(e) => setSelectedProvider(e.target.value)}
            required
            disabled={!showABC}
            className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm truncate ${
              !showABC ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
            }`}
          >
            <option value="">Select...</option>
            {electricityProviders.map((provider, index) => (
              <option
                key={index}
                value={provider}
                className="text-sm truncate"
                title={provider}
              >
                {provider}
              </option>
            ))}
          </select>
        </div>
        <div className="my-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Customer Mobile <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Customer Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            disabled={!showABC}
            className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              !showABC ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
            }`}
          />
          {!isMobileValid && mobile.trim() !== "" && (
            <p className="text-red-500 text-xs mt-1">
              Please enter a valid 10-digit mobile number
            </p>
          )}
        </div>
        {showABC && isInputsEnabled && (
          <div className="space-y-3">
            {["a", "ab", "abc", "abcd", "abcde"].map((field, index) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {["a", "a b", "a b c", "a b c d", "a b c d e"][index]}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleInputChange}
                  disabled={!isInputsEnabled}
                  placeholder={
                    ["a", "a b", "a b c", "a b c d", "a b c d e"][index]
                  }
                  required
                  className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                    !isInputsEnabled
                      ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                      : ""
                  }`}
                />
              </div>
            ))}
            <button
              type="submit"
              disabled={
                !isInputsEnabled ||
                !isMobileValid ||
                !Object.values(formData).every((value) => value.trim() !== "")
              }
              className={`w-full py-2 rounded-md text-sm font-medium transition-colors ${
                isInputsEnabled &&
                isMobileValid &&
                Object.values(formData).every((value) => value.trim() !== "")
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </form>
      {showPaymentSection && billInfo && (
        <div className="space-y-4">
          <div className="space-y-3 p-4 border border-gray-200 rounded-md bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-700">Bill Info</h3>
            <div className="text-sm text-gray-600 grid gap-y-2">
              {/* Each row is a grid with 2 columns */}
              <div className="grid grid-cols-2">
                <span className="font-medium">Customer Name:</span>
                <span>{billInfo.customerName}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-medium">Bill Amount:</span>
                <span>₹{billInfo.amountDue.toFixed(2)}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-medium">Bill Date:</span>
                <span>{billInfo.billDate}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-medium">Due Date:</span>
                <span>{billInfo.dueDate}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-medium">Bill Number:</span>
                <span>{billInfo.billNumber}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-medium">Bill Period:</span>
                <span>{billInfo.period}</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={!isBillInfoEnabled}
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                !isBillInfoEnabled
                  ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                  : ""
              }`}
            />
            {amount && !isAmountValid && (
              <p className="text-red-500 text-xs mt-1">
                Amount must be positive and not exceed ₹
                {billInfo.amountDue.toFixed(2)}
              </p>
            )}
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handleBackClick}
              className="w-1/2 py-2 rounded-md text-sm font-medium transition-colors bg-gray-500 text-white hover:bg-gray-600"
            >
              Back
            </button>
            <button
              onClick={handleConfirmClick}
              disabled={!isBillInfoEnabled || !isAmountValid}
              className={`w-1/2 py-2 rounded-md text-sm font-medium transition-colors ${
                isBillInfoEnabled && isAmountValid
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
      {billInfo && (
        <PaymentConfirmationModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ElectricityPaymentLayer;
