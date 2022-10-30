import QRCodeImage from "@assets/QR Code.png";
import styled from "@emotion/styled";
import { colors } from "@kb-bankapp/ui";

export const QRCodeBanner = () => {
  return (
    <QRCodeBannerContainer>
      <Info>?</Info>
      <QRCode src={QRCodeImage} alt="QRCode" />
    </QRCodeBannerContainer>
  );
};

const QRCodeBannerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background-color: #fff;

  @media (max-height: 705px) {
    padding: 5px;
  }
  padding: 14px;
`;

const QRCode = styled.img`
  @media (max-height: 750px) {
    width: 80px;
    height: 80px;
  }
  @media (max-height: 705px) {
    width: 50px;
    height: 50px;
  }
  max-width: 124px;
  max-height: 124px;
`;

const Info = styled.div`
  position: absolute;
  top: 12.25px;
  left: 12.25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid ${colors.neutral70};
  border-radius: 50%;

  width: 19.5px;
  height: 19.5px;

  font: bold;
  color: ${colors.neutral70};
`;
