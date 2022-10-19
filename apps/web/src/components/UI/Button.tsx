/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import React, { useCallback, useEffect, useState } from "react";
import { IconDirection, IconSize } from "./constant";
import { defaultStyle, rotateStyle, sizeStyle } from "./styles";

export interface IButtonIcon {
  /** 아이콘의 유형을 설정합니다. */
  icon: React.ReactElement;
  /** 아이콘 stroke색상을 설정합니다. (default #000) */
  color?: string;
  /** 아이콘 버튼 크기를 설정합니다. (default SMALL=28px) */
  size?: IconSize;
  /** 회전 방향을 설정합니다. (default UP) */
  rotationDir?: IconDirection;
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** css방식의 custom emotion 태그를 사용할 수 있습니다. */
  emotionCss?: SerializedStyles;
}
const COLOR = {
  PRESSED: "#707070",
  DISABLED: "#d2d6da",
};
const IconButton = ({
  icon,
  color,
  size,
  disabled,
  rotationDir,
  onClick,
  emotionCss,
}: IButtonIcon): React.ReactElement => {
  const [iconColor, setIconColor] = useState(color);

  const handleButtonDown = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => setIconColor(COLOR.PRESSED),
    []
  );
  const handleButtonUp = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => setIconColor(color),
    [color]
  );

  useEffect(() => {
    setIconColor(disabled ? COLOR.DISABLED : color);
  }, [disabled, color]);

  const clonedIcon = React.cloneElement(icon, { color: iconColor });
  return (
    <button
      onClick={onClick}
      onMouseDown={handleButtonDown}
      onMouseUp={handleButtonUp}
      onMouseLeave={handleButtonUp}
      disabled={disabled}
      css={[
        defaultStyle,
        sizeStyle(size || "LARGE"),
        rotateStyle(rotationDir),
        emotionCss,
      ]}
    >
      {clonedIcon}
    </button>
  );
};
IconButton.defaultProps = {
  icon: "Arrow",
  color: "#000",
  size: "SMALL",
  rotationDir: "UP",
  disabled: false,
  onclick: () => console.log("icon clicked"),
};

export default IconButton;
