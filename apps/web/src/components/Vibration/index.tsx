import styled from "@emotion/styled";
import { ReactComponent as PhoneVibration } from "@assets/pay-phone-vibration.svg";

export const Vibration = () => {
  return (
    <Container>
      <span>흔들기 OFF</span>
      <PhoneVibration />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #f6f6f6;
  border-radius: 100px;

  padding: 6px 12px;
  color: ${(props) => props.theme.color.neutral50};
  font: ${(props) => props.theme.textStyle.body03r};
`;
