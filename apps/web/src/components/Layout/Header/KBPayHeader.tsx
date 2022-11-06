/** @jsxImportSource @emotion/react */
import { useCallback } from "react";
import {
  LeftBox,
  RightBox,
  HeaderContainer,
  Title,
  KBPayButton,
} from "./styles";
import { useTypedSelector } from "@src/lib/hooks/useStore";
import { useLocation, useNavigate } from "react-router-dom";
import { colors, Icon, IconButton } from "@kb-bankapp/ui";

const TITLE: { [key: string]: string } = {
  "/pay": "KB Pay",
};

const KBPayHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobileView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );

  const handleKBPayClick = useCallback(() => {
    navigate("/pay");
  }, [navigate]);
  const handleWalletClick = useCallback(() => {
    console.log("kb wallet click");
  }, []);
  const handleAlertClick = useCallback(() => {
    console.log("kb alert click");
  }, []);
  const handleSearchClick = useCallback(() => {
    console.log("kb search click");
  }, []);
  const handleMenuClick = useCallback(() => {
    console.log("kb menu click");
  }, []);

  return (
    <HeaderContainer isMobileView={isMobileView}>
      <LeftBox>
        <KBPayButton onClick={handleKBPayClick}>
          <IconButton
            theme="PAY"
            icon={<Icon.Pay.Membership />}
            size={20}
            custom={{
              ICON_COLOR: {
                IDLE: colors.neutral0,
              },
            }}
          />
          KB Pay
        </KBPayButton>
        <Title>{TITLE[location.pathname]}</Title>
      </LeftBox>
      <RightBox>
        <IconButton
          theme="HEADER"
          icon={<Icon.Header.Wallet />}
          onClick={handleWalletClick}
        />
        <IconButton
          theme="HEADER"
          icon={<Icon.Header.Alert />}
          onClick={handleAlertClick}
        />
        <IconButton
          theme="HEADER"
          icon={<Icon.Header.Search />}
          onClick={handleSearchClick}
        />
        <IconButton
          theme="HEADER"
          icon={<Icon.Header.Menu />}
          onClick={handleMenuClick}
        />
      </RightBox>
    </HeaderContainer>
  );
};
export default KBPayHeader;
