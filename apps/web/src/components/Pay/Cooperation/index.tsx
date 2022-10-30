/** @jsxImportSource @emotion/react */
import {
  CooperationColBox,
  CooperationContainer,
  CooperationRowBox,
  CooperationTitle,
  CooperationTotalContainer,
  Logo,
} from "./styles";
import street11 from "@assets/cooperation/11street.png";
import ably from "@assets/cooperation/ably.png";
import auction from "@assets/cooperation/auction.png";
import baemin from "@assets/cooperation/baemin.png";
import emart from "@assets/cooperation/emart.png";
import gmarket from "@assets/cooperation/gmarket.png";
import gsshop from "@assets/cooperation/gsshop.png";
import hmal from "@assets/cooperation/hmal.png";
import homeplus from "@assets/cooperation/homeplus.png";
import lottehomeshopping from "@assets/cooperation/lottehomeshopping.png";
import lottemart from "@assets/cooperation/lottemart.png";
import marketkurly from "@assets/cooperation/marketkurly.png";
import megacoffee from "@assets/cooperation/megacoffee.png";
import musinsa from "@assets/cooperation/musinsa.png";
import navershopping from "@assets/cooperation/navershopping.png";
import oliveyoung from "@assets/cooperation/oliveyoung.png";
import starbucks from "@assets/cooperation/starbucks.png";
import tmon from "@assets/cooperation/tmon.png";
import wemakeprice from "@assets/cooperation/wemakeprice.png";
import yogiyo from "@assets/cooperation/yogiyo.png";
import zigzag from "@assets/cooperation/zigzag.png";

const images = {
  1: [street11, wemakeprice, tmon, gmarket, auction, navershopping],
  2: [yogiyo, marketkurly, baemin, starbucks, megacoffee, oliveyoung],
  3: [gsshop, lottehomeshopping, hmal, musinsa, zigzag, ably],
  4: [emart, homeplus, lottemart],
};

export const Cooperation = () => {
  return (
    <CooperationTotalContainer>
      <CooperationContainer>
        <CooperationTitle>온라인결제</CooperationTitle>
        <CooperationColBox>
          <CooperationRowBox>
            {images[1].map((src) => (
              <Logo key={src} src={src} alt="" />
            ))}
          </CooperationRowBox>
          <CooperationRowBox>
            {images[2].map((src) => (
              <Logo key={src} src={src} alt="" />
            ))}
          </CooperationRowBox>
          <CooperationRowBox>
            {images[3].map((src) => (
              <Logo key={src} src={src} alt="" />
            ))}
          </CooperationRowBox>
        </CooperationColBox>
      </CooperationContainer>

      <CooperationContainer>
        <CooperationTitle>오프라인 결제</CooperationTitle>
        <CooperationRowBox>
          {images[4].map((src) => (
            <Logo key={src} src={src} alt="" />
          ))}
        </CooperationRowBox>
      </CooperationContainer>
    </CooperationTotalContainer>
  );
};
