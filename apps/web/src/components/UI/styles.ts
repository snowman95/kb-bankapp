import { css } from "@emotion/react";
import {
  IconSize,
  ICON_SIZE,
  ICON_DIRECTION,
  IconDirection,
  ICON_BORDER_RADIUS_DIRECTION,
  IconBorderRadiusDirection,
} from "./constant";

export const defaultStyle = css`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  outline: none;
  border: none;
  padding: 0;
  background-color: transparent;

  &:disabled {
    cursor: not-allowed;
  }
`;
export const shadowStyle = css`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`;

/**
 * @param size : 버튼 크기 (width/height)
 */
export const sizeStyle = (size: IconSize) => css`
  width: ${ICON_SIZE[size]};
  height: ${ICON_SIZE[size]};
`;

/**
 * @param rotationDir : 회전 방향
 */
export const rotateStyle = (rotationDir: IconDirection | undefined) => css`
  transform: rotate(${ICON_DIRECTION[rotationDir || "UP"]}deg);
`;

/**
 * @param defaultColor : 기본 색상
 * @param activeColor : active 상태의 색상
 */
export const backgroundStyle = ({
  defaultColor,
  activeColor,
}: {
  defaultColor?: string;
  activeColor: string;
}) => css`
  background-color: ${defaultColor || "transparent"};

  &:active {
    background-color: ${activeColor};
  }
`;
/**
 * @param dir : 테두리 둥근 모서리 적용 방향
 */
export const borderRadiusStyle = (
  dir: IconBorderRadiusDirection | undefined
) => css`
  border-radius: ${ICON_BORDER_RADIUS_DIRECTION[dir || "ALL"]};
`;
