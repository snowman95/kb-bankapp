import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";

export const AIChatBubble = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  background: ${colors.primary3};
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08));
  border-radius: 8px;
  padding: 12px 16px;

  font: ${typography.title03};
  line-height: 150%;
  color: ${colors.neutral100};
`;
export const AlignBox = styled.div`
  display: flex;
  width: 100%;
`;
export const AIChatBubbleTail = styled.div`
  z-index: -1;
  position: absolute;
  bottom: -8px;
  left: -8px;
`;
export const AIChatBubbleRightTail = styled.div`
  z-index: -1;
  position: absolute;
  bottom: -8px;
  right: -8px;
  transform: scaleX(-1);
`;
export const ReturnButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  background: ${colors.primary3};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);

  border-radius: 100px;
  padding: 6px 12px;

  width: fit-content;

  color: ${colors.neutral100};
  font: ${typography.body01m};
`;
