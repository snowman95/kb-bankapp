import { EventBanner } from "@src/components/Banner/EventBanner";
import { CardSlider } from "@src/components/Pay/CardSlider";
import { PayMethod } from "@src/components/Pay/PayMethod";
import { Vibration } from "@src/components/Vibration";
import {
  PaddingContainer,
  PayContainer,
  RewardTransferText,
  VibrationContainer,
} from "./styles";
import { useTypedSelector } from "@src/lib/hooks/useStore";
import Header from "@src/components/Layout/Header";
import { IconButton, Icon } from "@kb-bankapp/ui";

const Pay = () => {
  const isMobilveView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );
  return (
    <>
      <Header />
      <PayContainer isMobileView={isMobilveView}>
        <VibrationContainer>
          <Vibration />
        </VibrationContainer>
        <CardSlider />
        <div>
          <PaddingContainer>
            <EventBanner />
          </PaddingContainer>
          <PayMethod />
          <RewardTransferText>
            <span>KB스타뱅킹 페이 리워드 이체하기</span>
            <IconButton icon={<Icon.Pay.TransferArrow />} rotationDir="RIGHT" />
          </RewardTransferText>
        </div>
      </PayContainer>
    </>
  );
};
export default Pay;
