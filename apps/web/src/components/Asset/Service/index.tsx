/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "@kb-bankapp/ui";
import ChartIcon from "@src/assets/service/chart.png";
import EconomyIcon from "@src/assets/service/economy.png";
import {
  ServiceBox,
  ServiceContainer,
  ServiceHashtag,
  ServiceHashtagBox,
  ServiceLabel,
  ServiceTitle,
} from "./styles";

interface ServiceProps {
  type: "경제상식" | "보험" | "주식리포트";
  theme: "기본" | "서비스";
}

const TYPE = {
  경제상식: {
    title: "재테크 고수가 되기 위한 필수 경제상식",
    icon: EconomyIcon,
    hashtags: ["돈되는 상식", "금융꿀팁"],
  },
  보험: {
    title: "[보험] 위험 대비 상품, 가장 많이 판매된 베스트",
    icon: ChartIcon,
    hashtags: ["글로벌 금융시장 동향", "주요지수"],
  },
  주식리포트: {
    title: "일주일을 마감하는 주간시장 리포트",
    icon: ChartIcon,
    hashtags: ["글로벌 금융시장 동향", "주요지수"],
  },
};

export const Service = ({ type, theme }: ServiceProps) => {
  return (
    <ServiceContainer
      css={css`
        ${theme === "서비스" && `border: 1px solid ${colors.neutral90};`}
      `}
    >
      {theme === "서비스" ? <ServiceLabel>서비스</ServiceLabel> : <></>}
      <img src={TYPE[type].icon} alt={type} width={44} height={44} />
      <ServiceBox>
        <ServiceTitle>{TYPE[type].title}</ServiceTitle>
        <ServiceHashtagBox>
          {TYPE[type].hashtags.map((tag) => (
            <ServiceHashtag key={`${type}_${tag}`}>#{tag}</ServiceHashtag>
          ))}
        </ServiceHashtagBox>
      </ServiceBox>
    </ServiceContainer>
  );
};
