/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";
import Coins from "@assets/coin/coins.png";

type ThemeType = "primary2" | "primary3";
interface EventBannerProps {
  theme: ThemeType;
  onClickCallback?(): void;
}

const THEME = {
  primary2: {
    Color: {
      Content: colors.neutral30,
      BoldContent: colors.neutral0,
      Background: colors.primary2,
    },
    Padding: {
      Box: "24px 0 24px 20px",
      Image: "0 21px 0 0 ",
    },
    Height: 84,
  },
  primary3: {
    Color: {
      Content: colors.neutral90,
      BoldContent: colors.primary2,
      Background: colors.primary3,
    },
    Padding: {
      Box: "18px 0px 18px 20px",
      Image: "0 33px 0 0 ",
    },
    Height: 72,
  },
};

export const EventBanner = ({ theme, onClickCallback }: EventBannerProps) => {
  return (
    <BannerContainer onClick={onClickCallback} themeProps={theme}>
      <BannerBox themeProps={theme}>
        <Content themeProps={theme}>월 최대 12,000 리워드</Content>
        <span>
          <BoldContent themeProps={theme}>5% 리워드 적립 </BoldContent>
          <BoldContent
            themeProps={theme}
            css={css`
              color: ${colors.neutral100};
            `}
          >
            (응모필수)
          </BoldContent>
        </span>
      </BannerBox>
      <img src={Coins} alt="coins" height="100%" />
    </BannerContainer>
  );
};
const BannerContainer = styled.button<{ themeProps: ThemeType }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;

  background-color: ${(props) => THEME[props.themeProps].Color.Background};
  padding: ${(props) => THEME[props.themeProps].Padding.Image};

  width: 100%;
  height: ${(props) => THEME[props.themeProps].Height}px;

  :hover {
    opacity: 0.9;
  }
`;

const BannerBox = styled.div<{ themeProps: ThemeType }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: ${(props) => THEME[props.themeProps].Padding.Box};
`;
const Content = styled.span<{ themeProps: ThemeType }>`
  font: ${typography.body03r};
  text-align: start;
  font-size: 13px;
  color: ${(props) => THEME[props.themeProps].Color.Content};
`;
const BoldContent = styled.span<{ themeProps: ThemeType }>`
  font: ${typography.body01m};
  color: ${(props) => THEME[props.themeProps].Color.BoldContent};
`;
