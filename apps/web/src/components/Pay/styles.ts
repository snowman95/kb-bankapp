import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";

export const PayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid ${colors.neutral95};
  padding: 20px 24px 0 24px;
  margin: 20px 0;

  color: ${colors.neutral40};
  font: ${typography.body01r};
`;
export const PayBox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2px;
  width: 100%;
`;
export const Separator = styled.div`
  color: ${colors.neutral80};
`;

export const PayUtilContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  color: ${colors.neutral90};
  font: ${typography.body03r};
`;
export const PayUtilBox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
