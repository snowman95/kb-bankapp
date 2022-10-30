import styled from "@emotion/styled";
import { HEADER_HEIGHT } from "@src/constants";
import { Mobile } from "@type-default";

export const PayContainer = styled.div<Mobile>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 16px 0px 39px 0px;
  height: 100%;
  ${(props) =>
    props.isMobileView &&
    `
        height: 100vh;
        height: calc(var(--vh) * 100 - ${HEADER_HEIGHT}px);
    `}
`;

export const PaddingContainer = styled.div`
  display: flex;
  padding: 0 24px;
`;

export const VibrationContainer = styled(PaddingContainer)`
  justify-content: flex-end;
`;
export const RewardTransferText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 26px 0 24px;

  color: ${(props) => props.theme.color.neutral60};
  font: ${(props) => props.theme.textStyle.body03r};
`;
