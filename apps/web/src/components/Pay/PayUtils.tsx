/** @jsxImportSource @emotion/react */
import { colors, Icon } from "@kb-bankapp/ui";
import IconButton from "../UI/Button";
import { PayUtilBox, PayUtilContainer } from "./styles";

export const PayUtils = () => {
  const handleQRCodeScan = () => {
    console.log("QR 스캔");
  };
  const handleMembership = () => {
    console.log("멤버쉽");
  };
  return (
    <PayUtilContainer>
      <PayUtilBox onClick={handleQRCodeScan}>
        <IconButton icon={<Icon.Pay.QrCode />} color={colors.neutral100} />
        QR 스캔
      </PayUtilBox>
      <PayUtilBox onClick={handleMembership}>
        <IconButton icon={<Icon.Pay.Membership />} color={colors.neutral100} />
        멤버쉽
      </PayUtilBox>
    </PayUtilContainer>
  );
};
