/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as CardRegistration } from "@assets/pay-card-registration.svg";
import IconButton from "../UI/Button";
import { MotionValue, useMotionValue, useTransform } from "framer-motion";
import theme from "@src/styles/theme";
import SvgArrow from "@src/assets/PayCardArrow";
import {
  CardBox,
  CardContainer,
  CardCraousel,
  CardRegistrationBox,
  CardRegistrationText,
  CardTitle,
  UsageHistoryLink,
} from "./styles";

const CARD_COUNT = 2;
const SPACE = 96 * (CARD_COUNT - 1);
export const Cards = () => {
  const x = useMotionValue(SPACE);
  return (
    <CardContainer>
      <IconButton
        icon={<SvgArrow />}
        size={"MEDIUM"}
        color={theme.color.neutral90}
        emotionCss={css`
          z-index: 1;
          position: absolute;
          left: 24px;
        `}
        onClick={() => {
          x.set(SPACE);
        }}
      />
      <IconButton
        icon={<SvgArrow />}
        rotationDir={"DOWN"}
        size={"MEDIUM"}
        color={theme.color.neutral60}
        emotionCss={css`
          z-index: 1;
          position: absolute;
          right: 24px;
        `}
        onClick={() => {
          x.set(-SPACE);
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
          <Card x={x} index={0} title={""} />
        </CardCraousel>
      </>
      <UsageHistoryLink>이용내역조회</UsageHistoryLink>
    </CardContainer>
  );
};

export const CardManagement = ({ x }: { x: MotionValue<number> }) => {
  const opacity = useTransform(x, [0, SPACE], [0.5, 1]);
  const scale = useTransform(x, [0, SPACE], [0.83, 1]);
  const textTop = useTransform(x, [0, SPACE], [0, -50]);
  const textOpacity = useTransform(x, [0, SPACE], [0, 1]);
  return (
    <CardBox style={{ opacity, scale }}>
      <CardTitle style={{ top: textTop, opacity: textOpacity }}>
        결제수단 추가/삭제
      </CardTitle>
      <CardRegistrationBox>
        <IconButton icon={<CardRegistration />} />
        <CardRegistrationText>결제수단 관리</CardRegistrationText>
      </CardRegistrationBox>
    </CardBox>
  );
};

interface CardProps {
  x: MotionValue<number>;
  index: number;
  title: string;
}
export const Card = ({ x, index, title }: CardProps) => {
  const input = [-SPACE * (index + 1), -SPACE * index, SPACE * (1 - index)];
  const opacity = useTransform(x, input, [0.5, 1, 0.5]);
  const scale = useTransform(x, input, [0.83, 1, 0.83]);
  const textTop = useTransform(x, input, [0, -50, 0]);
  const textOpacity = useTransform(x, input, [0, 1, 0]);

  return (
    <CardBox
      style={{ opacity, scale }}
      css={css`
        background: #9ecee2;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
      `}
    >
      <CardTitle style={{ top: textTop, opacity: textOpacity }}>
        {title}
      </CardTitle>
    </CardBox>
  );
};
