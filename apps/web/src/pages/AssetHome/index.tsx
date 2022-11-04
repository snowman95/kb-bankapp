import { useTypedSelector } from "@src/lib/hooks/useStore";
import Header from "@src/components/Layout/Header";
import { IconButton, Icon } from "@kb-bankapp/ui";
import {
  AssetHomeBody,
  AssetHomeBodyContent,
  AssetHomeBodyLabel,
  AssetHomeBodyLabelBox,
  AssetHomeBodyLabelContainer,
  AssetHomeBodyLabelFor,
  AssetHomeBodyTitle,
  AssetHomeBodyTitleBox,
  AssetHomeContainer,
  AssetHomeContent,
  AssetHomeTitle,
  AssetHomeTitleBox,
  AssetHomeTitleContainer,
  AssetHomeTitleTop,
  ScrollArea,
  ServiceContainer,
} from "./styles";
import { Service } from "@src/components/Asset/Service";
import Bear from "@src/assets/character/bear.png";

const AssetHome = () => {
  const isMobileView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );
  return (
    <AssetHomeContainer isMobileView={isMobileView}>
      <Header />
      <ScrollArea>
        <AssetHomeTitleContainer>
          <AssetHomeTitleBox>
            <AssetHomeTitleTop>
              <AssetHomeTitle>{`똑똑한 AI가\n콕! 집어서 추천합니다`}</AssetHomeTitle>
              <IconButton
                theme="PAY"
                custom={{
                  DIR: "RIGHT",
                }}
                icon={<Icon.Pay.TransferArrow />}
              />
            </AssetHomeTitleTop>
            <AssetHomeContent>
              {`똑똑한 AI가 연령, 거래성향 등 데이터를\n분석해 고객님의 ‘자산관리 유형'에 딱 맞는\n상품과 서비스를 추천해 드립니다.`}
            </AssetHomeContent>
          </AssetHomeTitleBox>
          <img src={Bear} alt={"bear"} width={87} height={78} />
        </AssetHomeTitleContainer>
        <AssetHomeBody>
          <AssetHomeBodyLabelContainer>
            <AssetHomeBodyLabelFor>for</AssetHomeBodyLabelFor>
            <AssetHomeBodyLabelBox>
              <AssetHomeBodyLabel>#액티브시니어</AssetHomeBodyLabel>
            </AssetHomeBodyLabelBox>
          </AssetHomeBodyLabelContainer>
          <AssetHomeBodyTitleBox>
            <AssetHomeBodyTitle>
              젊은, 액티브시니어, 인생 2막을 위한 자산관리
            </AssetHomeBodyTitle>
            <AssetHomeBodyContent>
              소득의 절반은 무조건 저축! 재테크 공부도 열심히
            </AssetHomeBodyContent>
          </AssetHomeBodyTitleBox>
          <ServiceContainer>
            <Service theme="기본" type="경제상식" />
            <Service theme="기본" type="보험" />
            <Service theme="기본" type="주식리포트" />
          </ServiceContainer>
        </AssetHomeBody>
      </ScrollArea>
    </AssetHomeContainer>
  );
};
export default AssetHome;
