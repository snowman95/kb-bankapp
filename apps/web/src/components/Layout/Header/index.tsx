/** @jsxImportSource @emotion/react */
import { useCallback } from "react";
import { LeftBox, RightBox, HeaderContainer, Title } from "./styles";
import { useTypedSelector } from "@src/lib/hooks/useStore";
import IconButton from "@src/components/UI/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@kb-bankapp/ui";

const TITLE: { [key: string]: string } = {
  "/pay": "KB Pay",
  "/ai": "AI맞춤서비스",
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
    navigate("/");
  }, [navigate]);
  const openMenu = useCallback(() => {}, []);

  return (
    <HeaderContainer isMobileView={isMobileView}>
      <LeftBox>
        <IconButton rotationDir='LEFT' icon={<Icon.Header.Arrow />} onClick={goBack} />
        <Title>{TITLE[location.pathname]}</Title>
      </LeftBox>
      <RightBox>
        <IconButton icon={<Icon.Header.Home />} onClick={goHome} />
        <IconButton icon={<Icon.Header.Menu />} onClick={openMenu} />
      </RightBox>
    </HeaderContainer>
  );
};
export default Header;
