import { useCallback, useEffect } from "react";
import { useTypedDispatch } from "./useStore";
import useWindowSize from "./useWindowSize";
import {
  setIsMobileView,
  setDeviceType,
  DeviceType,
} from "modules/settingStore";
import { isMobile, isTablet } from "react-device-detect";
import { md } from "constants/mobile";

export const useDeviceResizer = () => {
  const [windowWidth] = useWindowSize();
  const dispatch = useTypedDispatch();

  const onSetIsMobileView = useCallback(
    (payload: boolean) => {
      dispatch(setIsMobileView(payload));
    },
    [dispatch]
  );
  const onSetDeviceType = useCallback(
    (payload: DeviceType) => {
      dispatch(setDeviceType(payload));
    },
    [dispatch]
  );

  useEffect(() => {
    if (windowWidth === 0) return;

    // 768
    if (windowWidth < 400) {
      onSetIsMobileView(true);
      onSetDeviceType("MobileLike");
    } else {
      // 테블릿 감지
      if (md.tablet() !== null) {
        onSetIsMobileView(false);
        onSetDeviceType("Tablet");
      } else if (isMobile && !isTablet) {
        onSetIsMobileView(true);
        onSetDeviceType("Mobile");
      } else {
        onSetIsMobileView(false);
        onSetDeviceType("Desktop");
      }
    }
  }, [onSetIsMobileView, onSetDeviceType, windowWidth]);
};
