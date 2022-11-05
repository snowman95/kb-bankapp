/** @jsxImportSource @emotion/react */
import { useCallback } from "react";
import { LeftBox, RightBox, HeaderContainer, Title } from "./styles";
import { useTypedSelector } from "@src/lib/hooks/useStore";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon, IconButton } from "@kb-bankapp/ui";

const TITLE: { [key: string]: string } = {
  "/pay": "KB Pay",
  "/assetHome": "자산홈",
  "/aiService": "AI맞춤서비스",
  "/chatbot": "챗봇 / 상담",
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobileView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  const goHome = useCallback(() => {
    navigate("/home");
  }, [navigate]);
  const openMenu = useCallback(() => {}, []);

  return (
    <HeaderContainer isMobileView={isMobileView}>
      <LeftBox>
        <IconButton
          theme="HEADER"
          custom={{ DIR: "LEFT" }}
          icon={<Icon.Header.Arrow />}
          onClick={goBack}
        />
        <Title>{TITLE[location.pathname]}</Title>
      </LeftBox>
      <RightBox>
        {location.pathname === "/chatbot" ? (
          <>
            <IconButton
              theme="HEADER"
              icon={<Icon.Header.ZoomOut />}
              onClick={openMenu}
            />
            <IconButton
              theme="HEADER"
              icon={<Icon.Header.Close />}
              onClick={goHome}
            />
          </>
        ) : (
          <>
            <IconButton
              theme="HEADER"
              icon={<Icon.Header.Home />}
              onClick={goHome}
            />
            <IconButton
              theme="HEADER"
              icon={<Icon.Header.Menu />}
              onClick={openMenu}
            />
          </>
        )}
      </RightBox>
    </HeaderContainer>
  );
};
export default Header;
