/** @jsxImportSource @emotion/react */
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useDeviceResizer } from "./lib/hooks/useDeviceResizer";
import Pay from "./pages/Pay";
import Splash from "./pages/Splash";
import OnSitePay from "./pages/Pay/OnSite";
import { PaymentDone } from "./pages/Pay/PaymentDone";
import Landing from "./pages/Landing";
import AssetHome from "./pages/AssetHome";
import AIService from "./pages/AIService";
import Chatbot from "./pages/Chatbot";
import { AnimatedRoute } from "./components/Routes/AnimatedRoute";

function App() {
  const location = useLocation();
  useDeviceResizer();

  return (
    <>
      <Helmet>
        <title>{"KB App for 액티브시니어"}</title>
        <meta property="og:title" content={"KB App for 액티브시니어"} />
      </Helmet>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Routes key={location.key} location={location}>
          <Route element={<AnimatedRoute />}>
            <Route path="/" element={<Splash />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/pay/onsite" element={<OnSitePay />} />
            <Route path="/pay/done/1" element={<PaymentDone page="1" />} />
            <Route path="/pay/done/2" element={<PaymentDone page="2" />} />
            <Route path="/home" element={<Landing />} />
            <Route path="/assetHome" element={<AssetHome />} />
            <Route path="/aiService" element={<AIService />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Route>
          <Route path="*" element={<div>error page</div>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
