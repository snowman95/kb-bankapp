import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Mobile } from "@type-default";

export const 중앙정렬용ContainerStyle = css`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;
export const ResponsiveWrapper = styled.section<Mobile>`
  background-color: #fff;
  width: 100%;
  height: 100%;

  ${(props) => (props.isMobileView ? MobileStyle : DesktopStyle)};
`;

export const DesktopStyle = css`
  width: 360px;
`;
export const MobileStyle = css``;
