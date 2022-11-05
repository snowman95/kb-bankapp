import styled from "@emotion/styled";
import { SplashAnimation } from "@src/components/Splash";
import { HEADER_HEIGHT } from "@src/constants";
import { useTypedSelector } from "@src/lib/hooks/useStore";
import { Mobile } from "@type-default";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  const isMobileView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );

  useEffect(() => {
    const timeId = setTimeout(() => {
      navigate("/pay");
    }, 4000);

    return () => clearTimeout(timeId);
  }, [navigate]);

  return (
    <SplashContainer isMobileView={isMobileView}>
      <SplashAnimation />
    </SplashContainer>
  );
};
export default Splash;

const SplashContainer = styled.div<Mobile>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  font: ${(props) => props.theme.textStyle.title01};
  padding: 24px;
  width: 100%;
  height: 100vh;

  ${(props) =>
    props.isMobileView &&
    `
        height: 100vh;
        height: calc(var(--vh) * 100 - ${HEADER_HEIGHT}px);
    `}
`;
