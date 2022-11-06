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
  padding: 0 0 20px 8px;
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
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  padding-right: 8px;
`;

export const AssetHomeMyTypeContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  background: #f6f1e6;
  padding: 20px 15px;
  font: ${typography.body02r};
  font-weight: 300;
  font-weight: 350;
  line-height: 100%;
`;
export const AssetHomeMyTypeTitle = styled.div`
  color: ${colors.neutral0};
  font: ${typography.h02};
  font-weight: 700;
`;
export const AssetHomeBodyMyTypeBox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 12px 0 16px 0;
  border-radius: 50px;
  border: 1px solid ${colors.neutral60};
  padding: 10px 12px;

  width: fit-content;
  color: ${colors.neutral0};
  font: ${typography.title03};
  :hover {
    opacity: 0.8;
  }
`;

export const AssetHomeBodyLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  margin-top: 32px;
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

export const AssetHomeBlurBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;
export const AssetHomeBlurFilter = styled.div`
  z-index: 50;

  position: absolute;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2.5px);
  width: 360px;
  height: 403px;
`;
