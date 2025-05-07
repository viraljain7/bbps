import ElectricityInvoice from "../../../Application/Services/Component/ElectricityInvoice";
import PageMeta from "../../../components/common/PageMeta";

export default function ElectricityPage
() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
    

        <div className="col-span-12">
        <ElectricityInvoice />
        </div>

        
    </>
  );
}




