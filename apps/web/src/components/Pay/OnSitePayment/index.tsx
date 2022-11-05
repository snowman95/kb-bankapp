/** @jsxImportSource @emotion/react */
import {
  Card,
  CardBox,
  OnSitePaymentContainer,
  CardTitle,
  CountNumber,
  Info,
  ViewGuild,
  Wave,
} from "./styles";
import CardTitanium from "@assets/card/card-titanium.png";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";

const CardSlideDuration = 0.2;

export const OnSitePayment = () => {
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (countdown === 0) return;
    const timerId = setTimeout(() => {
      setCountdown((pre) => pre - 1);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [countdown]);

  return (
    <OnSitePaymentContainer>
      <CardTitle initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {"골든라이프 티타늄카드 1234"}
      </CardTitle>
      <CardBox>
        {countdown <= 60 ? (
          <>
            <Wave
              css={css`
                filter: blur(2px);
              `}
              animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />
            <Wave
              animate={{ opacity: [0, 1, 0], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </>
        ) : (
          <></>
        )}
        <Card
          src={CardTitanium}
          width="178px"
          height="288px"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: CardSlideDuration }}
        />
        <CountNumber>{countdown <= 60 ? countdown : ""}</CountNumber>
        <ViewGuild>가이드보기</ViewGuild>
      </CardBox>
      <Info>
        {`휴대폰 뒷면을 결제 단말기 대거나\nQR코드 또는 바코드를 보여주세요`}
      </Info>
    </OnSitePaymentContainer>
  );
};
