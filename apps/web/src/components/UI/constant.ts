export type IconSize = "TINY" | "SMALL" | "MEDIUM" | "LARGE";
export const ICON_SIZE: { [size in IconSize]: string } = {
  TINY: "16px",
  SMALL: "28px",
  MEDIUM: "40px",
  LARGE: "48px",
};
export type IconDirection = "UP" | "RIGHT" | "DOWN" | "LEFT";
export const ICON_DIRECTION = {
  UP: 0,
  RIGHT: 90,
  DOWN: 180,
  LEFT: 270,
};

export type IconBorderRadiusDirection =
  | "ALL"
  | "UP"
  | "RIGHT"
  | "DOWN"
  | "LEFT";
export const ICON_BORDER_RADIUS_DIRECTION: {
  [key in IconBorderRadiusDirection]: string;
} = {
  ALL: "10px",
  UP: "10px 10px 0 0",
  RIGHT: "0 10px 10px 0",
  DOWN: "0 0 10px 10px",
  LEFT: "10px 0 0 10px",
};
