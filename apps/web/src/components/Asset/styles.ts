import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";

export const ShadowButton = styled.div`
  border: 1px solid ${colors.neutral99};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 50px;
  padding: 6px 10px;

  width: 43px;
  height: 24px;

  white-space: nowrap;
  color: ${colors.neutral40};
  font: ${typography.body03r};
`;
