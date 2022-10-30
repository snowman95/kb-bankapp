import { colors, Icon } from "@kb-bankapp/ui";
import IconButton from "../UI/Button";
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
        <IconButton icon={<Icon.Pay.OnSite />} color={colors.neutral60} />
        현장결제
      </PayBox>
      <Separator>|</Separator>
      <PayBox onClick={handleQRCodePayment}>
        <IconButton icon={<Icon.Pay.QrCode />} color={colors.neutral60} />
        PC결제
      </PayBox>
    </PayContainer>
  );
};
