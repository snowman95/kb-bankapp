import styled from "@emotion/styled";
import { colors, Icon } from "@kb-bankapp/ui";

export const Vibration = () => {
  return (
    <Container>
      <span>흔들기 OFF</span>
      <Icon.Pay.Vibration color={colors.neutral50} />
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
