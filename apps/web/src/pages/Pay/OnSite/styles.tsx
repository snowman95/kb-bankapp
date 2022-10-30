import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";
import { Mobile } from "@type-default";

export const OnSitePayContainer = styled.div<Mobile>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${colors.neutral20};
  padding: 27px 16px 38px 16px;
  height: 100%;
  ${(props) =>
    props.isMobileView &&
    `
        height: 100vh;
        height: calc(var(--vh) * 100);
    `}
`;

export const OnSitePayHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
  color: ${colors.neutral100};
  font: ${typography.title01};
`;
