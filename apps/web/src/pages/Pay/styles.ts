import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";
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
        height: calc(var(--vh) * 100);
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

  color: ${colors.neutral60};
  font: ${typography.body03r};
`;
