import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";

export const ServiceContainer = styled.div`
  position: relative;
  display: flex;
  display: flex;
  gap: 4px;

  border-radius: 8px;
  background-color: #fff;
  padding: 24px 26px 24px 6px;
  width: 100%;
`;

export const ServiceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ServiceTitle = styled.div`
  color: ${colors.neutral20};
  font: ${typography.title01};
`;
export const ServiceHashtagBox = styled.span`
  display: flex;
  gap: 2px;
`;

export const ServiceHashtag = styled.span`
  color: ${colors.neutral40};
  font: ${typography.body02r};
  line-height: 100%;
`;
export const ServiceLabel = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  background: ${colors.neutral30};
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 6px 7px;
  font: ${typography.body03m};
  color: ${colors.neutral100};
`;
