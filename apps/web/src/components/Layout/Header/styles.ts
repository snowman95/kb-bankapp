import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";
import { HEADER_HEIGHT, MOBILE_WIDTH } from "@src/constants";
import { Mobile } from "@type-default";

export const HeaderContainer = styled.header<Mobile>`
  z-index: 4;
  position: relative;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px 10px 16px;

  ${(props) =>
    props.isMobileView ? `width: 100%;` : `width : ${MOBILE_WIDTH}px;`}
  height: ${HEADER_HEIGHT}px;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.span`
  color: ${(props) => props.theme.color.neutral0};
  font: ${(props) => props.theme.textStyle.title02};
`;

export const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;
export const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const KBPayButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  border: 1px solid ${colors.neutral0};
  border-radius: 50px;
  padding: 2px 10px 3px 7px;

  width: 77px;
  height: 25px;

  white-space: nowrap;
  font: ${typography.body03m};
  color: ${colors.neutral0};
`;
