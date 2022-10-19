/** @jsxImportSource @emotion/react */
import { useCallback } from "react";
import { LeftBox, RightBox, HeaderContainer, Title } from "./styles";
import { useTypedSelector } from "@src/lib/hooks/useStore";
import IconButton from "@src/components/UI/Button";
import { ReactComponent as Arrow } from "@assets/header-arrow.svg";
import { ReactComponent as Menu } from "@assets/header-menu.svg";
import { ReactComponent as Home } from "@assets/header-home.svg";
import { useLocation, useNavigate } from "react-router-dom";

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
        <IconButton icon={<Arrow />} onClick={goBack} />
        <Title>{TITLE[location.pathname]}</Title>
      </LeftBox>
      <RightBox>
        <IconButton icon={<Home />} onClick={goHome} />
        <IconButton icon={<Menu />} onClick={openMenu} />
      </RightBox>
    </HeaderContainer>
  );
};
export default Header;
