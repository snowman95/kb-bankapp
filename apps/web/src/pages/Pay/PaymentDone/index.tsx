/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors, Icon } from "@kb-bankapp/ui";
import { CoinDrop } from "@src/components/Pay/CoinDrop";
import { Cooperation } from "@src/components/Pay/Cooperation";
import { useTypedSelector } from "@src/lib/hooks/useStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PaymentDoneContainer, PaymentDoweTitle, Wave } from "./styles";

export const PaymentDone = ({ page }: { page: "1" | "2" }) => {
  const isMobilveView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );
  const navigate = useNavigate();
  useEffect(() => {
    const timeId = setTimeout(
      () => {
        if (page === "1") {
          navigate("/pay/done/2");
        } else {
          navigate("/pay");
        }
      },
      page === "1" ? 2000 : 1000
    );

    return () => clearTimeout(timeId);
  }, [navigate, page]);

  return (
    <PaymentDoneContainer isMobileView={isMobilveView}>
      <Wave />
      <Wave
        css={css`
          top: -203.5px;
          width: 431px;
          height: 431px;
          filter: blur(2px);
        `}
      />
      <PaymentDoweTitle>
        {`KB PAY 결제 완료!`}
        <Icon.Star.Star
          color={colors.primary1}
          css={css`
            position: absolute;
            top: -4px;
          `}
        />
      </PaymentDoweTitle>
      {page === "1" ? <Cooperation /> : <CoinDrop />}
    </PaymentDoneContainer>
  );
};
