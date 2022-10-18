/** @jsxImportSource @emotion/react */
import React from "react";
import { AnimatePresence } from "framer-motion";
import { ResponsiveWrapper, 중앙정렬용ContainerStyle } from "styles";
import { AnimatedFrame } from "styles/theme/motions";
import { useTypedSelector } from "lib/hooks/useStore";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDeviceResizer } from "lib/hooks/useDeviceResizer";

function App() {
  const location = useLocation();
  useDeviceResizer();
  const isMobileView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <AnimatedFrame css={중앙정렬용ContainerStyle}>
        <ResponsiveWrapper isMobileView={isMobileView}>
          <Routes key={location.key} location={location}>
            <Route path="/" element={<>home page</>} />
            <Route path="*" element={<div>error page</div>}></Route>
          </Routes>
        </ResponsiveWrapper>
      </AnimatedFrame>
    </AnimatePresence>
  );
}

export default App;
