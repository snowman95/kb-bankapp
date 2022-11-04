import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";

export const KBPickContainer = styled.div`
  padding: 20px 16px 0 16px;
  width: 100%;
`;

export const KBPickTabs = styled.div`
  display: flex;
  gap: 16px;

  margin-bottom: 4px;
  height: 27px;
`;

export const KBPickTab = styled.span`
  font: ${typography.body01m};
  color: ${colors.neutral50};
`;
export const KBPickSelectedTab = styled.span`
  position: relative;
  font: ${typography.body01m};
  color: ${colors.neutral0};
`;

export const UnderBar = styled.div`
  position: absolute;
  bottom: 0px;

  background: ${colors.neutral20};
  border: 1px solid ${colors.primary2};

  width: 29px;
  height: 2px;
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 19px;

  padding: 6px 20px 24px 24px;
  width: 100%;
  height: 80px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.08);
`;

export const MenuBox = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  white-space: nowrap;
  font: ${typography.body03r};
  color: ${colors.neutral50};
`;

export const CarButton = styled.div`
  position: absolute;
  top: -25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  box-shadow: 0px -3.5px 17.5px rgba(0, 0, 0, 0.08);
  background: #ffffff;

  width: 56px;
  height: 56px;
`;
export const CarInnerCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #dad5cb;
  border-radius: 50%;

  width: 45.5px;
  height: 45.5px;
`;
export const CarDummy = styled.div`
  width: 32px;
  height: 32px;
`;
