/** @jsxImportSource @emotion/react */
import { MotionValue, useMotionValue, useTransform } from "framer-motion";
import {
  AccountBody,
  AccountBox,
  AccountContainer,
  AccountCraousel,
  AccountHeader,
  AccountNumber,
  AccountTitle,
  AccountTitleBox,
  AccountTitleContainer,
  AlertButton,
  KBIconBox,
  Money,
  SlideStepContainer,
  TransferButton,
} from "./styles";
import { colors, Icon, IconButton } from "@kb-bankapp/ui";
import KBIcon from "@assets/KB.png";
import { Tabs } from "@src/components/Tabs";
import { useEffect, useState } from "react";
import { ShadowButton } from "../styles";

const ACCOUNT_COUNT = 3;
const SPACE = 160 * (ACCOUNT_COUNT - 1);
export const AccountSlider = () => {
  const x = useMotionValue(0);
  const [step, setStep] = useState<number>(1);

  useEffect(
    () =>
      x.onChange((latest) => {
        if (latest < -SPACE / 2) setStep(2);
        else if (latest > SPACE / 2) setStep(0);
        else setStep(1);
      }),
    [x]
  );

  return (
    <>
      <AccountContainer>
        <AccountCraousel
          drag="x"
          dragConstraints={{ left: -SPACE, right: SPACE }}
          style={{ x }}
          whileTap={{ cursor: "grabbing" }}
        >
          <Account x={x} index={-1} />
          <Account x={x} index={0} />
          <Account x={x} index={1} />
        </AccountCraousel>
      </AccountContainer>
      <SlideStepContainer>
        <Tabs id="account" size={ACCOUNT_COUNT} current={step} />
      </SlideStepContainer>
    </>
  );
};

interface AccountProps {
  x: MotionValue<number>;
  index: number;
}
export const Account = ({ x, index }: AccountProps) => {
  const input = [-SPACE * (index + 1), -SPACE * index, SPACE * (1 - index)];
  const scale = useTransform(x, input, [0.95, 1, 0.95]);
  return (
    <AccountBox style={{ scale }}>
      <AccountHeader>
        <AccountTitleContainer>
          <KBIconBox src={KBIcon} alt="KBIcon" />
          <AccountTitleBox>
            <AccountTitle>KB국민ONE통장-보통예금</AccountTitle>
            <AccountNumber>012345-56-789000</AccountNumber>
          </AccountTitleBox>
        </AccountTitleContainer>
        <AlertButton>
          <IconButton
            theme="PAY"
            icon={<Icon.Header.Alert width={18.67} height={18.67} />}
            custom={{
              ICON_COLOR: {
                IDLE: colors.neutral80,
              },
            }}
          />
        </AlertButton>
      </AccountHeader>
      <AccountBody>
        <Money>12,345,678원</Money>
        <ShadowButton>숨김</ShadowButton>
      </AccountBody>
      <TransferButton>이체</TransferButton>
    </AccountBox>
  );
};
