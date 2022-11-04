import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";

export const SurveyContainer = styled.dialog`
  display: flex;
  flex-direction: column;

  border: none;
  border-radius: 8px;
  filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.16));

  padding: 0;
  width: 320px;
  height: 455px;
`;

export const SurveyContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${colors.primary1};
  border-radius: 8px 8px 0 0;

  padding: 12px 15px;

  color: ${colors.neutral0};
  font: ${typography.body01m};
`;

export const SurveyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  background: #fff;
  padding: 12px 20px;
  color: ${colors.neutral0};
  font: ${typography.body01m};
`;
export const SurveyContent = styled.div`
  font: ${typography.body01r};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding-top: 8px;
  margin-top: 10px;
`;
export const YesButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${colors.neutral95};
  border-radius: 4px;
  padding: 12px 0px;

  width: 80px;
  height: 32px;

  :hover {
    opacity: 0.9;
  }
`;
export const NoButton = styled(YesButton)`
  background: ${colors.neutral90};
`;
