import {
  CustomMenu,
  CustomMenuBox,
  CustomMenuContainer,
  CustomMenuTitle,
  MyAssetContainer,
  MyAssetSelectedTab,
  MyAssetTab,
  MyAssetTabs,
  TotalAssetBottom,
  TotalAssetBox,
  TotalAssetContainer,
  TotalAssetTitle,
  TotalAssetTop,
  UnderBar,
} from "./styles";
import TotalAsset from "@assets/total-asset.png";
import { ShadowButton } from "../styles";
import { Icon, IconButton } from "@kb-bankapp/ui";

export const MyAsset = () => {
  return (
    <MyAssetContainer>
      <MyAssetTabs>
        <MyAssetSelectedTab>
          자산
          <UnderBar />
        </MyAssetSelectedTab>
        <MyAssetTab>지출</MyAssetTab>
      </MyAssetTabs>
      <TotalAssetContainer>
        <img src={TotalAsset} alt="total-asset" />
        <TotalAssetBox>
          <TotalAssetTop>
            <TotalAssetTitle>총자산</TotalAssetTitle>
            자산 숨김
          </TotalAssetTop>
          <TotalAssetBottom>22.10.23 20:05 기준</TotalAssetBottom>
        </TotalAssetBox>
        <ShadowButton>보기</ShadowButton>
      </TotalAssetContainer>
      <CustomMenuContainer>
        <CustomMenuTitle>나를 위한 맞춤메뉴</CustomMenuTitle>
        <CustomMenuBox>
          {["전체계좌조회", "KB증권 홈", "이체", "정기예금"].map((menu) => (
            <CustomMenu key={menu}>
              {menu}
              <IconButton
                theme="PAY"
                custom={{
                  DIR: "RIGHT",
                }}
                size={12}
                icon={<Icon.Pay.TransferArrow />}
              />
            </CustomMenu>
          ))}
        </CustomMenuBox>
      </CustomMenuContainer>
    </MyAssetContainer>
  );
};
