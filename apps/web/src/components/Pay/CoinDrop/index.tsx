/** @jsxImportSource @emotion/react */
import notebook from "@assets/notebook.png";
import coin from "@assets/coin/coin.png";
import { Coin, CoindropContainer, CoinStartPos, PointText } from "./styles";
import { css } from "@emotion/react";

export const CoinDrop = () => {
  return (
    <CoindropContainer>
      <CoinStartPos>
        {[0.3, 0.2, 0.1, 0].map((delay, index) => {
          const opacity = 0.4 + index * 0.2;
          return (
            <Coin
              key={delay}
              src={coin}
              alt="coin"
              initial={{ y: 0 }}
              animate={{ y: 170 }}
              transition={{ duration: 1 - delay, delay: delay }}
              css={css`
                opacity: ${opacity};
              `}
            />
          );
        })}
      </CoinStartPos>
      <img src={notebook} alt="notebook" height="258px" />
      <span>
        PAY에서 결제한만큼 <PointText>5%</PointText> 적립!
      </span>
    </CoindropContainer>
  );
};
