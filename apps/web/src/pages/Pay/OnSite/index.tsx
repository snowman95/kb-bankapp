import { useTypedSelector } from "@src/lib/hooks/useStore";
import { QRCodeBanner } from "@src/components/Banner/QRCodeBanner";
import { OnSitePayment } from "@src/components/Pay/OnSitePayment";
import { PayUtils } from "@src/components/Pay/PayUtils";
import { OnSitePayHeaderContainer, OnSitePayContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OnSitePay = () => {
  const isMobilveView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );

  const navigate = useNavigate();
  useEffect(() => {
    const timeId = setTimeout(() => {
      navigate("/pay/done/1");
    }, 2000);

    return () => clearTimeout(timeId);
  }, [navigate]);

  return (
    <OnSitePayContainer isMobileView={isMobilveView}>
      <OnSitePayHeaderContainer>
        추천 유튜브
        <PayUtils />
      </OnSitePayHeaderContainer>
      <QRCodeBanner />
      <OnSitePayment />
    </OnSitePayContainer>
  );
};
export default OnSitePay;
