import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";
import { Mobile } from "@type-default";

export const AIServiceContainer = styled.div<Mobile>`
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

  padding: 16px 8px 37px 16px;
  width: 100%;
  height: 100%;
`;

export const AIServiceTitleContainer = styled.div`
  display: flex;
  gap: 2px;
  padding: 0 0 20px 8px;
`;
export const AIServiceTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const AIServiceTitleTop = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1px;
`;
export const AIServiceTitle = styled.div`
  font: ${typography.h01};
  font-weight: bold;
`;
export const AIServiceUserName = styled.span`
  font: ${typography.h01};
  font-weight: 800;
`;

export const AIServiceContent = styled.div`
  color: ${colors.neutral50};
  font: ${typography.body02r};
`;

export const AIServiceBody = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  padding-right: 8px;
`;

export const AIServiceMyTypeContainer = styled.div`
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
export const AIServiceMyTypeTitle = styled.div`
  color: ${colors.neutral0};
  font: ${typography.h02};
  font-weight: 700;
`;
export const AIServiceBodyMyTypeBox = styled.div`
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
`;

export const AIServiceBodyLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  margin-top: 32px;
`;

export const AIServiceBodyLabelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.neutral60};
  border-radius: 50px;

  padding: 12px 12px 10px 12px;
`;

export const AIServiceBodyLabelFor = styled.div`
  color: ${colors.neutral40};
  font: ${typography.body01m};
  font-weight: 700;
`;
export const AIServiceBodyLabel = styled.div`
  color: ${colors.neutral30};
  font: ${typography.h02};
  font-weight: 700;
`;

export const AIServiceBodyTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  padding: 12px 0 20px 0;
`;
export const AIServiceBodyTitle = styled.div`
  font: ${typography.body01m};
  color: ${colors.neutral0};
`;

export const AIServiceBodyContent = styled.div`
  font: ${typography.body02r};
  line-height: 100%;
  color: ${colors.neutral50};
`;

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
