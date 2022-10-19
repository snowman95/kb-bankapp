/** @jsxImportSource @emotion/react */
import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AnimatedFrame } from "@styles/theme/motions";
import { useTypedSelector } from "./lib/hooks/useStore";
import { useDeviceResizer } from "./lib/hooks/useDeviceResizer";
import { ResponsiveWrapper, 중앙정렬용ContainerStyle } from "./styles";
import Header from "./components/Layout/Header";
import Pay from "./pages/Pay";
import Landing from "./pages/Landing";

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
      <AnimatePresence exitBeforeEnter initial={false}>
        <AnimatedFrame css={중앙정렬용ContainerStyle}>
          <ResponsiveWrapper isMobileView={isMobileView}>
            <Header />
            <Routes key={location.key} location={location}>
              <Route path="/" element={<Landing />} />
              <Route path="/pay" element={<Pay />} />
              <Route path="/ai" element={<>ai service</>} />
              <Route path="*" element={<div>error page</div>}></Route>
            </Routes>
          </ResponsiveWrapper>
        </AnimatedFrame>
      </AnimatePresence>
    </>
  );
}

export default App;
