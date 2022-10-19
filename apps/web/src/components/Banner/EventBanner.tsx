/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const EventBanner = () => {
  return (
    <BannerContainer>
      <Content>월 최대 12,000 리워드</Content>
      <span>
        <BoldContent>5% 리워드 적립 </BoldContent>
        <BoldContent
          css={css`
            color: #427cf6;
          `}
        >
          (응모필수)
        </BoldContent>
      </span>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  background-color: #f7f7f7;
  border-radius: 4px;

  margin: 0 24px;
  padding: 24px 20px;
`;
const Content = styled.span`
  font: ${(props) => props.theme.textStyle.body03r};
  color: ${(props) => props.theme.color.neutral60};
`;
const BoldContent = styled.span`
  font: ${(props) => props.theme.textStyle.body01m};
  color: ${(props) => props.theme.color.neutral0};
`;
