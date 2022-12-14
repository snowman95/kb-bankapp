/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  animate,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  CardBox,
  CardContainer,
  CardCraousel,
  CardRegistrationBox,
  CardRegistrationText,
  CardTitle,
  UsageHistoryLink,
} from "./styles";
import CardGoodDay from "@assets/card/card-gooday.png";
import CardTitanium from "@assets/card/card-titanium.png";
import { colors, Icon, IconButton } from "@kb-bankapp/ui";
import { useNavigate } from "react-router-dom";

const CARD_COUNT = 3;
const SPACE = 95 * (CARD_COUNT - 1);
export const CardSlider = () => {
  const x = useMotionValue(SPACE);
  return (
    <CardContainer>
      <IconButton
        theme="PAY"
        icon={<Icon.Pay.CardArrow />}
        custom={{
          ICON_COLOR: {
            IDLE: colors.neutral90,
          },
          SIZE: "MEDIUM",
          DIR: "LEFT",
        }}
        emotionCss={css`
          z-index: 1;
          position: absolute;
          left: 24px;
        `}
        onClick={() => {
          animate(x, Math.min(SPACE, x.get() + SPACE));
        }}
      />
      <IconButton
        theme="PAY"
        icon={<Icon.Pay.CardArrow />}
        custom={{
          ICON_COLOR: {
            IDLE: colors.neutral60,
          },
          SIZE: "MEDIUM",
          DIR: "RIGHT",
        }}
        emotionCss={css`
          z-index: 1;
          position: absolute;
          right: 24px;
        `}
        onClick={() => {
          animate(x, Math.max(-SPACE, x.get() - SPACE));
        }}
      />
      <>
        <CardCraousel
          drag="x"
          dragConstraints={{ right: SPACE, left: -SPACE }}
          style={{ x }}
          whileTap={{ cursor: "grabbing" }}
        >
          <CardManagement x={x} />
          <Card x={x} index={0} title={""} src={CardTitanium} />
          <Card x={x} index={1} title={""} src={CardGoodDay} />
        </CardCraousel>
      </>
      <UsageHistoryLink>이용내역조회</UsageHistoryLink>
    </CardContainer>
  );
};

export const CardManagement = ({ x }: { x: MotionValue<number> }) => {
  // const opacity = useTransform(x, [0, SPACE], [0.5, 1]);
  const scale = useTransform(x, [0, SPACE], [0.83, 1]);
  const textTop = useTransform(x, [0, SPACE], [-20, -70]);
  const textOpacity = useTransform(x, [0, SPACE], [0, 1]);
  return (
    <CardBox style={{ scale }}>
      <CardTitle style={{ top: textTop, opacity: textOpacity }}>
        결제수단 추가/삭제
      </CardTitle>
      <CardRegistrationBox>
        <IconButton
          theme="PAY"
          icon={<Icon.Pay.CardRegistration />}
          custom={{
            ICON_COLOR: {
              IDLE: colors.neutral20,
            },
          }}
        />
        <CardRegistrationText>결제수단 관리</CardRegistrationText>
      </CardRegistrationBox>
    </CardBox>
  );
};

interface CardProps {
  x: MotionValue<number>;
  index: number;
  title: string;
  src: string;
}
export const Card = ({ x, index, title, src }: CardProps) => {
  const navigate = useNavigate();
  const openOnsitePayment = () => {
    navigate("/pay/onsite");
  };

  const input = [-SPACE * (index + 1), -SPACE * index, SPACE * (1 - index)];
  // const opacity = useTransform(x, input, [0.5, 1, 0.5]);
  const scale = useTransform(x, input, [0.83, 1, 0.83]);
  const textTop = useTransform(x, input, [0, -50, 0]);
  const textOpacity = useTransform(x, input, [0, 1, 0]);
  return (
    <CardBox
      style={{ scale }}
      css={css`
        background: url(${src}) no-repeat center;
        background-size: cover;
      `}
      onClick={openOnsitePayment}
    >
      <CardTitle style={{ top: textTop, opacity: textOpacity }}>
        {title}
      </CardTitle>
    </CardBox>
  );
};
