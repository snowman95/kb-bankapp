import styled from "@emotion/styled";
import { Splash } from "@src/components/Splash";
import { HEADER_HEIGHT } from "@src/constants";
import { useTypedSelector } from "@src/lib/hooks/useStore";
import { Mobile } from "@type-default";

const Landing = () => {
  const isMobileView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );

  return (
    <LandingContainer isMobileView={isMobileView}>
      <Splash />
    </LandingContainer>
  );
};
export default Landing;

const LandingContainer = styled.div<Mobile>`
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
