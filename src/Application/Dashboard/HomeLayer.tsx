import { Link } from "react-router";
import BBPSHeader from "../../components/Application/BBPSHeader";
import dth from "../../icons/logos/services/dth.svg"
import mobile from "../../icons/logos/services/mobile.svg"
import water from "../../icons/logos/services/water.svg"
import boardband from "../../icons/logos/services/boardband.svg"
import electricity from "../../icons/logos/services/light.svg"
import cable from "../../icons/logos/services/cable.svg"
import creditcard from "../../icons/logos/services/credit.svg"
import FASTag from "../../icons/logos/services/FASTag.svg"
import housing from "../../icons/logos/services/housing.svg"
import insrance from "../../icons/logos/services/insrance.svg"
import gas from "../../icons/logos/services/gas.svg"
import municpal from "../../icons/logos/services/municpal.svg"
import rental from "../../icons/logos/services/rental.svg"
import nps from "../../icons/logos/services/nps.svg"
import loan from "../../icons/logos/services/loan.svg"
import mobileostpaid from "../../icons/logos/services/mobileostpaid.svg"
import gasfil from "../../icons/logos/services/gasfil.svg"
import video from "../../icons/logos/services/video.svg"
import donation from "../../icons/logos/services/donation.svg"



// Define interfaces for TypeScript type safety
interface MenuItem {
  name: string;
  img: string;
  path: string;
}

const Recharge: MenuItem[] = [
  { 
    name: "DTH", 
    img: dth, // Satellite dish, black-and-white
    path: "/dth"
  },
  {
    name: "Prepaid",
    img: mobile, // Mobile phone, black-and-white
    path: "/prepaid",
  },
];

const PayBill: MenuItem[] = [
  {
    name: "Water",
    img: water,  path: "/water",
  },
  {
    name: "Broadband",
    img: boardband,path: "/broadband",
  },
  {
    name: "Electricity",
    img:electricity ,  path: "/electricity",
  },
  {
    name: "Cable TV",
img:cable
    ,    path: "/cable-tv",
  },
  {
    name: "Credit Card",
img:creditcard
    ,    path: "/credit-card",
  },
  {
    name: "Fast Tag",
img:FASTag
    ,    path: "/fast-tag",
  },
  {
    name: "Housing Society",
img:housing
    ,    path: "/housing-society",
  },
  {
    name: "Life Insurance",
img:insrance
    ,    path: "/life-insurance",
  },
  {
    name: "LPG Gas",
img:gas
    ,    path: "/lpg-gas",
  },
  {
    name: "Municipal Tax",
img:municpal
    ,    path: "/municipal-tax",
  },
  {
    name: "Post Paid",
    img: mobileostpaid,
       path: "/post-paid",
  },
  {
    name: "Donation",
    img:donation    ,
    path: "/donation",
  },
  {
    name: "Education Fees",
    img: loan,  path: "/education-fees",
  },
  {
    name: "Hospital & Pathology",
    img: "https://cdn-icons-png.flaticon.com/64/1904/1904110.png", // Microscope, black-and-white
    path: "/hospital-pathology",
  },
  {
    name: "Municipal Services",
    img: municpal,  path: "/municipal-services",
  },
  {
    name: "Recurring Deposit",
    img:loan,path: "/recurring-deposit",
  },
  {
    name: "Rental",
    img: rental,  path: "/rental",
  },
  {
    name: "Subscription",
    img: video,  path: "/subscription",
  },
  {
    name: "NCMC",
    img: nps,  path: "/ncmc",
  },
  {
    name: "Clubs & Associations",
    img: "https://cdn-icons-png.flaticon.com/64/681/681494.png", // Group of people, black-and-white
    path: "/clubs-associations",
  },
  {
    name: "Health Insurance",
    img: "https://cdn-icons-png.flaticon.com/64/2693/2693562.png", // Medical shield, black-and-white
    path: "/health-insurance",
  },
  {
    name: "Landline Postpaid",
    img: mobile,  path: "/landline-postpaid",
  },
  {
    name: "Loan Repayment",
    img: "https://cdn-icons-png.flaticon.com/64/744/744955.png", // Money transfer, black-and-white
    path: "/loan-repayment",
  },
  {
    name: "Prepaid Meter",
    img: "https://cdn-icons-png.flaticon.com/64/1037/1037130.png", // Meter, black-and-white
    path: "/prepaid-meter",
  },
  {
    name: "Hospital",
    img: "https://cdn-icons-png.flaticon.com/64/2367/2367471.png", // Hospital building, black-and-white
    path: "/hospital",
  },
  {
    name: "Gas",
    img:gasfil,  path: "/gas",
  },
  {
    name: "Insurance",
    img: insrance,path: "/insurance",
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
