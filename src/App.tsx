import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";

import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";

// BBPS
import HomePage from "./pages/Application/Dashboard/HomePage";
import ElectricityPage from "./pages/Application/Services/ElectricityPage";
import ElectricityInvoicePage from "./pages/Application/Services/ElectricityInvoicePage";
import ComplaintAndTrackingPage from "./pages/Application/Complaint/ComplaintAndTrackingPage";
import SearchComplaintPage from "./pages/Application/Complaint/SearchComplaintPage";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/service" element={<Calendar />} />
            <Route path="/Setting" element={<Blank />} />

            {/* Forms */}
            <Route path="/complaints" element={<FormElements />} />

            {/* Tables */}
            <Route path="/logout" element={<BasicTables />} />

            {/*BBPS  */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/electricity" element={<ElectricityPage />} />
          <Route path="/complaint" element={<ComplaintAndTrackingPage />} />
          <Route path="/complaint/search" element={<SearchComplaintPage />} />


          <Route path="/electricity/invoice" element={<ElectricityInvoicePage />} />

          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />


          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
