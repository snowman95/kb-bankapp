import styled from "@emotion/styled";
import { ReactComponent as OnSite } from "@assets/pay-payment-on-site.svg";
import { ReactComponent as QRCode } from "@assets/pay-payment-qr-code.svg";
import IconButton from "../UI/Button";

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
        <IconButton icon={<OnSite />} />
        현장결제
      </PayBox>
      <Seperator>|</Seperator>
      <PayBox onClick={handleQRCodePayment}>
        <IconButton icon={<QRCode />} />
        PC결제
      </PayBox>
    </PayContainer>
  );
};

const PayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid ${(props) => props.theme.color.neutral95};
  padding: 20px 24px 0 24px;
  margin: 20px 0;

  color: ${(props) => props.theme.color.neutral40};
  font: ${(props) => props.theme.textStyle.body01r};
`;
const PayBox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2px;
  width: 100%;
`;
const Seperator = styled.div`
  color: ${(props) => props.theme.color.neutral80};
`;
