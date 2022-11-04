import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";
import { Mobile } from "@type-default";

export const AssetHomeContainer = styled.div<Mobile>`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  ${(props) =>
    props.isMobileView &&
    `
        height: 100vh;
        height: calc(var(--vh) * 100);
    `}
`;
export const ScrollArea = styled.div`
  overflow-y: scroll;

  padding: 16px 15px 20px 16px;
  width: 100%;
  height: 100%;
`;

export const AssetHomeTitleContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 0px 20px 8px;
`;
export const AssetHomeTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const AssetHomeTitleTop = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1px;
`;
export const AssetHomeTitle = styled.div`
  font: ${typography.h01};
  font-weight: bold;
`;
export const AssetHomeContent = styled.div`
  color: ${colors.neutral50};
  font: ${typography.body02r};
`;

export const AssetHomeBody = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;

  background: #f6f1e6;
  margin-left: 7px;
  border-radius: 8px;
  padding: 20px 16px 30px 16px;

  :hover {
    opacity: 0.9;
  }
`;

export const AssetHomeBodyLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const AssetHomeBodyLabelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.neutral60};
  border-radius: 50px;

  padding: 12px 12px 10px 12px;
`;

export const AssetHomeBodyLabelFor = styled.div`
  color: ${colors.neutral40};
  font: ${typography.body01m};
  font-weight: 700;
`;
export const AssetHomeBodyLabel = styled.div`
  color: ${colors.neutral30};
  font: ${typography.h02};
  font-weight: 700;
`;

export const AssetHomeBodyTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  padding: 12px 0 20px 0;
`;
export const AssetHomeBodyTitle = styled.div`
  font: ${typography.body01m};
  color: ${colors.neutral0};
`;

export const AssetHomeBodyContent = styled.div`
  font: ${typography.body02r};
  line-height: 100%;
  color: ${colors.neutral50};
`;

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
