import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DeviceType =
  | "Loading"
  | "Mobile"
  | "MobileLike"
  | "Desktop"
  | "Tablet";

interface SettingState {
  isMobileView: boolean;
  deviceType: DeviceType;
}
const initialState: SettingState = {
  isMobileView: false,
  deviceType: "Loading",
};
const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setIsMobileView: (state, action: PayloadAction<boolean>) => {
      state.isMobileView = action.payload;
    },
    setDeviceType(state, action: PayloadAction<DeviceType>) {
      state.deviceType = action.payload;
    },
  },
});

const { actions, reducer } = settingSlice;
export const { setIsMobileView, setDeviceType } = actions;
export default reducer;
