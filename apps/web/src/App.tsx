/** @jsxImportSource @emotion/react */
import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AnimatedFrame } from "@styles/theme/motions";
import { useTypedSelector } from "./lib/hooks/useStore";
import { useDeviceResizer } from "./lib/hooks/useDeviceResizer";
import { ResponsiveWrapper, 중앙정렬용ContainerStyle } from "./styles";
import Pay from "./pages/Pay";
import Splash from "./pages/Splash";
import OnSitePay from "./pages/Pay/OnSite";
import { PaymentDone } from "./pages/Pay/PaymentDone";
import Landing from "./pages/Landing";
import AssetHome from "./pages/AssetHome";

function App() {
  const location = useLocation();
  useDeviceResizer();
  const isMobileView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );

  return (
    <>
      <Helmet>
        <title>{"KB App for 액티브시니어"}</title>
        <meta property="og:title" content={"KB App for 액티브시니어"} />
      </Helmet>
      <AnimatePresence exitBeforeEnter initial={true}>
        <AnimatedFrame css={중앙정렬용ContainerStyle}>
          <ResponsiveWrapper isMobileView={isMobileView}>
            <Routes key={location.key} location={location}>
              <Route path="/" element={<Splash />} />
              <Route path="/pay" element={<Pay />} />
              <Route path="/pay/onsite" element={<OnSitePay />} />
              <Route path="/pay/done/1" element={<PaymentDone page="1" />} />
              <Route path="/pay/done/2" element={<PaymentDone page="2" />} />
              <Route path="/home" element={<Landing />} />
              <Route path="/assetHome" element={<AssetHome />} />
              <Route path="*" element={<div>error page</div>}></Route>
            </Routes>
          </ResponsiveWrapper>
        </AnimatedFrame>
      </AnimatePresence>
    </>
  );
}

export default App;
