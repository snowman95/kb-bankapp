/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "@kb-bankapp/ui";
import Coins from "@assets/coin/coins.png";

interface EventBannerProps {
  onClickCallback?(): void;
}

export const EventBanner = ({ onClickCallback }: EventBannerProps) => {
  return (
    <BannerContainer onClick={onClickCallback}>
      <BannerBox>
        <Content>월 최대 12,000 리워드</Content>
        <span>
          <BoldContent>5% 리워드 적립 </BoldContent>
          <BoldContent
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
const BannerContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;

  background-color: ${colors.primary2};
  padding-right: 21px;

  width: 100%;
  :hover {
    opacity: 0.9;
  }
`;

const BannerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 0 24px 20px;
`;
const Content = styled.span`
  font: ${(props) => props.theme.textStyle.body03r};
  font-size: 13px;
  color: ${(props) => props.theme.color.neutral30};
`;
const BoldContent = styled.span`
  font: ${(props) => props.theme.textStyle.body01m};
  color: ${(props) => props.theme.color.neutral0};
`;
