import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";

export const MyAssetContainer = styled.div`
  padding: 0 16px;
  width: 100%;
`;

export const MyAssetTabs = styled.div`
  display: flex;
  gap: 16px;

  margin-bottom: 4px;
  border-bottom: 1px solid ${colors.neutral80};
  height: 27px;
`;

export const MyAssetTab = styled.span`
  font: ${typography.body01m};
  color: ${colors.neutral50};
`;
export const MyAssetSelectedTab = styled.span`
  position: relative;
  font: ${typography.body01m};
  color: ${colors.neutral0};
`;

export const UnderBar = styled.div`
  position: absolute;
  bottom: 0px;

  background: ${colors.neutral20};
  border: 1px solid ${colors.neutral20};

  width: 29px;
  height: 2px;
`;

export const TotalAssetContainer = styled.div`
  display: flex;
  gap: 8px;

  padding: 16px 0px 20px 0px;
  width: 100%;
`;

export const TotalAssetBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  font: ${typography.body01r};
  color: ${colors.neutral0};
`;
export const TotalAssetTitle = styled.span`
  font: ${typography.body01r};
  color: ${colors.neutral0};
`;
export const TotalAssetTop = styled.div`
  display: flex;
  gap: 6px;
  font: ${typography.body01m};
  color: ${colors.neutral60};
`;
export const TotalAssetBottom = styled.div`
  display: flex;
  gap: 8px;
  font: ${typography.body02r};
  color: ${colors.neutral60};
`;

export const CustomMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  background: ${colors.primary2};
  padding: 16px 0 16px 16px;
  width: 100%;
  height: 91px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

export const CustomMenuTitle = styled.span`
  height: 23px;
  font: ${typography.body01m};
  color: ${colors.neutral10};
`;

export const CustomMenuBox = styled.div`
  display: flex;
  gap: 4px;
`;
export const CustomMenu = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  padding: 8px 7px 8px 9px;

  font: ${typography.body03r};
  color: ${colors.neutral30};
`;
