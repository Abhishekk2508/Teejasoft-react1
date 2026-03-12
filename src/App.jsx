import { Routes, Route } from "react-router-dom";
import WhatsAppPopup from "./components/WhatsAppPopup";

import Home from "./pages/Home";
import Aboutpg from "./pages/Aboutpg";
import Portfoliopg from "./pages/Portfoliopg";
import Blogpg from "./pages/Blogpg";
import Contactpg from "./pages/Contactpg";
import EcommerceProject from "./pages/EcommerceProject";


//  SERVICES (Correct Path from src/App.jsx)
import Webdevelopment from "./components/service/Webdevelopment";
import Graphicdesign from "./components/service/Graphicdesign";
import Digitalmarketing from "./components/service/Digitalmarketing";
import Paidads from "./components/service/Paidads";
import Domainhosting from "./components/service/Domainhosting";

const App = () => {
  return (
    <>
      <WhatsAppPopup />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/Aboutpg" element={<Aboutpg />} />
        <Route path="/portfoliopg" element={<Portfoliopg />} />
        <Route path="/blogpg" element={<Blogpg />} />
        <Route path="/contactpg" element={<Contactpg />} />

        {/* Services */}
        <Route path="/services/web-development" element={<Webdevelopment />} />
        <Route path="/services/graphic-design" element={<Graphicdesign />} />
        <Route path="/services/digital-marketing" element={<Digitalmarketing />} />
        <Route path="/services/paid-ads" element={<Paidads />} />
        <Route path="/services/domainhosting" element={<Domainhosting />} />
        <Route path="/ecommerce-project" element={<EcommerceProject />} />

      </Routes>
    </>
  );
};

export default App;
