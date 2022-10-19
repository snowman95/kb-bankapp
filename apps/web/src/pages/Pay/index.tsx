import { EventBanner } from "@src/components/Banner/EventBanner";
import { Cards } from "@src/components/Card";
import { PayMethod } from "@src/components/Pay/PayMethod";
import { Vibration } from "@src/components/Vibration";
import { PayContainer, RewardTransferText, VibrationContainer } from "./styles";
import { ReactComponent as PaymentTransfer } from "@assets/pay-payment-transfer.svg";
import { useTypedSelector } from "@src/lib/hooks/useStore";

const Pay = () => {
  const isMobilveView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );
  return (
    <PayContainer isMobileView={isMobilveView}>
      <VibrationContainer>
        <Vibration />
      </VibrationContainer>
      <Cards />
      <div>
        <EventBanner />
        <PayMethod />
        <RewardTransferText>
          <span>KB스타뱅킹 페이 리워드 이체하기</span>
          <PaymentTransfer />
        </RewardTransferText>
      </div>
    </PayContainer>
  );
};
export default Pay;
