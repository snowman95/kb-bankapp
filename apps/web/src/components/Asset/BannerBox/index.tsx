import { EventBanner } from "@src/components/Banner/EventBanner";
import { Tabs } from "@src/components/Tabs";
import { BannerContainer, PauseBox, PauseIcon, TabBox } from "./styles";

export const BannerBox = () => {
  return (
    <BannerContainer>
      <EventBanner theme="primary3" />
      <TabBox>
        <Tabs id="banner" size={5} current={2} />
        <PauseBox>
          <PauseIcon />
          <PauseIcon />
        </PauseBox>
      </TabBox>
    </BannerContainer>
  );
};
