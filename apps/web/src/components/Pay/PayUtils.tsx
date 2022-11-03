/** @jsxImportSource @emotion/react */
import { colors, Icon, IconButton } from "@kb-bankapp/ui";
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
        <IconButton
          theme="PAY"
          icon={<Icon.Pay.QrCode />}
          custom={{
            ICON_COLOR: {
              IDLE: colors.neutral100,
            },
          }}
        />
        QR 스캔
      </PayUtilBox>
      <PayUtilBox onClick={handleMembership}>
        <IconButton
          theme="PAY"
          icon={<Icon.Pay.Membership />}
          custom={{
            ICON_COLOR: {
              IDLE: colors.neutral100,
            },
          }}
        />
        멤버쉽
      </PayUtilBox>
    </PayUtilContainer>
  );
};
