import { colors, Icon, IconButton } from "@kb-bankapp/ui";
import { PayBox, PayContainer, Separator } from "./styles";

export const PayMethod = () => {
  const handleOnSitePayment = () => {
    console.log("현장결제");
  };
  const handleQRCodePayment = () => {
    console.log("POC결제");
  };
  return (
    <PayContainer>
      <PayBox onClick={handleOnSitePayment}>
        <IconButton theme="PAY" icon={<Icon.Pay.OnSite />} />
        현장결제
      </PayBox>
      <Separator>|</Separator>
      <PayBox onClick={handleQRCodePayment}>
        <IconButton theme="PAY" icon={<Icon.Pay.QrCode />} />
        PC결제
      </PayBox>
    </PayContainer>
  );
};
