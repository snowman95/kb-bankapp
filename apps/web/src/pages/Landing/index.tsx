import styled from "@emotion/styled";
import { useTypedSelector } from "@src/lib/hooks/useStore";
import { Mobile } from "@type-default";
import { Link } from "react-router-dom";

const Landing = () => {
  const isMobileView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );

  return (
    <LandingContainer isMobileView={isMobileView}>
      <LandingPageButton>
        <Link to={"/pay"}>KB Pay</Link>
      </LandingPageButton>
      <LandingPageButton>
        <Link to={"/ai"}>KB AI Service</Link>
      </LandingPageButton>
    </LandingContainer>
  );
};
export default Landing;

const LandingContainer = styled.div<Mobile>`
  display: flex;
  flex-direction: column;
  gap: 20px;

  font: ${(props) => props.theme.textStyle.title01};
  background-color: ${(props) => props.theme.color.primary1};
  padding: 24px;
  width: 100%;
  height: 100vh;

  ${(props) =>
    props.isMobileView &&
    `
        height: 100vh;
        height: calc(var(--vh) * 100);
    `}
`;

const LandingPageButton = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: fit-content;
  padding: 5px 20px;

  background-color: ${(props) => props.theme.color.neutral95};
`;
