import { Theme } from "@emotion/react";
import { color, textStyle } from "./theme/기본";

// 타입, 스타일의 변수 목록이 동일해야 함
interface Color {
  primary1: string;
  primary2: string;
  primary3: string;
  secondary1: string;
  secondary2: string;
  secondary3: string;
  neutral0: string;
  neutral10: string;
  neutral20: string;
  neutral30: string;
  neutral40: string;
  neutral50: string;
  neutral60: string;
  neutral70: string;
  neutral80: string;
  neutral90: string;
  neutral95: string;
  neutral99: string;
  neutral100: string;
}

interface TextStyle {
  h01: string;
  h02: string;
  title01: string;
  title02: string;
  title03: string;
  body01m: string;
  body01r: string;
  body02m: string;
  body02r: string;
  body03m: string;
  body03r: string;
}

// 이걸 안해주면 다른 파일에서 자동완성이 안됨
declare module "@emotion/react" {
  export interface Theme {
    textStyle: TextStyle;
    color: Color;
  }
}

const theme: Theme = {
  color: color,
  textStyle: textStyle,
};
export default theme;
