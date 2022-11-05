/** @jsxImportSource @emotion/react */
import { useTypedSelector } from "@src/lib/hooks/useStore";
import { ResponsiveWrapper, 중앙정렬용ContainerStyle } from "@src/styles";
import { AnimatedFrame } from "@src/styles/theme/motions";
import { Outlet } from "react-router-dom";

export const AnimatedRoute = () => {
  const isMobileView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );
  return (
    <AnimatedFrame css={중앙정렬용ContainerStyle}>
      <ResponsiveWrapper isMobileView={isMobileView}>
        <Outlet />
      </ResponsiveWrapper>
    </AnimatedFrame>
  );
};
