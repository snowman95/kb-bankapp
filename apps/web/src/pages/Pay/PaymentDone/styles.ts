import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";
import { Mobile } from "@type-default";

export const PaymentDoneContainer = styled.div<Mobile>`
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  ${(props) =>
    props.isMobileView &&
    `
        height: 100vh;
        height: calc(var(--vh) * 100);
    `}
`;
export const Wave = styled.div`
  position: absolute;
  top: -203.5px;
  border-radius: 50%;
  background: radial-gradient(
    85.34% 85.34% at 50% 23.68%,
    rgba(255, 255, 255, 0.00211607) 0%,
    rgba(255, 188, 0, 0) 52.6%,
    rgba(255, 188, 0, 0.15) 96.35%
  );
  width: 407px;
  height: 407px;
`;

export const PaymentDoweTitle = styled.div`
  position: relative;

  margin-top: 132px;

  font: ${typography.h01};
  color: ${colors.neutral10};
`;
