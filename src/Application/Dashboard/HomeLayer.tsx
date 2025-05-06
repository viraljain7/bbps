import { Link } from "react-router";
import BBPSHeader from "../../components/Application/BBPSHeader";

// Define interfaces for TypeScript type safety
interface MenuItem {
  name: string;
  img: string;
  path: string;
}

// Define data for Recharge and PayBill
const Recharge: MenuItem[] = [
  { name: "DTH", img: "https://via.placeholder.com/64?text=DTH", path: "/dth" },
  {
    name: "Prepaid",
    img: "https://via.placeholder.com/64?text=Prepaid",
    path: "/prepaid",
  },
];

const PayBill: MenuItem[] = [
  {
    name: "Water",
    img: "https://via.placeholder.com/64?text=Water",
    path: "/water",
  },
  {
    name: "Broadband",
    img: "https://via.placeholder.com/64?text=Broadband",
    path: "/broadband",
  },
  {
    name: "Electricity",
    img: "https://via.placeholder.com/64?text=Electricity",
    path: "/electricity",
  },
  {
    name: "Cable TV",
    img: "https://via.placeholder.com/64?text=Cable+TV",
    path: "/cable-tv",
  },
  {
    name: "Credit Card",
    img: "https://via.placeholder.com/64?text=Credit+Card",
    path: "/credit-card",
  },
  {
    name: "Fast Tag",
    img: "https://via.placeholder.com/64?text=Fast+Tag",
    path: "/fast-tag",
  },
  {
    name: "Housing Society",
    img: "https://via.placeholder.com/64?text=Housing+Society",
    path: "/housing-society",
  },
  {
    name: "Life Insurance",
    img: "https://via.placeholder.com/64?text=Life+Insurance",
    path: "/life-insurance",
  },
  {
    name: "LPG Gas",
    img: "https://via.placeholder.com/64?text=LPG+Gas",
    path: "/lpg-gas",
  },
  {
    name: "Municipal TAX",
    img: "https://via.placeholder.com/64?text=Municipal+TAX",
    path: "/municipal-tax",
  },
  {
    name: "Post Paid",
    img: "https://via.placeholder.com/64?text=Post+Paid",
    path: "/post-paid",
  },
  {
    name: "Donation",
    img: "https://via.placeholder.com/64?text=Donation",
    path: "/donation",
  },
  {
    name: "Education Fees",
    img: "https://via.placeholder.com/64?text=Education+Fees",
    path: "/education-fees",
  },
  {
    name: "Hospital & Pathology",
    img: "https://via.placeholder.com/64?text=Hospital+Pathology",
    path: "/hospital-pathology",
  },
  {
    name: "Municipal Services",
    img: "https://via.placeholder.com/64?text=Municipal+Services",
    path: "/municipal-services",
  },
  {
    name: "Recurring Deposit",
    img: "https://via.placeholder.com/64?text=Recurring+Deposit",
    path: "/recurring-deposit",
  },
  {
    name: "Rental",
    img: "https://via.placeholder.com/64?text=Rental",
    path: "/rental",
  },
  {
    name: "Subscription",
    img: "https://via.placeholder.com/64?text=Subscription",
    path: "/subscription",
  },
  {
    name: "NCMC",
    img: "https://via.placeholder.com/64?text=NCMC",
    path: "/ncmc",
  },
  {
    name: "Clubs & Associations",
    img: "https://via.placeholder.com/64?text=Clubs+Associations",
    path: "/clubs-associations",
  },
  {
    name: "Health Insurance",
    img: "https://via.placeholder.com/64?text=Health+Insurance",
    path: "/health-insurance",
  },
  {
    name: "Landline Postpaid",
    img: "https://via.placeholder.com/64?text=Landline+Postpaid",
    path: "/landline-postpaid",
  },
  {
    name: "Loan Repayment",
    img: "https://via.placeholder.com/64?text=Loan+Repayment",
    path: "/loan-repayment",
  },
  {
    name: "Prepaid Meter",
    img: "https://via.placeholder.com/64?text=Prepaid+Meter",
    path: "/prepaid-meter",
  },
  {
    name: "Hospital",
    img: "https://via.placeholder.com/64?text=Hospital",
    path: "/hospital",
  },
  { name: "Gas", img: "https://via.placeholder.com/64?text=Gas", path: "/gas" },
  {
    name: "Insurance",
    img: "https://via.placeholder.com/64?text=Insurance",
    path: "/insurance",
  },
];

// Reusable GridSection component
interface GridSectionProps {
  title: string;
  items: MenuItem[];
}

const GridSection: React.FC<GridSectionProps> = ({ title, items }) => (
  <section className="my-6  bg-white border-b border-gray-200 p-4">
    <h2 className="text-lg font-semibold text-gray-700 mb-3">{title}</h2>
    <hr />
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6">
      {items.map((item) => (
        <Link to={item.path} key={item.name}>
          <div className="flex flex-col items-center p-4 bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200">
              <img
                src={item.img}
                alt={item.name}
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-sm font-semibold text-gray-700 text-center">
              {item.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

// HomeLayer component
const HomeLayer: React.FC = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto ">
    <BBPSHeader title="Services"/>

      <GridSection title="Recharge" items={Recharge}  />
      <GridSection title="Pay Bill" items={PayBill} />
    </div>
  );
};

export default HomeLayer;
