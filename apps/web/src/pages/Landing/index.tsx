import styled from "@emotion/styled";
import { AccountSlider } from "@src/components/Asset/AccountSlider";
import { BannerBox } from "@src/components/Asset/BannerBox";
import { KBPick } from "@src/components/Asset/KBPick";
import { MyAsset } from "@src/components/Asset/MyAsset";
import { User } from "@src/components/Asset/User";
import KBPayHeader from "@src/components/Layout/Header/KBPayHeader";
import { useTypedSelector } from "@src/lib/hooks/useStore";
import { Mobile } from "@type-default";

const Landing = () => {
  const isMobileView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );
  return (
    <LandingContainer isMobileView={isMobileView}>
      <KBPayHeader />
      <ScrollArea>
        <User />
        <AccountSlider />
        <BannerBox />
        <MyAsset />
        <KBPick />
      </ScrollArea>
    </LandingContainer>
  );
};
export default Landing;

const LandingContainer = styled.div<Mobile>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  font: ${(props) => props.theme.textStyle.title01};
  width: 100%;
  height: 100vh;

  ${(props) =>
    props.isMobileView &&
    `
        height: 100vh;
        height: calc(var(--vh) * 100);
    `}
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`;
