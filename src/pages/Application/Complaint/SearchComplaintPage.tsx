import SearchComplaintLayer from "../../../Application/Complaint/SearchComplaintLayer.tsx";
import BBPSHeader from "../../../components/Application/BBPSHeader.tsx";
import PageMeta from "../../../components/common/PageMeta";

export default function  SearchComplaintPage
() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
    <BBPSHeader title="Search Registration"/>

        <div className="col-span-12">
        <SearchComplaintLayer />
        </div>

        
    </>
  );
}




